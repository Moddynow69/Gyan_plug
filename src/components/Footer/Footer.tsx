import Image from "next/image";
import ButtonComponent from "../ButtonComponent/Button";
import { folito } from "@/app/fonts";
import { FooterData } from "@/constants/Footer/Foooter";

export default function Footer() {
  return (
    <div>
      <div className="upper flex flex-row justify-between pl-32 pr-32 pt-14 pb-14 bg-[#0C356A] rounded-t-[2.6rem]">
        <div className="gyanplug">
          <div className="flex justify-center items-center absolute">
            <Image
              src={FooterData.logo.src}
              width={FooterData.logo.width}
              height={FooterData.logo.height}
              alt={FooterData.logo.alt}
            />
          </div>
          <div
            className={`relative top-[5.5rem] tracking-tight text-[#FDFDFD] text-[1.25rem] font-[400] leading-[30px] break-words ${folito.className}`}
          >
            Wisdom Rd, Sco 142 Nirman Point
            <br />
            +1283871239190213021
          </div>
          <div className="relative top-[7rem]">
            <ButtonComponent type="tertiary" content="Book Session" />
          </div>
        </div>
        <div className={`links ${folito.className} flex flex-row gap-[5rem]`}>
          <div className="row flex flex-col gap-[0.75rem]">
            <div className="heading">
              <span className="text-[#FDFDFD] text-[1.5rem] font-[700] leading-[37.16px] break-words">
                Company
              </span>
            </div>
            <div className="subheading flex flex-col gap-[0.75rem]">
              <span className="text-[#FDFDFD] text-[1.25rem] tracking-tight font-[300] break-words">
                Book Session
              </span>
              <span className="text-[#FDFDFD] text-[1.25rem] tracking-tight font-[300] break-words">
                Why Gyanplug?
              </span>
              <span className="text-[#FDFDFD] text-[1.25rem] tracking-tight font-[300] break-words">
                How it works?
              </span>
              <span className="text-[#FDFDFD] text-[1.25rem] tracking-tight font-[300] break-words">
                Testimonials
              </span>
            </div>
          </div>
          <div className="row flex flex-col gap-[0.75rem]">
            <div className="heading">
              <span className="text-[#FDFDFD] text-[1.5rem] font-[700] leading-[37.16px] break-words">
                Legal
              </span>
            </div>
            <div className="subheading flex flex-col gap-[0.75rem]">
              <span className="text-[#FDFDFD] text-[1.25rem] tracking-tight font-[300] break-words">
                Terms & Conditions
              </span>
              <span className="text-[#FDFDFD] text-[1.25rem] tracking-tight font-[300] break-words">
                Privacy policy
              </span>
            </div>
          </div>
        </div>
        <div className="logos">
          <div className="logoscontainer flex flex-row gap-4">
            {FooterData.icons.map((image, index) => (
              <Image
                key={index}
                className="cursor-pointer"
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
        className={`lower ${folito.className} font-medium text-[1.5rem] break-words text-[#ECF8FE] text-center pt-[1.5rem] pb-[1.5rem] bg-[#001838]`}
      >
        &#169; 2024 Gyaanplug. All rights reserved.
      </div>
    </div>
  );
}
