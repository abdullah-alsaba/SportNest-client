export default function ReadyToPlay() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-green-500 rounded-2xl py-16 px-8 text-center">
          <h2 className="text-4xl font-bold text-white">Ready to Play?</h2>

          <p className="text-green-100 mt-4 max-w-2xl mx-auto">
            Join the SportNest community today and unlock exclusive rates at
            top-tier sports facilities near you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Get Started Now
            </button>

            <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
