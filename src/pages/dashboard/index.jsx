import DashboardLayout from '../../layouts/dashboardLayout';
import CustomerMap from './customerMap';
import DashboardStats from './dashboardStats';
import RecentOrders from './recentOrders';
import RevenueChart from './revenueChart';

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
      <div className=''>
        <DashboardStats />
        <div className='grid grid-cols-2 gap-4'>
          <RevenueChart />
          <CustomerMap />
        </div>
        <RecentOrders />
        <div className='grid grid-cols-12 w-full gap-2 '></div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
