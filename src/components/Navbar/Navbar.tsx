import Image from "next/image";
import NavbarItem from "@/components/NavbarItem/NavbarItem";
import NavbarItems from "@/constants/Navbar/Navbar";
import NavbarData from "@/components/Navbar/NavbarData";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-[1488px] h-[98px] px-8 py-4 rounded-2xl shadow border-[0.5px] border-[#E8E8E899] backdrop-blur-[44px] justify-between items-center inline-flex bg-[#ECF8FE]">
      <Link href="/">
        <Image
          src={NavbarData.logo.src}
          alt={NavbarData.logo.alt}
          width={196.96}
          height={65.68}
        />
      </Link>
      <div className="justify-start items-start gap-6 flex">
        {NavbarItems.map((item) => (
          <NavbarItem title={item.title} link={item.link} />
        ))}
      </div>
      <Image
        src="/images/logo.svg"
        alt="Gyan Plug"
        width={196.96}
        height={65.68}
      />
    </div>
  );
}
