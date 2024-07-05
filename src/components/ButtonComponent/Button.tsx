import { Props } from "next/script";

export default function ButtonComponent({ type, content }: Props) {
  if (type === "primary") {
    return (
      <div className="flex w-[579px] px-[64px] py-[24px] justify-center items-center gap-[8px] rounded-[12px] bg-[#14A4E1] hover:bg-[#0174BE] hover:gap-[24px] hover:cursor-pointer transition-all duration-300 ease">
        <div className="font-folito font-bold text-[#FFF9EB] text-3xl leading-[48px] whitespace-nowrap">
          {content}
        </div>
        <img className="w-12 h-12 mr-[-2px]" src="images/chevron-forward.svg" />
      </div>
    );
  } else if (type === "secondary") {
    return (
      <div>
        <div className="flex w-[320px] pt-[20px] pb-[20px] pl-[24px] pr-[24px] justify-center items-center gap-[4px] text-xl rounded-[6px] bg-[#14A4E1] font-folito font-bold hover:bg-[#0174BE] hover:gap-[12px] hover:cursor-pointer transition-all duration-300 ease">
          {content}
          <img className="w-7 h-7" src="/images/chevron-forward.svg" />
        </div>
      </div>
    );
  } else return <></>;
}
