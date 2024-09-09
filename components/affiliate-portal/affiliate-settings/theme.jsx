import Image from "next/image";
import AffiliateImg from "../../../assets/dashboard/affiliate-settings/Rectangle 373.png";

const AffiliateTheme = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 py-3">
      <Image
        src={AffiliateImg}
        width={750}
        height={370}
        alt="Affiliate Image"
      />
      <Image
        src={AffiliateImg}
        width={750}
        height={370}
        alt="Affiliate Image"
      />
      <Image
        src={AffiliateImg}
        width={750}
        height={370}
        alt="Affiliate Image"
      />
      <Image
        src={AffiliateImg}
        width={750}
        height={370}
        alt="Affiliate Image"
      />
    </div>
  );
};

export default AffiliateTheme;
