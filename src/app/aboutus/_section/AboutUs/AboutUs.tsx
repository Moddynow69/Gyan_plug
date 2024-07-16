import { dmSans, folito } from "@/app/fonts";
import Heading from "@/components/Heading/Heading";
export default function AboutUs() {
  return (
    <div className="h-auto w-screen flex flex-col items-center justify-end px-32 pt-[112px] lg:pt-[218px] pb-32 snap-start">
      <Heading content="About Us" from="#0C356A" to="#0C356A" />
      <p className={` ${dmSans.className} pt-12`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vero
        delectus quam, sed libero vitae, temporibus ab sint culpa expedita optio
        nisi aut velit placeat accusantium, dolorum tempore corrupti! Ex? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Non vero delectus
        quam, sed libero vitae, temporibus ab sint culpa expedita optio nisi aut
        velit placeat accusantium, dolorum tempore corrupti! Ex? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Non vero delectus quam, sed
        libero vitae, temporibus ab sint culpa expedita optio nisi aut velit
        placeat accusantium, dolorum tempore corrupti! Ex? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Non vero delectus quam, sed libero
        vitae, temporibus ab sint culpa expedita optio nisi aut velit placeat
        accusantium, dolorum tempore corrupti! Ex? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Non vero delectus quam, sed libero vitae,
        temporibus ab sint culpa expedita optio nisi aut velit placeat
        accusantium, dolorum tempore corrupti! Ex? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Non vero delectus quam, sed libero vitae,
        temporibus ab sint culpa expedita optio nisi aut velit placeat
        accusantium, dolorum tempore corrupti! Ex?
      </p>
    </div>
  );
}
