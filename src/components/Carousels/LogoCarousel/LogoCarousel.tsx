"use client";
import React from "react";
import LogoCarouselData from "@/constants/Carousels/LogoCarousel/LogoCarouselData";
import LogoCarouselItem from "./LogoCarouselItem";
import style from "./LogoCarousel.module.css";

interface Logo {
  src: string;
  alt: string;
}

export default function LogoCarousel() {
  return (
    <div className="md:h-[129px] h-[88px] w-full  xl:w-[576px] relative">
      <div className="md:h-[109px] h-[68px] absolute z-50 top-0 left-0 w-[94px] bg-gradient-to-r from-[#F5FBFF] to-[#F5FBFF00]"></div>
      <div className="md:h-[109px] h-[68px] absolute z-50 top-0 right-0 w-[94px] bg-gradient-to-l from-[#F5FBFF] to-[#F5FBFF00]"></div>
      <div className="md:h-[109px] h-[68px] w-full flex overflow-hidden">
        <div className={`flex gap-6 ${style["slide-track"]}`}>
          {LogoCarouselData.map((logo: Logo, index: number) => (
            <LogoCarouselItem key={index} src={logo.src} alt={logo.alt} />
          ))}
          {LogoCarouselData.map((logo: Logo, index: number) => (
            <LogoCarouselItem key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
      <div className=" text-[#0C356A99] text-[9px] leading-3 font-bold">
        <span className="text-red-600 text-sm">*</span>All logos are the
        property of their respective institution holders. Use of them does not
        imply any affiliation with or endorsement by them.
      </div>
    </div>
  );
}
