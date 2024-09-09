import AffiliateTheme from "../../../../components/affiliate-portal/affiliate-settings/theme.jsx";
import AffiliateForm from "../../../../components/affiliate-portal/affiliate-settings/form.jsx";

const AffiliateSettingsPage = () => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-4/5 my-20 mx-auto py-5 px-5">
      <h3 className="text-black text-2xl font-normal">Theme Selection</h3>
      <AffiliateTheme />
      <AffiliateForm />
    </div>
  );
};

export default AffiliateSettingsPage;
