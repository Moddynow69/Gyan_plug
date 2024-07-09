import Image from "next/image";

export default function HowCard({
  top,
  bgColor,
  textColor,
  idx,
  title,
  description,
  image,
}: {
  top: string;
  bgColor: string;
  textColor: string;
  idx: number;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div
      className="overflow-y-hidden xl:h-[430px] lg:h-[350px] h-auto w-full flex lg:flex-row rounded-3xl xl:px-16 px-8 justify-start items-end gap-[72px] sticky border-2 border-solid shadow-[0px_18px_39px_0px_#04719F1A,0px_71px_71px_0px_#04719F17,0px_159px_95px_0px_#04719F0D,0px_283px_113px_0px_#04719F03,0px_441px_124px_0px_#04719F00]"
      style={{
        top: top,
        backgroundColor: bgColor,
        border: "2px solid",
        borderColor: "#FDFDFD",
      }}
    >
      <div className="xl:h-[340px] lg:h-[260px] w-[616px] mb-9 flex flex-col justify-between">
        <div className="h-auto flex flex-col justify-between">
          <div
            className=" font-normal text-[24px] leading-[31.25px]"
            style={{
              color: textColor,
            }}
          >
            Step {idx}
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="font-black 2xl:text-[48px] text-[36px] 2xl:leading-[57.61px] leading-10 text-[#F5FBFF]">
                {title}
            </div>
            <div className="font-normal 2xl:text-[32px] text-[24px] 2xl:leading-[44.8px] leading-8 text-[#F5FBFF99]">
                {description}
            </div>
          </div>
        </div>
        <div className="font-normal text-[24px] leading-[31.25px] text-[#FFFFFF99]">
          {idx}/4
        </div>
      </div>
      <Image
        src={image}
        width={672}
        height={476}
        alt=""
        className="xl:w-auto xl:h-auto lg:w-[500px] shadow-[-7px_4px_18px_0px_#000000A6,-27px_18px_32px_0px_#0000008F,-60px_40px_43px_0px_#00000054,-107px_72px_51px_0px_#0000001A,-167px_112px_56px_0px_#00000003]"
      />
    </div>
  );
}
