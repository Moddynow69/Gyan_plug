import Image from "next/image";
import NavbarItem from "@/components/NavbarItem/NavbarItem";
import NavbarItems from "@/constants/Navbar/Navbar";
import NavbarData from "@/constants/Navbar/NavbarData";
import Link from "next/link";
import ButtonComponent from "../ButtonComponent/Button";

export default function Navbar() {
  return (
    <div className="z-50 absolute left-1/2 translate-x-[-50%] top-12 w-[1000px] xl:w-[1200px] 2xl:w-[1488px] h-[98px] 2xl:px-8 xl:px-4 px-2 py-4 rounded-2xl border-[0.5px] border-[#E8E8E899] backdrop-blur-[44px] justify-between items-center inline-flex bg-[#FFFFFFCC] shadow-[0px_12px_48px_0px_#0067690D]">
      <Link href="/" className="min-w-fit min-h-fit">
        <Image
          src={NavbarData.logo.src}
          alt={NavbarData.logo.alt}
          width={196.96}
          height={65.68}
          className="xl:w-[196.96px] w-[140px] xl:h-[65.68px] h-[46.69px]"
        />
      </Link>
      <div className="justify-start items-start 2xl:gap-6 xl:gap-4 gap-2 flex">
        {NavbarItems.map((item) => (
          <NavbarItem title={item.title} link={item.link} />
        ))}
      </div>
      <ButtonComponent content="Book Session" type="tertiary" />
    </div>
  );
}
