import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollProgress } from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ramiro Bergoglio — Full‑stack Developer",
    template: "%s · Ramiro Bergoglio",
  },
  description:
    "Full‑stack developer focused on automation, secure infra, and clean UI.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ramiro Bergoglio — Full‑stack Developer",
    description:
      "Full‑stack developer focused on automation, secure infra, and clean UI.",
    type: "website",
    url: "https://example.com",
    images: ["/og-image.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-dvh bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-dvh flex-col">
            <AppHeader />
            <ScrollProgress />
            <main className="flex-1">{children}</main>
            <AppFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
