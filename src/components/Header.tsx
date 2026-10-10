"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu after navigating.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200 bg-cream-50/95 backdrop-blur">
      <div className="hidden bg-navy-900 text-sm text-white md:block">
        <div className="container-page flex items-center justify-between py-2">
          <p className="italic text-laurel-200">{site.motto}</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phones[0].tel}`} className="inline-flex items-center gap-2 hover:text-laurel-200">
              <PhoneIcon width={16} height={16} /> {site.phones[0].display}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-laurel-200">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="" width={240} height={172} className="h-12 w-auto md:h-14" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-navy-900 md:text-xl">Olivesfield School</span>
            <span className="block text-xs font-medium tracking-wide text-olive-700">Magodo, Lagos</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="rounded-full px-3.5 py-2 text-[0.95rem] font-semibold text-navy-900 hover:bg-cream-200 aria-[current=page]:bg-olive-100 aria-[current=page]:text-olive-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/admissions/" className="btn btn-accent hidden sm:inline-flex">
            Enquire Now
          </Link>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream-200 bg-white text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-cream-200 bg-cream-50 lg:hidden">
        <nav aria-label="Mobile" className="container-page max-h-[calc(100dvh-5rem)] overflow-y-auto py-4">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-cream-200">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block py-3.5 font-display text-xl text-navy-900 aria-[current=page]:text-ember-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/admissions/" className="btn btn-accent">
              Enquire Now
            </Link>
            <a href={`tel:${site.phones[0].tel}`} className="btn btn-outline">
              <PhoneIcon width={18} height={18} /> Call {site.phones[0].display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
