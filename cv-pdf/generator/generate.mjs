// Regenerates both CV PDFs from content.mjs / template.mjs using a real
// Chromium print (Playwright), so the output PDF has genuine, selectable,
// copy-pasteable, ATS-parseable text — never text-as-curves/outlines.
//
// Usage:
//   cd cv-pdf/generator
//   npm install
//   npm run generate
//
// Writes:
//   cv-pdf/CV_Richard_Matos.pdf        (EN)
//   cv-pdf/CV-Richard Matos.pdf        (ES)
//   portafolio/public/documents/cv/cv-en.pdf
//   portafolio/public/documents/cv/cv-es.pdf

import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EN, ES } from "./content.mjs";
import { renderHTML } from "./template.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const TMP = path.join(__dirname, ".tmp");

const targets = {
  en: [
    path.join(ROOT, "cv-pdf", "CV_Richard_Matos.pdf"),
    path.join(ROOT, "portafolio", "public", "documents", "cv", "cv-en.pdf"),
  ],
  es: [
    path.join(ROOT, "cv-pdf", "CV-Richard Matos.pdf"),
    path.join(ROOT, "portafolio", "public", "documents", "cv", "cv-es.pdf"),
  ],
};

async function build() {
  await fs.mkdir(TMP, { recursive: true });
  const browser = await chromium.launch();

  for (const [key, content] of [["en", EN], ["es", ES]]) {
    const html = renderHTML(content);
    const htmlPath = path.join(TMP, `cv-${key}.html`);
    await fs.writeFile(htmlPath, html, "utf-8");

    const page = await browser.newPage();
    await page.goto("file://" + htmlPath, { waitUntil: "networkidle" });
    await page.emulateMedia({ media: "print" });

    const pdfBuffer = await page.pdf({
      format: "Letter",
      printBackground: true,
      margin: { top: "0in", bottom: "0in", left: "0in", right: "0in" },
      preferCSSPageSize: true,
    });
    await page.close();

    for (const dest of targets[key]) {
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.writeFile(dest, pdfBuffer);
      console.log("wrote", path.relative(ROOT, dest));
    }
  }

  await browser.close();
  await fs.rm(TMP, { recursive: true, force: true });
  console.log("Done.");
}

build().catch((e) => {
  console.error(e);
  process.exit(1);
});
