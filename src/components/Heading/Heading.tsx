import { Props } from "next/script";

export default function Heading({content}: Props) {
  return (
    <div className="text-center font-folito text-[54px] font-black leading-[60px]">
        <span className="bg-text-gradient bg-clip-text text-transparent">{content}</span>
    </div>
  );
}
