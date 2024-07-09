import Image from "next/image";
import ButtonComponent from "../ButtonComponent/Button";
import { folito } from "@/app/fonts";
import { FooterData } from "@/constants/Footer/Foooter";

export default function Footer() {
  return (
    <div>
      <div className="upper flex flex-col lg:flex-row justify-between px-4 lg:px-[3rem] xl:px-[5rem] py-8 lg:py-14 bg-[#0C356A] rounded-t-[0.8rem] lg:rounded-t-[2.6rem]">
        <div className="gyanplug flex flex-col gap-[0.9rem] lg:gap-[1.6rem]">
          <div className="flex justify-start items-center">
            <Image
              src={FooterData.logo.src}
              width={FooterData.logo.width}
              height={FooterData.logo.height}
              alt={FooterData.logo.alt}
              className="w-[8rem] lg:w-auto"
            />
          </div>
          <div
            className={`tracking-tight text-[#FDFDFD] text-[0.7rem] lg:text-[1.1rem] font-[400] lg:leading-[2rem] break-words ${folito.className}`}
          >
            Wisdom Rd, Sco 142 Nirman Point
            <br />
            +1283871239190213021
          </div>
          <div className="">
            <ButtonComponent type="tertiary" content="Book Session" />
          </div>
        </div>
        <div
          className={`links ${folito.className} flex flex-row gap-[1.7rem] lg:gap-[1rem] xl:gap-[3.3rem]`}
        >
          <div className="row flex flex-col gap-[0.4rem] lg:gap-[0.4rem] xl:gap-[0.75rem]">
            <div className="heading">
              <span className="text-[#FDFDFD] text-[1.2rem] lg:text-[1.45rem] font-[700] leading-[37.16px] break-words">
                Company
              </span>
            </div>
            <div className="subheading flex flex-col gap-[0.25rem] lg:gap-[0.3rem] xl:gap-[0.75rem]">
              <span className="text-[#FDFDFD] text-[0.8rem] lg:text-[1.1rem] xl:text-[1.3rem] max-lg: tracking-tight font-[100] lg:font-[300] break-words">
                Book Session
              </span>
              <span className="text-[#FDFDFD] text-[0.8rem] lg:text-[1.1rem] xl:text-[1.3rem] max-lg: tracking-tight font-[100] lg:font-[300] break-words">
                Why Gyanplug?
              </span>
              <span className="text-[#FDFDFD] text-[0.8rem] lg:text-[1.1rem] xl:text-[1.3rem] max-lg: tracking-tight font-[100] lg:font-[300] break-words">
                How it works?
              </span>
              <span className="text-[#FDFDFD] text-[0.8rem] lg:text-[1.1rem] xl:text-[1.3rem] max-lg: tracking-tight font-[100] lg:font-[300] break-words">
                Testimonials
              </span>
            </div>
          </div>
          <div className="row flex flex-col gap-[0.4rem] lg:gap-[0.4rem] xl:gap-[0.75rem]">
            <div className="heading">
              <span className="text-[#FDFDFD] text-[1.2rem] lg:text-[1.45rem] font-[700] leading-[37.16px] break-words">
                Legal
              </span>
            </div>
            <div className="subheading flex flex-col gap-[0.25rem] lg:gap-[0.75rem]">
              <span className="text-[#FDFDFD] text-[0.8rem] lg:text-[1.1rem] xl:text-[1.3rem] max-lg: tracking-tight font-[100] lg:font-[300] break-words">
                Terms & Conditions
              </span>
              <span className="text-[#FDFDFD] text-[0.8rem] lg:text-[1.1rem] xl:text-[1.3rem] max-lg: tracking-tight font-[100] lg:font-[300] break-words">
                Privacy policy
              </span>
            </div>
          </div>
        </div>
        <div className="logos mt-2 lg:mt-4 xl:mt-8">
          <div className="logoscontainer flex flex-row gap-4">
            {FooterData.icons.map((image, index) => (
              <Image
                key={index}
                className="cursor-pointer w-10 lg:w-auto"
                width={image.width}
                height={image.height}
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`lower ${folito.className} font-medium text-[0.7rem] lg:text-[1.45rem] break-words text-[#ECF8FE] text-center py-[1rem] lg:py-[1.5rem] bg-[#001838]`}
      >
        &#169; 2024 Gyaanplug. All rights reserved.
      </div>
    </div>
  );
}
