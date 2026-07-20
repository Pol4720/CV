import { NextResponse } from "next/server";
import { del } from "@vercel/blob";
import { isAuthenticated, isBlobConfigured, readIndex, writeIndex } from "@/lib/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!isBlobConfigured()) {
    return NextResponse.json({ error: "not_configured" }, { status: 501 });
  }

  let id = "";
  try {
    const body = await req.json();
    id = typeof body.id === "string" ? body.id : "";
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  if (!id) return NextResponse.json({ error: "no_id" }, { status: 400 });

  const index = await readIndex();
  const target = index.find((d) => d.id === id);
  if (target) {
    try {
      await del(target.file);
    } catch {
      /* ignore blob deletion errors, still remove from index */
    }
  }
  await writeIndex(index.filter((d) => d.id !== id));

  return NextResponse.json({ ok: true });
}
