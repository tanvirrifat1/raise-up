"use client";

import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useSession } from "next-auth/react";
import SubMenuAccordion from "../../components/ui/subMenuAccordion";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 1,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 1,
    },
  },
};

const svgVariants = {
  close: {
    rotate: 360,
  },
  open: {
    rotate: 180,
  },
};

const Navigation = ({ navigationMenu }) => {
  const { data } = useSession();
  const [isOpen, setIsOpen] = useState(true);

  const containerControls = useAnimationControls();
  const svgControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      svgControls.start("open");
    } else {
      containerControls.start("close");
      svgControls.start("close");
    }
  }, [isOpen, containerControls, svgControls]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  const gradientColors = ["#0A71B9", "#001C30"];

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="disable-selection  flex flex-col z-10 gap-3 p-5 min-h-screen top-0 left-0 shadow shadow-neutral bg-primary
        "
        style={{
          background: `linear-gradient(to bottom, ${gradientColors.join(
            ", "
          )})`,
        }}
      >
        <div className="flex flex-row w-full mb-7 justify-between place-items-center text-white">
          <div
            className={`${!isOpen ? "hidden" : "block"
              } w-10 h-10  rounded-full border border-gray shadow flex justify-center items-center text-sm uppercase`}
          >
            {data?.user?.email?.slice(0, 1)}
          </div>
          <button
            className="p-1 rounded-full flex"
            onClick={() => handleOpenClose()}
          >
            <IoIosArrowDroprightCircle className="w-8 h-8 text-white">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={svgVariants}
                animate={svgControls}
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              />
            </IoIosArrowDroprightCircle>
          </button>
        </div>
        <div className="flex flex-col gap-3 text-nowrap">
          <AnimatePresence>
            <SubMenuAccordion subMenu={navigationMenu} isOpenSidebar={isOpen} />
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
