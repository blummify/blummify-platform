"use client";

import type { FormEvent } from "react";
import { useCallback, useMemo, useState } from "react";

const EMAIL = "hello@blummify.com";

const projectTypes = [
  "Web development",
  "Mobile apps",
  "Branding & design",
  "Digital marketing",
  "Something else",
] as const;

const budgets = [
  "Not sure yet",
  "Under $10k",
  "$10k – $25k",
  "$25k – $75k",
  "$75k+",
] as const;

const timelines = [
  "ASAP / urgent",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Exploring options",
] as const;

function buildMailto(body: string, subject: string) {
  const params = new URLSearchParams({
    subject,
    body,
  });
  return `mailto:${EMAIL}?${params.toString()}`;
}

export default function ContactInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState<string>(projectTypes[0]);
  const [budget, setBudget] = useState<string>(budgets[0]);
  const [timeline, setTimeline] = useState<string>(timelines[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(
    () => name.trim().length > 1 && email.includes("@"),
    [name, email],
  );

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      setError(null);
      if (!canSubmit) {
        setError("Please add your name and a valid email so we can reply.");
        return;
      }

      const lines = [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Company: ${company.trim() || "—"}`,
        `Project type: ${projectType}`,
        `Budget: ${budget}`,
        `Timeline: ${timeline}`,
        "",
        "Goals / context:",
        message.trim() || "—",
      ];
      const body = lines.join("\n");
      const subject = `Project inquiry — ${projectType}`;

      if (body.length > 1800) {
        setError(
          "Message is a bit long for email. Please shorten slightly and try again.",
        );
        return;
      }

      window.location.href = buildMailto(body, subject);
      setSubmitted(true);
    },
    [budget, canSubmit, company, email, message, name, projectType, timeline],
  );

  return (
    <form
      id="inquiry"
      onSubmit={onSubmit}
      className="mt-8 space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="inquiry-name"
            className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label"
          >
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 w-full rounded-2xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface font-body outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </div>
        <div>
          <label
            htmlFor="inquiry-email"
            className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label"
          >
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 w-full rounded-2xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface font-body outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="inquiry-company"
          className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label"
        >
          Company / team
        </label>
        <input
          id="inquiry-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-2 w-full rounded-2xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface font-body outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="inquiry-type"
            className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label"
          >
            Project type
          </label>
          <select
            id="inquiry-type"
            name="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface font-body outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="inquiry-budget"
            className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label"
          >
            Budget range
          </label>
          <select
            id="inquiry-budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface font-body outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="inquiry-timeline"
            className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label"
          >
            Timeline
          </label>
          <select
            id="inquiry-timeline"
            name="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface font-body outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="inquiry-message"
          className="block text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label"
        >
          What are you building—and what does success look like?
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Links, constraints, stakeholders, and any deadlines help us respond faster."
          className="mt-2 w-full rounded-2xl border border-outline-variant/60 bg-white px-4 py-3 text-on-surface font-body outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 resize-y min-h-[120px]"
        />
      </div>

      {error ? (
        <p className="text-sm text-error font-body" role="alert">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          className="inline-flex justify-center bg-signature-gradient text-on-primary px-8 py-4 rounded-full font-headline font-bold text-base transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50"
          disabled={!canSubmit}
        >
          Open email with brief
        </button>
        <p className="text-sm text-on-surface-variant font-body">
          This opens your email app with a pre-filled message to{" "}
          <span className="font-bold text-on-surface">{EMAIL}</span>.
        </p>
      </div>

      {submitted ? (
        <p className="text-sm text-primary font-body">
          If your mail app didn&apos;t open, email us directly at {EMAIL}.
        </p>
      ) : null}
    </form>
  );
}
