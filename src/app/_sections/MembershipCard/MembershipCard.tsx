"use client";
import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import Animation from "@/components/Animation/animation";
import { folito } from "@/app/fonts";

export default function MembershipCard() {
  return (
    <div
      id="goldcard"
      className="h-auto lg:h-[667px] w-full flex flex-col lg:flex-row justify-between items-center lg:items-start pt-9 lg:pt-[100px] pl-5 xl:pl-14 2xl:pl-[150px] pr-5 lg:pr-0 gap-[86px] md:gap-0 lg:gap-12 xl:gap-[86px] overflow-x-hidden  "
    >
      <div className="max-w-[519px] h-auto xl:h-[464px] flex flex-col gap-6  py-6 xl:py-[72px]">
        <Animation threshold={0} duration="900ms" x={-100} y={0} delay="0s">
          <div className="w-full h-auto flex flex-col items-start justify-start">
            <Heading
              content={"Exclusive Gyanplug"}
              from="#041020"
              to="#F3BF57"
            />
            <Heading content={"Membership Card"} from="#041020" to="#F3BF57" align="start" className="text-center lg:text-left" />
          </div>
        </Animation>
        <Animation threshold={0} duration="900ms" x={-100} y={0} delay="600ms">
          <div className="text-[#002324CC] text-[12px] lg:text-[20px] ledaing-[15.62px] lg:leading-8 text-center lg:text-left">
            Empower your educational journey with the Gyanplug Membership Card.
            Enjoy special privileges across loans, hostels, local clubs,
            professional networking events, and more. Designed to enhance your
            student life and career opportunities!
          </div>
        </Animation>
      </div>
      <Animation threshold={0} duration="900ms" x={300} y={0} delay="900ms">
        <div className="relative h-auto md:h-[382.01px] xl:h-[498px] w-full lg:w-auto flex justify-center lg:justify-start items-end lg:items-start">
          <div className=" w-[349px] md:w-[500px] lg:w-[500px] xl:w-[651.8px] h-[169px] md:h-[256.4px] lg:h-[382.01px] xl:h-[498px] bg-[#F3BF57] rounded-[36px] lg:rounded-none lg:rounded-l-[36px] relative lg:static flex justify-center">
            <Image
              src={"/images/Card/Father.png"}
              height={411}
              width={652.04}
              alt=""
              className=" bg-[#0D0D0DB2] rounded-[23.69px] shadow-[0px_3px_7px_0px_#66460033,0px_13px_13px_0px_#6646002B,0px_29px_18px_0px_#6646001A,0px_52px_21px_0px_#66460008,0px_82px_23px_0px_#66460000] lg:shadow-[11px_6px_27px_0px_#66460033,42px_23px_48px_0px_#6646002B,96px_51px_65px_0px_#6646001A,170px_91px_77px_0px_#66460008,266px_143px_84px_0px_#66460000] absolute  lg:right-10 xl:right-14 2xl:right-[189.96px] lg:translate-x-0 lg:top-1/2 -translate-y-[62px] lg:-translate-y-1/2 z-10 w-[310px] md:w-[90%] lg:w-auto mx-5 lg:mx-0"
            />
          </div>
        </div>
      </Animation>
    </div>
  );
}
