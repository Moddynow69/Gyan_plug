import Image from "next/image";
import { Props } from "next/script";

export default function ButtonComponent({ type, content }: Props) {
  if (type === "primary") {
    return (
      <div className="flex w-[579px] px-[64px] py-[24px] justify-center items-center gap-[8px] rounded-[12px] bg-[#14A4E1] hover:bg-[#0174BE] hover:gap-[24px] hover:cursor-pointer transition-all duration-300 ease">
        <div className="font-folito font-bold text-[#FFF9EB] text-3xl leading-[48px] whitespace-nowrap">
          {content}
        </div>
        <Image width={48} height={48} alt=">" className="mr-[-2px]" src="images/chevron-forward.svg" />
      </div>
    );
  } else if (type === "secondary") {
    return (
      <div>
        <div className="flex w-[20rem] pt-[20px] pb-[20px] pl-[24px] pr-[24px] justify-center items-center gap-[4px] text-xl rounded-[6px] bg-[#14A4E1] font-folito font-bold hover:bg-[#0174BE] hover:gap-[12px] hover:cursor-pointer transition-all duration-300 ease">
          {content}
          <Image width={28} height={28} alt=">" src="/images/chevron-forward.svg" />
        </div>
      </div>
    );
  } else if (type === "tertiary") {
    return (
      <div>
        <div className="flex w-[14rem] pt-[10px] pb-[10px] pl-[1.2rem] pr-[1.2rem] justify-center items-center gap-[4px] text-xl rounded-[6px] bg-[#14A4E1] font-folito font-bold hover:bg-[#0174BE] hover:gap-[12px] hover:cursor-pointer transition-all duration-300 ease">
          {content}
          <Image width={28} height={28} alt=">" className="w-7 h-7" src="/images/chevron-forward.svg" />
        </div>
      </div>
    );
  } else return <></>;
}
