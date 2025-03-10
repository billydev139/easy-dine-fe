import DashboardLayout from "../../../../layouts/dashboardLayout";
import CustomerInsights from "./customerInsights";
import OverviewStats from "./overviewStats";
import ProductInsights from "./productInsights";
import RevenueAnalytics from "./revenueAnalytics";

const Overview = () => {
  //   const stats = [
  //     {
  //       title: "100+",
  //       data: "Posted Jobs",
  //       icon: <Icons.IoBriefcaseOutline className="w-9 h-9 " />, // Replace with an appropriate icon
  //     },
  //     {
  //       title: "9382",
  //       data: "Applications",
  //       icon: <Icons.LiaFileContractSolid className="w-9 h-9 " />,
  //     },
  //     {
  //       title: "94",
  //       data: "Messages",
  //       icon: <Icons.TiMessages className="w-9 h-9 " />,
  //     },
  //     {
  //       title: "112",
  //       data: "Shortlist",
  //       icon: <Icons.LiaFileContractSolid className="w-9 h-9 " />,
  //     },
  //   ];
  return (
    <DashboardLayout>
      <div className="">
        <OverviewStats />
        <div className="grid grid-cols-1 gap-4">
        <RevenueAnalytics/>
        <CustomerInsights/>
        </div>
        <ProductInsights/>
        <div className="grid grid-cols-12 w-full gap-2 "></div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
