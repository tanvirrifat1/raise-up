import SuperAdminCard from "../../../components/affiliate-portal/card";
import PieChartComponent from "../../../components/affiliate-portal/pieChart";
import DashboardCalender from "../../../components/affiliate-portal/calender";

const AffiliatePortalDashboard = () => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-4/5 mx-auto ">
      <SuperAdminCard />
      {/* LINE GRAPH */}

      {/* 
    <PieChartComponent />
    <DashboardCalender /> */}
      {/* PIE CHART & CALENDER  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 w-full">
        <PieChartComponent className="sm:col-span-2" />

        <DashboardCalender className="sm:col-span-1" />
      </div>
    </div>
  );
};

export default AffiliatePortalDashboard;
