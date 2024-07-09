"use client";
import Image from "next/image";

export default function NotifyMe() {
  return (
    <form>
      <div className="flex flex-row justify-between bg-[rgba(240,248,253,0.10)] rounded-xl lg:py-4 py-2 pr-4 pl-6">
        <div className="flex flex-row gap-3">
          <Image src="images/mail.svg" width={23} height={23} alt="email" />
          <input
            type="text"
            name="email"
            id="email"
            className="bg-inherit outline-none text-[rgba(253, 253, 253, 0.60)] text-2xl"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center rounded-md bg-[#14A4E1] py-2 px-6 lg:py-4 lg:px-8 text-[2.9vw] lg:text-[1.2rem] font-semibold tracking-tight shadow-lg shadow-cyan-500/50 text-[#FFF9EB]"
        >
          Notify Me&#33;
        </button>
      </div>
    </form>
  );
}
