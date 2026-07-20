import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { isAuthenticated, isBlobConfigured, readIndex, writeIndex } from "@/lib/admin";
import type { DocItem, DocCategory, DocType } from "@/data/documents";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VALID_CATEGORIES: DocCategory[] = ["diploma", "certificate", "letter", "award", "other"];
const MAX_SIZE = 15 * 1024 * 1024; // 15 MB

export async function POST(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!isBlobConfigured()) {
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "no_file" }, { status: 400 });
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }

  const isPdf = file.type === "application/pdf";
  const isImage = file.type.startsWith("image/");
  if (!isPdf && !isImage) {
    return NextResponse.json({ error: "invalid_type" }, { status: 415 });
  }

  const titleEs = String(form.get("titleEs") ?? "").trim();
  const titleEn = String(form.get("titleEn") ?? "").trim();
  const issuerEs = String(form.get("issuerEs") ?? "").trim();
  const issuerEn = String(form.get("issuerEn") ?? "").trim();
  const date = String(form.get("date") ?? "").trim();
  const categoryRaw = String(form.get("category") ?? "other") as DocCategory;
  const category = VALID_CATEGORIES.includes(categoryRaw) ? categoryRaw : "other";

  if (!titleEs && !titleEn) {
    return NextResponse.json({ error: "no_title" }, { status: 400 });
  }

  const id = `up-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const safeName = file.name.replace(/[^\w.\-]+/g, "_");

  const blob = await put(`admin-docs/${id}-${safeName}`, file, {
    access: "public",
    addRandomSuffix: false,
  });

  const doc: DocItem = {
    id,
    title: { es: titleEs || titleEn, en: titleEn || titleEs },
    issuer: issuerEs || issuerEn ? { es: issuerEs || issuerEn, en: issuerEn || issuerEs } : undefined,
    category,
    type: (isImage ? "image" : "pdf") as DocType,
    file: blob.url,
    date: date || undefined,
  };

  const index = await readIndex();
  await writeIndex([doc, ...index]);

  return NextResponse.json({ ok: true, document: doc });
}
