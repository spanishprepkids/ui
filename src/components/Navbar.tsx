"use client";

import { useState } from "react";
import BrandLogo from "./BrandLogo";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-dark/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center shrink-0">
            <BrandLogo size="sm" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-on-primary/75 hover:text-on-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-on-primary hover:bg-on-primary/90 text-primary font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              Book Free Trial
            </a>
          </div>

          <button
            className="md:hidden p-2 text-on-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-dark/40 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-on-primary/75 hover:text-on-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block text-center bg-on-primary hover:bg-on-primary/90 text-primary font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            Book Free Trial
          </a>
        </div>
      )}
    </nav>
  );
}
