#!/usr/bin/env node
/**
 * Builds the static export for GitHub Pages.
 *
 * The whole site — including the admin panel — is static: uploads go through
 * the GitHub Contents API from the browser (see src/lib/github-cms.ts), so
 * there is no server-only code left to strip out of the build.
 *
 * This wrapper exists only to set STATIC_EXPORT cross-platform, since
 * `STATIC_EXPORT=true next build` is not valid syntax on Windows shells.
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const child = spawn("npx", ["next", "build"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: { ...process.env, STATIC_EXPORT: "true" },
});

child.on("exit", (code) => {
  process.exitCode = code ?? 1;
});
