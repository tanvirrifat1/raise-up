import Image from "next/image";
import AffiliateImg from "../../../assets/dashboard/affiliate-settings/Rectangle 373.png";

const Theme = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-evenly  gap-10 py-3">
      <Image
        src={AffiliateImg}
        width={660}
        height={370}
        alt="Affiliate Image"
      />
      <Image
        src={AffiliateImg}
        width={660}
        height={370}
        alt="Affiliate Image"
      />
      <Image
        src={AffiliateImg}
        width={660}
        height={370}
        alt="Affiliate Image"
      />
      <Image
        src={AffiliateImg}
        width={660}
        height={370}
        alt="Affiliate Image"
      />
    </div>
  );
};

export default Theme;
