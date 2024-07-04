import SecondaryData from "@/constants/Button/Primay/PrimaryData";

export default function ButtonPrimary() {
  return (
    <div
      className="relative w-[579px] h-[99px]"
      data-collection-1-mode="mode-1"
    >
      <div className="relative h-[99px]">
        <div className="absolute w-[445px] h-[18px] top-[81px] left-[70px] rounded-[222.59px/9px] blur-[64px] bg-gradient-radial from-[#14A4E1] to-[#0C356A]"></div>
        <button className="absolute top-0 left-0 w-[579px] flex items-center justify-center gap-2 py-6 px-16 bg-[#14A4E1] rounded-xl overflow-hidden">
          <div className="absolute w-[181px] h-[112px] top-[-64px] left-[56px] bg-[#0C356A] rounded-[90.5px/56px] blur-[320px]"></div>
          <div className="relative font-folito font-bold text-[#FFF9EB] text-3xl leading-[48px] whitespace-nowrap">
            {SecondaryData}
          </div>
          <img
            className="relative w-12 h-12 mr-[-2px]"
            src="images/chevron-forward.svg"
          />
        </button>
      </div>
    </div>
  );
}
