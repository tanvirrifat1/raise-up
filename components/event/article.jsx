import Image from "next/image";
import ArticleImage from "../../assets/events/Rectangle 25.png";

const Article = () => {
  return (
    <div className="">
      <h2 className="text-black text-4xl font-medium text-center">ARTICLE</h2>
      <div className="grid grid-cols-2 gap-5 w-4/5 justify-items-center mx-auto my-10">
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
    </div>
  );
};

export default Article;
