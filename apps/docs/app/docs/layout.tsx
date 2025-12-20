import { DocsSidebar } from "@/components/docs-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <DocsSidebar />
      <main className="lg:pl-64">
        <div className="container max-w-4xl py-10 px-6">{children}</div>
      </main>
    </div>
  );
}
