import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";

export default function MembershipCard() {
  return (
    <div className="h-[667px] w-full flex justify-end pt-[100px] gap-[387.2px]">
      <div className="max-w-[519px] h-[464px] flex flex-col gap-6 py-[72px]">
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
      <div className="relative h-[498px]">
        <Image
          src={"/images/Card.png"}
          height={411}
          width={652.04}
          alt=""
          className="shadow-[11px_6px_27px_0px_#66460033,42px_23px_48px_0px_#6646002B,96px_51px_65px_0px_#6646001A,170px_91px_77px_0px_#66460008,266px_143px_84px_0px_#66460000] absolute right-[189.96px] top-11"
        />
        <div className="w-[651.8px] h-[498px] bg-[#F3BF57] rounded-l-[36px]"></div>
      </div>
    </div>
  );
}
