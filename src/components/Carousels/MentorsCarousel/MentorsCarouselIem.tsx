import Image from "next/image";

type MentorsCarouselTItemProps = {
  story: {
    topRated: boolean;
    name: string;
    location: string;
    experience: string;
    admissions: string;
    image: string;
  };
};
export default function MentorsCarouselTItem({
  story,
}: MentorsCarouselTItemProps) {
  return (
    <div className="w-[216px]  md:w-[448px] h-[283.92px] md:h-[545px] bg-gradient-to-b from-[#B3E4FACC] to-[#B3E4FA66] p-[1.6px] rounded-[12px] md:rounded-3xl  shadow-[0px_11.52px_24.96px_0px_#04719F1A,0px_45.44px_45.44px_0px_#04719F17,0px_101.76px_60.8px_0px_#04719F0D,0px_181.12px_72.32px_0px_#04719F03,0px_282.24px_79.36px_0px_#04719F00] relative">
      {story.topRated && (
        <div className="absolute top-[21.29px] md:top-[43.2px] left-[20.47px] md:left-[43.2px] flex gap-[3.1px] md:gap-[6.4px] justify-center items-center w-[65.43px] md:w-[133.8px] h-[20.1px] md:h-[41.6px] bg-[#FDFDFD] rounded-[3.87px] md:rounded-lg shadow-[0px_2.4px_5.6px_0px_#0000001A,0px_10.4px_10.4px_0px_#00000017,0px_22.4px_13.6px_0px_#0000000D,0px_40px_16px_0px_#00000003,0px_62.4px_17.6px_0px_#00000000] ">
          <Image
            src={"/icons/star.svg"}
            width={28}
            height={28}
            alt="star"
            className=" w-[13.94px] h-[13.94px] md:h-auto md:w-auto"
          />
          <div className="font-medium text-[7.75px] md:text-[16px] leading-[9.3px] md:leading-[19.2px] text-[#000000]">
            Top Rated
          </div>
        </div>
      )}
      <div className="h-full w-full bg-[#FDFDFD] rounded-[12px] md:rounded-3xl flex flex-col items-center justify-center gap-6">
        <Image
          src={story.image}
          alt={story.name}
          height={320}
          width={400}
          className="w-[193.65px] md:w-[400px] h-[154.92px] md:h-[320px] rounded-2xl"
        />
        <div className="flex flex-col justify-between gap-3 md:gap-[19.2px] min-w-[185.9px] md:min-w-[384px] h-[93px] md:h-[153px]">
          <div className="w-full h-full flex flex-col justify-between">
            <h1 className="w-full text-[14px] md:text-[24px] leading-[16.8px] md:leading-[28.8px] font-black text-[#0C356A]">
              {story.name}
            </h1>
            <div className="flex gap-[6.4px]">
              <Image
                src={"/icons/location.svg"}
                alt=""
                height={22.4}
                width={22.4}
                className="w-[16px] h-[16px] md:w-[22.4px] md:h-[22.4px]"
              />
              <h1 className="w-full text-[12px] md:text-[18px] leading-[14.4px] md:leading-[21.6px] font-medium text-[#0C356A]">
                {story.location}
              </h1>
            </div>
          </div>
          <div className="w-full h-10 md:h-[72px] flex gap-[19.2px]">
            <div className="h-10 md:h-[72px] w-full bg-[#E3F5FD] rounded-[4px] md:rounded-[6.4px] py-[4px] md:py-[9.6px] px-[6px] md:px-[12.8px] flex flex-col gap-1 md:gap-[9.6px]">
              <h1 className="w-fit text-[12px] md:text-[18px] leading-[14.4px] md:leading-[21.6px] font-medium text-[#0C356A99]">
                Experience
              </h1>
              <h1 className="w-fit text-[12px] md:text-[18px] leading-[14.4px] md:leading-[21.6px] font-bold text-[#0C356A]">
                {story.experience}
              </h1>
            </div>
            <div className="h-10 md:h-[72px] w-full bg-[#E3F5FD] rounded-[4px] md:rounded-[6.4px] py-[4px] md:py-[9.6px] px-[6px] md:px-[12.8px] flex flex-col gap-1 md:gap-[9.6px]">
              <h1 className="w-fit text-[12px] md:text-[18px] leading-[14.4px] md:leading-[21.6px] font-medium text-[#0C356A99]">
                Admissions
              </h1>
              <h1 className="w-fit text-[12px] md:text-[18px] leading-[14.4px] md:leading-[21.6px] font-bold text-[#0C356A]">
                {story.admissions}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
