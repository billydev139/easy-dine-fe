'use client';

import { useState } from 'react';
import {
  Search,
  Download,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MoreVertical,
} from 'lucide-react';

export default function MultiLocationManagement() {
  // Sample data for the table
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: 'Red Stiletto Restaurant',
      address: '6080 Steubenville Pike',
      email: 'tgnzl@freesourcecodes.com',
      status: 'Active',
      manager: 'Mr John',
    },
    {
      id: 2,
      name: 'The Nouveau Table',
      address: 'An den Wulzen 7',
      email: 'tgnzl@gmel.com',
      status: 'Active',
      manager: 'Mr Smith',
    },
    {
      id: 3,
      name: 'Red Stiletto Restaurant',
      address: 'Red Stiletto Restaurant',
      email: 'iendnx@codes.com',
      status: 'Active',
      manager: 'Mr Johnson',
    },
    {
      id: 4,
      name: 'The Nouveau Table',
      address: '1663 Small Street',
      email: 'poensu@qamil.com',
      status: 'Active',
      manager: 'Mr John',
    },
    {
      id: 5,
      name: 'The Winstonian',
      address: '4512 Hamilton Drive',
      email: 'sdafa@fmieaes.com',
      status: 'Active',
      manager: 'Mr Johnson',
    },
    {
      id: 6,
      name: 'Fauna Kitchen',
      address: '1058 Buffalo Creek Road',
      email: 'tgnzl@fremmial.com',
      status: 'Not Active',
      manager: 'Mr Johnson',
    },
    {
      id: 7,
      name: 'The Nouveau Table',
      address: '1831 Flint Street',
      email: 'opeio@email.com',
      status: 'Not Active',
      manager: 'Mr Johnson',
    },
    {
      id: 8,
      name: "Duke's Table",
      address: '2560 Primrose Lane',
      email: 'tgnzl@meailscodes.com',
      status: 'Active',
      manager: 'Mr Johnson',
    },
    {
      id: 9,
      name: 'Alpine-Style Cuisine',
      address: '1720 Diane Street',
      email: 'tgnzl@freesourcecodes.com',
      status: 'Active',
      manager: 'Mr Johnson',
    },
    {
      id: 10,
      name: 'The Nouveau Table',
      address: '2164 Southside Lane',
      email: 'tgnzl@freesourcecodes.com',
      status: 'Active',
      manager: 'Mr Johnson',
    },
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(4);
  const totalItems = 16; // Total number of items as shown in the UI

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Handle page change
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(totalItems / resultsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate displayed items range
  const startItem = (currentPage - 1) * resultsPerPage + 1;
  const endItem = Math.min(currentPage * resultsPerPage, totalItems);

  return (
    <div className='bg-white rounded-lg min-h-screen px-4 py-8'>
      {/* Header */}
      <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-8'>
        <div>
          <h1 className='text-xl font-bold text-[#131313]'>Multi Location Management</h1>
          <p className='text-[#131313] text-sm'>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 mt-4 md:mt-0'>
          <div className='relative w-full max-w-md'>
            <input
              type='text'
              placeholder='Search Restaurant'
              className='w-full py-2 px-4 pr-10 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] placeholder:text-[#131313] placeholder:text-sm outline-none'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Search className='absolute right-3 top-2.5 text-[#131313] w-5 h-5' />
          </div>

          <button className='flex items-center justify-center gap-2 bg-[#0075FF] hover:bg-[#0055FF] text-white px-4 py-2 rounded-xl'>
            <Download className='h-5 w-5' />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border-collapse'>
          <thead>
            <tr className='bg-[#EEF5FF]'>
              <th className='py-3 px-4 text-left'>Restaurant Name</th>
              <th className='py-3 px-4 text-left'>Address</th>
              <th className='py-3 px-4 text-left'>Email</th>
              <th className='py-3 px-4 text-left'>Status</th>
              <th className='py-3 px-4 text-left'>Manager Name</th>
              <th className='py-3 px-4 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map(restaurant => (
              <tr
                key={restaurant.id}
                className='border-b border-[#E1E1E1] hover:bg-gray-50'
              >
                <td className='py-3.5 px-4 text-[#131313]'>{restaurant.name}</td>
                <td className='py-3.5 px-4 text-[#131313]'>{restaurant.address}</td>
                <td className='py-3.5 px-4 text-[#131313]'>{restaurant.email}</td>
                <td className='py-3.5 px-4'>
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      restaurant.status === 'Active' ? 'text-[#17EFA0]' : 'text-[#E54B47]'
                    }`}
                  >
                    {restaurant.status}
                  </span>
                </td>
                <td className='py-3 px-4'>{restaurant.manager}</td>
                <td className='px-3 py-4 whitespace-nowrap text-sm text-gray-500'>
                  <button className='text-gray-400 hover:text-gray-600'>
                    <MoreVertical className='h-5 w-5' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex justify-end gap-x-5 items-center mt-12'>
        <div className='mb-4 sm:mb-0'>
          <span className='text-[#131313] text-sm font-medium'>Results Per Page</span>
          <div className='inline-block relative ml-2'>
            <button className='border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl px-4 py-0.5 flex items-center gap-2'>
              {resultsPerPage}
              <ChevronDown className='h-4 w-4' />
            </button>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <span className='text-[#131313] text-sm'>
            {startItem} - {endItem} Of {totalItems}
          </span>
          <div className='flex gap-2'>
            <button
              onClick={handlePrevPage}
              className='p-1 rounded-md hover:bg-gray-100'
              disabled={currentPage === 1}
            >
              <ChevronLeft className='h-5 w-5 text-[#131313]' />
            </button>
            <button
              onClick={handleNextPage}
              className='p-1 rounded-md hover:bg-gray-100'
              disabled={endItem === totalItems}
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
