import { DocsSidebar } from "@/components/docs-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <SiteHeader />
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar - Navigation */}
        <DocsSidebar />
        {/* Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto lg:pl-64 xl:pr-64 scroll-smooth bg-background relative z-10">
          <div className="max-w-5xl mx-auto px-6 py-10 lg:px-12 lg:py-16 flex flex-col gap-12 pb-32">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
