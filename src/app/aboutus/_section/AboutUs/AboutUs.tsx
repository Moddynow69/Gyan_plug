import { dmSans, folito } from "@/app/fonts";
import Heading from "@/components/Heading/Heading";
import AboutUsData from "@/constants/AboutUs/AboutUsData";

export default function AboutUs() {
  return (
    <div className="h-auto w-screen flex flex-col items-center justify-end px-32 pt-[112px] lg:pt-[218px] pb-32 snap-start">
      <Heading content={AboutUsData.title} from="#0C356A" to="#0C356A" />
      <p className={` ${dmSans.className} pt-12`}>{AboutUsData.description}</p>
    </div>
  );
}
