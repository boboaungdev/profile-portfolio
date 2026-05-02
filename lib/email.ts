// src/lib/email.ts
import { Resend } from "resend";

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
  }

  return new Resend(apiKey);
}

export function contactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const to = process.env.CONTACT_TO_EMAIL!;
  const from = process.env.CONTACT_FROM_EMAIL!;
  const subject = `New portfolio message from ${name}`;
  const text = `From: ${name} <${email}>\n\n${message}`;
  return { to, from, subject, text };
}
