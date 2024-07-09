import Navbar from "@/components/Navbar/Navbar";
import LogoCarousel from "@/components/Carousels/LogoCarousel/LogoCarousel";
import ButtonComponent from "@/components/ButtonComponent/Button";
import Image from "next/image";
import { folito } from "@/app/fonts";
export default function Home() {
  return (
    <div className="min-h-screen h-auto w-screen flex flex-col relative overflow-hidden">
        <Navbar />
      <Image src={'/images/Map.gif'} height={768} width={679} alt="" unoptimized className="absolute right-[131px] bottom-[116px] z-0 max-w-[50%] h-auto"/>
      <div className="h-full w-full flex justify-start pl-[120px] pt-[290px] z-10">
        <div className="w-[654px] h-[588.84px] flex-col justify-start items-start gap-[55px] inline-flex">
         <div className="w-full h-[364.84px] flex-col justify-start items-start gap-[54px] inline-flex">
            <div className="w-full h-full flex-col justify-start items-start gap-[19.84px] inline-flex">
                    <div className={`h-auto w-full font-black ${folito.className} text-[40px] leading-[60px] text-[#0C356A]`}>
                Shape Your Future by Connecting with <span className="text-[#14A4E1]">Top Counselors</span> Across India
                </div>
                <div className="h-[auto] w-full text-[#0C356A99] text-[24px] leading-9">Book and Meet Top 1.6% Education Counselors from All Over India for Free to Find Your Dream College!</div>
            </div>
            <ButtonComponent content="Book Your Free Session!" type="primary" />
         </div>
         <div className="w-full h-auto inline-flex gap-6 flex-col">
            <div className="text-[#002324] text-[24px] leading-9 font-bold">Connecting Students for 100+ Top Universities</div>
            <LogoCarousel/>
         </div>
        </div>
      </div>
    </div>
  );
}