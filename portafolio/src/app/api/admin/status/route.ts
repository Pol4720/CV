import { NextResponse } from "next/server";
import { isAdminConfigured, isBlobConfigured, isAuthenticated } from "@/lib/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    adminConfigured: isAdminConfigured(),
    blobConfigured: isBlobConfigured(),
    authenticated: await isAuthenticated(),
  });
}
