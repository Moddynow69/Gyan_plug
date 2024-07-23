"use client";
import Home from "./_sections/Home/Home";
import Faqs from "./_sections/FaqItems/Faqs";
import ConnectWithUs from "./_sections/ContactUs/ConnectWithUs";
import Why from "./_sections/WhyChooseGyanplug/Why";
import Mentors from "./_sections/Mentors/Mentors";
import MembershipCard from "./_sections/MembershipCard/MembershipCard";
import Stories from "./_sections/Stories/Stories";
import Navbar from "@/components/Navbar/Navbar";
import How from "./_sections/HowItWorks/How";
import { Suspense, useState } from "react";
import Loading from "./loading";
export default function HomePage() {
  const [visible, setVisible] = useState(true);
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
    <Suspense fallback={<Loading />}>
      <div
        className="h-screen w-screen overflow-y-scroll"
        onScroll={controlNavbar}
      >
        <Navbar show={show} />
        <div className="h-auto w-screen bg-[#F5FBFF] overflow-visible relative">
          <Home />
          <Why />
          <MembershipCard />
          <How setVisible={setVisible} />
          {visible && (
            <>
              <Mentors />
              <Stories />
              <Faqs type="Students" />
              <ConnectWithUs />
            </>
          )}
        </div>
      </div>
    </Suspense>
  );
}
