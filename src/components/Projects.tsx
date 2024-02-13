import { LuGithub } from "react-icons/lu";
import { TbExternalLink } from "react-icons/tb";

import { Projects as projects } from "../constants/projects";
import { useState } from "react";
import PageHeader from "./reusable/PageHeader";

export default function Projects() {
  const [defaultLength, setDefaultLength] = useState(4);

  const handleShowMore = () => {
    setDefaultLength(projects.length);
  };

  return (
    <div className="py-[5rem] h-fit w-full md:w-[80%] lg:w-[50%] flex flex-col text-start px-2 md:px-0">
      <PageHeader title="Projects" />

      <div className="w-full md:pl-[3rem] lg:pl-[4rem] flex flex-col gap-4">
        {projects
          .map((project, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white p-2 shadow-sm rounded-lg h-fit items-center"
            >
              <img
                className="w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] rounded-md object-cover"
                src={project.image}
                alt=""
              />

              <div className="leading-relaxed w-full">
                <div className="py-1 md:py-2 flex justify-between flex-col md:flex-row">
                  <h2 className="font-semibold text-sm lg:text-lg">
                    {project.title}
                  </h2>

                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-xs md:text-sm bg-primary-color text-white w-fit rounded-md px-1"
                    >
                      Github
                      <LuGithub />
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-1 text-sm bg-primary-color text-white w-fit rounded-md px-1"
                    >
                      Link
                      <TbExternalLink />
                    </a>
                  </div>
                </div>
                <p className="text-sm lg:text-md">{project.description}</p>
                <div className="flex gap-1 flex-wrap mt-[1rem]">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary-color text-white p-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
          .slice(0, defaultLength)}
        P
      </div>

      <div className="flex w-full justify-center">
        <button
          onClick={handleShowMore}
          className="p-2 mt-[2rem] border-b-4 border-primary-color"
        >
          View More
        </button>
      </div>
    </div>
  );
}
