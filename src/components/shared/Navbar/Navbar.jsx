"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Sport<span className="text-primary">Nest</span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

    
        <div className="flex items-center gap-3">
          <Link href="/login" variant="light">
            Login
          </Link>

          <Button as={Link} href="/register" color="primary" radius="full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
