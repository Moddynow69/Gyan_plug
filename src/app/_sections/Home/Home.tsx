import Navbar from "@/components/Navbar/Navbar";
import LogoCarousel from "@/components/Carousels/LogoCarousel/LogoCarousel";
import ButtonComponent from "@/components/ButtonComponent/Button";
import Image from "next/image";
import { folito } from "@/app/fonts";
export default function Home() {
  return (
    <div className="min-h-screen h-auto w-screen flex flex-col relative overflow-hidden">
      <Navbar />
      <div className="h-full w-full flex flex-col lg:flex-row lg:items-start items-center  2xl:pl-[120px] xl:pl-10 pl-5 2xl:pr-[131px] xl:pr-10 pr-5 z-10 justify-between">
        <div className="z-10 md:w-[654px] w-full md:h-[588.84px] flex-col justify-start items-start md:gap-[55px] gap-6 inline-flex lg:mt-[290px] mt-[200px]">
          <div className="w-full h-auto flex-col justify-start items-start md:gap-[54px] gap-6 inline-flex">
            <div className="w-full h-full flex-col justify-start items-start md:gap-[19.84px] gap-4 inline-flex">
              <div className="h-auto w-full font-black font-folito md:text-[40px] text-[24px] md:leading-[60px] leading-8 text-[#0C356A]">
                Shape Your Future by Connecting with{" "}
                <span className="text-[#14A4E1] whitespace-nowrap">
                  Top Counselors
                </span>{" "}
                Across India
              </div>
              <div className="h-[auto] w-full text-[#0C356A99] md:text-[24px] text-[14px] md:leading-9 leading-5 font-medium">
                Book and Meet Top 1.6% Education Counselors from All Over India
                for Free to Find Your Dream College!
              </div>
            </div>
            <ButtonComponent content="Book Your Free Session!" type="primary" />
          </div>
          <div className="w-full h-auto inline-flex md:gap-6 gap3 flex-col">
            <div className="md:text-[#002324] text-[#00232499] md:text-[24px] text-[14px] md:leading-9 leading-[18.23px] font-bold">
              Connecting Students for 100+ Top Universities
            </div>
            <LogoCarousel />
          </div>
        </div>
        <Image
          src={"/images/Map.gif"}
          height={768}
          width={679}
          alt=""
          unoptimized
          className="lg:mt-[233px] lg:w-auto lg:h-auto w-full h-auto lg:absolute xl:relative lg:right-0 lg:bottom-0 z-0"
        />
      </div>
    </div>
  );
}
