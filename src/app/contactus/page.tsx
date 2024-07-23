"use client";
import ConnectWithUs from "../_sections/ContactUs/ConnectWithUs";
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";
import ContactUs from "./_section/ContactUs/ContactUs";

export default function Page() {
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
      className="h-screen w-screen overflow-y-scroll  "
      onScroll={controlNavbar}
    >
      <Navbar show={show} />
      <div className="h-auto w-screen bg-[#F5FBFF] overflow-visible relative">
        <ContactUs/>
        <ConnectWithUs />
      </div>
    </div>
  );
}
