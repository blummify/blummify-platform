"use client";

import type { FormEvent } from "react";
import { useCallback, useState } from "react";

const EMAIL = "info@blummify.com";

const subjectOptions = [
  { value: "", label: "Select an option" },
  { value: "web", label: "Web development" },
  { value: "mobile", label: "Mobile apps" },
  { value: "branding", label: "Branding & design" },
  { value: "marketing", label: "Digital marketing" },
  { value: "general", label: "General inquiry" },
  { value: "other", label: "Something else" },
] as const;

function buildMailto(body: string, subject: string) {
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${EMAIL}?${params.toString()}`;
}

function subjectLabel(value: string) {
  const found = subjectOptions.find((o) => o.value === value);
  return found?.label ?? value;
}

export default function ContactInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const messageOk = message.trim().length >= 20;

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!name.trim() || name.trim().length < 2) {
        setError("Please enter your full name.");
        return;
      }
      if (!email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
      if (!subject) {
        setError("Please select a subject.");
        return;
      }
      if (!messageOk) {
        setError("Please write at least 20 characters in your message.");
        return;
      }
      if (!consent) {
        setError("Please agree to receive communication so we can reply.");
        return;
      }

      const lines = [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Phone: ${phone.trim() || "—"}`,
        `Subject: ${subjectLabel(subject)}`,
        "",
        "Message:",
        message.trim(),
      ];
      const body = lines.join("\n");
      const mailSubject = `Blummify contact — ${subjectLabel(subject)}`;

      if (body.length > 1800) {
        setError(
          "Message is a bit long for email. Please shorten slightly and try again.",
        );
        return;
      }

      window.location.href = buildMailto(body, mailSubject);
      setSubmitted(true);
    },
    [consent, email, message, messageOk, name, phone, subject],
  );

  return (
    <form
      id="inquiry"
      onSubmit={onSubmit}
      className="mt-8 space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="inquiry-name"
            className="block text-sm font-semibold text-on-surface font-headline"
          >
            Full Name
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
            className="mt-2 w-full rounded-2xl border border-outline-variant/50 bg-surface-bright px-4 py-3.5 text-on-surface font-body outline-none transition-shadow placeholder:text-on-surface-variant/50 focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
          />
        </div>
        <div>
          <label
            htmlFor="inquiry-email"
            className="block text-sm font-semibold text-on-surface font-headline"
          >
            Email Address
          </label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
            className="mt-2 w-full rounded-2xl border border-outline-variant/50 bg-surface-bright px-4 py-3.5 text-on-surface font-body outline-none transition-shadow placeholder:text-on-surface-variant/50 focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="inquiry-phone"
            className="block text-sm font-semibold text-on-surface font-headline"
          >
            Phone Number{" "}
            <span className="font-normal text-on-surface-variant">(Optional)</span>
          </label>
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="mt-2 w-full rounded-2xl border border-outline-variant/50 bg-surface-bright px-4 py-3.5 text-on-surface font-body outline-none transition-shadow placeholder:text-on-surface-variant/50 focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
          />
        </div>
        <div>
          <label
            htmlFor="inquiry-subject"
            className="block text-sm font-semibold text-on-surface font-headline"
          >
            Subject
          </label>
          <select
            id="inquiry-subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="mt-2 w-full rounded-2xl border border-outline-variant/50 bg-surface-bright px-4 py-3.5 text-on-surface font-body outline-none transition-shadow focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
          >
            {subjectOptions.map((o) => (
              <option key={o.value || "placeholder"} value={o.value} disabled={o.value === ""}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="inquiry-message"
          className="block text-sm font-semibold text-on-surface font-headline"
        >
          Message
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project or question..."
          className="mt-2 w-full min-h-[140px] resize-y rounded-2xl border border-outline-variant/50 bg-surface-bright px-4 py-3.5 text-on-surface font-body outline-none transition-shadow placeholder:text-on-surface-variant/50 focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
        />
        <p className="mt-1.5 text-xs text-on-surface-variant font-body">
          Minimum 20 characters
        </p>
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-transparent p-1 transition-colors hover:bg-surface-container-low/50">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 rounded border-outline-variant text-primary focus:ring-primary"
        />
        <span className="text-sm leading-relaxed text-on-surface-variant font-body">
          I agree to receive communication from Blummify regarding my inquiry.
        </span>
      </label>

      {error ? (
        <p className="text-sm text-error font-body" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-signature-gradient px-8 py-4 rounded-2xl font-headline font-bold text-base text-on-primary shadow-md shadow-primary/15 transition-all duration-300 hover:opacity-[0.97] hover:shadow-lg active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <span className="material-symbols-outlined text-[22px]" aria-hidden>
          send
        </span>
        Send Message
      </button>

      <p className="text-center text-xs text-on-surface-variant font-body">
        Opens your email app with a pre-filled message to{" "}
        <span className="font-semibold text-on-surface">{EMAIL}</span>.
      </p>

      {submitted ? (
        <p className="text-sm text-primary text-center font-body">
          If your mail app didn&apos;t open, email us directly at {EMAIL}.
        </p>
      ) : null}
    </form>
  );
}
