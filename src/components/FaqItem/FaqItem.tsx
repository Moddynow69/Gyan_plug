"use client";
import { folito } from "@/app/fonts";
import Image from "next/image";
import { ReactElement, useState } from "react";

interface Props {
  heading: string;
  paragraph: ReactElement | string;
}

export default function FaqItem({ heading, paragraph }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`flex flex-col w-[100%] transition-all ${
        isVisible ? "h-fit duration-700 ease gap-3 lg:gap-6" : "h-fit min-h-[44px] lg:min-h-[67px] duration-700 ease gap-[5px] lg:gap-[11px]"
      }`}
    >
      <div className={`w-[100%] h-fit min-h-[28px] lg:min-h-[42px] hover:cursor-pointer`}>
        <div
          className={`flex gap-9 ${folito.className} items-center w-[100%] h-fit`}
          onClick={toggleVisibility}
        >
          <Image
            height={42}
            width={42}
            alt="->"
            id="arrow"
            src="icons/Next-button.svg"
            className={`transform transition-transform w-[28px] lg:w-auto duration-700 ease ${
              isVisible ? "rotate-90" : "rotate-0"
            } flex-shrink-0`}
          />
          <div className="text-[#041020] text-[14px] lg:text-[24px] font-[600] leading-[18.2px] lg:leading-[33.6px]">
            {heading}
          </div>
        </div>
      </div>
      <div
        className={` font-medium text-white text-[12px] lg:text-[24px] leading-[16.8px] lg:leading-[33.6px] items-start bg-[rgba(20,164,225,1)] rounded-md lg:rounded-lg w-[100%]  ${
          isVisible
            ? "duration-700 ease opacity-100 h-fit py-[9.6px] lg:py-[16px] px-[9.6px] lg:px-[24px]"
            : "duration-700 ease opacity-0 h-0 px-0 py-0 -z-10"
        }`}
      >
        {paragraph}
      </div>
      <div className="bg-[rgba(20,164,225,0.20)] h-[2px] w-[100%] mt-1 lg:mt-0" />
    </div>
  );
}
