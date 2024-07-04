import SecondaryData from "@/constants/Button/Secondary/SecondaryData";
export default function ButtonSecondary() {
  return (
    <div>
      <div className="flex w-[320px] pt-[20px] pb-[20px] pl-[24px] pr-[24px] justify-center items-center gap-[4px] rounded-[6px] bg-[#14A4E1] font-folito font-bold">
        {SecondaryData}
        <div className="w-7 h-7 relative">
          <img src="/images/chevron-forward.svg" />
        </div>
      </div>
    </div>
  );
}
