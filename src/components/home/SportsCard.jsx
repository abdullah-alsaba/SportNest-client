import { TbBallFootball, TbBallBasketball, TbSwimming } from "react-icons/tb";
import { GiCricketBat, GiTennisBall } from "react-icons/gi";
import { PiPersonSimpleRunBold } from "react-icons/pi";

const SportsCard = () => {
  return (
    <section className="px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto max-w-360">
        <div className="mb-5">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Popular Sports</h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Find the best spaces for your favorite activity
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm transition hover:border-green-600">
            <TbBallFootball className="text-[28px] text-green-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Football</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm transition hover:border-green-600">
            <PiPersonSimpleRunBold className="text-[28px] text-green-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Badminton</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm transition hover:border-green-600">
            <GiCricketBat className="text-[28px] text-green-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Cricket</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm transition hover:border-green-600">
            <TbBallBasketball className="text-[28px] text-green-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Basketball</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm transition hover:border-green-600">
            <TbSwimming className="text-[28px] text-green-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Swimming</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-sm transition hover:border-green-600">
            <GiTennisBall className="text-[28px] text-green-600" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Tennis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsCard;
