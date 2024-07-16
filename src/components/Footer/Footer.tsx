import Image from "next/image";
import ButtonComponent from "../ButtonComponent/Button";
import { folito } from "@/app/fonts";
import { FooterData } from "@/constants/Footer/Foooter";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="upper flex flex-col md:flex-row justify-between px-4 lg:px-[48px] xl:px-[80px] py-8 lg:py-14 bg-[#0C356A] rounded-t-[12.8px] lg:rounded-t-[41px]">
        <div className="gyanplug flex flex-col gap-[14.4px] lg:gap-[25.6px] mb-5 lg:mb-0">
          <div className="flex justify-start items-center">
            <Image
              src={FooterData.logo.src}
              width={FooterData.logo.width}
              height={FooterData.logo.height}
              alt={FooterData.logo.alt}
              className="w-[128px] lg:w-auto"
            />
          </div>
          <div
            className={`tracking-tight text-[#FDFDFD] text-[11.2px] lg:text-[17.6px] font-[400] lg:leading-[32px] break-words ${folito.className}`}
          >
            {FooterData.details.address}
            <br />
            {FooterData.details.phone}
          </div>
          <div className="">
            <ButtonComponent type="tertiary" content="Book Session" />
          </div>
        </div>
        <div
          className={`links ${folito.className} flex flex-row gap-[27.2px] justify-between md:justify-start xl:justify-between lg:gap-[16px] xl:gap-[52.8px]`}
        >
          {FooterData.links.map((link, index) => (
            <div className="flex flex-col gap-[6.4px] lg:gap-[6.4px] xl:gap-[12px]">
              <div className="heading">
                <span className="text-[#FDFDFD] text-[19.2px] lg:text-[23.2px] font-[700] leading-[37.16px] break-words">
                  {link.heading}
                </span>
              </div>
              <div className="subheading flex flex-col gap-[4px] lg:gap-[4.8px] xl:gap-[12px]">
                {link.subheading.map((sub, index) => (
                  <Link
                    href={sub.link}
                    className="text-[#FDFDFD] text-[12.8px] lg:text-[17.6px] xl:text-[20.8px] max-lg: tracking-tight font-[100] lg:font-[300] break-words"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="logos mt-6 lg:mt-4 xl:mt-8">
          <div className="logoscontainer flex flex-row gap-4">
            {FooterData.icons.map((image, index) => (
              <Link
                href={image.href}
                className="h-fit w-fit rounded-full"
                target="_blank"
              >
                <Image
                  key={index}
                  className="cursor-pointer w-10 lg:w-auto"
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  src={image.src}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`lower ${folito.className} font-medium text-[11.2px] lg:text-[23.2px] break-words text-[#ECF8FE] text-center py-[16px] lg:py-[24px] bg-[#001838]`}
      >
        &#169; {FooterData.details.copyRight}
      </div>
    </div>
  );
}
