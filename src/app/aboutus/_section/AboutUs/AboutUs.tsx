import { dmSans, folito } from "@/app/fonts";
import Animation from "@/components/Animation/animation";
import Heading from "@/components/Heading/Heading";
import AboutUsData from "@/constants/AboutUs/AboutUsData";

export default function AboutUs() {
  return (
    <div className="h-auto w-screen flex flex-col items-center justify-end px-5 xl:px-14 2xl:px-[150px] gap-[72px] md:gap-0 lg:gap-12 xl:gap-[86px] pt-[112px] lg:pt-[218px] pb-32 snap-start">
      <Animation threshold={0} duration="900ms" x={-100} y={0} delay="0s">
        <div className="w-full h-auto flex flex-col items-start justify-start">
          <Heading content={AboutUsData.title} from="#0C356A" to="#0C356A" />
        </div>
      </Animation>
      {AboutUsData.paragraphs.map((item, i) => {
        return (
          <Animation
            threshold={0}
            duration="900ms"
            x={-100}
            y={0}
            delay="600ms"
            key={i}
          >
            <div
              key={i}
              className={`text-[#002324CC] text-[12px] lg:text-[20px] ledaing-[15.62px] lg:leading-8 lg:text-left text-justify ${dmSans.className}`}
            >
              {item.paragraph}
            </div>
          </Animation>
        );
      })}
      {/* <p className={` ${dmSans.className} pt-12`}>
        {AboutUsData.paragraphs[0].paragraph}
      </p> */}
    </div>
  );
}
