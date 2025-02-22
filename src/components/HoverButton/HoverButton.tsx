import ButtonComponent from "../ButtonComponent/Button";

export default function HoverButton({ show }: { show: boolean }) {
  return (
    <div className={`z-[1000] absolute ${
        show
        ? "bottom-[-100px] duration-300 ease-linear"
        : "bottom-0 duration-300 ease-linear"
      } w-full h-20 flex justify-center py-4 px-5 md:hidden bg-white`}>
      <ButtonComponent
        type={"primary"}
        content={"Book Your Free Session"}
        arrow={false}
        link={"http://app.gyanplug.com/user/register/"}
        className="w-full h-12"
      />
    </div>
  );
}
