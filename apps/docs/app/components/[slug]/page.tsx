import { notFound } from "next/navigation";
import { getComponentDoc, getAllComponentSlugs } from "@/lib/component-docs";
import { Card, CardContent } from "@/components/ui/card";
import { ComponentDemo } from "@/components/component-demo";

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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">{doc.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{doc.description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <div className="rounded-lg border bg-muted/50 p-4">
          <code className="text-sm">npx vibe-ui add {slug}</code>
        </div>
        {doc.dependencies.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground">Dependencies:</p>
            <div className="rounded-lg border bg-muted/50 p-4">
              <code className="text-sm">
                pnpm add {doc.dependencies.join(" ")}
              </code>
            </div>
          </>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Preview</h2>
        <Card>
          <CardContent className="pt-6">
            <ComponentDemo slug={slug} />
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <div className="rounded-lg border bg-muted/50 p-4 overflow-x-auto">
          <pre className="text-sm">{`import { ${doc.name.replace(/\s/g, "")} } from '@/components/ui/${slug}'

export function Example() {
  return <${doc.name.replace(/\s/g, "")}>Content</${doc.name.replace(/\s/g, "")}>
}`}</pre>
        </div>
      </div>

      {doc.props && doc.props.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Props</h2>
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-medium">Prop</th>
                  <th className="text-left p-3 font-medium">Type</th>
                  <th className="text-left p-3 font-medium">Default</th>
                  <th className="text-left p-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {doc.props.map((prop) => (
                  <tr key={prop.name} className="border-t">
                    <td className="p-3">
                      <code>{prop.name}</code>
                    </td>
                    <td className="p-3 text-muted-foreground">
                      <code className="text-xs">{prop.type}</code>
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {prop.default || "-"}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {prop.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {doc.radixDocs && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Radix Documentation</h2>
          <p className="text-muted-foreground">
            This component is built on top of Radix UI.{" "}
            <a
              href={doc.radixDocs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View Radix UI documentation
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
