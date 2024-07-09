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
      <div className="flex w-[579px] px-[64px] py-[24px] justify-center items-center gap-[8px] rounded-[12px] bg-[#14A4E1] hover:bg-[#0174BE] hover:gap-[24px] hover:cursor-pointer transition-all duration-300 ease">
        <div className={`${folito.className} font-bold text-[#FFF9EB] text-3xl leading-[48px] whitespace-nowrap`}>
          {content}
        </div>
        {arrow && (
          <Image
            width={48}
            height={48}
            alt=">"
            className="mr-[-2px]"
            src="images/chevron-forward.svg"
          />
        )}
      </div>
    );
  } else if (type === "secondary") {
    return (
      <div>
        <div className={`flex w-[20rem] pt-[20px] pb-[20px] pl-[24px] pr-[24px] justify-center items-center gap-[4px] text-xl rounded-[6px] bg-[#14A4E1] ${folito.className} font-bold hover:bg-[#0174BE] hover:gap-[12px] hover:cursor-pointer transition-all duration-300 ease text-[#FFF9EB]`}>
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
        <div className={`flex w-[21vw] py-[10px] px-[1.2rem] justify-center items-center gap-[4px] text-[2vw] rounded-[6px] bg-[#14A4E1] ${folito.className} font-bold hover:bg-[#0174BE] hover:gap-[12px] hover:cursor-pointer transition-all duration-300 ease text-[#FFF9EB]`}>
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
