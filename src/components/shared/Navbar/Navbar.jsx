"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import Profile from "../Profile/Profile";

export default function Navbar() {
  const { data: session, isPending, refetch } = useSession();
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [pathname, refetch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      refetch();
    }, 100);
    return () => clearTimeout(timeout);
  }, [refetch]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-green-600"
        >
          Sport<span className="text-gray-900 dark:text-white">Nest</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:text-green-600 dark:hover:text-green-400"
          >
            Home
          </Link>
          <Link
            href="/all-facilities"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:text-green-600 dark:hover:text-green-400"
          >
            All Facilities
          </Link>
          <Link
            href="/my-bookings"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:text-green-600 dark:hover:text-green-400"
          >
            My Bookings
          </Link>
          <Link
            href="/add-facilities"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:text-green-600 dark:hover:text-green-400"
          >
            Add Facility
          </Link>
          <Link
            href="/manage-facilities"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors hover:text-green-600 dark:hover:text-green-400"
          >
            Manage Facilities
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition cursor-pointer"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </button>

          {isPending ? (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
            </div>
          ) : session ? (
            <Profile />
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/login"
                className="px-4 py-1.5 text-sm font-medium text-green-600 dark:text-green-400 transition-all border border-green-500 rounded-full hover:bg-green-50 dark:hover:bg-green-950/40"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-1.5 text-sm font-medium text-white transition-all bg-green-600 rounded-full shadow-sm hover:bg-green-700"
              >
                Get Started
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 dark:text-gray-200 md:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950 px-4 py-4 space-y-3 transition-colors">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 py-1"
          >
            Home
          </Link>
          <Link
            href="/all-facilities"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 py-1"
          >
            All Facilities
          </Link>
          <Link
            href="/my-bookings"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 py-1"
          >
            My Bookings
          </Link>
          <Link
            href="/add-facilities"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 py-1"
          >
            Add Facility
          </Link>
          <Link
            href="/manage-facilities"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 py-1"
          >
            Manage Facilities
          </Link>

          {!session && (
            <div className="pt-3 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2 text-sm font-medium text-green-600 dark:text-green-400 border border-green-500 rounded-lg hover:bg-green-50 dark:hover:bg-green-950/40"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
