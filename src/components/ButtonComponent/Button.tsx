import { folito } from "@/app/fonts";
import Image from "next/image";

type Props = {
  type: "primary" | "secondary" | "tertiary";
  content: string;
  arrow?: boolean;
};

export default function ButtonComponent({
  type,
  content,
  arrow = true,
}: Props) {
  if (type === "primary") {
    return (
      <div className="flex md:w-[579px] w-[235px] md:h-[99px] h-[69px] px-[64px] py-[24px] justify-center items-center gap-[8px] rounded-[12px] bg-[#14A4E1] hover:bg-[#0174BE] hover:gap-[24px] hover:cursor-pointer transition-all duration-300 ease">
        <div className="font-Folito font-bold text-[#FFF9EB] md:text-[36px] text-[14px] md:leading-[48px] leading-[16.8px] whitespace-nowrap">
          {content}
        </div>
        {arrow && (
          <Image
            width={48}
            height={48}
            alt=">"
            className="w-6 h-6 md:w-auto md:h-auto"
            src="images/chevron-forward.svg"
          />
        )}
      </div>
    );
  } else if (type === "secondary") {
    return (
      <div>
        <div
          className={`flex w-[20rem] pt-[20px] pb-[20px] pl-[24px] pr-[24px] justify-center items-center gap-[4px] text-xl rounded-[6px] bg-[#14A4E1] ${folito.className} font-bold hover:bg-[#0174BE] hover:gap-[12px] hover:cursor-pointer transition-all duration-300 ease text-[#FFF9EB]`}
        >
          {content}
          <Image
            width={28}
            height={28}
            alt=">"
            src="/images/chevron-forward.svg"
          />
        </div>
      </div>
    );
  } else if (type === "tertiary") {
    return (
      <div>
        <div
          className={`flex w-[14rem] lg:w-auto py-[6px] lg:py-[10px] px-[1.2rem] justify-center items-center gap-[4px] text-[1rem] xl:text-xl rounded-[6px] bg-[#14A4E1] font-folito font-bold hover:bg-[#0174BE] hover:gap-[12px] hover:cursor-pointer transition-all duration-300 ease text-[#FFF9EB] ${folito.className} mb-8 lg:mb-0`}
        >
          {content}
          <Image
            width={28}
            height={28}
            alt=">"
            className="w-7 h-7"
            src="/images/chevron-forward.svg"
          />
        </div>
      </div>
    );
  } else return <></>;
}
