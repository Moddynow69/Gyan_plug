"use client";
import Image from "next/image";
import { Props } from "next/script";
import { useState } from "react";

export default function FaqItem({ heading, paragraph }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`flex flex-col w-[100%] gap-[1.5rem] justify-between duration-500 ${
        isVisible ? "h-[9.2rem]" : ""
      }`}
    >
      <div
        className={`w-[100%] hover:cursor-pointer relative`}
        onClick={toggleVisibility}
      >
        <div className="flex gap-[1.5rem] font-folito items-center w-[100%]">
          <Image
            height={42}
            width={42}
            alt="->"
            id="arrow"
            src="images/Next-button.svg"
            className={`transform transition-transform duration-500 ease ${
              isVisible ? "rotate-90" : "rotate-0"
            } flex-shrink-0`}
          />
          <div className="flex items-center gap-[2.25rem] text-[#041020] text-[1.5rem] font-[700] leading-[140%]">
            {heading}
          </div>
        </div>
        <p
          className={`absolute top-[3.5rem] transition-all ease flex justify-start flex-1 font-medium text-white text-1xl pt-[1rem] pb-[1rem] pl-[1.5rem] pr-[1.5rem] leading-[1.75rem] items-start bg-[rgba(20,164,225,1)] rounded-lg overflow-hidden w-[100%] ${
            isVisible ? "opacity-100 duration-500" : "duration-500 opacity-0 "
          }`}
        >
          {paragraph}
        </p>
      </div>
      <hr className="border-[rgba(20,164,225,0.20)] border-[1px] w-[100%] transition-all ease duration-500" />
    </div>
  );
}