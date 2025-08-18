// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX = {
  name: 100,
  email: 150,
  message: 1000,
};

const isEmail = (v: string) => /.+@.+\..+/.test(v);

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = await req.json();

    // Honeypot: bots often fill hidden fields
    if (website && String(website).trim().length > 0) {
      return NextResponse.json({ ok: true });
    }

    // Basic presence checks
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Length limits
    if (name.length > MAX.name) {
      return NextResponse.json({ ok: false, error: "Name too long" }, { status: 400 });
    }
    if (email.length > MAX.email || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if (message.length > MAX.message) {
      return NextResponse.json({ ok: false, error: "Message too long" }, { status: 400 });
    }

    const FROM = process.env.CONTACT_FROM;
    const TO = process.env.CONTACT_TO;
    if (!FROM || !TO) {
      return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/contact error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
