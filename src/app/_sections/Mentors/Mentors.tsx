import ButtonComponent from "@/components/ButtonComponent/Button";
import MentorsCarousel from "@/components/Carousels/MentorsCarousel/MentorsCarousel";
import MentorsData from "@/constants/Mentors/Mentors";
import Heading from "@/components/Heading/Heading";

export default function Mentors() {
  return (
    <div
      id="admissioncounsellor"
      className="h-auto md:h-[962px] w-full flex flex-col md:flex-row gap-6 md:gap-0 items-center md:items-end md:pb-[38px] relative overflow-visible z-[30] snap-start snap-always"
    >
      <div className="w-auto h-auto md:absolute md:top-[54px] md:left-1/2 md:translate-x-[-50%]">
        <Heading content="Meet Your Admission Counsellor" from="#041020" to="#0174BE" />
      </div>
      <MentorsCarousel />
      <div className="w-auto h-auto absolute bottom-[79.08px] md:bottom-[98.29px] left-1/2 translate-x-[-50%] overflow-visible">
        <ButtonComponent content="Book Session!" type="secondary" className="hidden md:flex" link={MentorsData.link}/>
        <ButtonComponent content="Book Session!" type="secondary" arrow={false} className=" rounded-md md:hidden" link={MentorsData.link}/>
      </div>
    </div>
  );
}
