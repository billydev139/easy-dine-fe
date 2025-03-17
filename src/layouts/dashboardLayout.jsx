/* eslint-disable react/prop-types */
import { useState } from 'react';
import DashboardSidebar from '../components/dashboardComponents/dashboardSidebar';
import DashboardHeader from '../components/dashboardComponents/dashboardHeader';
import { useSelector } from 'react-redux';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = useSelector(state => state?.theme?.theme);

  return (
    <div
      className={`transition duration-150 min-h-screen ${
        theme === 'dark' ? 'bg-[#07051b]' : 'bg-[#f2f7ff]'
      }`}
    >
      <div className='flex min-h-screen relative overflow-hidden'>
        {/* Sidebar */}
        <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className='flex-1 flex flex-col w-full'>
          {/* Header */}
          <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Main Content */}
          <main className='flex-grow px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto w-full'>{children}</div>
          </main>

          {/* Footer (optional) */}
          {/* Uncomment if needed */}
          {/* <DashboardFooter /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
