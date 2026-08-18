import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t bg-[#eef0fb]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link href="/" className="text-2xl font-bold tracking-tight text-green-600">
            Sport<span className="text-gray-900">Nest</span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Your premier platform to discover, book, and manage sports facilities and arenas with ease.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
              aria-label="X"
            >
              <FaXTwitter size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-gray-600">
            <li>
              <Link href="/" className="transition hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-facilities" className="transition hover:text-green-600">
                All Facilities
              </Link>
            </li>
            <li>
              <Link href="/my-bookings" className="transition hover:text-green-600">
                My Bookings
              </Link>
            </li>
            <li>
              <Link href="/add-facilities" className="transition hover:text-green-600">
                Add Facility
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
            Support
          </h3>
          <ul className="space-y-2.5 text-sm text-gray-600">
            <li>
              <Link href="/faq" className="transition hover:text-green-600">
                Help & FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-green-600">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition hover:text-green-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-green-600" />
              <span>1200 Sports Complex Way, Suite 400</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-green-600" />
              <span>+1 (555) 234-5678</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-green-600" />
              <span>support@sportnest.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2026 SportNest. All rights reserved. Premium Sports Facility Management.
      </div>
    </footer>
  );
}
