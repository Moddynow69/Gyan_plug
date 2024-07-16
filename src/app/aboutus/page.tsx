"use client";
import ConnectWithUs from "../_sections/ContactUs/ConnectWithUs";
import AboutUs from "./_section/AboutUs/AboutUs";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";

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
      className="h-screen w-screen overflow-y-scroll  snap-y snap-mandatory"
      onScroll={controlNavbar}
    >
      <Navbar show={show} />
      <div className="h-auto w-screen bg-[#F5FBFF] overflow-visible relative overscroll-y-contain">
        <AboutUs />
        <ConnectWithUs />
      </div>
    </div>
  );
}
