import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  const ok = typeof email === "string" && /.+@.+\..+/.test(email);
  if (!ok) return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  console.log("New waitlist:", email); // replace with DB or sheet later
  return NextResponse.json({ ok: true });
}