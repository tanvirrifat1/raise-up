import { FaArrowRightLong } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import Link from "next/link";

const ProjectLink = ({ children, name, setSelectedProject }) => {
  const handleClick = () => {
    setSelectedProject(null);
    setTimeout(() => {
      setSelectedProject(name);
    }, 250);
  };
  return (
    <Link
      href="#"
      onClick={handleClick}
      className="flex p-1 rounded cursor-pointer text-white place-items-center gap-3  duration-100 "
    >
      <MdSupportAgent className="w-8 h-8 text-white" />
      {children}
      <div className="flex overflow-clip place-items-center justify-between w-full">
        <p className="text-white truncate whitespace-nowrap tracking-wide">
          {name}
        </p>
        <FaArrowRightLong className="w-4 h-4 text-white" />
      </div>
    </Link>
  );
};

export default ProjectLink;
