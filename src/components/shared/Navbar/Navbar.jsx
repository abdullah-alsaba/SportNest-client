"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Facilities", href: "/facilities" },
  { name: "Bookings", href: "/bookings" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
          onClick={() => setIsOpen(false)}
        >
          Sport<span className="text-primary">Nest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button as={Link} href="/login" variant="light">
            Login
          </Button>

          <Button as={Link} href="/register" color="primary" radius="full">
            Get Started
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="space-y-2 bg-white px-4 py-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 font-medium transition hover:bg-gray-100 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-3">
            <Button
              as={Link}
              href="/login"
              variant="bordered"
              onPress={() => setIsOpen(false)}
            >
              Login
            </Button>

            <Button
              as={Link}
              href="/register"
              color="primary"
              onPress={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
