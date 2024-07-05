"use client";

import Image from "next/image";

export default function NotifyMe() {
  return (
    <form>
      <div className="flex flex-row justify-between bg-[rgba(240,248,253,0.10)] rounded-xl py-4 pr-4 pl-6">
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
          className="flex justify-center items-center rounded-md bg-[#14A4E1] py-4 px-6 text-[1.5rem] font-semibold tracking-tight shadow-lg shadow-cyan-500/50"
        >
          Notify me&#33;
        </button>
      </div>
    </form>
  );
}
