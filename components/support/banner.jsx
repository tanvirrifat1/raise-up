import Image from "next/image";
import BannerImage from "../../assets/support/Rectangle 32.png";

const SupportBanner = () => {
  return (
    <div className="relative">
      <Image
        src={BannerImage}
        width={770}
        height={385}
        alt="Support Banner"
        className="w-full h-auto object-cover relative"
      />

      <div className="absolute bottom-1/4 start-[30%] md:start-[30%] lg:start-[20%] transform -translate-x-1/2 text-center sm:text-left">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black text-left">
          HAVING ISSUE!
        </p>
        <h1 className="text-3xl sm:text-7xl md:text-6xl font-extrabold text-primary text-left">
          SUPPORT
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-normal text-black text-left">
          we are just a click away
        </p>
      </div>

      <div className="relative flex justify-center mt-10 sm:mt-0">
        <div className="flex flex-col absolute items-center py-6 px-3 sm:px-6 md:px-8 lg:px-10 bg-white w-full sm:w-4/5 md:w-1/2 lg:w-1/2 xl:w-1/2 rounded-md mt-[-3rem] shadow-md text-center">
          <h3 className="text-primary text-base sm:text-3xl font-bold">
            SUPPORT INBOX
          </h3>
          <p className="text-black sm:text-xl font-normal text-center">
            Please fill up the form and Receive Ticket Token
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
