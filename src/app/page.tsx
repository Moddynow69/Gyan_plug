<<<<<<< Updated upstream
import Home from "./_sections/Home/Home";
import Faqs from "./_sections/FaqItems/Faqs";
import ConnectWithUs from "./_sections/ContactUs/ConnectWithUs";
import Why from "./_sections/WhyChooseGyanplug/Why";
import Mentors from "./_sections/Mentors/Mentors";
import MembershipCard from "./_sections/MembershipCard/MembershipCard";
import Stories from "./_sections/Stories/Stories";
import How from "./_sections/HowItWorks/How";
=======
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import ConnectWithUs from "@/pages/ConnectWithUs";
import Faqs from "@/pages/Faqs";
import { folito } from "./fonts";
>>>>>>> Stashed changes

export default function HomePage() {
  return (
<<<<<<< Updated upstream
    <div className="h-auto w-screen flex flex-col bg-[#F5FBFF]">
      <Home />
      <Why/>
      <MembershipCard/>
      <How/>
      <Mentors/>
      <Stories/>
      <Faqs/>
      <ConnectWithUs/>
=======
    <div>
      <div className={`w-full bg-white h-[100vh] ${folito.className}`}>
        {/* <Navbar /> */}
        {/* <Faqs /> */}
        <ConnectWithUs />
      </div>
>>>>>>> Stashed changes
    </div>
  );
}
