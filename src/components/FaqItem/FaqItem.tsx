"use client";
import { folito } from "@/app/fonts";
import Image from "next/image";
import { useState } from "react";

interface Props {
  heading: string;
  paragraph: string;
}

export default function FaqItem({ heading, paragraph }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`flex flex-col w-[100%] gap-[1.5rem] justify-between duration-700 ease mb-4 ${
        isVisible ? "h-[4rem] lg:h-[147.2px]" : "h-[2rem] lg:h-[4vh]"
      }`}
    >
      <div className={`w-[100%] hover:cursor-pointer relative`}>
        <div
          className={`flex gap-[1rem] lg:gap-[1.5rem] ${folito.className} items-center w-[100%]`}
          onClick={toggleVisibility}
        >
          <Image
            height={42}
            width={42}
            alt="->"
            id="arrow"
            src="images/Next-button.svg"
            className={`transform transition-transform w-[28px] lg:w-auto duration-700 ease ${
              isVisible ? "rotate-90" : "rotate-0"
            } flex-shrink-0`}
          />
          <div className="flex items-center lg:gap-[2.25rem] text-[#041020] text-[0.7rem] lg:text-[1.2rem] font-[600] leading-[130%] lg:leading-[140%]">
            {heading}
          </div>
        </div>
        <p
          className={`absolute top-[2rem] lg:top-[3.5rem] transition-all ease flex justify-start flex-1 font-medium text-white text-[0.7rem] lg:text-[1.1rem] py-[0.6rem] lg:py-[1rem] px-[0.6rem] lg:px-[1.5rem] leading-[130%] lg:leading-[1.75rem] items-start bg-[rgba(20,164,225,1)] rounded-md lg:rounded-lg overflow-hidden w-[100%] ${
            isVisible ? "opacity-100 duration-700 z-10" : "duration-700 opacity-0 z-0"
          }`}
        >
          {paragraph}
        </p>
      </div>
      <hr className="border-[rgba(20,164,225,0.20)] lg:border-[1px] w-[100%]" />
    </div>
  );
}
