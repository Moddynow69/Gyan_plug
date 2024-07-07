import Home from "./_sections/Home/Home";
import Faqs from "./_sections/FaqItems/Faqs";
import ConnectWithUs from "./_sections/ContactUs/ConnectWithUs";
import Why from "./_sections/WhyChooseGyanplug/Why";
import Mentors from "./_sections/Mentors/Mentors";
import MembershipCard from "./_sections/MembershipCard/MembershipCard";
import Stories from "./_sections/Stories/Stories";

export default function HomePage() {
  return (
    <div className="h-auto w-screen flex flex-col bg-[#F5FBFF]">
      <Home />
      <Why/>
      <MembershipCard/>
      <Mentors/>
      <Stories/>
      <Faqs/>
      <ConnectWithUs/>
    </div>
  );
}
