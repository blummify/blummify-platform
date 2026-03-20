import type { Metadata } from "next";
import Link from "next/link";

import { siteUrl } from "../_lib/site";

export const metadata: Metadata = {
  title: "Privacy | Blummify",
  description:
    "How Blummify handles information you share through this website and project inquiries.",
  alternates: { canonical: `${siteUrl}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="pb-20 px-8">
      <div className="max-w-3xl mx-auto pt-12">
        <p className="text-xs font-bold tracking-wider uppercase text-on-surface-variant font-label">
          Legal
        </p>
        <h1 className="mt-4 text-4xl font-headline font-bold text-on-surface">
          Privacy policy
        </h1>
        <p className="mt-4 text-on-surface-variant font-body leading-relaxed text-sm">
          Last updated: {new Date().getFullYear()}. This policy describes how
          Blummify (&quot;we&quot;, &quot;us&quot;) handles information submitted
          through this marketing website and related inquiry flows.
        </p>

        <section className="mt-10 space-y-4 text-on-surface-variant font-body text-sm leading-relaxed">
          <h2 className="text-lg font-headline font-bold text-on-surface">
            Information you provide
          </h2>
          <p>
            When you contact us—via email or the structured inquiry helper on
            the contact page—you may provide your name, email address, company,
            project details, and other context you choose to include.
          </p>

          <h2 className="text-lg font-headline font-bold text-on-surface pt-4">
            How we use information
          </h2>
          <p>
            We use this information solely to respond to your inquiry, evaluate
            project fit, and communicate with you about potential work. We do
            not sell your personal information.
          </p>

          <h2 className="text-lg font-headline font-bold text-on-surface pt-4">
            Email and third parties
          </h2>
          <p>
            The contact experience may open your email client to send a message
            directly to us. That transmission is handled by your email provider
            under their policies. If we use additional tools (for example,
            scheduling or CRM) in the future, we will update this page to
            reflect those processors.
          </p>

          <h2 className="text-lg font-headline font-bold text-on-surface pt-4">
            Retention
          </h2>
          <p>
            We retain inquiry correspondence only as long as needed to operate
            our business and maintain client relationships, unless a longer
            period is required by law.
          </p>

          <h2 className="text-lg font-headline font-bold text-on-surface pt-4">
            Your choices
          </h2>
          <p>
            You may request access, correction, or deletion of personal
            information we hold by emailing{" "}
            <a
              className="text-primary font-bold hover:opacity-80"
              href="mailto:hello@blummify.com"
            >
              hello@blummify.com
            </a>
            .
          </p>

          <h2 className="text-lg font-headline font-bold text-on-surface pt-4">
            Updates
          </h2>
          <p>
            We may update this policy periodically. Continued use of the site
            after changes means you accept the revised policy.
          </p>
        </section>

        <Link
          href="/contact"
          className="mt-12 inline-flex items-center gap-2 text-primary font-bold font-headline hover:gap-3 transition-all"
        >
          Back to contact{" "}
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      </div>
    </main>
  );
}
