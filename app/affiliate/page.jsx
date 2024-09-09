import React from "react";
import AffiliateBanner from "../../components/affiliate/banner";
import AffiliateForm from "../../components/affiliate/form";
import FAQ from "../../components/about/faq";

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
    <div>
      <AffiliateBanner />
      <AffiliateForm />
      <div className="my-10">
        <h3 className="text-4xl text-black font-medium text-center mb-5">
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
