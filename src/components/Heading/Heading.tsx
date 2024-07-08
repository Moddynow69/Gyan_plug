import React from 'react';

type Props = {
  content: string;
  from: string;
  to: string;
}

export default function Heading({content,from,to}: Props) {
  return (
    <div className="text-center font-folito text-[54px] font-black leading-[60px]">
        <span className=" bg-clip-text text-transparent whitespace-nowrap"
        style={{
          backgroundImage: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`
        }}>{content}</span>
    </div>
  );
}
