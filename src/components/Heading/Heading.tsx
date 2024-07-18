import { folito } from "@/app/fonts";
import React from "react";

type Props = {
  content: string;
  from: string;
  to: string;
  align?: "start" | "center" | "end";
  className?: string;
};

export default function Heading({ content, from, to,align="center",className }: Props) {
  return (
    <div
      className={`w-full lg:auto text-${align} ${className} ${folito.className} text-[24px] lg:text-[54px] font-black leading-[33.6px] lg:leading-[60px] `}
    >
      <span
        className=" bg-clip-text text-transparent whitespace-nowrap"
        style={{
          backgroundImage: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`,
        }}
      >
        {content}
      </span>
    </div>
  );
}
