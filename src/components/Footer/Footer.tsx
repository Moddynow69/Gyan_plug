import Image from "next/image";
import ButtonComponent from "../ButtonComponent/Button";
import { folito } from "@/app/fonts";
import { FooterData } from "@/constants/Footer/Foooter";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mb-20 md:mb-0">
      <div className="upper flex flex-col gap-6 md:gap-[54px] justify-between px-5 lg:px-[48px] xl:px-[80px] 2xl:px-[120px] pb-3 lg:pb-14 pt-9 lg:pt-[54px] bg-[#0C356A] rounded-t-[12.8px] lg:rounded-t-[41px]">
        <div className="flex justify-start items-center w-full lg:justify-center lg:flex-col gap-[30px]">
          <Image
            src={FooterData.logo.src}
            width={FooterData.logo.width}
            height={FooterData.logo.height}
            alt={FooterData.logo.alt}
            className="w-[228px] lg:w-[250px] -ml-6"
          />
          <hr className="hidden lg:block w-full h-0 border-t-[0.5px] border-[#FFFFFF99]" />
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <div className="gyanplug flex flex-col gap-[14.4px] lg:gap-[25.6px] mb-5 lg:mb-0 lg:max-w-[350px]">
            <div
              className={`tracking-tight text-[#FDFDFD] lg:text-[17.6px] lg:leading-[32px] break-words ${folito.className} flex flex-col gap-[24px]`}
            >
              {FooterData.reachus.map((link, index) => (
                <div
                  className="flex flex-col gap-[6.4px] lg:gap-[6.4px] xl:gap-[12px]"
                  key={index}
                >
                  <div className="heading">
                    <span className="text-[#FDFDFD] text-[21px] lg:text-[23.2px] font-[700] leading-[37.16px] break-words">
                      {link.heading}
                    </span>
                  </div>
                  <div className="subheading flex flex-col gap-[4px] lg:gap-[4.8px] xl:gap-[12px]">
                    {link.subheading.map((sub, index) => (
                      <div
                        className="text-[#FDFDFD] text-[14px] lg:text-[17.6px] xl:text-[20.8px] max-lg: tracking-tight font-[100] lg:font-[300] break-words"
                        key={index}
                      >
                        <span className="font-bold">{sub.highlighted+" "}</span>
                        {sub.title}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="block lg:hidden">
              <ButtonComponent
                type="tertiary"
                content="Book Session"
                link={FooterData.details.link}
              />
            </div>
          </div>
          <div
            className={`links ${folito.className} flex lg:flex-col gap-[27.2px] justify-between md:justify-start lg:gap-[80px] xl:gap-[52.8px]`}
          >
            {FooterData.links.map((link, index) => (
              <div
                className="flex flex-col gap-[6.4px] lg:gap-[6.4px] xl:gap-[12px]"
                key={index}
              >
                <div className="heading">
                  <span className="text-[#FDFDFD] text-[21px] lg:text-[23.2px] font-[700] leading-[37.16px] break-words">
                    {link.heading}
                  </span>
                </div>
                <div className="subheading flex flex-col gap-[4px] lg:gap-[4.8px] xl:gap-[12px]">
                  {link.subheading.map((sub, index) => (
                    <Link
                      href={sub.link}
                      className="text-[#FDFDFD] text-[14px] lg:text-[17.6px] xl:text-[20.8px] max-lg: tracking-tight font-[100] lg:font-[300] break-words"
                      key={index}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="logos mt-6 lg:mt-4 xl:mt-8 flex flex-col gap-[20px]">
            <div className="logoscontainer flex flex-row gap-4 lg:-mt-4 xl:-mt-8">
              {FooterData.icons.map((image, index) => (
                <Link
                  href={image.href}
                  className="h-fit w-fit rounded-full"
                  target="_blank"
                  key={index}
                >
                  <Image
                    className="cursor-pointer w-10 lg:w-auto"
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    src={image.src}
                  />
                </Link>
              ))}
            </div>
            <div className="hidden lg:block">
              <ButtonComponent
                type="tertiary"
                content="Book Session"
                link={FooterData.details.link}
                className="lg:w-[250px]"
              />
            </div>
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
