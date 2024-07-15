"use client";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import ButtonComponent from "@/components/ButtonComponent/Button";
import Animation from "@/components/Animation/animation";

export default function Why() {
  return (
    <div
      id="why"
      className="h-auto lg:h-[851px] w-full flex flex-col lg:px-20 2xl:px-[120px] py-9 lg:py-[72px] gap-9 lg:gap-[72px] bg-[#041020] snap-start snap-always"
    >
      <div className="h-auto w-full">
        <Animation threshold={0} duration="900ms" x={0} y={-100} delay="0s">
          <Heading content="Why Choose Gyanplug?" from="#F5FBFF" to="#58BDFE" />
        </Animation>
      </div>
      <Animation
        threshold={0}
        duration="900ms"
        x={0}
        y={100}
        delay="400ms"
        zIndex={10}
      >
        <div className="lg:h-[527px] w-full flex flex-col lg:flex-row gap-4 lg:gap-9 px-9 lg:px-0 justify-center">
          <Image
            src={"/images/1.png"}
            className="hidden lg:block h-full w-auto"
            height={527}
            width={483}
            alt=""
          />
          <Image
            src={"/images/1_min.png"}
            className="lg:hidden w-full h-auto"
            height={320}
            width={318}
            alt=""
          />
          <div className="hidden xl:flex border-2 border-solid border-[#0259A2] bg-[#0174BE33] w-[523px] h-[527px] xl:w-[969px] justify-start items-end overflow-hidden relative pl-9  gap-2  xl:gap-2 2xl:gap-10 rounded-3xl">
            <Image
              src={"/images/topleftshadow.png"}
              height={527}
              width={523}
              alt=""
              className="h-auto w-auto absolute top-0 left-0 z-0"
            />
            <Image
              src={"/images/Icon.svg"}
              height={100}
              width={100}
              alt=""
              className="h-auto w-auto absolute top-[11px] left-[19px] z-10"
            />
            <div className="mb-11 w-[401px] flex flex-col gap-[129px] z-10">
              <div className="w-full flex flex-col gap-4">
                <div className="w-full font-black text-[32px] leading-[38.41px] text-[#F5FBFF]">
                  Internship & Placement Support
                </div>
                <div className="w-full text-[20px] leading-[26.04px] font-normal text-[#F5FBFF99]">
                  Gain practical experience and secure your future with our
                  placement assistance.
                </div>
              </div>
              <ButtonComponent content="Book Session" type="secondary" />
            </div>
            <Image
              src={"/images/WhyCardImg2.png"}
              height={496}
              width={465}
              alt=""
              className="absolute right-0 bottom-0 max-w-[50%] 2xl:max-w-[50%]"
              style={{
                mixBlendMode: "luminosity",
              }}
            />
          </div>
          <Image
            src={"/images/3_min.png"}
            height={527}
            width={483}
            alt=""
            className="h-full w-auto lg:h-full lg:w-auto xl:hidden rounded-3xl border-2 border-solid border-[#0259A2]"
          />
        </div>
      </Animation>
    </div>
  );
}
