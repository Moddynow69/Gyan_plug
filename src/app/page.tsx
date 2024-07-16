'use client'
import Home from "./_sections/Home/Home";
import Faqs from "./_sections/FaqItems/Faqs";
import ConnectWithUs from "./_sections/ContactUs/ConnectWithUs";
import Why from "./_sections/WhyChooseGyanplug/Why";
import Mentors from "./_sections/Mentors/Mentors";
import MembershipCard from "./_sections/MembershipCard/MembershipCard";
import Stories from "./_sections/Stories/Stories";
import How from "./_sections/HowItWorks/How";
import { useState } from "react";
export default function HomePage() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="h-screen w-screen overflow-y-scroll  snap-y snap-mandatory">
      <div className="h-auto w-screen bg-[#F5FBFF] overflow-visible relative overscroll-y-contain">
        <Home />
        <Why />
        <MembershipCard />
        <How visible={visible} setVisible={setVisible} />
        {visible && (
          <>
            <Mentors />
            <Stories />
            <Faqs />
            <ConnectWithUs />
          </>
        )}
      </div>
    </div>
  );
}
