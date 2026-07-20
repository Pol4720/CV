import { NextResponse } from "next/server";
import { readIndex } from "@/lib/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const documents = await readIndex();
  return NextResponse.json(
    { documents },
    { headers: { "Cache-Control": "no-store" } }
  );
}
