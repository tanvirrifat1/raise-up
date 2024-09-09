import ThemeCard from "../../../../components/dashboard/theme/card.jsx";
import AffiliateTheme from "../../../../components/dashboard/theme/theme.jsx";

const ThemePage = () => {
  return (
    <div className="w-full my-10 py-5 bg-Neutral-100 mx-auto">
      <ThemeCard />
      <AffiliateTheme />
      <div className="flex justify-end items-center">
        <button className="bg-lightBlue py-5 px-5 rounded text-white text-center">
          Upload new theme
        </button>
      </div>
    </div>
  );
};

export default ThemePage;
