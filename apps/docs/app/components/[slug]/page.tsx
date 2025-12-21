import { notFound } from "next/navigation";
import { getComponentDoc, getAllComponentSlugs } from "@/lib/component-docs";
import { ComponentPageContent } from "@/components/component-page-content";

export function generateStaticParams() {
  return getAllComponentSlugs().map((slug) => ({ slug }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getComponentDoc(slug);

  if (!doc) {
    notFound();
  }

  return <ComponentPageContent slug={slug} doc={doc} />;
}
