import AllProducts from "../../../../components/affiliate-portal/products/allProducts";
import bookAdam from "../../../../assets/home/bookAdam.jpg";
import { FiPlus } from "react-icons/fi";

const AffiliatePortalProducts = () => {
  const items = [
    {
      id: 1,
      heading: "Product Name",
      description: "Commission 30Bdt",
      price: "150BDT",
      icon: <FiPlus />,
      img: bookAdam,
    },
    {
      id: 2,
      heading: "Product Name",
      price: "150BDT",
      description: "Commission 30Bdt",
      icon: <FiPlus />,
      img: bookAdam,
    },
    {
      id: 3,
      heading: "Product Name",
      price: "150BDT",
      description: "Commission 30Bdt",
      icon: <FiPlus />,
      img: bookAdam,
    },
    {
      id: 4,
      heading: "Product Name",
      price: "150BDT",
      description: "Commission 30Bdt",
      icon: <FiPlus />,
      img: bookAdam,
    },
    {
      id: 5,
      heading: "Product Name",
      price: "150BDT",
      description: "Commission 30Bdt",
      icon: <FiPlus />,
      img: bookAdam,
    },
    {
      id: 6,
      heading: "Product Name",
      price: "150BDT",
      description: "Commission 30Bdt",
      icon: <FiPlus />,
      img: bookAdam,
    },
  ];
  return (
    <div className="w-4/5 flex flex-col justify-center my-10 mx-auto">
      <h3 className="my-5 italic text-2xl font-semibold text-black">
        All Products
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {items.map((item) => (
          <AllProducts item={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default AffiliatePortalProducts;
