import Navbar from "@/components/Navbar/Navbar";
import ButtonComponent from "@/components/ButtonComponent/Button";
import Image from "next/image";
import { dmSans } from "@/app/fonts";
export default function Partners() {
  return (
    <div>
      <Navbar />
      <div className="h-auto w-screen flex flex-col items-center justify-end pt-20 lg:pt-[218px]">
        <div className="w-[100%] flex flex-col gap-9 items-center">
          <div className="w-[100%] flex flex-col items-center gap-5 lg:gap-[24px]">
            <div className="w-[100%] flex flex-col items-center gap-[0.5rem] lg:gap-[19.84px]">
              <div className="text-[#0C356A] font-black text-[1.2rem] lg:text-[40px] xl:text-[60px] leading-normal text-center">
                Join as a Counsellor
              </div>
              <div
                className={`text-[rgba(12,53,106,0.60)] text-center font-medium text-[14px] lg:text-[1.3rem] xl:text-[1.5rem] tracking-tight leading-[140%] ${dmSans.className} px-3 lg:px-28 xl:px-60`}
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
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
