import Faqs from "../_sections/FaqItems/Faqs";
import ConnectWithUs from "../_sections/ContactUs/ConnectWithUs";
import Partners from "./_section/Partners/Partners";

export default function HomePage() {
  return (
    <div className="h-auto w-screen flex flex-col bg-[#F5FBFF]">
      <Partners/>
      <Faqs/>
      <ConnectWithUs/>
    </div>
  );
}
