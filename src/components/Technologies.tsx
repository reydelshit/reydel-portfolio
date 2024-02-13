import PageHeader from "./reusable/PageHeader";
import { TechSeo } from "../constants/technologies";
import TechSeoCon from "./reusable/TechSeoCon";

export default function Technologies() {
  return (
    <div className="py-[5rem] h-fit w-full md:w-[80%] lg:w-[50%] flex flex-col text-start px-2 md:px-0">
      <PageHeader title="Techs / Seo" />

      <TechSeoCon>
        <h2 className="font-semibold text-lg lg:text-3xl my-4">Techs</h2>

        <div className="gap-2 flex flex-wrap pl-4">
          {TechSeo.techs.map((tech, index) => {
            return (
              <span
                key={index}
                className="text-sm lg:text-md bg-primary-color text-white w-fit rounded-md p-2 "
              >
                {tech}
              </span>
            );
          })}
        </div>
      </TechSeoCon>

      <TechSeoCon>
        <h2 className="font-semibold text-lg lg:text-3xl my-4">SEO</h2>
        <div className="gap-2 flex flex-wrap w-full pl-4">
          {TechSeo.seo.map((seo, index) => {
            return (
              <span
                key={index}
                className="text-sm lg:text-md bg-primary-color text-white w-fit rounded-md p-2 "
              >
                {seo}
              </span>
            );
          })}
        </div>
      </TechSeoCon>

      <TechSeoCon>
        <h2 className="font-semibold text-lg lg:text-3xl my-4">Other</h2>
        <div className="gap-2 flex flex-wrap pl-4">
          {TechSeo.other.map((other, index) => {
            return (
              <span
                key={index}
                className="text-sm lg:text-md bg-primary-color text-white w-fit rounded-md p-2 "
              >
                {other}
              </span>
            );
          })}
        </div>
      </TechSeoCon>
    </div>
  );
}
