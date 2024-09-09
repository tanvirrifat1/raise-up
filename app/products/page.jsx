import Author from "../../components/ui/author";
import Categories from "../../components/ui/categories";
import Deal from "../../components/ui/deal";
import Products from "../../components/ui/products";
import ProductsBanner from "../../components/ui/productsBanner";
import BestSeller from "../../components/ui/bestSeller";
import React from "react";

const ProductsPage = () => {
  return (
    <div className="w-full">
      <ProductsBanner></ProductsBanner>
      <div className="max-w-[1440px] mx-auto">
        <div className="-mt-[30px]">
          <Deal title="deal of the day" discount="20% Off on Nobi Rasul Series"></Deal>
        </div>
        <Categories></Categories>
        <Products></Products>
        <Author></Author>
        <Products></Products>
        <BestSeller></BestSeller>
      </div>
    </div>
  );
};

export default ProductsPage;
