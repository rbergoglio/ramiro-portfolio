import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("Contact form submission", body);
  // TODO: integrate with email service or webhook
  return NextResponse.json({ ok: true });
}
