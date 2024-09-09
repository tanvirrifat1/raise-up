import FAQ from "../../components/about/faq";
import Testimonial from "../../components/about/testimonial";
import Banner from "../../components/ui/banner";
import Categories from "../../components/ui/categories";
import Deal from "../../components/ui/deal";
import Products from "../../components/ui/products";
import WhyUs from "../../components/ui/whyUs";
import React from "react";

const AffiliatePage = () => {
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
    <div className="max-w-[1440px] mx-auto">
      <Banner></Banner>
      <Deal title="Deal of the day" discount="20% Off on Nobi Rasul Series"></Deal>
      <WhyUs></WhyUs>
      <Categories></Categories>
      <Products></Products>
      <Testimonial></Testimonial>
      <div className="my-20">
        <h3 className="text-base text-black font-medium text-center mb-10">
          Frequently Asked Question
        </h3>
        {frequentlyAskedQue.map((faq) => (
          <FAQ key={faq.id} title={faq.title} description={faq.description} />
        ))}
      </div>
    </div>
  );
};

export default AffiliatePage;
