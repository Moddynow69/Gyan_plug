import { dmSans, folito } from "@/app/fonts";
import Animation from "@/components/Animation/animation";
import Heading from "@/components/Heading/Heading";
import AboutUsData from "@/constants/AboutUs/AboutUsData";

export default function AboutUs() {
  return (
    <div className="h-auto w-screen flex flex-col items-center justify-end px-5 xl:px-14 2xl:px-[150px] gap-9 lg:gap-[72px] md:gap-0 xl:gap-[86px] pt-[112px] lg:pt-[218px] pb-32 ">
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
              className={`text-[#002324CC] font-bold text-[24px] lg:text-[48px] ledaing-[28px] lg:leading-14 text-left ${folito.className}}`}
            >
              {item.heading}
            </div>
            <div
              key={i}
              className={`text-[#002324CC] text-[12px] lg:text-[20px] ledaing-[15.62px] lg:leading-8 lg:text-left text-justify ${dmSans.className}`}
            >
              {item.paragraph}
            </div>
          </Animation>
        );
      })}
      <div className="w-full h-auto flex flex-col items-start justify-start">
          <Heading content={AboutUsData.title2} from="#0C356A" to="#0C356A" />
        </div>
      {AboutUsData.paragraph2.map((item, i) => {
        return (
          <Animation
            threshold={0}
            duration="900ms"
            x={-100}
            y={0}
            delay="600ms"
            key={i}
          >
            <span
              className={`text-[#002324CC] font-bold text-[20px] lg:text-[32px] ledaing-[28px] lg:leading-14 text-left ${folito.className}}`}
            >
              {item.heading}:{" "}
            </span> 
            <span
              key={i}
              className={`text-[#002324CC] text-[12px] lg:text-[20px] ledaing-[15.62px] lg:leading-8 lg:text-left text-justify ${dmSans.className}`}
            >
              {item.paragraph}
            </span>
          </Animation>
        );
      })}
    </div>
  );
}
