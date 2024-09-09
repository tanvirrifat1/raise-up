"use client";

import { TbAffiliate } from "react-icons/tb";
import { PiUsersThreeLight } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import NavigationLink from "./NavigationLink";
import Link from "next/link";

const variants = {
  close: {
    x: -300,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 100,
  },
};

const gradientColors = ["#0A71B9", "#001C30"];

const ProjectNavigation = ({ selectedProject, isOpen, setSelectedProject }) => {
  return (
    <motion.nav
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className={`z-30 flex flex-col gap-8 w-64 absolute rounded-tr-lg rounded-br-lg ml-0 ${isOpen ? "left-64" : "left-20"
        } border-r border-neutral-800 p-5`}
      style={{
        background: `linear-gradient(to bottom, ${gradientColors.join(", ")})`,
      }}
    >
      <div className="flex flex-row w-full justify-between place-items-center">
        <h1 className="tracking-wide text-white text-lg">{selectedProject}</h1>
        <button onClick={() => setSelectedProject(null)}>
          <ImCross className="w-8 h-8 text-white" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <Link href="/dashboard/affiliate">
          <NavigationLink name="Affiliate">
            <TbAffiliate className="w-8 h-8 text-white" />
          </NavigationLink>
        </Link>
        <Link href="/dashboard/customer">
          <NavigationLink name="Customer">
            <PiUsersThreeLight className="w-8 h-8 text-white" />
          </NavigationLink>
        </Link>
      </div>
    </motion.nav>
  );
};

export default ProjectNavigation;
