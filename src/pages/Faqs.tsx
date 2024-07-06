import FaqItem from "@/components/FaqItem/FaqItem";
import Heading from "@/components/Heading/Heading";
import FaqItems from "@/constants/Faq/FaqItems";

export default function Faqs() {
  return (
    <div className="flex flex-col gap-6 pt-6 px-44">
      <Heading content="FAQs" />
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
