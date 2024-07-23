"use client";
import Heading from "@/components/Heading/Heading";
import HowCard from "@/components/HowCard/HowCard";
import HowCardData from "@/constants/HowCard/HowCardData";
import React, { useEffect, useRef } from "react";
import Animation from "@/components/Animation/animation";

export default function How({
  setVisible,
}: {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const childRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const child = childRef.current;
    if (!child) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.1 && child.scrollTop < 1410) {
            setVisible(false);
            setTimeout(() => {
              setVisible(true);
            }, 1500);
          }
        });
      },
      {
        threshold: [0.1],
      }
    );
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.intersectionRatio>0.5){
            child.style.overflowY="scroll"
          }
          else{
            child.style.overflowY="hidden"
          }
        });
      },
      {
        threshold: [0.5],
      }
    );

    observer.observe(child);
    observer2.observe(child);

    return () => {
      if (child) {
        observer.unobserve(child);
        observer2.unobserve(child);
      }
    };
  }, []);
  return (
    <div
      id="howitworks"
      className="h-auto lg:h-[1074px] w-screen flex flex-col relative overflow-hidden pt-20 gap-[72px] snap-center "
    >
      <Animation duration="1100ms" delay="0s" x={0} y={-100} threshold={0}>
        <Heading content="How it Works?" from="#041020" to="#0174BE" />
      </Animation>
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
