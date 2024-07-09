import FaqItem from "@/components/FaqItem/FaqItem";
import Heading from "@/components/Heading/Heading";
import { FaqItems } from "@/constants/Faq/FaqItems";

export default function Faqs() {
  return (
    <div
      id="faqs"
      className="flex flex-col gap-6 pt-6 px-28 w-full min-h-[732px] h-auto my-10"
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
