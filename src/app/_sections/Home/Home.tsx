import Navbar from "@/components/Navbar/Navbar";
import LogoCarousel from "@/components/Carousels/LogoCarousel/LogoCarousel";
import ButtonComponent from "@/components/ButtonComponent/Button";
import Image from "next/image";
import { folito } from "@/app/fonts";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen h-auto w-screen flex flex-col items-center relative overflow-hidden">
        <div className="h-full w-full lg:w-[1000px] xl:w-[1200px] 2xl:w-[1488px] flex flex-col lg:flex-row items-center lg:items-start gap-2.5 lg:gap-20 px-5 lg:px-0 z-10 justify-between">
          <div className="z-10 w-full lg:w-[400px] xl:w-[654px] h-full flex-col justify-start items-start gap-2.5 md:gap-[55px] lg:gap-[24px] xl:gap-[55px] inline-flex  mt-[94px] lg:mt-[180px] xl:mt-[290px] lg:self-end xl:self-auto">
            <div className="w-full h-full flex-col justify-start items-start gap-6 md:gap-[54px] lg:gap-6 xl:gap-[54px] inline-flex">
              <div className="w-full h-full flex-col justify-start items-start md:gap-[19.84px] gap-4 inline-flex">
                <div className={`h-auto w-full font-black ${folito.className} md:text-[40px] text-[24px] md:leading-[60px] leading-8 text-[#0C356A]`}>
                  Shape Your Future by Connecting with{" "}
                  <span className="text-[#14A4E1] whitespace-nowrap">
                    Top Counselors
                  </span>{" "}
                  Across India
                </div>
                <div className="h-[auto] w-full text-[#0C356A99] md:text-[24px] text-[14px] md:leading-9 leading-5 font-medium">
                  Book and Meet Top 1.6% Education Counselors from All Over
                  India for Free to Find Your Dream College!
                </div>
              </div>
              <ButtonComponent
                content="Book Your Free Session!"
                type="primary"
              />
            </div>
            <div className="w-full h-auto inline-flex  gap-3 md:gap-6 flex-col">
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
            className="rounded-[36px] lg:mt-[233px] lg:max-w-[52%] xl:max-w-[45%] lg:self-end h-auto xl:w-auto bg-[#ECF8FE]"
          />
        </div>
      </div>
    </>
  );
}
