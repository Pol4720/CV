import crypto from "crypto";
import { cookies } from "next/headers";
import { list, put } from "@vercel/blob";
import type { DocItem } from "@/data/documents";

export const SESSION_COOKIE = "rm_admin";
const INDEX_PATH = "documents-index.json";

export function isBlobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

/** Deterministic session token derived from the admin password. */
export function sessionToken(): string {
  const secret = process.env.ADMIN_PASSWORD ?? "";
  return crypto.createHmac("sha256", secret).update("rm-admin-session-v1").digest("hex");
}

export function verifyPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  if (!expected) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export async function isAuthenticated(): Promise<boolean> {
  if (!isAdminConfigured()) return false;
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const expected = sessionToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

/** Read the document index stored in Blob. */
export async function readIndex(): Promise<DocItem[]> {
  if (!isBlobConfigured()) return [];
  try {
    const { blobs } = await list({ prefix: INDEX_PATH });
    const entry = blobs.find((b) => b.pathname === INDEX_PATH);
    if (!entry) return [];
    const res = await fetch(entry.url, { cache: "no-store" });
    if (!res.ok) return [];
    const data = (await res.json()) as DocItem[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function writeIndex(items: DocItem[]): Promise<void> {
  await put(INDEX_PATH, JSON.stringify(items), {
    access: "public",
    contentType: "application/json",
    allowOverwrite: true,
    addRandomSuffix: false,
  });
}
