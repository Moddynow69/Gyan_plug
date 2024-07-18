"use client";
import LogoCarousel from "@/components/Carousels/LogoCarousel/LogoCarousel";
import ButtonComponent from "@/components/ButtonComponent/Button";
import Image from "next/image";
import { folito } from "@/app/fonts";
import home from "@/constants/Home/Home";
import { ReactTyped } from "react-typed";
import Animation from "@/components/Animation/animation";

export default function Home() {
  return (
    <div className="min-h-screen h-auto w-screen flex flex-col items-center relative overflow-hidden snap-start snap-always">
      <div className="h-full w-full lg:w-[1000px] xl:w-[1200px] 2xl:w-[1488px] flex flex-col lg:flex-row items-center lg:items-start gap-2.5 lg:gap-20 px-5 lg:px-0 z-10 justify-between">
        <Animation
          threshold={0}
          duration="900ms"
          x={-300}
          y={0}
          delay="0s"
          zIndex={10}
          className="z-10 w-full lg:w-[400px] xl:w-[654px] h-full inline-flex  mt-[94px] lg:mt-[180px] xl:mt-[290px] lg:self-end xl:self-auto"
        >
          <div className="z-10 w-full h-full flex-col justify-start items-start gap-2.5 md:gap-[55px] lg:gap-[24px] xl:gap-[55px] inline-flex">
            <div className="w-full h-full flex-col justify-start items-start gap-6 md:gap-[54px] lg:gap-6 xl:gap-[54px] inline-flex">
              <div className="w-full h-full flex-col justify-start items-start md:gap-[19.84px] gap-4 inline-flex">
                <div
                  className={`h-auto min-h-[64px] lg:min-h-[180px] 2xl:min-h-[120px] w-full font-black ${folito.className} md:text-[40px] text-[24px] md:leading-[60px] leading-8 text-[#0C356A]`}
                >
                  <ReactTyped
                    strings={[home.heading1]}
                    typeSpeed={60}
                    cursorChar={""}
                  />{" "}
                  <span className="text-[#14A4E1] whitespace-nowrap">
                    <ReactTyped
                      cursorChar={""}
                      strings={[home.spanHeading]}
                      typeSpeed={60}
                      startDelay={1000}
                    />
                  </span>{" "}
                  <ReactTyped
                    cursorChar={""}
                    strings={[home.heading2]}
                    typeSpeed={60}
                    startDelay={2000}
                  />
                </div>
                <div className="h-[auto] w-full text-[#0C356A99] md:text-[24px] text-[14px] md:leading-9 leading-5 font-medium">
                <ReactTyped
                    cursorChar={""}
                    strings={[home.subHeading]}
                    typeSpeed={60}
                    startDelay={5500}
                  />
                </div>
              </div>
              <ButtonComponent content={home.button} type="primary" link={home.buttonLink} />
            </div>
            <div className="w-full h-auto inline-flex  gap-3 md:gap-6 flex-col  mb-3 lg:mb-0">
              <Image
                src={home.image}
                height={768}
                width={679}
                alt=""
                unoptimized
                className="lg:hidden rounded-[36px] h-auto bg-[#ECF8FE]"
              />
              <div className="md:text-[#002324] text-[#00232499] md:text-[24px] text-[14px] md:leading-9 leading-[18.23px] font-bold">
                {home.LogosHeading}
              </div>
              <LogoCarousel />
            </div>
          </div>
        </Animation>
        <Animation
          threshold={0}
          duration="900ms"
          x={300}
          y={0}
          delay="600ms"
          zIndex={10}
          className="hidden lg:block lg:mt-[233px] lg:max-w-[52%] xl:max-w-[45%] xl:self-end h-auto xl:w-auto bg-[#ECF8FE] mb-3 rounded-[36px]"
        >
          <Image
            src={home.image}
            height={768}
            width={679}
            alt=""
            unoptimized
            className="hidden lg:block rounded-[36px] h-full w-gull"
          />
        </Animation>
      </div>
    </div>
  );
}
