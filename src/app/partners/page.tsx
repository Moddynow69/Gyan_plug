"use client";
import Faqs from "../_sections/FaqItems/Faqs";
import ConnectWithUs from "../_sections/ContactUs/ConnectWithUs";
import Partners from "./_section/Partners/Partners";
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";

export default function HomePage() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLast] = useState(0);
  const controlNavbar = (e: React.UIEvent<HTMLDivElement>) => {
    if (
      e.currentTarget.scrollTop > lastScrollY &&
      e.currentTarget.scrollTop > 200
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLast(e.currentTarget.scrollTop);
  };
  return (
    <div
      className="h-screen w-screen overflow-y-scroll snap-mandatory snap-y"
      onScroll={controlNavbar}
    >
      <Navbar show={show} />
      <div className="h-auto w-screen bg-[#F5FBFF] overflow-visible relative">
        <Partners />
        <Faqs />
        <ConnectWithUs />
      </div>
    </div>
  );
}
