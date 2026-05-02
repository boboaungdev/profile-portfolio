// src/lib/email.ts
import { Resend } from "resend";
import {
  CONTACT_FROM_EMAIL,
  PROFILE_EMAIL,
  RESEND_API_KEY,
} from "@/constants";

export function getResendClient() {
  if (!RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
  }

  return new Resend(RESEND_API_KEY);
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
  const to = PROFILE_EMAIL;
  const from = CONTACT_FROM_EMAIL;
  const subject = `New portfolio message from ${name}`;
  const text = `From: ${name} <${email}>\n\n${message}`;
  return { to, from, subject, text };
}
