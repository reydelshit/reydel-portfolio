import { IoIosArrowRoundDown } from "react-icons/io";

import { Details as details } from "../constants/Details";

export default function HeroPage() {
  return (
    <div className=" w-[50%] flex justify-center items-center flex-col h-dvh relative">
      <div className="p-0 leading-[7rem]">
        <h1
          className="uppercase font-main-font font-bold text-[8rem] 
     whitespace-nowrap p-0 "
        >
          {details.firstName}
          <span className="bg-primary-color text-white p-2 ml-2 rounded-sm">
            {details.lastName}
          </span>
        </h1>

        <span className="text-start w-full flex justify-start p-2 flex-col items-start">
          <p className="font-bold text-xl uppercase text-primary-color">
            {details.role}
          </p>

          <div className="my-[1rem] flex gap-4">
            {details.socials.map((social, index) => {
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
