import Image from "next/image";
export default function LogoCarouselItem({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="h-[109px] w-[109px] flex justify-center items-center rounded-xl border-[0.43px] border-[#14A4E166]">
      <Image src={src} alt={alt} height={82} width={82} />
    </div>
  );
}
