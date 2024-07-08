import StoriesCarousel from "@/components/Carousels/StoriesCarousel/StoriesCarousel";
import Heading from "@/components/Heading/Heading";

export default function Stories() {
  return (
    <div id="success-stories" className="h-[737px] w-full flex flex-col pt-16 gap-[72px] relative">
      <Heading content="Our Success Stories" from="#041020" to="#0174BE" />
      <StoriesCarousel />
      <div className="h-full w-[200px] absolute z-50 top-0 left-0 bg-gradient-to-r from-[#F3F9FF] to-[#F3F9FF00] "></div>
      <div className="h-full w-[200px] absolute z-50 top-0 right-0 bg-gradient-to-l from-[#F3F9FF] to-[#F3F9FF00] "></div>
    </div>
  );
}
