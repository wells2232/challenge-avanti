import { BatteryHigh, CellSignalHigh, WifiMedium } from "@phosphor-icons/react";

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pt-3.5 pb-3 md:hidden">
      <span className="font-semibold text-base">9:41</span>
      <div className="relative bottom-3.5 bg-black border-b w-[152px] h-[33px] rounded-b-2xl"></div>
      <div className="flex items-center justify-evenly gap-0.5 lg:gap-4">
        <CellSignalHigh size={16} weight="bold" className="relative left-1" />
        <WifiMedium size={16} weight="bold" className="pb-0.5" />
        <BatteryHigh size={16} weight="fill" />
      </div>
    </div>
  );
}
