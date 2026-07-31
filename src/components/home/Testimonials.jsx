import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          What Our Athletes Say
        </h2>

        <p className="text-gray-500 text-center mt-2">
          Hear from players and facility owners who love using SportNest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
         
          <div className="bg-slate-50 border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4rUiwjPTDB2yCNmtyd_cCxQIpwUa13iiEXtqL1p5uw&s=10"
                alt="Marcus Chen"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">Marcus Chen</h3>

                <div className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 italic">
              SportNest changed how our team organizes games. We found a great
              court and booked it in minutes. Highly recommended!
            </p>
          </div>

          <div className="bg-slate-50 border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVRVcZrCYz6YguqgD_cLlssd3dr3ymolkJM1cHnWSwA&s=10"
                alt="Sarah Williams"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">Sarah Williams</h3>

                <div className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 italic">
              The booking experience is flawless. I love that I can see all the
              amenities before I even arrive. Verified facilities are a huge
              plus!
            </p>
          </div>

        
          <div className="bg-slate-50 border border-gray-100 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIAJi8VWgbrQH3ybkUY4GHxo2Cr2hM-YzOQAEgNkFag&s=10"
                alt="David Miller"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold">David Miller</h3>

                <div className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 italic">
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
