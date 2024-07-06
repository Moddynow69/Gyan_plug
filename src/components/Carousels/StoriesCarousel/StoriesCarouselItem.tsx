import Image from "next/image";

type StoriesCarouselTItemProps = {
  story: {
    topRated: boolean;
    name: string;
    location: string;
    experience: string;
    admissions: string;
    image: string;
  };
};
export default function StoriesCarouselTItem({
  story,
}: StoriesCarouselTItemProps) {
  return (
    <div className="w-[448px] h-[545px] bg-gradient-to-b from-[#B3E4FACC] to-[#B3E4FA66] p-[1.6px] rounded-3xl  shadow-[0px_11.52px_24.96px_0px_#04719F1A,0px_45.44px_45.44px_0px_#04719F17,0px_101.76px_60.8px_0px_#04719F0D,0px_181.12px_72.32px_0px_#04719F03,0px_282.24px_79.36px_0px_#04719F00] relative">
      {story.topRated && (
        <div className="absolute top-[43.2px] left-[43.2px] flex gap-[6.4px] justify-center items-center w-[133.8px] h-[41.6px]">
          <Image src={"/icons/star.svg"} width={28} height={28} alt="star" />
          <div className="font-medium text-[16px] leading-[19.2px] text-[#000000]">Top Rated</div>
        </div>
      )}
      <div className="h-full w-full bg-[#FDFDFD] rounded-3xl flex flex-col items-center justify-center gap-6">
        <Image
          src={story.image}
          alt={story.name}
          height={320}
          width={400}
          className="w-[400px] h-[320px] rounded-2xl"
        />
        <div className="flex flex-col justify-between gap-[19.2px] min-w-[384px] h-[153px]">
          <div className="w-full h-full flex flex-col justify-between">
            <h1 className="w-full h-[29px] text-[24px] leading-[28.8px] font-black text-[#0C356A]">
              {story.name}
            </h1>
            <div className="flex gap-[6.4px]">
              <Image
                src={"/images/logo.svg"}
                alt=""
                height={22.4}
                width={22.4}
              />
              <h1 className="w-full h-[22px] text-[18px] leading-[21.6px] font-medium text-[#0C356A]">
                {story.location}
              </h1>
            </div>
          </div>
          <div className="w-full h-[72px] flex gap-[19.2px]">
            <div className="h-[72px] w-full bg-[#E3F5FD] rounded-[6.4px] py-[9.6px] px-[12.8px] flex flex-col gap-[9.6px]">
              <h1 className="w-fit h-[22px] text-[18px] leading-[21.6px] font-medium text-[#0C356A99]">
                Experience
              </h1>
              <h1 className="w-fit h-[22px] text-[18px] leading-[21.6px] font-bold text-[#0C356A]">
                {story.experience}
              </h1>
            </div>
            <div className="h-[72px] w-full bg-[#E3F5FD] rounded-[6.4px] py-[9.6px] px-[12.8px] flex flex-col gap-[9.6px]">
              <h1 className="w-fit h-[22px] text-[18px] leading-[21.6px] font-medium text-[#0C356A99]">
                Admissions
              </h1>
              <h1 className="w-fit h-[22px] text-[18px] leading-[21.6px] font-bold text-[#0C356A]">
                {story.experience}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
