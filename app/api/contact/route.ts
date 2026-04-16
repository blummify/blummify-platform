import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { getClientIp, isRateLimited } from "../../_lib/contactRateLimit";

const REQUIRED_ENV_VARS = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  consent: boolean;
  /** Honeypot — must stay empty (bots often fill hidden fields). */
  website?: string;
};

function getMissingEnvVars() {
  return REQUIRED_ENV_VARS.filter((name) => !process.env[name]);
}

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: ContactPayload) {
  const name = sanitize(payload.name);
  const email = sanitize(payload.email);
  const subject = sanitize(payload.subject);
  const message = sanitize(payload.message);
  const phone = sanitize(payload.phone);

  if (name.length < 2) {
    return "Please enter your full name.";
  }
  if (!email.includes("@")) {
    return "Please enter a valid email address.";
  }
  if (!subject) {
    return "Please select a subject.";
  }
  if (message.length < 20) {
    return "Please write at least 20 characters in your message.";
  }
  if (!payload.consent) {
    return "Please agree to receive communication so we can reply.";
  }

  return {
    name,
    email,
    subject,
    message,
    phone,
  };
}

export async function POST(req: Request) {
  try {
    const missingVars = getMissingEnvVars();
    if (missingVars.length > 0) {
      return NextResponse.json(
        {
          error:
            "Contact form email is not configured on the server. Please try again later.",
        },
        { status: 500 },
      );
    }

    const payload = (await req.json()) as ContactPayload;

    if (sanitize(payload.website).length > 0) {
      return NextResponse.json({ ok: true });
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many messages from this address. Please try again later." },
        { status: 429 },
      );
    }

    const validated = validatePayload(payload);
    if (typeof validated === "string") {
      return NextResponse.json({ error: validated }, { status: 400 });
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail = process.env.CONTACT_TO_EMAIL ?? "info@blummify.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER ?? toEmail;
    const bccEmail = process.env.CONTACT_BCC_EMAIL?.trim();

    const mailOptions: nodemailer.SendMailOptions = {
      from: fromEmail,
      to: toEmail,
      replyTo: validated.email,
      subject: `Blummify contact — ${validated.subject}`,
      text: [
        `Name: ${validated.name}`,
        `Email: ${validated.email}`,
        `Phone: ${validated.phone || "—"}`,
        `Subject: ${validated.subject}`,
        "",
        "Message:",
        validated.message,
      ].join("\n"),
    };
    if (bccEmail) {
      mailOptions.bcc = bccEmail;
    }

    await transport.sendMail(mailOptions);

    const autoreplyDisabled =
      process.env.CONTACT_AUTOREPLY === "0" || process.env.CONTACT_AUTOREPLY === "false";
    if (!autoreplyDisabled) {
      try {
        const autoreplySubject =
          process.env.CONTACT_AUTOREPLY_SUBJECT ?? "We received your message — Blummify";
        await transport.sendMail({
          from: fromEmail,
          to: validated.email,
          subject: autoreplySubject,
          text: [
            `Hi ${validated.name},`,
            "",
            "Thanks for contacting Blummify. We’ve received your message and will get back to you as soon as we can.",
            "",
            "A quick summary of what you sent:",
            `Subject: ${validated.subject}`,
            "",
            validated.message,
            "",
            "—",
            "Blummify",
            `https://blummify.com`,
          ].join("\n"),
        });
      } catch {
        /* main inquiry was delivered; autoreply is best-effort */
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again." },
      { status: 500 },
    );
  }
}
