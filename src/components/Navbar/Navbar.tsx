"use client";
import Image from "next/image";
import NavbarItem from "@/components/NavbarItem/NavbarItem";
import NavbarItems from "@/constants/Navbar/Navbar";
import NavbarData from "@/constants/Navbar/NavbarData";
import Link from "next/link";
import ButtonComponent from "../ButtonComponent/Button";
import { useState } from "react";

export default function Navbar() {
  const [menuopen, setMenuopen] = useState(false);
  return (
    <>
      <div className="z-50 absolute left-1/2 translate-x-[-50%] lg:top-12 w-full lg:w-[1000px] xl:w-[1200px] 2xl:w-[1488px] lg:h-[98px] h-[70px] 2xl:px-8 xl:px-4 px-5 py-[16.3px] lg:rounded-2xl border-[0.5px] border-[#E8E8E899] backdrop-blur-[44px] justify-between items-center inline-flex bg-[#FFFFFFCC] shadow-[0px_12px_48px_0px_#0067690D]">
        <Link href="/" scroll className="min-w-fit min-h-fit">
          <Image
            src={NavbarData.logo.src}
            alt={NavbarData.logo.alt}
            width={196.96}
            height={65.68}
            className="xl:w-[196.96px] w-[140px] xl:h-[112.66px] h-[37.74px]"
          />
        </Link>
        <div className="hidden lg:flex justify-start items-start 2xl:gap-6 xl:gap-4 gap-2 ">
          {NavbarItems.map((item, idx) => (
            <NavbarItem title={item.title} link={item.link} key={idx} />
          ))}
        </div>
        <ButtonComponent
          content="Book Session"
          type="tertiary"
          className="hidden lg:flex"
        />
        <Image
          src="/icons/menu.svg"
          width={24}
          height={24}
          alt="Menu"
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuopen(!menuopen)}
        />
      </div>
      <div className={menuopen ? "z-[1000] w-screen  h-full fixed bottom-0 right-0 bg-transparent" : "hidden w-0"}>
        <div className="w-screen h-screen" onClick={()=>setMenuopen(false)}></div>
      <div
        className={`fixed bottom-0 right-0 h-full border-[0.5px] border-solid border-[#D9D8D8] rounded-l-xl flex ${
          menuopen ? " w-[258px] duration-[300ms]" : "hidden w-0"
        } flex-col px-6 py-5 gap-5 lg:hidden backdrop-blur-3xl bg-[#FFFFFF99] `}
      >
        <Image
          src={"/icons/close.svg"}
          alt={"close"}
          width={24}
          height={24}
          className="cursor-pointer self-end"
          onClick={() => setMenuopen(!menuopen)}
        />
        <div className="flex flex-col gap-[34px]">
          <div className="flex flex-col gap-4">
            {NavbarItems.map((item, idx) => (
              <NavbarItem title={item.title} link={item.link} key={idx} />
            ))}
            <ButtonComponent
              content="Book Session"
              type="tertiary"
              arrow={false}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
