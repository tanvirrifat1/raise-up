import Image from "next/image";
import Book from "../../assets/about/Book.png";
import ArticleImage from "../../assets/events/Rectangle 25.png";
import BigBanner from "../../assets/events/Rectangle 29.png";

const Banner = () => {
  return (
    <div className="">
      <Image
        src={Book}
        width={770}
        height={385}
        alt="Delivered"
        className="text-white mx-auto"
      />
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-primary text-2xl sm:text-3xl font-extrabold italic">
          20% Off on Nobi Rasul Series
        </h4>
        <p className="text-black text-sm sm:text-base font-medium">
          Avail 20% Flat Discount on Nobi Rasul Series Bookset
        </p>
        <button className="text-black text-base sm:text-lg font-medium py-2 px-16 mt-3 rounded-md bg-primary text-white">
          BUY NOW
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full sm:w-4/5 justify-items-center mx-auto my-16">
        <Image
          src={ArticleImage}
          width={770}
          height={385}
          alt="Delivered"
          className="text-white mx-auto"
        />
        <Image
          src={ArticleImage}
          width={770}
          height={385}
          alt="Delivered"
          className="text-white mx-auto"
        />
        <Image
          src={ArticleImage}
          width={770}
          height={385}
          alt="Delivered"
          className="text-white mx-auto"
        />
        <Image
          src={ArticleImage}
          width={770}
          height={385}
          alt="Delivered"
          className="text-white mx-auto"
        />
      </div>
      <div className="my-10">
        <Image
          src={BigBanner}
          width={750}
          height={750}
          alt="Delivered"
          className="text-white mx-auto w-full sm:w-4/5 h-2/4"
        />
      </div>
    </div>
  );
};

export default Banner;
