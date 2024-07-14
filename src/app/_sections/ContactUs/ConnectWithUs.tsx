import { folito } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NotifyMe from "@/components/NotifyMe/NotifyMe";
import Image from "next/image";
import contactus from "@/constants/ContactUs/contactUs";

export default function ConnectWithUs() {
  return (
    <div className="bg-[#041020] pt-12 lg:pt-28 w-[100%] snap-start snap-always">
      <div
        className={`flex flex-row justify-center lg:justify-between px-1 md:px-10 ${folito.className} mb-[10px] lg:mb-[20px]`}
      >
        <div className="hidden lg:block w-[320px] lg:w-auto absolute lg:static">
          {contactus.images.map(
            (image, index) =>
              index < 4 && (
                <Image
                  key={index}
                  src={image.src}
                  width={image.size[0]}
                  height={image.size[1]}
                  alt="*"
                  className={image.className}
                />
              )
          )}
        </div>
        <div className="flex flex-col lg:min-w-[650px] z-10 mb-10">
          <div className="flex flex-col tracking-tight w-[100%]">
            <div className="text-center text-[1rem] sm:text-[2.5rem] leading-[133%] font-[800] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              {contactus.line1}
            </div>
            <div className="text-center text-[1rem] sm:text-[2.5rem] leading-[133%] font-[800] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              {contactus.line2}&#33;
            </div>
          </div>
          <div className="text-center leading-[140%] text-[0.7rem] lg:text-[1.4rem] text-[rgba(253,253,253,0.60)] pt-1 lg:pt-6 font-medium tracking-tighter w-[100%]">
            {contactus.descp1} <br /> {contactus.descp2}
          </div>
          <div className="pt-2 lg:pt-20 w-[100%]">
            <NotifyMe />
          </div>
        </div>
        <div className="hidden lg:block w-[320px]  lg:w-auto absolute lg:static overflow-x-clip sm:overflow-visible">
          {contactus.images.map(
            (image, index) =>
              index >= 4 && (
                <Image
                  key={index}
                  src={image.src}
                  width={image.size[0]}
                  height={image.size[1]}
                  alt="*"
                  className={image.className}
                />
              )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
