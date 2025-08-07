"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

/**
 * PUBLIC_INTERFACE
 * App Header with Navigation Bar
 */
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "My Bookings", href: "/bookings" },
  { name: "Account", href: "/account" }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header py-4 px-6 w-full shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-white">
          <span role="img" aria-label="hotel">🏨</span>
          Hotel Booking
        </Link>
        <nav className="flex gap-5">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium hover:underline ${pathname === link.href ? "text-accent" : "text-white"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
