"use client";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import WhyData from "@/constants/Why/WhyData";
import Animation from "@/components/Animation/animation";

export default function Why() {
  return (
    <div
      id="why"
      className="h-auto lg:h-[1043px] w-full flex flex-col lg:px-10 py-9 lg:py-[72px] gap-9 lg:gap-[72px] bg-[#041020]  "
    >
      <div className="h-auto w-full">
        <Animation threshold={0} duration="900ms" x={0} y={-100} delay="0s">
          <Heading content={WhyData.Heading} from={"#F5FBFF"} to="#58BDFE" />
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
        <div className="h-[1008px] md:h-[1400px] lg:h-[650px] xl:h-[719px] w-full flex flex-col lg:flex-row gap-12 lg:gap-10 2xl:gap-[90px] px-9 lg:px-0 justify-center items-center">
          <div className="w-full md:w-[699px] lg:w-[470px] xl:w-[699px] h-[480px] md:h-full flex flex-col items-center justify-end relative">
            <div
              className="w-[320px] md:w-full h-[190px] md:h-[325px] rounded-[36px]"
              style={{
                background: "linear-gradient(180deg, #32b37f 0%, #5df8ba 100%)",
              }}
            />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[284px] md:w-[567px] lg:w-[400px] xl:w-[567px] h-[440px] md:h-[643px] lg:h-[600px] xl:h-[643px] shadow-[0px_18px_40px_0px_#2555404A,0px_73px_73px_0px_#25554042,0px_165px_99px_0px_#25554026,0px_294px_118px_0px_#2555400A,0px_459px_129px_0px_#25554003] p-0.5"
              style={{
                borderRadius: "24px",
                background:
                  "linear-gradient(172.03deg,#4ccd99 4.09%,#b6f9de 93.86%)",
              }}
            >
              <div
                className="h-full w-full rounded-3xl flex flex-col gap-12"
                style={{
                  background:
                    "radial-gradient(94.96% 94.96% at -3.11% -1.41%,rgba(43, 144, 103, 0.7) 0%,rgba(24, 21, 15, 0.7) 100%),linear-gradient(0deg,rgba(13, 13, 13, 0.7),rgba(13, 13, 13, 0.7))",
                }}
              >
                <div className="mt-9 mx-9 w-auto h-full flex flex-col justify-start gap-4">
                  <Image
                    src="/images/Why/1.svg"
                    width={112}
                    height={112}
                    alt={""}
                    className="realtive mt-[-8.45px] md:mt-[-19px] ml-[-7.85px] md:ml-[-18px] w-11 md:w-[112px] h-11 md:h-[112px]"
                  />
                  <div className="flex flex-col justify-between gap-2">
                    <div className="w-full font-black text-xl md:text-[32px] md:leading-[38.41px] text-[#F5FBFF]">
                      Free Expert Counselling Sessions
                    </div>
                    <div className="w-full text-[14px] md:text-[20px] leading-[18.23px] md:leading-[26.04px] font-normal text-[#F5FBFF99]">
                      Receive expert advice at no cost to guide your educational
                      journey.
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/Why/Img1.svg"
                  width={567}
                  height={312}
                  alt={""}
                  className="self-end rounded-3xl"
                  style={{
                    mixBlendMode: "luminosity",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[699px] lg:w-[470px] xl:w-[699px] h-[480px] md:h-full flex flex-col items-center justify-end relative">
            <div
              className="w-[320px] md:w-full h-[190px] md:h-[325px] rounded-[36px]"
              style={{
                background: "linear-gradient(180deg, #0259A2 0%, #4CADEC 100%)",
              }}
            />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[284px] md:w-[567px] lg:w-[400px] xl:w-[567px] h-[440px] md:h-[643px] lg:h-[600px] xl:h-[643px] shadow-[0px_20px_45px_0px_#084B684A,0px_81px_81px_0px_#084B6842,0px_183px_110px_0px_#084B6826,0px_326px_130px_0px_#084B680A,0px_509px_143px_0px_#084B6803] p-0.5"
              style={{
                borderRadius: "24px",
                background:
                  "linear-gradient(172.03deg, #0259A2 4.09%, #4CADEC 93.86%)",
              }}
            >
              <div
                className="h-full w-full rounded-3xl flex flex-col gap-12"
                style={{
                  background:
                    "radial-gradient(94.96% 94.96% at -3.11% -1.41%, rgba(0, 165, 238, 0.7) 0%, rgba(24, 21, 15, 0.7) 100%),linear-gradient(0deg, rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.7))",
                }}
              >
                <div className="mt-9 mx-9 w-auto h-full flex flex-col justify-start gap-4">
                  <Image
                    src="/images/Why/2.svg"
                    width={112}
                    height={112}
                    alt={""}
                    className="realtive mt-[-8.45px] md:mt-[-19px] ml-[-7.85px] md:ml-[-18px] w-11 md:w-[112px] h-11 md:h-[112px]"
                  />
                  <div className="flex flex-col justify-between gap-2">
                    <div className="w-full font-black text-xl md:text-[32px] md:leading-[38.41px] text-[#F5FBFF]">
                      Internship & Placement Support
                    </div>
                    <div className="w-full text-[14px] md:text-[20px] leading-[18.23px] md:leading-[26.04px] font-normal text-[#F5FBFF99]">
                      Gain practical experience and secure your future with our
                      placement assistance.
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/Why/Img2.svg"
                  width={508.99}
                  height={333.2}
                  alt={""}
                  className="self-center rounded-3xl"
                  style={{
                    mixBlendMode: "luminosity",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Animation>
    </div>
  );
}
