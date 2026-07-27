"use client";

export default function Loading() {
  return (
    <main className="relative min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 overflow-hidden flex items-center justify-center">
      {/* Background dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#cbd5e1_1px,transparent_1px)] bg-size-[24px_24px] opacity-60" />

      {/* Soft gradient blobs */}
      <div className="absolute -top-32 -left-32 w-125 h-125 bg-emerald-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-32 -right-32 w-125 h-125 bg-emerald-200 rounded-full blur-3xl opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5">
        <h1 className="text-3xl font-bold text-green-700 mb-10">SportNest</h1>

        {/* Spinner with orbiting dots */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-10">
          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin-slow">
            <span className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-emerald-300" />
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-300" />
          </div>

          {/* Football icon, spinning as the loader */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-20 h-20 text-green-700 animate-spin-football"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v4.2M12 21.8V18M4.2 7l3.6 1.6M16.2 15.4l3.6 1.6M2 12h4.2M18 12h3.8M4.2 17l3.6-1.6M16.2 8.6l3.6-1.6" />
            <path d="M12 6.2 L15 8.6 L13.8 12 L10.2 12 L9 8.6 Z" />
          </svg>
        </div>

        <h2 className="text-xl font-semibold text-slate-900">
          Loading your sports journey...
        </h2>

        <p className="text-slate-500 mt-3 max-w-sm leading-6">
          Preparing premium courts and facilities for your next big win.
        </p>

        {/* Progress bar */}
        <div className="w-72 h-1.5 bg-slate-200 rounded-full mt-8 overflow-hidden">
          <div className="h-full bg-green-700 rounded-full animate-loading-bar" />
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 text-sm">
        © 2024 SportNest. Premium Sports Facility Management.
      </p>

      <style jsx global>{`
        @keyframes spin-football {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-football {
          animation: spin-football 1.4s linear infinite;
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2.8s linear infinite;
        }

        @keyframes loading-bar {
          0% {
            width: 10%;
            margin-left: 0%;
          }
          50% {
            width: 60%;
            margin-left: 20%;
          }
          100% {
            width: 10%;
            margin-left: 100%;
          }
        }
        .animate-loading-bar {
          animation: loading-bar 1.8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
