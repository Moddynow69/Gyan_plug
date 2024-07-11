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
    <div className="md:h-[109px] h-[68px] w-full  xl:w-[576px] relative">
      <div className="absolute z-50 h-full top-0 left-0 w-[94px] bg-gradient-to-r from-[#F5FBFF] to-[#F5FBFF00]"></div>
      <div className="absolute z-50 h-full top-0 right-0 w-[94px] bg-gradient-to-l from-[#F5FBFF] to-[#F5FBFF00]"></div>
      <div className="h-full w-full flex overflow-hidden">
        <div className={`flex gap-6 ${style["slide-track"]}`}>
          {LogoCarouselData.map((logo: Logo, index: number) => (
            <LogoCarouselItem key={index} src={logo.src} alt={logo.alt} />
          ))}
          {LogoCarouselData.map((logo: Logo, index: number) => (
            <LogoCarouselItem key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
