import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/source/components/reusables/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="shell flex min-h-[80vh] flex-col justify-center pb-10 pt-32">
        <p className="label mb-6">
          <span className="text-accent">Error 404</span>
          <span className="mx-2 text-faint">/</span>
          Sheet not found
        </p>
        <h1 className="display text-[clamp(3.5rem,12vw,9rem)] !leading-[0.9]">
          This page was <em className="text-accent">never drawn.</em>
        </h1>
        <p className="prose-body mt-8 max-w-lg text-lg">
          The link may be old, or the page may have moved in a redesign. The
          work and the contact page are both still where you would expect.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home <ArrowRight size={16} className="nudge-x" />
          </Link>
          <Link href="/projects" className="btn btn-ghost">
            See the work
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
