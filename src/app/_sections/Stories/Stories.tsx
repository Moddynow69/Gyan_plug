import StoriesCarousel from "@/components/Carousels/StoriesCarousel/StoriesCarousel";
import Heading from "@/components/Heading/Heading";

export default function Stories() {
  return (
    <div id="success-stories" className="h-[411px] md:h-[737px] w-full flex flex-col md:pt-16 gap-9 md:gap-[72px] relative bg-transparent overflow-visible snap-start snap-always">
      <Heading content="Our Success Stories" from="#041020" to="#0174BE" />
      <StoriesCarousel />
      <div className="hidden md:block h-full w-[200px] absolute z-50 top-0 left-0 bg-gradient-to-r from-[#F3F9FF] to-[#F3F9FF00] "></div>
      <div className="hidden md:block  h-full w-[200px] absolute z-50 top-0 right-0 bg-gradient-to-l from-[#F3F9FF] to-[#F3F9FF00] "></div>
    </div>
  );
}
