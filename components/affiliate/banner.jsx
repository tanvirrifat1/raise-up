import Image from "next/image";
import Banner from "../../assets/affiliate/Rectangle 32.png";

const AffiliateBanner = () => {
  return (
    <div className="relative">
      <Image
        src={Banner}
        width={770}
        height={385}
        alt="Support Banner"
        className="w-full h-auto object-cover relative"
      />
      <div className="absolute bottom-[35%] md:bottom-[20%] lg:bottom-[23%] start-[20%] md:start-[20%] lg:start-[20%] transform -translate-x-1/2 text-center sm:text-left">
        <p className="text-[8px] sm:text-xm md:text-[16px] lg:text-base lg:font-semibold font-light text-white text-left">
          BECOME AN
        </p>
        <h1 className="text-[14px] sm:text-lg md:text-[28px] lg:text-6xl lg:font-extrabold font-semibold  text-white text-left">
          AFFILIATE
        </h1>
        <p className="text-[6px] sm:text-sm md:text-[14px] lg:text-sm font-normal text-white text-left">
          START YOUR OWN JOURNEY
        </p>
      </div>

      <div className="relative flex justify-center mt-10 sm:mt-0">
        <div className="flex flex-col absolute items-center py-6 px-3 sm:px-6 md:px-8 lg:px-10 bg-white w-full sm:w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-md mt-[-3rem] shadow-md text-center">
          <h3 className="text-primary text-base sm:text-3xl font-bold">
            APPLY HERE
          </h3>
          <p className="text-black sm:text-xl font-normal text-center">
            To become our affiliate partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateBanner;
