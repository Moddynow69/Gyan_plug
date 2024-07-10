import Navbar from "@/components/Navbar/Navbar";
import ButtonComponent from "@/components/ButtonComponent/Button";
import Image from "next/image";
import { dmSans, folito } from "@/app/fonts";
export default function Partners() {
  return (
    <div>
      <Navbar />
      <div className="h-auto w-screen flex flex-col items-center justify-end pt-[112px] lg:pt-[218px]">
        <div className="w-[100%] max-w-[930px] flex flex-col gap-9 items-center">
          <div className="w-[100%] max-w-[328px] lg:max-w-[100%] flex flex-col items-center gap-5 lg:gap-[24px]">
            <div className="w-[100%] flex flex-col items-center gap-[0.5rem] lg:gap-[19.84px]">
              <div
                className={`text-[#0C356A] font-black text-[24px] lg:text-[40px] leading-[28.8px] lg:leading-[60px] text-center ${folito.className}`}
              >
                Join as a Counsellor
              </div>
              <div
                className={`text-[#0C356A99] text-center font-medium text-[14px] lg:text-[1.3rem] xl:text-[1.5rem] tracking-tight leading-[140%] ${dmSans.className} px-3 lg:px-28 xl:px-60`}
              >
                Gyanplug is a free platform for education counsellors to connect
                with students looking for admission guidance.
              </div>
            </div>
            <ButtonComponent
              content="Apply as a counsellor today!"
              type="primary"
              arrow={false}
            />
          </div>
          <Image
            src="/images/Partners.svg"
            width={930}
            height={504}
            alt=""
            className="w-full hidden lg:block"
          />
          <Image
            src="/images/Partners_min.svg"
            width={330}
            height={283}
            alt=""
            className="w-full lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}
