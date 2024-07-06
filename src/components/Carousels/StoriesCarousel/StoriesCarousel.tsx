"use client";
import React, { useEffect, useRef } from "react";
import StoriesCarouselData from "@/constants/Carousels/StoriesCarousel/StoriesCarouselData";
import StoriesCarouselTItem from "./StoriesCarouselItem";
export default function StoriesCarousel() {
  const scArr = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = 520; //  change this for responsiveness
    var dir = false;
    const interval = setInterval(() => {
      const elem = scArr.current;
      if (elem == null) return;
      if (
        elem.scrollLeft >= scroll*(StoriesCarouselData.length-3) ||
        elem.scrollLeft === 0
      ) {
        dir=!dir;
      }
      if (dir) {
        elem.scrollTo({
          left: elem.scrollLeft - scroll,
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
    <div className="w-full h-[837px] pt-[99px] flex justify-start relative">
      <div className="h-full w-[200px] absolute z-50 top-0 left-0 bg-gradient-to-r from-[#F3F9FF] to-[#F3F9FF00] "></div>
      <div className="h-full w-[200px] absolute z-50 top-0 right-0 bg-gradient-to-l from-[#F3F9FF] to-[#F3F9FF00] "></div>
      <div className="h-full w-full flex overflow-scroll" ref={scArr}>
        <div className="flex gap-[72px] mx-[20%]">
          {StoriesCarouselData.map((story, index) => (
            <StoriesCarouselTItem key={index} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}