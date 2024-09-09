import { getSingleProduct } from "@/utils/getSingleProduct";
import ProductDetails from "../../../../components/ui/ProductDetails"

const Details = async ({ params }) => {
    const product = await getSingleProduct(params.id);

    return (
        <div>
            <ProductDetails product={product}></ProductDetails>
        </div>
    );
};

export default Details;