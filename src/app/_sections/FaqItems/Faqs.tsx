import FaqItem from "@/components/FaqItem/FaqItem";
import Heading from "@/components/Heading/Heading";
import { FaqItems } from "@/constants/Faq/FaqItems";

export default function Faqs() {
  return (
    <div
      id="faqs"
      className="flex flex-col lg:gap-6 lg:pt-6 px-4 lg:px- xl:px-[211px] lg:w-full lg:min-h-[732px] lg:h-auto my-4 lg:my-10 xl:my-20"
    >
      <Heading content="FAQs" from="#041020" to="#0174BE" />
      <div className="transition-all duration-500 ease flex flex-col gap-6">
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
