import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTransition from "@/source/components/reusables/PageTransition";
import CaseStudyView from "@/source/components/work/CaseStudyView";
import { imageSources } from "@/source/components/reusables/Shot";
import { CASE_STUDIES, getProject } from "@/source/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title}: ${project.kind}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description: project.summary,
      type: "article",
      url: `/projects/${project.slug}`,
      images: [{ url: imageSources(project.cover.src).src, alt: project.cover.alt }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();

  return (
    <PageTransition>
      <CaseStudyView project={project} />
    </PageTransition>
  );
}
