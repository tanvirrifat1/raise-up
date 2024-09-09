import Image from "next/image";
import BookCover from "../../assets/about/BookCover.png";
import { useSession } from "next-auth/react";

const BookStore = () => {
  return (
    <div className="py-10 my-10 md:px-20 mt-28 mb-10 flex bg-primary md:flex-row flex-col justify-center gap-4 items-center">
      <div className="lg:w-1/4 md:w-1/4 w-full  px-10 md:px-20 mr-8 relative mb-10 md:mt-0">
        <div className="absolute -top-28 left-[25%] lg:-top-56 ">
          <Image
            src={BookCover}
            width={200}
            height={200}
            alt="Book Cover"
            className="text-right ml-auto"
          />
          <h4 className="text-4xl font-bold italic text-white text-right ">
            NOT JUST A <br /> BOOKSTORE
          </h4>
        </div>
      </div>

      <div className="w-3/5 text-white text-sm font-normal lg:mt-2 md:mt-2 flex md:flex-col mt-56 mx-auto">
        <p className="flex flex-col gap-2 w-full text-center md:text-start">
          <span>
            Our curated selection showcases works that challenge perspectives,
            spark conversations, and fuel imaginations. Whether you are seeking
            solace in the pages of a beloved novel, delving into the depths of
            history, or exploring the frontiers of science and philosophy,
            Riseup Publications has something to ignite your curiosity and feed
            your intellect. Founded on the principles of accessibility and
            inclusivity, Riseup is committed to providing a platform for diverse
            voices and marginalized narratives. We strive to amplify the voices
            of underrepresented authors, championing stories that reflect the
            richness and complexity of the human experience.
          </span>
          <span>
            But Riseup is more than just a bookstore—its a community. Through
            author events, book clubs, and educational workshops, we foster
            connections between readers, writers, and thinkers, creating spaces
            where ideas can flourish and minds can grow.
          </span>
          <span>
            Join us on a journey of discovery and enlightenment. Riseup with us,
            as we explore the boundless possibilities that lie between the pages
            of a book.
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookStore;
