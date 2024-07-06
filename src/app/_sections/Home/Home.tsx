import Navbar from "@/components/Navbar/Navbar";
import LogoCarousel from "@/components/Carousels/LogoCarousel/LogoCarousel";
import ButtonComponent from "@/components/ButtonComponent/Button";
export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#F5FBFF]">
      <div className=" absolute w-full h-auto flex items-end justify-center">
        <Navbar />
      </div>
      <div className="h-full w-full flex items-center justify-start pl-[120px] ">
        <div className="w-[654px] h-[588.84px] flex-col justify-start items-start gap-[55px] inline-flex">
         <div className="w-full h-full flex-col justify-start items-start gap-[54px] inline-flex">
            <div className="w-full h-full flex-col justify-start items-start gap-[19.84px] inline-flex">
                    <div className="h-auto w-full font-foltio font-black text-[40px] leading-[60px] text-[#0C356A]">
                Shape Your Future by Connecting with <span className="text-[#14A4E1]">Top Counselors</span> Across India
                </div>
                <div className="h-full w-full"></div>
            </div>
            <ButtonComponent content="Book Your Free Session!" type="primary" />
         </div>
         <div className="w-full h-full"></div>
        </div>
      </div>
    </div>
  );
}