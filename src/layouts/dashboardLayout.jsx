/* eslint-disable react/prop-types */
import { useState } from "react";
import DashboardSidebar from "../components/dashboardComponents/dashboardSidebar";
import DashboardHeader from "../components/dashboardComponents/dashboardHeader";



const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#171717] p-8">
      <div className="flex h-screen overflow-hidden">
        <DashboardSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <DashboardHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <main>
            <div className="mx-auto max-w-screen-2xl ">
              {children}
            </div>
          </main>
          {/* <DashboardFooter /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
