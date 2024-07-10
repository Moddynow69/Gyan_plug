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
      className="overflow-y-hidden h-[435px] md:h-[600px] lg:h-[350px] xl:h-[430px] w-full flex flex-col lg:flex-row rounded-3xl py-6 lg:py-0 px-6 lg:px-8 xl:px-16 justify-start lg:items-end gap-6 lg:gap-[72px] sticky border-2 border-solid border-[#FDFDFD] shadow-[0px_18px_39px_0px_#04719F1A,0px_71px_71px_0px_#04719F17,0px_159px_95px_0px_#04719F0D,0px_283px_113px_0px_#04719F03,0px_441px_124px_0px_#04719F00]"
      style={{
        top: top,
        backgroundColor: bgColor,
        position: '-webkit-sticky',
      }}
    >
      <div className="lg:h-[260px] xl:h-[340px] lg:w-[616px] mb-9 flex flex-col justify-between gap-4 lg:gap-0">
        <div className="h-auto flex flex-col justify-between gap-4 lg:gap-0">
          <div
            className=" font-normal text-[24px] leading-[31.25px]"
            style={{
              color: textColor,
            }}
          >
            Step {idx}
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="font-black text-[20px] md:text-[36px] 2xl:text-[48px] leading-6 md:leading-10 2xl:leading-[57.61px] text-[#F5FBFF]">
              {title}
            </div>
            <div className="font-normal text-[14px] md:text-[24px] 2xl:text-[32px] leading-[19.6px] md:leading-8 2xl:leading-[44.8px] text-[#F5FBFF99]">
              {description}
            </div>
          </div>
        </div>
        <div className="font-normal text-[12px] md:text-[24px] leading-[15.62px] md:leading-[31.25px] text-[#FFFFFF99]">
          {idx}/4
        </div>
      </div>
      <div className="lg:w-auto lg:h-auto flex justify-center items-stretch">
        <Image
          src={image}
          width={672}
          height={476}
          alt=""
          className=" w-[302px] md:w-full lg:w-[500px] xl:w-auto xl:h-auto shadow-[-7px_4px_18px_0px_#000000A6,-27px_18px_32px_0px_#0000008F,-60px_40px_43px_0px_#00000054,-107px_72px_51px_0px_#0000001A,-167px_112px_56px_0px_#00000003]"
        />
      </div>
    </div>
  );
}
