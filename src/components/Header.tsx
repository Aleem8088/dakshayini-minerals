"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ArrowIcon from "./ArrowIcon";

const navLinks = [
  { label: "about", href: "/about" },
  { label: "products", href: "/products" },
  { label: "plants", href: "/plants" },
  { label: "process", href: "/process" },
];

const heroPages = ["/", "/about", "/products", "/plants", "/process"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHeroPage = heroPages.includes(pathname);

  useEffect(() => {
    // Flip to solid right as the hero section scrolls up past the header.
    const getThreshold = () => {
      const hero = document.querySelector("main")?.firstElementChild as
        | HTMLElement
        | null;
      return hero ? hero.offsetHeight - 90 : 40;
    };
    let threshold = getThreshold();
    const onScroll = () => setScrolled(window.scrollY > threshold);
    const onResize = () => {
      threshold = getThreshold();
      onScroll();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const showWhiteText = isHeroPage && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || !isHeroPage ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 md:px-[100px] py-[20px]">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -ml-2"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-colors ${
              showWhiteText ? "text-white" : "text-black"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <Link href="/" className="hidden md:flex flex-col gap-[4.9px]">
          <span
            className={`font-[family-name:var(--font-barlow-condensed)] text-2xl transition-colors duration-300 ${
              showWhiteText ? "text-white" : "text-black"
            }`}
          >
            Dakshayini Minerals
          </span>
          <span
            className={`text-xs tracking-[2.45px] transition-colors duration-300 ${
              showWhiteText ? "text-[#B6B6B6]" : "text-[#474747]"
            }`}
          >
            M-SAND AND AGGREGATES
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`small-caps relative px-3 py-2 text-base transition-colors duration-300 ${
                    active
                      ? "text-[var(--color-brand)] font-medium"
                      : showWhiteText
                      ? "text-white/80 hover:text-white"
                      : "text-[var(--color-text-light)] hover:text-black"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-[2px] bg-[var(--color-brand)]" />
                  )}
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            className={`small-caps px-[14px] py-[10px] text-base font-medium border transition-colors duration-300 hover:bg-[var(--color-brand)] hover:border-[var(--color-brand)] hover:text-white ${
              showWhiteText
                ? "text-white border-white"
                : "text-black border-black/30"
            }`}
          >
            contact us
          </Link>
        </div>

        <Link
          href="/contact"
          className={`md:hidden small-caps px-[14px] py-[10px] text-base font-medium border transition-colors duration-300 hover:bg-[var(--color-brand)] hover:border-[var(--color-brand)] hover:text-white ${
            showWhiteText ? "text-white border-white" : "text-black border-black/30"
          }`}
        >
          contact us
        </Link>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          mobileOpen ? "max-h-[420px] shadow-lg" : "max-h-0"
        }`}
      >
        <div className="flex flex-col py-5">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`small-caps px-5 py-[14px] text-sm transition-colors duration-200 ${
                  active
                    ? "bg-[var(--color-brand)] text-white"
                    : "text-[#2B3A2E] hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="px-5 pt-5">
            <Link
              href="/contact"
              className="small-caps inline-flex items-center gap-3 bg-[var(--color-brand)] text-white text-sm font-semibold border border-[var(--color-brand)] px-4 py-3 hover:bg-white hover:text-[var(--color-brand)] transition-colors duration-300"
            >
              contact us
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
