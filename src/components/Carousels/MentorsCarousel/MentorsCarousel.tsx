"use client";
import React, { useEffect, useRef } from "react";
import MentorsCarouselData from "@/constants/Carousels/MentorsCarousel/MentorsCarouselData";
import MentorsCarouselTItem from "./MentorsCarouselIem";

export default function MentorsCarousel() {
  const scArr = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scroll = window.innerWidth < 900 ? 244 : 520; //  change this for responsiveness
    const offset = window.innerWidth < 900 ? 2 : 2.5; //  change this for responsiveness
    const interval = setInterval(() => {
      const elem = scArr.current;
      if (elem == null) return;
      console.log(
        elem.scrollLeft,
        scroll * (MentorsCarouselData.length - offset),
        offset
      );
      if (elem.scrollLeft > scroll * (MentorsCarouselData.length - offset)) {
        elem.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        elem.scrollTo({
          left: elem.scrollLeft + scroll,
          behavior: "smooth",
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[352.92px] md:h-[837px] md:pt-[99px] flex justify-start relative">
      <div className="hidden lg:block h-full w-[200px] absolute z-50 top-0 left-0 bg-gradient-to-r from-[#F3F9FF] to-[#F3F9FF00]" />
      <div className="hidden lg:block h-full w-[200px] absolute z-50 top-0 right-0 bg-gradient-to-l from-[#F3F9FF] to-[#F3F9FF00]" />
      <div className="h-full w-full flex overflow-x-scroll overflow-y-hidden" ref={scArr}>
        <div className="flex gap-[28px] md:gap-[72px] mx-[20%]">
          {MentorsCarouselData.map((story, index) => (
            <MentorsCarouselTItem key={index} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
