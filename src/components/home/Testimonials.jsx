import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          What Our Athletes Say
        </h2>

        <p className="mt-2 text-center text-gray-500 dark:text-gray-400">
          Hear from players and facility owners who love using SportNest.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
          <div className="p-6 border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4rUiwjPTDB2yCNmtyd_cCxQIpwUa13iiEXtqL1p5uw&s=10"
                alt="Marcus Chen"
                width={48}
                height={48}
                className="object-cover rounded-full"
              />

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Marcus Chen</h3>

                <div className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>

            <p className="text-sm italic text-gray-600 dark:text-gray-300">
              SportNest changed how our team organizes games. We found a great
              court and booked it in minutes. Highly recommended!
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVRVcZrCYz6YguqgD_cLlssd3dr3ymolkJM1cHnWSwA&s=10"
                alt="Sarah Williams"
                width={48}
                height={48}
                className="object-cover rounded-full"
              />

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Sarah Williams</h3>

                <div className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>

            <p className="text-sm italic text-gray-600 dark:text-gray-300">
              The booking experience is flawless. I love that I can see all the
              amenities before I even arrive. Verified facilities are a huge
              plus!
            </p>
          </div>

          <div className="p-6 border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIAJi8VWgbrQH3ybkUY4GHxo2Cr2hM-YzOQAEgNkFag&s=10"
                alt="David Miller"
                width={48}
                height={48}
                className="object-cover rounded-full"
              />

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">David Miller</h3>

                <div className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>

            <p className="text-sm italic text-gray-600 dark:text-gray-300">
              As a coach, managing multiple facilities for my classes was a
              nightmare until I found SportNest. It&apos;s a total game-changer
              for my business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
