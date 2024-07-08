import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import "./why.css";
import ButtonComponent from "@/components/ButtonComponent/Button";

export default function Why() {
  return (
    <div id="about" className="h-[851px] w-full flex flex-col 2xl:px-[80px] xl:px-5 py-[72px] gap-[72px] bg-[#041020]">
      <div className="h-auto w-full">
        <Heading content="Why Choose Gyanplug?" from="#F5FBFF" to="#58BDFE" />
      </div>
      <div className="h-auto w-full flex 2xl:gap-9 gap-2 justify-center">
        <Image
          src={"/images/1.svg"}
          className="2xl:block hidden"
          height={527}
          width={483}
          alt=""
        />
        <Image
          src={"/images/1.svg"}
          className="2xl:hidden h-full"
          height={527}
          width={483}
          alt=""
        />
        <div className="hidden  border-2 border-solid border-[#0259A2] bg-[#0174BE33] xl:w-[969px] w-[523px] h-[527px] xl:flex justify-start items-end rounded-3xl overflow-hidden relative pl-9 2xl:gap-10 xl:gap-2 gap-2">
          <Image
            src={"/images/topleftshadow.png"}
            height={527}
            width={523}
            alt=""
            className="h-auto w-auto absolute top-0 left-0 z-0"
          />
          <Image
            src={"/images/icon.svg"}
            height={100}
            width={100}
            alt=""
            className="h-auto w-auto absolute top-[11px] left-[19px] z-0"
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
            className="absolute right-0 bottom-0"
          />
        </div>
        <Image src={"/images/3_min.svg"} height={527} width={483} alt="" className="xl:hidden h-full w-auto"/>
      </div>
    </div>
  );
}
