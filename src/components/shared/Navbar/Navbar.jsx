"use client";

import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import Profile from "../Profile/Profile";



export default function Navbar() {

  const { data: session, isPending } = useSession()
  
  
  
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-green-500"
        >
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

        {isPending ? (
          <div className="flex items-center gap-3">
            <div className="w-24 h-10 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-10 bg-gray-100 rounded-full w-28 animate-pulse" />
          </div>
        ) : session ? (
          <Profile />
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-5 py-2 text-green-600 transition-all duration-300 border border-green-500 rounded-full hover:bg-green-50"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-5 py-2 text-white transition-all duration-300 bg-green-600 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
