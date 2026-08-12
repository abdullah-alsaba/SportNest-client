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
            href="/all-facilities"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            All Facilities
          </Link>

          <Link
            href="/my-bookings"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            My Bookings 
          </Link>

          <Link
            href="/add-facilities"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Add Facilities
          </Link>
          <Link
            href="/manage-facilities"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Manage Facilities
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-5 py-2 border border-green-500 text-green-600 rounded-full hover:bg-green-50 transition-all duration-300"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
