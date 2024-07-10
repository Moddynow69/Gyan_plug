"use client";
import React, { useEffect, useRef } from "react";
import MentorsCarouselData from "@/constants/Carousels/MentorsCarousel/MentorsCarouselData";
import MentorsCarouselTItem from "./MentorsCarouselIem";

export default function MentorsCarousel() {
  const scArr = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = window.innerWidth < 900 ? 244 : 520; // Change for responsiveness
    const offset = window.innerWidth < 900 ? 2 : 2.5; // Change for responsiveness
    const interval = setInterval(() => {
      const elem = scArr.current;
      if (elem == null) return;
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
    <div className="w-full h-[425px] md:h-[837px] md:pt-[99px] flex justify-start relative overflow-y-visible">
      <div className="hidden lg:block h-full w-[200px] absolute z-50 top-0 left-0 bg-gradient-to-r from-[#F3F9FF] to-[#F3F9FF00]" />
      <div className="hidden lg:block h-full w-[200px] absolute z-50 top-0 right-0 bg-gradient-to-l from-[#F3F9FF] to-[#F3F9FF00]" />
      <div className="h-full w-full flex overflow-x-scroll overflow-y-visible" ref={scArr}>
        <div className="flex gap-[28px] md:gap-[72px] mx-[20%] overflow-y-visible">
          {MentorsCarouselData.map((story, index) => (
            <MentorsCarouselTItem key={index} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
