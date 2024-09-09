import BookStore from "../../components/about/bookStore";
import Slider from "../../components/about/slider";
import Testimonial from "../../components/about/testimonial";
import Faq from "../../components/about/faq";

const AboutPage = () => {
  const frequentlyAskedQue = [
    {
      id: 1,
      title: "Sample Question 1",
      description: "Sample Answer 1",
    },
    { id: 2, title: "Sample Question 2", description: "Sample Answer 2" },
    { id: 3, title: "Sample Question 3", description: "Sample Answer 3" },
    {
      id: 4,
      title: "Sample Question 4",
      description: "Sample Answer 4",
    },
    {
      id: 5,
      title: "Sample Question 5",
      description: "Sample Answer 5",
    },
    {
      id: 6,
      title: "Sample Question 6",
      description: "Sample Answer 6",
    },
  ];

  return (
    <div>
      <Slider />
      <BookStore />
      <Testimonial />
      <div className="my-20">
        <h3 className="text-base text-black font-medium text-center mb-10">
          Frequently Asked Question
        </h3>
        {frequentlyAskedQue.map((faq) => (
          <Faq key={faq.id} title={faq.title} description={faq.description} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
