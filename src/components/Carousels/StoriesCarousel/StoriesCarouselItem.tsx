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
    <div className="snap-center w-[755.2px] h-[355.2px] bg-[#FDFDFD] p-[33.6px] rounded-3xl  shadow-[0px_18px_39px_0px_#04719F1A,0px_71px_71px_0px_#04719F17,0px_159px_95px_0px_#04719F0D,0px_283px_113px_0px_#04719F03,0px_441px_124px_0px_#04719F00] relative flex flex-col justify-between gap-[19.2px]">
      <div className="text-[#0C356ACC] text-[16px] leading-[22.4px] font-normal w-full h-full">
        Navigating the college admission process seemed daunting until I found
        Gyanplug. Their counselors provided personalized guidance that not only
        helped me get into my dream college but also eased my anxiety. I can't
        thank them enough for making this journey smoother and more successful.
      </div>
      <div className="flex gap-[19.2px]">
        <Image
          src={story.image}
          alt={story.name}
          width={57.6}
          height={57.6}
          className="rounded-full"
        />
        <div>
          <div className="text-[#0C356A] text-[22.4px] leading-[31.36px] font-bold">
            {story.name}
          </div>
          <div className="text-[#0C356ACC] text-[16px] leading-[22.4px] font-normal">{story.location}</div>
        </div>
      </div>
    </div>
  );
}
