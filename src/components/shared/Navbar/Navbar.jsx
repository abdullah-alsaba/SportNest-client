"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import Profile from "../Profile/Profile";

const Navbar = () => {
  const { data: session, isPending } = useSession();

  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 useEffect(() => {
   const savedTheme = localStorage.getItem("theme");

   if (savedTheme === "dark") {
     document.documentElement.classList.add("dark");
   }
 }, []);

 useEffect(() => {
   if (isDark) {
     document.documentElement.classList.add("dark");
     localStorage.setItem("theme", "dark");
   } else {
     document.documentElement.classList.remove("dark");
     localStorage.setItem("theme", "light");
   }
 }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;

      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-slate-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-green-600"
        >
          Sport<span className="text-gray-900 dark:text-white">Nest</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
          >
            Home
          </Link>

          <Link
            href="/all-facilities"
            className="text-sm font-medium text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
          >
            All Facilities
          </Link>

          {session && (
            <>
              <Link
                href="/my-bookings"
                className="text-sm font-medium text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
              >
                My Bookings
              </Link>

              <Link
                href="/add-facilities"
                className="text-sm font-medium text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
              >
                Add Facility
              </Link>

              <Link
                href="/manage-facilities"
                className="text-sm font-medium text-gray-700 transition hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400"
              >
                Manage Facilities
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-700 transition hover:bg-gray-100 dark:border-gray-800 dark:bg-slate-900 dark:text-gray-200 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {isPending ? (
            <div className="h-9 w-9 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
          ) : session ? (
            <Profile />
          ) : (
            <div className="hidden items-center gap-3 sm:flex">
              <Link
                href="/login"
                className="rounded-full border border-green-500 px-4 py-1.5 text-sm font-medium text-green-600 transition hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950/40"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-green-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-green-700"
              >
                Get Started
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-slate-950 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-green-600 dark:text-gray-200 dark:hover:bg-slate-900 dark:hover:text-green-400"
            >
              Home
            </Link>

            <Link
              href="/all-facilities"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-green-600 dark:text-gray-200 dark:hover:bg-slate-900 dark:hover:text-green-400"
            >
              All Facilities
            </Link>

            {session && (
              <>
                <Link
                  href="/my-bookings"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-green-600 dark:text-gray-200 dark:hover:bg-slate-900 dark:hover:text-green-400"
                >
                  My Bookings
                </Link>

                <Link
                  href="/add-facilities"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-green-600 dark:text-gray-200 dark:hover:bg-slate-900 dark:hover:text-green-400"
                >
                  Add Facility
                </Link>

                <Link
                  href="/manage-facilities"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-green-600 dark:text-gray-200 dark:hover:bg-slate-900 dark:hover:text-green-400"
                >
                  Manage Facilities
                </Link>
              </>
            )}

            {!session && !isPending && (
              <div className="mt-3 flex flex-col gap-2 border-t border-gray-200 pt-3 dark:border-gray-800">
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="w-full rounded-lg border border-green-500 py-2.5 text-center text-sm font-medium text-green-600 transition hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-950/40"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={closeMobileMenu}
                  className="w-full rounded-lg bg-green-600 py-2.5 text-center text-sm font-medium text-white transition hover:bg-green-700"
                >
                  Get Started
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
