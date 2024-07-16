"use client";
import Image from "next/image";
import NavbarItem from "@/components/NavbarItem/NavbarItem";
import NavbarItems from "@/constants/Navbar/Navbar";
import NavbarData from "@/constants/Navbar/NavbarData";
import Link from "next/link";
import ButtonComponent from "../ButtonComponent/Button";
import { useState } from "react";

export default function Navbar({show}: {show: boolean}) {
  const [menuopen, setMenuopen] = useState(false);
  return (
    <>
      <div
        className={`z-[1000] sticky ${
          show
            ? "top-0 lg:top-12 duration-300 ease-linear"
            : "top-[-200px] duration-300 ease-linear"
        } w-full h-0 flex justify-center`}
      >
        <div className="w-full lg:w-[1000px] xl:w-[1200px] 2xl:w-[1488px] lg:h-[98px] h-[70px] pl-2 pr-5 xl:px-4 2xl:px-8 py-[16.3px] lg:rounded-2xl border-[0.5px] border-[#E8E8E899] backdrop-blur-[44px] justify-between items-center inline-flex bg-[#FFFFFFCC] shadow-[0px_12px_48px_0px_#0067690D] ">
          <Link href="/" scroll className="min-w-fit min-h-fit">
            <Image
              src={NavbarData.logo.src}
              alt={NavbarData.logo.alt}
              width={196.96}
              height={65.68}
              className="2xl:w-[196.96px] w-[140px] 2xl:h-[112.66px] h-[37.74px]"
            />
          </Link>
          <div className="hidden lg:flex justify-start items-start gap-2 2xl:gap-6">
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
      </div>
      <div
        className={
          menuopen
            ? "z-[1000] w-screen  h-full fixed bottom-0 right-0 bg-transparent duration-300"
            : "hidden w-0 duration-300"
        }
      >
        <div
          className="w-screen h-screen"
          onClick={() => setMenuopen(false)}
        ></div>
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
                <NavbarItem
                  title={item.title}
                  link={item.link}
                  key={idx}
                  setMenuopen={setMenuopen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
