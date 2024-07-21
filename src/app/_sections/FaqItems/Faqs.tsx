"use client";
import FaqItem from "@/components/FaqItem/FaqItem";
import Heading from "@/components/Heading/Heading";
import { FaqCounsellors } from "@/constants/Faq/FaqCounsellors";
import Animation from "@/components/Animation/animation";
import { FaqStudents } from "@/constants/Faq/FaqStudents";

type Props = {
  type: "Students" | "Counsellors";
};

export default function Faqs({ type }: Props) {
  return (
    <div
      id="faqs"
      className="flex flex-col gap-9 lg:gap-[52px] lg:pt-6 px-4 lg:px-8 xl:px-[211px] lg:w-full lg:min-h-[732px] lg:h-auto my-4 mb-7 lg:my-10 xl:my-20 snap-start snap-always"
    >
      <Heading content="FAQs" from="#041020" to="#0174BE" />
      <div className="flex flex-col gap-3 lg:gap-6">
        {type === "Counsellors" &&
          FaqCounsellors.map((faqitem, i) => {
            return (
              <Animation
                threshold={0}
                duration="900ms"
                x={-100}
                y={0}
                delay={100 * i + "ms"}
                key={i}
              >
                <FaqItem
                  heading={faqitem.heading}
                  paragraph={faqitem.paragraph}
                />
              </Animation>
            );
          })}
        {type === "Students" &&
          FaqStudents.map((faqitem, i) => {
            return (
              <Animation
                threshold={0}
                duration="900ms"
                x={-100}
                y={0}
                delay={100 * i + "ms"}
                key={i}
              >
                <FaqItem
                  heading={faqitem.heading}
                  paragraph={faqitem.paragraph}
                />
              </Animation>
            );
          })}
      </div>
    </div>
  );
}
