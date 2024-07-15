import Link from "next/link";
import { dmSans } from "@/app/fonts";

export default function NavbarItem({
  title,
  link,
  setMenuopen,
}: {
  title: string;
  link: string;
  setMenuopen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Link
      href={link}
      onClick={() => setMenuopen && setMenuopen(false)}
      className="xl:px-1 2xl:px-3 px-0.5 xl:py-3 py-1 lg:justify-center items-center flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
    >
      <div
        className={`${dmSans.className} text-center lg:text-[#002324] text-base xl:text-xl font-medium whitespace-nowrap `}
      >
        {title}
      </div>
    </Link>
  );
}
