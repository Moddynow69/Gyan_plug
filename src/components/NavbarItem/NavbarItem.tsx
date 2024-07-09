import Link from "next/link";

export default function NavbarItem({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <Link
      href={link} 
      className="xl:px-2 2xl:px-4 px-0.5 xl:py-3 py-1 lg:justify-center items-center gap-2 flex bg-transparent lg:hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
    >
      <div className="text-center lg:text-[#002324] text-xl font-medium whitespace-nowrap ">
        {title}
      </div>
    </Link>
  );
}
