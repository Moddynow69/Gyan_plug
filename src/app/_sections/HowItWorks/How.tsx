"use client";
import Heading from "@/components/Heading/Heading";
import HowCard from "@/components/HowCard/HowCard";
import HowCardData from "@/constants/HowCard/HowCardData";
import React, { useEffect, useRef } from "react";

export default function How() {
  const childRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const child = childRef.current;

    if (!child) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.8) {
            child.style.overflowY = "auto";
          } else {
            child.style.overflowY = "hidden";
          }
        });
      },
      {
        threshold: [0.8],
      }
    );

    observer.observe(child);

    return () => {
      if (child) {
        observer.unobserve(child);
      }
    };
  }, []);
  return (
    <div
      id="how-it-works"
      className="h-auto lg:h-[1074px] w-screen flex flex-col relative overflow-hidden pt-20 gap-[72px]"
    >
      <Heading content="How it Works?" from="#041020" to="#0174BE" />
      <div
        className="h-[767px] md:h-[1000px] lg:h-[767px] w-full  2xl:px-[120px] xl:px-20 px-10 flex items-start relative overflow-y-scroll pb-4"
        ref={childRef}
      >
        <div className="h-auto w-full  flex flex-col gap-4 lg:gap-[150px] pb-[260px] md:pb-[320px] lg:pb-[343px] xl:pb-[262px]">
          {HowCardData.map((card, index) => (
            <HowCard key={index} {...card} idx={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
