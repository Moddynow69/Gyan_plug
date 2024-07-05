import Footer from "@/components/Footer/Footer";
import NotifyMe from "@/components/NotifyMe/NotifyMe";
import Image from "next/image";

export default function ConnectWithUs() {
  return (
    <div className="bg-[#041020] pt-28">
      <div className="flex flex-row justify-between px-10 font-folito">
        <div className="relative">
          <Image
            src="images/person1.svg"
            width={107}
            height={107}
            alt="*"
            className="relative shadow-lg shadow-cyan-500/50 -top-7 left-52"
          />
          <Image
            src="images/person2.svg"
            width={111}
            height={111}
            alt="*"
            className="relative shadow-lg shadow-cyan-500/50 -top-0 left-[23rem]"
          />
          <Image
            src="images/person3.svg"
            width={165}
            height={165}
            alt="*"
            className="relative shadow-lg shadow-cyan-500/50 -top-7 left-[7rem]"
          />
          <Image
            src="images/person4.svg"
            width={87}
            height={87}
            alt="*"
            className="relative shadow-lg shadow-cyan-500/50 -top-16 left-[27rem]"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col tracking-tighter">
            <div className="text-center font-folito text-[3.4rem] leading-[133%] font-[700] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              Soon Mentor Booking at
            </div>
            <div className="text-center font-folito text-[3.4rem] leading-[133%] font-[700] bg-gradient-to-r from-[#F5FBFF] to-[#58BDFE] bg-clip-text text-transparent">
              Your Fingertips&#33;
            </div>
          </div>
          <div className="text-center leading-[140%] text-[1.5rem] text-[rgba(253,253,253,0.60)] pt-6 font-medium tracking-tight">
            Sign up now to recieve a notification <br /> when our app goes live!
          </div>
          <div className="pt-20">
            <NotifyMe />
          </div>
        </div>
        <div className="relative">
          <Image
            src="images/person5.svg"
            width={86}
            height={86}
            alt="*"
            className="relative shadow-lg shadow-cyan-500/50 right-0 -top-4"
          />
          <Image
            src="images/person6.svg"
            width={139}
            height={139}
            alt="*"
            className="relative shadow-lg shadow-cyan-500/50 right-[17rem] -top-4"
          />
          <Image
            src="images/person7.svg"
            width={113}
            height={113}
            alt="*"
            className="relative shadow-lg shadow-cyan-500/50 right-[8rem] -top-4"
          />
          <Image
            src="images/person8.svg"
            width={102}
            height={102}
            alt="*"
            className="relative shadow-lg shadow-cyan-500/50 right-[24rem] -top-4"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
