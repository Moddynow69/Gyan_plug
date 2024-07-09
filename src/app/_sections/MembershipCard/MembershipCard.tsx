import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";

export default function MembershipCard() {
  return (
    <div className="h-[667px] w-full flex justify-between pt-[100px] 2xl:pl-[150px] xl:pl-14 pl-5">
      <div className="max-w-[519px] xl:h-[464px] h-auto flex flex-col gap-6 xl:py-[72px] py-6">
        <div className="w-full h-auto flex flex-col items-start">
          <Heading content={"Gyanplug Exclusive"} from="#041020" to="#F3BF57" />
          <Heading content={"Membership Card"} from="#041020" to="#F3BF57" />
        </div>
        <div className="text-[#002324CC] text-[20px] leading-8">
          Empower your educational journey with the Gyanplug Membership Card.
          Enjoy special privileges across loans, hostels, local clubs,
          professional networking events, and more. Designed to enhance your
          student life and career opportunities!
        </div>
      </div>
      <div className="relative xl:h-[498px] h-[382.01px]">
        <Image
          src={"/images/Card.png"}
          height={411}
          width={652.04}
          alt=""
          className="shadow-[11px_6px_27px_0px_#66460033,42px_23px_48px_0px_#6646002B,96px_51px_65px_0px_#6646001A,170px_91px_77px_0px_#66460008,266px_143px_84px_0px_#66460000] absolute 2xl:right-[189.96px] xl:right-14 right-10 top-1/2 -translate-y-1/2 z-10"
        />
        <div className="xl:w-[651.8px] xl:h-[498px] w-[500px] h-[382.01px] bg-[#F3BF57] rounded-l-[36px]"></div>
      </div>
    </div>
  );
}
