import Link from "next/link";

const AdminSetting = () => {
  return (
    <div className="w-full py-10">
      {/* Admin Role */}
      <div className="mb-10">
        <div className="">
          <h3 className="text-2xl font-normal text-black">Admin Role</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="py-3 px-10 bg-limeBlue text-white rounded-md text-center">
              <Link href="/">Create</Link>
            </div>
            <div className="py-3 px-10 bg-limeBlue text-white rounded-md text-center">
              <Link href="/">Set Role</Link>
            </div>
            <div className="py-3 px-10 bg-limeBlue text-white rounded-md text-center">
              <Link href="/">Delete</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Affiliate Role */}
      <div className="mb-10">
        <h3 className="text-2xl font-normal text-black">Affiliate Role</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className="py-3 px-10 bg-limeBlue text-white rounded-md text-center">
            <Link href="/">Create</Link>
          </div>
          <div className="py-3 px-10 bg-limeBlue text-white rounded-md text-center">
            <Link href="/">Set Role</Link>
          </div>
          <div className="py-3 px-10 bg-limeBlue text-white rounded-md text-center">
            <Link href="/">Delete</Link>
          </div>
        </div>
      </div>

      {/* CREATE PROMO and EVENTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="py-5 px-10 bg-white rounded-md shadow-lg">
          <Link href="/">
            <p className="text-base font-medium text-center">
              CREATE <br />
              <span className="text-base lg:text-5xl md:text-xl font-extrabold text-limeBlue">
                PROMO
              </span>
            </p>
          </Link>
        </div>
        <div className="py-5 px-10 bg-white rounded-md shadow-lg">
          <Link href="/">
            <p className="text-base font-medium text-center">
              CREATE <br />
              <span className="text-base lg:text-5xl md:text-xl font-extrabold text-limeBlue">
                EVENTS
              </span>
            </p>
          </Link>
        </div>
      </div>

      {/* set alert for marketing & sales target and announcement */}
      <div className="w-full bg-white rounded-lg py-3 px-5 flex items-center justify-center shadow-lg mb-10">
        <Link href="/">
          <p className="text-base text-black font-medium">
            set alert for marketing & sales target
          </p>
        </Link>
      </div>
      <div className="w-full bg-white rounded-lg py-3 px-5 flex items-center justify-center shadow-lg mb-10">
        <Link href="/">
          <p className="text-base text-black font-medium">announcement</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminSetting;
