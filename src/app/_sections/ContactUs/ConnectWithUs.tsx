import { folito } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NotifyMe from "@/components/NotifyMe/NotifyMe";
import Image from "next/image";
import { ContactUsData } from "@/constants/Footer/Foooter";

export default function ConnectWithUs() {
  return (
    <div className="bg-[#041020] pt-28">
      <div
        className={`flex flex-row justify-between px-10 ${folito.className}`}
      >
        <div className="relative">
          {ContactUsData.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              className={image.className}
            />
          ))}
        </div>
        <div className="flex flex-col min-w-[650px]">
          <div className="flex flex-col tracking-tight w-[100%]">
            <div className="text-center text-[3.4rem] leading-[133%] font-[800] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              Soon Mentor Booking at
            </div>
            <div className="text-center text-[3.4rem] leading-[133%] font-[800] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              Your Fingertips&#33;
            </div>
          </div>
          <div className="text-center leading-[140%] text-[1.5rem] text-[rgba(253,253,253,0.60)] pt-6 font-medium tracking-tight w-[100%]">
            Sign up now to recieve a notification <br /> when our app goes live!
          </div>
          <div className="pt-20 w-[100%]">
            <NotifyMe />
          </div>
        </div>
        <div className="relative">
          {ContactUsData.slice(4).map((image, index) => (
            <Image
              key={index + 4}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              className={image.className}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
