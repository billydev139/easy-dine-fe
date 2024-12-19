/* eslint-disable react/prop-types */
import { useState } from "react";
import DashboardSidebar from "../components/dashboardComponents/dashboardSidebar";
import DashboardHeader from "../components/dashboardComponents/dashboardHeader";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#07051B] p-8">
      <div className="flex min-h-screen ">
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="relative flex flex-1 flex-col ">
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
