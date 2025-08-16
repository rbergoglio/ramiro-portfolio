"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="container-app flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="font-semibold tracking-tight">
          RB
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${
                  active ? "text-zinc-900 dark:text-zinc-50 underline underline-offset-8 decoration-2" : "text-zinc-600 dark:text-zinc-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-2"><ThemeToggle /></div>
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="mt-10 flex flex-col gap-4">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-base ${active ? "font-semibold text-zinc-900 dark:text-zinc-50" : "text-zinc-600 dark:text-zinc-300"}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
