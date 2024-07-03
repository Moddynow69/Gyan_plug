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
      className="px-4 py-3 justify-center items-center gap-2 flex bg-transparent hover:bg-[#65A6FA1A] cursor-pointer rounded-xl"
    >
      <div className="text-center text-emerald-950 text-xl font-medium font-['DM Sans']">
        {title}
      </div>
    </Link>
  );
}
