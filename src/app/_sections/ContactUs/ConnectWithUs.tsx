import { folito } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NotifyMe from "@/components/NotifyMe/NotifyMe";
import Image from "next/image";

export default function ConnectWithUs() {
  return (
    <div className="bg-[#041020] pt-28 w-[100%]">
      <div
        className={`flex flex-row justify-between px-10 ${folito.className} mb-[4vw]`}
      >
        <div className="relative">
          <Image
            src="/images/person1.png"
            width={107}
            height={107}
            alt="*"
            className="relative -top-7 left-48"
          />
          <Image
            src="/images/person2.png"
            width={111}
            height={111}
            alt="*"
            className="relative -top-0 left-[22rem]"
          />
          <Image
            src="/images/person3.png"
            width={165}
            height={165}
            alt="*"
            className="relative -top-7 left-[6rem]"
          />
          <Image
            src="/images/person4.png"
            width={87}
            height={87}
            alt="*"
            className="relative -top-16 left-[24rem]"
          />
        </div>
        <div className="flex flex-col min-w-[650px] z-10">
          <div className="flex flex-col tracking-tight w-[100%]">
            <div className="text-center text-[5.4vw] leading-[133%] font-[800] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              Soon Mentor Booking at
            </div>
            <div className="text-center text-[5.4vw] leading-[133%] font-[800] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              Your Fingertips&#33;
            </div>
          </div>
          <div className="text-center leading-[140%] text-[2.7vw] text-[rgba(253,253,253,0.60)] pt-6 font-medium tracking-tight w-[100%]">
            Sign up now to recieve a notification <br /> when our app goes live!
          </div>
          <div className="pt-20 w-[100%]">
            <NotifyMe />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/person5.png"
            width={86}
            height={86}
            alt="*"
            className="relative right-0 -top-4"
          />
          <Image
            src="/images/person6.png"
            width={139}
            height={139}
            alt="*"
            className="relative right-[17rem] -top-4"
          />
          <Image
            src="/images/person7.png"
            width={113}
            height={113}
            alt="*"
            className="relative right-[8rem] -top-4"
          />
          <Image
            src="/images/person8.png"
            width={102}
            height={102}
            alt="*"
            className="relative right-[24rem] -top-4"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
