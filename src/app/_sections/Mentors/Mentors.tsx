import ButtonComponent from "@/components/ButtonComponent/Button";
import MentorsCarousel from "@/components/Carousels/MentorsCarousel/MentorsCarousel";
import Heading from "@/components/Heading/Heading";

export default function Mentors() {
  return (
    <div id="mentors" className="h-[962px] w-full flex items-end lg:pb-[38px] relative">
      <div className="w-auto h-auto absolute top-[54px] left-1/2 translate-x-[-50%]">
        <Heading content="Meet Your Mentors" from="#041020" to="#0174BE"/>
      </div>
      <MentorsCarousel/>
      <div className="w-auto h-auto absolute bottom-[98.29px] left-1/2 translate-x-[-50%]">
      <ButtonComponent content="View All" type="secondary"/>
      </div>
    </div>
  );
}