import Navbar from "@/components/Navbar/Navbar";
import ButtonComponent from "@/components/ButtonComponent/Button";
import Image from "next/image";
export default function Partners() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-end">
      <Navbar />
      <div className="h-auto w-[930px] flex flex-col gap-9 items-center">
        <div className="w-[654px] flex flex-col items-center gap-6">
          <div className="w-[654px] flex flex-col items-center gap-[19.84px]">
            <div className="text-[#0C356A] font-black text-[40px] leading-[60px] text-center">
              Join as a Counsellor
            </div>
            <div className="text-[#0C356A99] font-medium text-[24px] leading-[36px] text-center">
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
  );
}
