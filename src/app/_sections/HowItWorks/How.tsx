import Heading from "@/components/Heading/Heading";
import HowCard from "@/components/HowCard/HowCard";
import HowCardData from "@/constants/HowCard/HowCardData";

export default function How() {
  return (
    <div className="h-[1074px] w-screen flex flex-col relative overflow-hidden pt-20 gap-[72px]">
      <Heading content="How It Works" from="#041020" to="#0174BE" />
      <div className="h-[767px] w-full  px-[120px] flex items-start relative overflow-y-scroll">
        <div className="h-auto w-full  flex flex-col gap-[150px] pb-[278px]">
          {HowCardData.map((card, index) => (
            <HowCard key={index} {...card} idx={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
