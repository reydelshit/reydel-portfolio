import { IoIosArrowRoundForward } from "react-icons/io";

interface VisitProps {
  title: string;
  link: string;
}

export default function Visit({ title, link }: VisitProps) {
  return (
    <div className="w-full text-end p-2 flex justify-end">
      <a
        target="_blank"
        href={link}
        className="hover:border-b-4 hover:border-primary-color flex items-center gap-2 justify-end w-fit"
      >
        {title}
        <IoIosArrowRoundForward />
      </a>
    </div>
  );
}
