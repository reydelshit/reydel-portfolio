import { IoIosArrowRoundDown } from "react-icons/io";
import { ProfileDetails as details } from "../constants/details";

interface Social {
  icon: JSX.Element;
  link: string;
}
export default function Hero() {
  return (
    <div className="w-full md:w-[100%]  flex justify-center items-center flex-col h-dvh relative px-2 md:px-0">
      <div className="p-0 ">
        <h1 className="flex gap-2 items-center px-4 uppercase font-main-font font-bold text-[3rem] leading-none md:text-[5rem] lg:text-[8rem] md:whitespace-nowrap">
          {details.firstName}
          <span className="bg-primary-color text-white p-2 rounded-sm inline-block">
            {details.lastName}
          </span>
        </h1>

        <span className="text-start w-full flex justify-start px-4 flex-col lg:mt-[-1.2rem]">
          <p className="font-bold text-xl uppercase text-primary-color">
            {details.role}
          </p>

          <div className="my-[1rem] flex gap-4">
            {details.socials.map((social: Social, index: number) => {
              return (
                <a
                  target="_blank"
                  className="text-4xl text-primary-color hover:animate-spin"
                  key={index}
                  href={social.link}
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
        </span>
      </div>

      <div className="absolute bottom-0 mb-4 w-full flex justify-center">
        <IoIosArrowRoundDown className="text-[4rem] animate-bounce hover:animate-spin text-primary-color border-2 border-primary-color p-4 rounded-full" />
      </div>
    </div>
  );
}
