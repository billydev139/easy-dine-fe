'use client';

import { useState } from 'react';
import {
  Search,
  Download,
  Smartphone,
  TrendingUp,
  Award,
  Utensils,
  CookingPot,
  TrendingUpIcon,
} from 'lucide-react';
import DashboardLayout from '../../../layouts/dashboardLayout';
import ReservationSystem from './reservation-system';
import TableList from './table-list';
import MultiLocationManagement from './multiLocation-management';

export default function ModulesExtensions() {
  const [activeTab, setActiveTab] = useState('Reports');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'Reports', label: 'Reports' },
    { id: 'ReservationSystem', label: 'Reservation System' },
    { id: 'TableList', label: 'Table List' },
    { id: 'MultiLocationManagement', label: 'Multi-location Management' },
  ];

  const reportData = [
    {
      id: 1,
      title: 'Reservations System',
      description: 'Daily, weekly, and monthly revenue breakdowns',
      icon: (
        <div className='bg-[#19DB8C33] p-4 rounded-full'>
          <CookingPot className='w-6 h-6 text-[#19DB8C]' />
        </div>
      ),
    },
    {
      id: 2,
      title: 'Mobile Guest App',
      description: 'Individual staff member statistics and metrics',
      icon: (
        <div className='bg-[#00AFEC33] p-4 rounded-full'>
          <Smartphone className='w-6 h-6 text-[#00AFEC]' />
        </div>
      ),
    },
    {
      id: 3,
      title: 'POS Integration',
      description: 'Comprehensive financial reports for accounting',
      icon: (
        <div className='bg-[#5B3CCC33] p-4 rounded-full'>
          <TrendingUp className='w-6 h-6 text-[#5B3CCC]' />
        </div>
      ),
    },
    {
      id: 4,
      title: 'Loyalty Programm',
      description: 'Sales data by time, category, and staff member',
      icon: (
        <div className='bg-[#F4C62D33] p-4 rounded-full'>
          <Award className='w-6 h-6 text-[#F4C62D]' />
        </div>
      ),
    },
    {
      id: 5,
      title: 'Advanced Analytics',
      description: 'Comprehensive financial reports for accounting',
      icon: (
        <div className='bg-[#E54B4733] p-4 rounded-full'>
          <TrendingUpIcon className='w-6 h-6 text-[#E54B47]' />
        </div>
      ),
    },
    {
      id: 6,
      title: 'Restaurant System',
      description: 'Sales data by time, category, and staff member',
      icon: (
        <div className='bg-[#19DB8C33] p-4 rounded-full'>
          <Utensils className='w-6 h-6 text-[#19DB8C]' />
        </div>
      ),
    },
  ];

  const filteredReports = reportData.filter(
    report =>
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownloadCSV = reportId => {
    console.log(`Downloading CSV for report ID: ${reportId}`);
    // In a real application, this would trigger the CSV download
  };

  const handleDownloadAll = () => {
    console.log('Downloading all reports');
    // In a real application, this would trigger all reports download
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Reports':
        return (
          <div className='mt-6 bg-white px-5 pt-5 pb-12 rounded-md'>
            <h2 className='text-xl font-semibold text-[#131313]'>Available Reports</h2>
            <p className='text-[#131313] text-sm mt-1'>
              Lorem ipsum dolor sit amet, consectetur
            </p>

            <div className='flex justify-between items-center mt-4 mb-6'>
              <div className='relative w-full max-w-md'>
                <input
                  type='text'
                  placeholder='Search for name, id......'
                  className='w-full py-2 px-4 pr-10 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] placeholder:text-[#131313] placeholder:text-sm outline-none'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <Search className='absolute right-3 top-2.5 text-[#131313] w-5 h-5' />
              </div>

              <button
                onClick={handleDownloadAll}
                className='flex items-center text-sm font-semibold gap-2 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white px-10 py-2 rounded-xl'
              >
                <Download className='w-4 h-4 mr-4' />
                <span>All</span>
              </button>
            </div>

            <div className='space-y-0'>
              {filteredReports.map(report => (
                <div key={report.id} className='border-b border-gray-100 py-4'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                      {report.icon}
                      <div>
                        <h3 className='text-[#1A2042] text-lg font-semibold pb-1'>
                          {report.title}
                        </h3>
                        <p className='text-[#8A8B9F] text-xs'>{report.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownloadCSV(report.id)}
                      className='border border-[#C1C1C1C1] rounded-[10px] px-12 py-2 text-[#131313] text-sm font-medium shadow-md shadow-[#0000001A] hover:bg-gray-100'
                    >
                      CSV
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'ReservationSystem':
        return <ReservationSystem />;
      case 'TableList':
        return <TableList />;
      case 'MultiLocationManagement':
        return <MultiLocationManagement />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className='flex gap-x-8 my-7'>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`pb-2 px-2.5 relative ${
              activeTab === tab.id
                ? 'text-[#00925C] font-bold text-lg'
                : 'text-[#717B8C] hover:text-gray-700 text-base font-medium'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-green-600'></div>
            )}
          </button>
        ))}
      </div>
      <div className='mb-6'>{renderTabContent()}</div>
    </DashboardLayout>
  );
}
