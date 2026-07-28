import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          What Our Athletes Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="bg-slate-50 border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="https://i.pravatar.cc/100?img=12"
                alt="Marcus Chen"
                className="w-12 h-12 rounded-full"
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

          {/* Card 2 */}
          <div className="bg-slate-50 border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="https://i.pravatar.cc/100?img=32"
                alt="Sarah Williams"
                className="w-12 h-12 rounded-full"
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

          {/* Card 3 */}
          <div className="bg-slate-50 border border-gray-100 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="https://i.pravatar.cc/100?img=15"
                alt="David Miller"
                className="w-12 h-12 rounded-full"
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
              nightmare until I found SportNest. It&apos;s a total game-changer for
              my business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
