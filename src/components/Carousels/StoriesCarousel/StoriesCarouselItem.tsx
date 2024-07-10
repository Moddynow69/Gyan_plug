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
    <div className="snap-center w-[287px] md:w-[755.2px] h-[254.2px] md:h-[355.2px] bg-[#FDFDFD] p-4 md:p-[33.6px] rounded-xl md:rounded-3xl  shadow-[0px_14.4px_31.2px_0px_#04719F1A,0px_56.8px_56.8px_0px_#04719F17,0px_127.2px_76px_0px_#04719F0D,0px_226.4px_90.4px_0px_#04719F03,0px_352.8px_99.2px_0px_#04719F00] md:shadow-[0px_18px_39px_0px_#04719F1A,0px_71px_71px_0px_#04719F17,0px_159px_95px_0px_#04719F0D,0px_283px_113px_0px_#04719F03,0px_441px_124px_0px_#04719F00] relative flex flex-col justify-between gap-3 md:gap-[19.2px] overflow-visible ">
      <div className="text-[#0C356ACC] text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] font-normal w-full h-full">
        Navigating the college admission process seemed daunting until I found
        Gyanplug. Their counselors provided personalized guidance that not only
        helped me get into my dream college but also eased my anxiety. I can&apos;t
        thank them enough for making this journey smoother and more successful.
      </div>
      <div className="flex gap-[19.2px]">
        <Image
          src={story.image}
          alt={story.name}
          width={57.6}
          height={57.6}
          className="rounded-full w-[42px] h-[42px] md:w-[57.6px] md:h-[57.6px]"
        />
        <div>
          <div className="text-[#0C356A] text-[16px] md:text-[22.4px] leading-[22.4px] md:leading-[31.36px] font-bold">
            {story.name}
          </div>
          <div className="text-[#0C356ACC] text-[12px] md:text-[16px] leading-[16.8px] md:leading-[22.4px] font-normal">{story.location}</div>
        </div>
      </div>
    </div>
  );
}
