import { IoIosArrowRoundForward } from "react-icons/io";
import { Experience as experience } from "../constants/experience";

export default function Experience() {
  return (
    <div className="md:w-[80%] lg:w-[50%] pt-[4rem] h-fit mt-[2rem] flex flex-col text-start px-2 md:px-0">
      <div className="py-4 w-full text-start mb-[2rem]">
        <h1 className="font-bold text-[2rem] bg-primary-color p-2 w-fit text-white rounded-sm">
          Experience.
        </h1>
      </div>

      <div className="w-full pl-[2rem] md:pl-[5rem] lg:pl-[5rem]">
        <ol className="relative border-s border-primary-color w-[100%]">
          {experience.map((exp, index) => {
            return (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-primary-color rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-primary-color">
                  {exp.date}
                </time>
                <h3 className="text-lg font-semibold text-gray-900">
                  {exp.title} at {exp.company}
                </h3>
                <p className="text-base font-normal text-gray-500">
                  {exp.role.split(",").map((role, index) => {
                    return (
                      <span key={index} className="block">
                        {role}

                        {index !== exp.role.split(",").length - 1 && <br />}
                      </span>
                    );
                  })}
                </p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="w-full text-end p-2 flex justify-end">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1aUyd-iQYoIJ4vU2xS_F70pLIyTK6HA8U/view?usp=sharing"
          className="hover:border-b-4 hover:border-primary-color flex items-center gap-2 justify-end w-fit"
        >
          View Resume
          <IoIosArrowRoundForward />
        </a>
      </div>
    </div>
  );
}
