import { Props } from "next/script";

export default function Heading({content}: Props) {
  return (
    <div className="text-center font-folito text-[54px] font-black leading-[60px] bg-clip-text text-transparent bg-gradient-to-r from-[#041020] to-[#0174BE]">
        {content}
    </div>
  );
}
