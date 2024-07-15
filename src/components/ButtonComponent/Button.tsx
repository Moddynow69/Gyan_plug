import { folito } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  type: "primary" | "secondary" | "tertiary";
  content: string;
  arrow?: boolean;
  className?: string;
};

export default function ButtonComponent({
  type,
  content,
  arrow = true,
  className,
}: Props) {
  if (type === "primary") {
    return (
      <Link
        href={"http://app.gyanplug.com/"}
        target="_blank"
        className={` ${folito.className} flex py-2 px-4 rounded-[8px] w-auto xl:w-[526px] xl:px-[64px] xl:py-[16px] justify-center items-center gap-[8px] lg:rounded-[12px] bg-[#14A4E1] hover:bg-[#0174BE] hover:gap-[24px] hover:cursor-pointer transition-all duration-300 ease  ${className}`}
      >
        <div
          className={`${folito.className} font-bold text-[#FFF9EB] text-[14px] lg:text-[25px] xl:text-[34px] md:leading-[48px] leading-[16.8px] whitespace-nowrap`}
        >
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
      </Link>
    );
  } else if (type === "secondary") {
    return (
      <Link
        href={"http://app.gyanplug.com/"}
        target="_blank"
        className={`flex w-[144px] h-[43px] md:h-auto md:w-[320px] pt-[20px] pb-[20px] pl-[24px] pr-[24px] justify-center items-center gap-[4px] text-base lg:text-xl rounded-[6px] bg-[#14A4E1] ${folito.className} font-bold hover:bg-[#0174BE] hover:gap-[12px] hover:cursor-pointer transition-all duration-300 ease text-[#FFF9EB] whitespace-nowrap ${className}`}
      >
        {content}
        {arrow && (
          <Image
            width={28}
            height={28}
            alt=">"
            src="images/chevron-forward.svg"
          />
        )}
      </Link>
    );
  } else if (type === "tertiary") {
    return (
      <Link
        href={"http://app.gyanplug.com/"}
        target="_blank"
        className={`py-[8px] flex w-[100%] xl:w-[230px] xl:py-[10px] px-[19.2px] justify-center items-center gap-[4px] xl:text-xl text-base rounded-[6px] bg-[#14A4E1] ${folito.className} font-bold hover:bg-[#0174BE] hover:gap-[12px] hover:cursor-pointer transition-all duration-300 ease text-[#FFF9EB] whitespace-nowrap ${className} `}
      >
        {content}
        {arrow && (
          <Image
            width={28}
            height={28}
            alt=">"
            src="images/chevron-forward.svg"
          />
        )}
      </Link>
    );
  } else return <></>;
}
