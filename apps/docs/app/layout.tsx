import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StyleProvider } from "@/components/style-provider";
import { Toaster } from "@vibe-ui/registry/ui/neubrutalism/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Vibe UI - Multi-Style Component Library",
  description:
    "Beautiful React components with 20+ visual styles. Pick your vibe, copy the code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <StyleProvider>{children}</StyleProvider>
        <Toaster />
      </body>
    </html>
  );
}
