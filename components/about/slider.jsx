/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import Delivered from "../../assets/about/Delivered.png";
import Transaction from "../../assets/about/Transaction.png";
import Rectangle from "../../assets/about/Rectangle.png";
import Book from "../../assets/about/Book.png";
import WhyUs from "../ui/whyUs";

const Slider = () => {
  return (
    <div className="  mt-20 mb-10 px-4 md:px-20 lg:px-40">
      <div>
        <Image
          src={Book}
          width={770}
          height={385}
          alt="Delivered"
          className="text-white mx-auto"
        />

        <p className="flex flex-col gap-2 text-sm sm:text-md md:text-lg font-medium text-center text-black py-3">
          <span>
            Welcome to Riseup Publications, your premier destination for all
            things literary and enlightening. At Riseup, we believe in the
            transformative power of books to uplift minds, inspire change, and
            elevate communities.
          </span>
          With a diverse collection spanning genres from fiction to non-fiction,
          from classic literature to contemporary bestsellers, Riseup
          Publications is more than just a bookstore—it's a sanctuary for
          bibliophiles, a haven for knowledge seekers, and a hub for cultural
          exploration.
        </p>
      </div>
      <WhyUs />
    </div>
  );
};

export default Slider;
