import PrimaryData from "@/constants/Button/Primary/PrimaryData";
export default function ButtonPrimary() {
  return (
    <div>
      <div className="flex w-[320px] pt-[20px] pb-[20px] pl-[24px] pr-[24px] justify-center items-center gap-[4px] rounded-[6px] bg-[#14A4E1]">
        {PrimaryData}
        <div className="w-7 h-7 relative">
          <img src="/images/chevron-forward.svg" />
        </div>
      </div>
    </div>
  );
}
