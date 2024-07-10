import Heading from "@/components/Heading/Heading";
import HowCard from "@/components/HowCard/HowCard";
import HowCardData from "@/constants/HowCard/HowCardData";

export default function How() {
  return (
    <div id="how-it-works" className="h-auto lg:h-[1074px] w-screen flex flex-col relative overflow-hidden pt-20 gap-[72px]">
      <Heading content="How It Works" from="#041020" to="#0174BE" />
      <div className="h-[767px] md:h-[1000px] lg:h-[767px] w-full  2xl:px-[120px] xl:px-20 px-10 flex items-start relative overflow-y-scroll pb-4">
        <div className="h-auto w-full  flex flex-col gap-4 lg:gap-[150px] pb-[260px] md:pb-[320px] lg:pb-[343px] xl:pb-[262px]">
          {HowCardData.map((card, index) => (
            <HowCard key={index} {...card} idx={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
