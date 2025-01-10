/* eslint-disable react/prop-types */
import { useState } from "react";
import DashboardSidebar from "../components/dashboardComponents/dashboardSidebar";
import DashboardHeader from "../components/dashboardComponents/dashboardHeader";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useSelector((state) => state?.theme?.theme);
  return (
    <div className={` transition duration-150 p-8 ${theme === 'dark' ? 'bg-[#07051b]' : 'bg-[#f2f7ff] '}`}>
      <div className="flex min-h-screen ">
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="relative flex flex-1 flex-col overflow-auto">
          <DashboardHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <main>
            <div className="mx-auto min-w-screen-2xl">{children}</div>
          </main>
          {/* <DashboardFooter /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
