import Link from "next/link";
import { Globe, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#eef0fb] border-t">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-green-700">SportNest</h2>

          <p className="mt-4 text-gray-600 leading-7">
            Premium sports facility management for the modern athlete.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-5">Product</h3>

          <div className="space-y-3 text-gray-600">
            <Link href="#">Facilities</Link>

            <br />

            <Link href="#">Pricing</Link>

            <br />

            <Link href="#">Partner Program</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-5">Support</h3>

          <div className="space-y-3 text-gray-600">
            <Link href="#">Contact Support</Link>

            <br />

            <Link href="#">Terms of Service</Link>

            <br />

            <Link href="#">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-5">Connect</h3>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-green-600 hover:text-white duration-300 cursor-pointer">
              <Globe size={20} />
            </div>

            <div className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-green-600 hover:text-white duration-300 cursor-pointer">
              <AtSign size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t py-6 text-center text-gray-500">
        © 2026 SportNest. All rights reserved. Premium Sports Facility
        Management.
      </div>
    </footer>
  );
}
