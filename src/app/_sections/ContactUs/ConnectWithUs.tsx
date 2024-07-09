import { folito } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NotifyMe from "@/components/NotifyMe/NotifyMe";
import Image from "next/image";

export default function ConnectWithUs() {
  return (
    <div className="bg-[#041020] pt-12 lg:pt-28 w-[100%]">
      <div
        className={`flex flex-row justify-between px-1 md:px-10 ${folito.className} mb-[10px] lg:mb-[20px]`}
      >
        <div className="relative">
          <Image
            src="/images/person1.png"
            width={107}
            height={107}
            alt="*"
            className="hidden lg:block relative top-7 lg:w-auto lg:-top-7 -left-[2px] lg:left-48"
          />
          <Image
            src="/images/person2.png"
            width={111}
            height={111}
            alt="*"
            className="hidden lg:block relative lg:-top-0 lg:left-[22rem]"
          />
          <Image
            src="/images/person3.png"
            width={165}
            height={165}
            alt="*"
            className="hidden lg:block relative lg:-top-7 lg:left-[6rem]"
          />
          <Image
            src="/images/person4.png"
            width={87}
            height={87}
            alt="*"
            className="hidden lg:block relative lg:-top-16 lg:left-[24rem]"
          />
        </div>
        <div className="flex flex-col lg:min-w-[650px] z-10 mb-10">
          <div className="flex flex-col tracking-tight w-[100%]">
            <div className="text-center text-[1rem] sm:text-[2.5rem] leading-[133%] font-[800] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              Soon Mentor Booking at
            </div>
            <div className="text-center text-[1rem] sm:text-[2.5rem] leading-[133%] font-[800] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              Your Fingertips&#33;
            </div>
          </div>
          <div className="text-center leading-[140%] text-[0.7rem] lg:text-[1.4rem] text-[rgba(253,253,253,0.60)] pt-1 lg:pt-6 font-medium tracking-tighter w-[100%]">
            Sign up now to recieve a notification <br /> when our app goes live!
          </div>
          <div className="pt-2 lg:pt-20 w-[100%]">
            <NotifyMe />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/person5.png"
            width={86}
            height={86}
            alt="*"
            className="hidden lg:block relative lg:right-0 lg:-top-4"
          />
          <Image
            src="/images/person6.png"
            width={139}
            height={139}
            alt="*"
            className="hidden lg:block relative lg:right-[17rem] lg:-top-4"
          />
          <Image
            src="/images/person7.png"
            width={113}
            height={113}
            alt="*"
            className="hidden lg:block relative lg:right-[8rem] lg:-top-4"
          />
          <Image
            src="/images/person8.png"
            width={102}
            height={102}
            alt="*"
            className="hidden lg:block relative lg:right-[24rem] lg:-top-4"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
