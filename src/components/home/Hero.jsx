import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pb-20">
      <div className="relative h-175 overflow-hidden">
        <Image
          src="/heroimg.png"
          alt="Sports facility"
          width={1920}
          height={1080}
          priority
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Book Your Perfect Sports Facility
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
              Access premium courts, fields, and pools instantly. Join thousands
              of athletes and facility owners in the most advanced sports
              ecosystem.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/all-facilities">
                <Button
                  size="lg"
                  className="min-w-50 border-white/40 bg-green-600 font-semibold rounded-xl text-white"
                >
                  Explore Facilities
                </Button>
              </Link>

              <Button
                size="lg"
                className="min-w-50 border-white/40 bg-white/10 font-semibold rounded-xl text-white"
              >
                Become a Facility Owner
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-16 w-[95%] max-w-6xl rounded-xl bg-white px-6 py-7 shadow-xl md:px-10 md:py-8">
        <div className="grid grid-cols-1 divide-y divide-gray-200 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-4 md:py-0">
            <h2 className="text-3xl font-bold text-green-700">500+</h2>
            <p className="mt-1 text-sm text-gray-500">Global Facilities</p>
          </div>

          <div className="py-4 md:py-0">
            <h2 className="text-3xl font-bold text-green-700">10k+</h2>
            <p className="mt-1 text-sm text-gray-500">Monthly Bookings</p>
          </div>

          <div className="py-4 md:py-0">
            <h2 className="text-3xl font-bold text-green-700">95%</h2>
            <p className="mt-1 text-sm text-gray-500">User Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
