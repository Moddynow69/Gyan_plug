"use client";
import Image from "next/image";

export default function NotifyMe() {
  return (
    <form>
      <div className="flex flex-row lg:gap-0 justify-between bg-[rgba(240,248,253,0.10)] rounded-md lg:rounded-xl pr-1 pl-2 lg:py-4 py-2 lg:pr-4 lg:pl-6">
        <div className="flex flex-row gap-1 lg:gap-3">
          <Image src="images/mail.svg" width={23} height={23} alt="email" className="w-[0.8rem] lg:w-auto max-w-[2rem]" />
          <input
            type="text"
            name="email"
            id="email"
            className="bg-inherit outline-none text-[rgba(253, 253, 253, 0.60)] text-[0.6rem] lg:text-2xl"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="flex justify-center items-center rounded-[0.25rem] lg:rounded-md bg-[#14A4E1] py-2 px-1 lg:py-4 lg:px-8 text-[0.6rem] lg:text-[1.2rem] font-semibold tracking-tight shadow-lg shadow-cyan-500/50 text-[#FFF9EB] w-20 lg:w-auto"
        >
          Notify Me&#33;
        </button>
      </div>
    </form>
  );
}
