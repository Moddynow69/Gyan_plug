import ConnectWithUs from "../_sections/ContactUs/ConnectWithUs";
import AboutUs from "./_section/AboutUs/AboutUs";

export default function HomePage() {
  return (
    <div className="h-auto w-screen flex flex-col bg-[#F5FBFF]">
      <AboutUs/>
      <ConnectWithUs/>
    </div>
  );
}
