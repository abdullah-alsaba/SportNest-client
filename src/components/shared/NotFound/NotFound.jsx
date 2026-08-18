"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  CircleHelp,
  Search,
  CalendarDays,
  CircleQuestionMark,
} from "lucide-react";

import image404 from "@/assets/404.png";

export default function NotFound() {
  return (
    <main className="bg-linear-to-b from-slate-50 to-slate-100 min-h-screen pb-0">
      <section className="max-w-7xl mx-auto px-5 pt-14 pb-0">
         <div className="bg-white rounded-[32px] shadow-xl border border-slate-200 overflow-hidden">
          <div className="relative flex justify-center items-center h-80 md:h-105 bg-[radial-gradient(circle,#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px]">
             <h1 className="absolute text-[180px] md:text-[320px] font-black text-slate-200 select-none leading-none">
              404
            </h1>

             <Image
              src={image404}
              alt="404"
              width={370}
              height={225}
              priority
              className="relative z-10 object-contain drop-shadow-2xl w-75 md:w-92.5 h-auto"
            />
          </div>
        </div>

         <div className="text-center mt-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold rounded-full px-5 py-2">
            Lost Out Of Bounds
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 text-slate-900">
            Oops! Page Not Found
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 mt-6 leading-8 text-lg">
            It looks like the page you&apos;re looking for has been moved, deleted,
            or never existed in our training schedule. Let&apos;s get you back in the
            game.
          </p>

           <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
            <Link
              href="/"
              className="bg-green-700 hover:bg-green-800 duration-300 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-medium"
            >
              <Home size={20} />
              Back to Home
            </Link>

            <Link
              href="/all-facilities"
              className="bg-green-700 hover:bg-green-800 duration-300 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-medium"
            >
              <Search size={20} />
              Explore Facilities
            </Link>
          </div>
        </div>

         <div className="grid md:grid-cols-3 gap-8 mt-24 pb-14">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg duration-300">
            <Search className="text-green-700" size={28} />

            <h2 className="text-3xl font-semibold mt-6">Find Facilities</h2>

            <p className="text-slate-500 mt-4 leading-7">
              Browse our premium network of sports venues.
            </p>

            <Link
              href="/all-facilities"
              className="inline-block mt-6 text-green-700 font-semibold hover:underline"
            >
              Explore venues →
            </Link>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg duration-300">
            <CalendarDays className="text-green-700" size={28} />

            <h2 className="text-3xl font-semibold mt-6">Book a Session</h2>

            <p className="text-slate-500 mt-4 leading-7">
              Check availability and reserve your favorite facility instantly.
            </p>

            <Link
              href="/all-facilities"
              className="inline-block mt-6 text-green-700 font-semibold hover:underline"
            >
              Book now →
            </Link>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg duration-300">
            <CircleQuestionMark className="text-green-700" size={28} />

            <h2 className="text-3xl font-semibold mt-6">Need Help?</h2>

            <p className="text-slate-500 mt-4 leading-7">
              Visit our help centre for FAQs and troubleshooting.
            </p>

            <Link
              href="/"
              className="inline-block mt-6 text-green-700 font-semibold hover:underline"
            >
              Support Centre →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
