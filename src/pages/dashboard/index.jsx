import DashboardLayout from "../../layouts/dashboardLayout";
import DashboardStats from "./dashboardStats";

const Dashboard = () => {
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
        {/* <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-9 shadow rounded flex items-center justify-between"
            >
              <span className="text-primaryBlue text-2xl py-3 px-4 bg-[#F4F9FF] rounded">
                {stat.icon}
              </span>
              <div className="text-right">
                <p className="text-[22px] font-bold text-primaryBlue">
                  {stat.title}
                </p>
                <p className="text-sm font-medium">{stat.data}</p>
              </div>
            </div>
          ))}
        </div> */}
       <DashboardStats/>
        {/* Analytics */}
        {/* <div className="bg-white p-6 shadow rounded">
        <h3 className="text-lg font-bold mb-4">Analytics & Reporting</h3>
        <div className="flex items-center">
          <div className="w-1/3">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">54%</p>
              <p>Performance</p>
            </div>
          </div>
          <div className="w-2/3">
            <p>Total Views: 1458</p>
            <p>Total Applications: 1458</p>
          </div>
        </div>
      </div> */}
        <div className="grid grid-cols-12 w-full gap-2 ">
          {/* <div className="col-span-7">
        <AnalyticsReporting />
        </div> */}
          <div className="col-span-5">{/* <DashboardNotifications/> */}</div>
        </div>
        {/* Recent Applicants */}
        {/* <RecentApplicants/> */}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
