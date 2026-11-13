import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "@/source/components/reusables/PageTransition";
import CopyEmail from "@/source/components/reusables/CopyEmail";
import LocalTime from "@/source/components/reusables/LocalTime";
import ContactForm from "@/source/components/contact/ContactForm";
import { AVAILABILITY, PROFILE, SOCIAL } from "@/source/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Festus Gbolade, a full-stack engineer based in Lagos (UTC+1) who works remotely with teams in Europe and the US.",
  alternates: { canonical: "/contact" },
};

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

const CHANNELS = [
  { label: "LinkedIn", value: "in/elpis-alpha", href: SOCIAL.linkedin },
  { label: "GitHub", value: "Elpis-alpha", href: SOCIAL.github },
  { label: "X", value: SOCIAL.twitterHandle, href: SOCIAL.twitter },
  { label: "Telegram", value: SOCIAL.telegramHandle, href: SOCIAL.telegram },
  { label: "WhatsApp", value: "Message me", href: SOCIAL.whatsapp },
];

export default function Contact() {
  return (
    <PageTransition>
      <section className="shell pb-24 pt-32 md:pb-32 md:pt-40">
        <p className="rise label mb-6">
          <span className="text-accent">Sheet 04</span>
          <span className="mx-2 text-faint">/</span>
          Contact
        </p>
        <h1 className="rise display text-[clamp(3.5rem,12vw,9rem)] !leading-[0.9]" style={i(1)}>
          Say <em className="text-accent">hello.</em>
        </h1>

        <div className="mt-14 grid gap-x-14 gap-y-16 md:mt-20 lg:grid-cols-12">
          <div className="rise lg:col-span-6" style={i(2)}>
            <p className="prose-body max-w-xl text-lg md:text-xl">{AVAILABILITY.note}</p>
            <p className="prose-body mt-4 max-w-xl">
              Email is the fastest way to reach me. The form goes to the same inbox.
            </p>

            <div className="mt-10">
              <p className="label mb-3">Email</p>
              <CopyEmail className="display text-[clamp(1.5rem,5.2vw,2.5rem)] !leading-tight" />
            </div>

            <ul className="mt-10 border-t border-line">
              {CHANNELS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 border-b border-line py-4 transition-[padding] duration-300 hover:pl-2"
                  >
                    <span className="label w-24 shrink-0">{c.label}</span>
                    <span className="flex-1 text-[15px] text-ink transition-colors group-hover:text-accent">{c.value}</span>
                    <ArrowUpRight size={16} className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <dt className="label">Based in</dt>
                <dd className="mt-1.5 text-[15px]">{PROFILE.location}</dd>
              </div>
              <div>
                <dt className="label">Local time</dt>
                <dd className="mt-1.5 text-[15px]">
                  <LocalTime /> <span className="text-muted">({PROFILE.utcOffset})</span>
                </dd>
              </div>
              {AVAILABILITY.overlap.map((o) => (
                <div key={o.region}>
                  <dt className="label">Overlap, {o.region}</dt>
                  <dd className="mt-1.5 text-[15px]">{o.window}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rise lg:col-span-5 lg:col-start-8" style={i(3)}>
            <div className="relative border border-line-strong bg-raise/60 p-6 backdrop-blur-sm sm:p-9">
              <span className="regmark -left-[7px] -top-[7px]" />
              <span className="regmark -right-[7px] -top-[7px]" />
              <span className="regmark -bottom-[7px] -left-[7px]" />
              <span className="regmark -bottom-[7px] -right-[7px]" />
              <p className="label mb-8">
                <span className="text-accent">Form 01</span>
                <span className="mx-2 text-faint">/</span>
                Write to me
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
