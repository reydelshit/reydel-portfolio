interface TechSeoConProps {
  children: React.ReactNode;
}

const TechSeoCon: React.FC<TechSeoConProps> = ({ children }) => {
  return <div className="w-full md:pl-[3rem] lg:pl-[4rem]">{children}</div>;
};

export default TechSeoCon;
