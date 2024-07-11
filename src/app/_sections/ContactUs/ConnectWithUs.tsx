import { folito } from "@/app/fonts";
import Footer from "@/components/Footer/Footer";
import NotifyMe from "@/components/NotifyMe/NotifyMe";
import Image from "next/image";

export default function ConnectWithUs() {
  return (
    <div className="bg-[#041020] pt-12 lg:pt-28 w-[100%]">
      <div
        className={`flex flex-row justify-center lg:justify-between px-1 md:px-10 ${folito.className} mb-[10px] lg:mb-[20px]`}
      >
        <div className="w-[320px] lg:w-auto absolute lg:static">
          <Image
            src="/images/person1.png"
            width={107}
            height={107}
            alt="*"
            className="relative w-[49px] lg:w-[107px] -left-[0.8rem] top-6 lg:-top-2 lg:left-0 xl:-top-6 xl:left-20 2xl:w-auto 2xl:-top-7 2xl:left-48"
          />
          <Image
            src="/images/person2.png"
            width={111}
            height={111}
            alt="*"
            className="hidden lg:block relative lg:left-[4rem] xl:-top-2 xl:left-[13rem] 2xl:-top-0 2xl:left-[22rem]"
          />
          <Image
            src="/images/person3.png"
            width={165}
            height={165}
            alt="*"
            className="w-[38px] lg:w-[165px] left-[5.4rem] -top-[5.8rem] relative lg:-top-4 lg:-left-6 xl:-top-4 xl:left-[1rem] 2xl:-top-7 2xl:left-[6rem]"
          />
          <Image
            src="/images/person4.png"
            width={87}
            height={87}
            alt="*"
            className="hidden lg:block relative lg:-top-9 lg:left-12 xl:-top-8 xl:left-[12rem] 2xl:-top-16 2xl:left-[24rem]"
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
        <div className="w-[320px]  lg:w-auto absolute lg:static overflow-x-clip sm:overflow-visible">
          <Image
            src="/images/person5.png"
            width={86}
            height={86}
            alt="*"
            className="hidden lg:block relative lg:-top-4 lg:-right-12 xl:-top-4 right-0 2xl:right-0 2xl:-top-4"
          />
          <Image
            src="/images/person6.png"
            width={139}
            height={139}
            alt="*"
            className="relative w-[40px] -right-[18rem] top-7 lg:w-[139px] lg:-top-2 lg:right-8 xl:-top-4 xl:right-[10rem] 2xl:right-[17rem] 2xl:-top-4"
          />
          <Image
            src="/images/person7.png"
            width={113}
            height={113}
            alt="*"
            className="relative w-[39px] -right-52 -top-[4.9rem] lg:w-[113px] lg:-top-4 lg:-right-[2rem] 2xl:right-[8rem] 2xl:-top-4"
          />
          <Image
            src="/images/person8.png"
            width={102}
            height={102}
            alt="*"
            className="hidden lg:block relative lg:right-[2rem] xl:right-[10rem] 2xl:right-[24rem] 2xl:-top-4"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
