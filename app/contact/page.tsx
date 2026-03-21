import type { Metadata } from "next";
import type { ReactNode } from "react";

import ContactInquiryForm from "../_components/ContactInquiryForm";
import { pageDescriptions } from "../_lib/seo";
import { siteUrl } from "../_lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: pageDescriptions.contact,
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    url: `${siteUrl}/contact`,
    description: pageDescriptions.contact,
  },
};

function InfoCard({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/[0.04] bg-white p-5 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-container/45 text-primary">
          {icon}
        </div>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="pb-16">
      <section className="relative overflow-hidden bg-on-surface shadow-sm">
        <div className="absolute top-0 right-0 h-[44rem] w-[44rem] -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/25 blur-[140px] anim-ambient" />
        <div className="absolute bottom-0 left-0 h-[44rem] w-[44rem] translate-y-1/2 -translate-x-1/2 rounded-full bg-primary-container/20 blur-[140px] anim-float" />
        <div className="relative z-10 px-8 py-10 lg:px-16 lg:py-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-label text-xs font-bold uppercase tracking-wider text-white backdrop-blur anim-fade-up">
                <span className="material-symbols-outlined text-[18px]">
                  forum
                </span>
                Get in touch
              </span>
              <h1
                className="mt-6 font-headline text-4xl font-bold tracking-tight text-white anim-fade-up lg:text-6xl"
                style={{ animationDelay: "90ms" }}
              >
                Contact us
              </h1>
              <p
                className="mt-5 font-body text-lg leading-relaxed text-white/80 anim-fade-up"
                style={{ animationDelay: "160ms" }}
              >
                Tell us what you&apos;re building. We&apos;ll respond with next
                steps, timelines, and the best way to move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-6 lg:col-span-5">
              <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface lg:text-3xl">
                Contact Information
              </h2>

              <div className="space-y-4">
                <InfoCard
                  icon={
                    <span className="material-symbols-outlined text-[22px]">
                      mail
                    </span>
                  }
                >
                  <h3 className="font-headline text-base font-bold text-on-surface">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@blummify.com"
                    className="mt-1 block font-headline text-base font-bold text-primary transition-colors hover:text-on-primary-container"
                  >
                    info@blummify.com
                  </a>
                  <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                    Best for detailed inquiries, proposals, and project briefs.
                  </p>
                </InfoCard>

                <InfoCard
                  icon={
                    <span className="material-symbols-outlined text-[22px]">
                      chat
                    </span>
                  }
                >
                  <h3 className="font-headline text-base font-bold text-on-surface">
                    WhatsApp us
                  </h3>
                  <a
                    href="https://wa.me/233206626569"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-headline text-base font-bold text-primary transition-colors hover:text-on-primary-container"
                  >
                    +233&nbsp;20&nbsp;662&nbsp;6569
                  </a>
                  <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                    Message us for quick questions, updates, or to arrange a
                    call.
                  </p>
                </InfoCard>
                <InfoCard
                  icon={
                    <span className="material-symbols-outlined text-[22px]">
                      schedule
                    </span>
                  }
                >
                  <h3 className="font-headline text-base font-bold text-on-surface">
                    Response times
                  </h3>
                  <p className="mt-1 font-headline text-base font-bold text-primary">
                    Mon–Fri, business hours
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-on-surface-variant">
                    We typically reply within one business day—often sooner for
                    active engagements.
                  </p>
                </InfoCard>
              </div>

            
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-[2rem] border border-black/[0.04] bg-white p-8 shadow-[0_20px_60px_-24px_rgba(27,28,29,0.18)] lg:p-10">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface">
                  Send us a Message
                </h2>
                <ContactInquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
