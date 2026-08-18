"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ReadyToPlay() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-green-600 px-8 py-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white">Ready to Play?</h2>

          <p className="mx-auto mt-4 max-w-2xl text-green-100">
            Join the SportNest community today and unlock exclusive rates at
            top-tier sports facilities near you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/all-facilities"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-green-600 transition hover:bg-gray-100"
            >
              Get Started Now
            </Link>

            <Link
              href="/register"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-green-600"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
