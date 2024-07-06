import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";

export default function Why() {
  return (
    <div className="h-[851px] w-full flex flex-col px-[120px] py-[72px] gap-[72px] bg-[#041020]">
      <div className="h-auto w-full">
        <Heading content="Why Choose Gyanplug?" from="#F5FBFF" to="#58BDFE" />
      </div>
      <div className="h-auto w-full flex gap-9 justify-center">
        <Image src={'/images/1.svg'} height={527} width={483} alt="" />
        <Image src={'/images/3.svg'} height={527} width={969} alt="" />
      </div>
    </div>
  );
}