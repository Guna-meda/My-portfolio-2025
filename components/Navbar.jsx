"use client";
import Link from "next/link";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function AppNavbar() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "My Work", link: "/work" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme hook
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <div className="text-xl font-bold text-neutral-800 dark:text-white">
          My Portfolio
        </div>
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <button
              type="button"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded-full bg-transparent cursor-pointer transition hover:bg-gray-200/60 dark:hover:bg-gray-700/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </button>
          )}
          <Link href="/contact">
            <NavbarButton as="span" variant="primary">
              Let&apos;s Connect
            </NavbarButton>
          </Link>{" "}
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <div className="text-lg font-bold text-neutral-800 dark:text-white">
            My Portfolio
          </div>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}

          {/* Theme Toggle inside mobile menu */}
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition mx-auto"
            >
              {resolvedTheme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </button>
          )}

          {/* Single CTA Button for Mobile */}
          <div className="flex w-full flex-col mt-4">
            <Link href="/contact" className="w-full">
              <NavbarButton
                as="span"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Let&apos;s Connect
              </NavbarButton>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
