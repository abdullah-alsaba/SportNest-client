import { TbBallFootball, TbBallBasketball, TbSwimming } from "react-icons/tb";
import { GiCricketBat, GiTennisBall } from "react-icons/gi";
import { PiPersonSimpleRunBold } from "react-icons/pi";

const SportsCard = () => {
  return (
    <section className="px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto max-w-360">
        <div className="mb-5">
          <h2 className="text-3xl font-bold text-slate-800">Popular Sports</h2>

          <p className="mt-1 text-sm text-slate-500">
            Find the best spaces for your favorite activity
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-lg border border-slate-200  shadow-sm bg-[#e8ecff]">
            <TbBallFootball className="text-[28px] text-slate-700" />
            <span className="text-sm text-slate-600">Football</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-[#e8ecff] shadow-sm">
            <PiPersonSimpleRunBold className="text-[28px] text-slate-700" />
            <span className="text-sm text-slate-600">Badminton</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-[#e8ecff] shadow-sm">
            <GiCricketBat className="text-[28px] text-slate-700" />
            <span className="text-sm text-slate-600">Cricket</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-[#e8ecff] shadow-sm">
            <TbBallBasketball className="text-[28px] text-slate-700" />
            <span className="text-sm text-slate-600">Basketball</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-[#e8ecff] shadow-sm">
            <TbSwimming className="text-[28px] text-slate-700" />
            <span className="text-sm text-slate-600">Swimming</span>
          </div>

          <div className="flex h-22.5 flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-[#e8ecff] shadow-sm">
            <GiTennisBall className="text-[28px] text-slate-700" />
            <span className="text-sm text-slate-600">Tennis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsCard;
