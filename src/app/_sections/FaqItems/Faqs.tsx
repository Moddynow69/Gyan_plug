import FaqItem from "@/components/FaqItem/FaqItem";
import Heading from "@/components/Heading/Heading";
import { FaqItems } from "@/constants/Faq/FaqItems";

export default function Faqs() {
  return (
    <div
      id="faqs"
      className="flex flex-col gap-9 lg:gap-[52px] lg:pt-6 px-4 lg:px-8 xl:px-[211px] lg:w-full lg:min-h-[732px] lg:h-auto my-4 mb-7 lg:my-10 xl:my-20 snap-start snap-always"
    >
      <Heading content="FAQs" from="#041020" to="#0174BE" />
      <div className="flex flex-col gap-3 lg:gap-6">
        {FaqItems.map((faqitem, i) => {
          return (
            <FaqItem
              heading={faqitem.heading}
              paragraph={faqitem.paragraph}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
