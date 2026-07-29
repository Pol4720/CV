/**
 * Browser-side CMS backed by the GitHub Contents API.
 *
 * GitHub Pages serves static files only, so there is no server to receive
 * uploads. Instead the admin panel commits directly to this repository using
 * a fine-grained personal access token that the owner pastes into the browser.
 * Pushing to `main` triggers the Pages workflow, which rebuilds and republishes
 * the site — so an upload is live a couple of minutes later.
 *
 * The token never leaves the browser: it is kept in sessionStorage (or
 * localStorage when "remember on this device" is chosen) and sent only to
 * api.github.com.
 */

export const REPO_OWNER = "Pol4720";
export const REPO_NAME = "CV";
export const REPO_BRANCH = "main";

/** Paths are relative to the repository root, not to the Next.js app. */
const APP_DIR = "portafolio";
export const DOCUMENTS_INDEX = `${APP_DIR}/content/documents.json`;
export const PROJECTS_INDEX = `${APP_DIR}/content/projects.json`;
export const DOCUMENTS_DIR = `${APP_DIR}/public/documents`;
export const PROJECT_IMAGES_DIR = `${APP_DIR}/public/projects`;

const TOKEN_KEY = "rm_gh_token";
const API = "https://api.github.com";

/* ---------------------------------------------------------------- token */

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(TOKEN_KEY) ?? localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string, remember: boolean) {
  if (typeof window === "undefined") return;
  clearToken();
  (remember ? localStorage : sessionStorage).setItem(TOKEN_KEY, token);
}

export function clearToken() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_KEY);
}

/* ------------------------------------------------------------------ api */

async function gh(path: string, init: RequestInit = {}): Promise<Response> {
  const token = getToken();
  if (!token) throw new Error("NO_TOKEN");
  return fetch(`${API}${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: `Bearer ${token}`,
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...init.headers,
    },
  });
}

export interface AuthCheck {
  ok: boolean;
  login?: string;
  avatar?: string;
  canWrite?: boolean;
  error?: string;
}

/** Validates the token and confirms it can write to this repository. */
export async function verifyToken(): Promise<AuthCheck> {
  try {
    const me = await gh("/user");
    if (me.status === 401) return { ok: false, error: "INVALID_TOKEN" };
    if (!me.ok) return { ok: false, error: `HTTP_${me.status}` };
    const user = await me.json();

    const repo = await gh(`/repos/${REPO_OWNER}/${REPO_NAME}`);
    if (!repo.ok) return { ok: false, error: "NO_REPO_ACCESS" };
    const r = await repo.json();
    const canWrite = Boolean(r.permissions?.push);

    return { ok: canWrite, login: user.login, avatar: user.avatar_url, canWrite, error: canWrite ? undefined : "NO_WRITE_SCOPE" };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "UNKNOWN" };
  }
}

/* -------------------------------------------------------------- content */

interface FileState {
  sha: string | null;
  text: string | null;
}

async function readFile(path: string): Promise<FileState> {
  const res = await gh(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURI(path)}?ref=${REPO_BRANCH}`);
  if (res.status === 404) return { sha: null, text: null };
  if (!res.ok) throw new Error(`No se pudo leer ${path} (HTTP ${res.status})`);
  const json = await res.json();
  return { sha: json.sha, text: decodeB64Utf8(String(json.content ?? "")) };
}

export async function readJson<T>(path: string, fallback: T): Promise<{ data: T; sha: string | null }> {
  const { sha, text } = await readFile(path);
  if (!text) return { data: fallback, sha };
  try {
    return { data: JSON.parse(text) as T, sha };
  } catch {
    return { data: fallback, sha };
  }
}

async function putFile(path: string, base64: string, message: string, sha: string | null) {
  const res = await gh(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURI(path)}`, {
    method: "PUT",
    body: JSON.stringify({ message, content: base64, branch: REPO_BRANCH, ...(sha ? { sha } : {}) }),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Fallo al escribir ${path} (HTTP ${res.status})`);
  }
  return res.json();
}

export async function writeJson(path: string, data: unknown, message: string, sha: string | null) {
  const json = JSON.stringify(data, null, 2) + "\n";
  return putFile(path, b64FromString(json), message, sha);
}

export async function uploadBinary(path: string, file: File, message: string) {
  // Overwriting requires the current blob sha.
  const existing = await gh(
    `/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURI(path)}?ref=${REPO_BRANCH}`
  );
  const sha = existing.ok ? (await existing.json()).sha : null;
  return putFile(path, await b64FromFile(file), message, sha);
}

export async function deleteFile(path: string, message: string) {
  const res = await gh(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURI(path)}?ref=${REPO_BRANCH}`);
  if (!res.ok) return; // already gone
  const { sha } = await res.json();
  await gh(`/repos/${REPO_OWNER}/${REPO_NAME}/contents/${encodeURI(path)}`, {
    method: "DELETE",
    body: JSON.stringify({ message, sha, branch: REPO_BRANCH }),
  });
}

/* --------------------------------------------------------------- deploy */

export interface DeployRun {
  status: string;
  conclusion: string | null;
  url: string;
  createdAt: string;
}

/** Latest Pages deployment run, so the panel can show publish progress. */
export async function latestDeploy(): Promise<DeployRun | null> {
  try {
    const res = await gh(
      `/repos/${REPO_OWNER}/${REPO_NAME}/actions/workflows/deploy-pages.yml/runs?per_page=1`
    );
    if (!res.ok) return null;
    const j = await res.json();
    const run = j.workflow_runs?.[0];
    if (!run) return null;
    return { status: run.status, conclusion: run.conclusion, url: run.html_url, createdAt: run.created_at };
  } catch {
    return null;
  }
}

/* --------------------------------------------------------------- base64 */

function decodeB64Utf8(b64: string): string {
  const bin = atob(b64.replace(/\s/g, ""));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function b64FromString(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin);
}

function b64FromFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.onerror = () => reject(new Error("No se pudo leer el fichero"));
    reader.readAsDataURL(file);
  });
}

/** Filesystem-safe, collision-resistant name preserving the extension. */
export function safeFileName(original: string): string {
  const dot = original.lastIndexOf(".");
  const ext = dot > -1 ? original.slice(dot).toLowerCase() : "";
  const base = (dot > -1 ? original.slice(0, dot) : original)
    // NFD splits accented letters into base + combining mark; the character
    // class below then drops the marks, so "informe-práctico" -> "informe-practico".
    .normalize("NFD")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
    .slice(0, 60);
  const stamp = Date.now().toString(36);
  return `${base || "file"}-${stamp}${ext}`;
}
