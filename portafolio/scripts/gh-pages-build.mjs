#!/usr/bin/env node
/**
 * Builds a static export for GitHub Pages.
 *
 * GitHub Pages only serves static files — it cannot run the admin panel's
 * API routes (password auth + Vercel Blob uploads), which need a server.
 * This script temporarily moves those server-only routes out of `src/app`,
 * runs `next build` with `output: export`, then restores them — regardless
 * of whether the build succeeds — so the working tree is never left altered.
 *
 * The public-facing site (all sections, bilingual, CV/document downloads)
 * builds and works fully static; only the /admin upload UI is excluded.
 */
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { rename } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const tmpDir = path.join(root, ".gh-pages-tmp");

const serverOnlyPaths = [
  path.join(root, "src", "app", "api"),
  path.join(root, "src", "app", "[locale]", "admin"),
];

async function moveOut() {
  if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
  mkdirSync(tmpDir, { recursive: true });
  for (const src of serverOnlyPaths) {
    if (existsSync(src)) {
      const dest = path.join(tmpDir, path.basename(src));
      await rename(src, dest);
    }
  }
}

async function moveBack() {
  for (const src of serverOnlyPaths) {
    const dest = path.join(tmpDir, path.basename(src));
    if (existsSync(dest)) {
      await rename(dest, src);
    }
  }
  if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true, force: true });
}

function runBuild() {
  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["next", "build"], {
      cwd: root,
      stdio: "inherit",
      shell: true,
      env: { ...process.env, STATIC_EXPORT: "true" },
    });
    child.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`next build exited with code ${code}`))));
  });
}

async function main() {
  await moveOut();
  try {
    await runBuild();
  } finally {
    await moveBack();
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
