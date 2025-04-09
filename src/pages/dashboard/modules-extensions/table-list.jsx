'use client';

import { useState } from 'react';
import {
  Search,
  Plus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

export default function TableList() {
  // Sample data for the table - exactly matching the image
  const initialData = [
    {
      id: 1,
      date: '59217',
      name: 'Table 1',
      description: 'This Table is for 2 People',
      status: 'Active',
    },
    {
      id: 2,
      date: '59217',
      name: 'Table 2',
      description: 'This Table is for 5 People',
      status: 'Pending',
    },
    {
      id: 3,
      date: '59217',
      name: 'Table 3',
      description: 'This Table is for 5 People',
      status: 'Pending',
    },
    {
      id: 4,
      date: '59217',
      name: 'Table 4',
      description: 'This Table is for 3 People',
      status: 'Not Active',
    },
    {
      id: 5,
      date: '59217',
      name: 'Table 5',
      description: 'This Table is for 5 People',
      status: 'Active',
    },
    {
      id: 6,
      date: '59217',
      name: 'Table 6',
      description: 'This Table is for 5 People',
      status: 'Active',
    },
    {
      id: 7,
      date: '59217',
      name: 'Table 7',
      description: 'This Table is for 3 People',
      status: 'Not Active',
    },
    {
      id: 8,
      date: '59217',
      name: 'Table 8',
      description: 'This Table is for 5 People',
      status: 'Active',
    },
    {
      id: 9,
      date: '59217',
      name: 'Table 9',
      description: 'This Table is for 5 People',
      status: 'Active',
    },
    {
      id: 10,
      date: '59217',
      name: 'Table 10',
      description: 'This Table is for 3 People',
      status: 'Not Active',
    },
  ];

  // State for search, pagination, and data
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [data, setData] = useState(initialData);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter data based on search term
  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = 16; // Total items as shown in the image (1 - 10 Of 16)

  // Handle page change
  const handlePageChange = newPage => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Add new table function
  const handleAddTable = () => {
    const newId = data.length + 1;
    const newTable = {
      id: newId,
      date: '59217',
      name: `Table ${(newId % 4) + 1}`,
      description: `This Table is for ${(newId % 3) + 2} People`,
      status: ['Active', 'Pending', 'Not Active'][Math.floor(Math.random() * 3)],
    };
    setData([...data, newTable]);
  };

  // Render status indicator based on status value - exact colors from the image
  const renderStatus = status => {
    switch (status) {
      case 'Active':
        return (
          <div className='flex items-center'>
            <div className='size-2 rounded-full bg-[#17EFA0] mr-2'></div>
            <span>Active</span>
          </div>
        );
      case 'Pending':
        return (
          <div className='flex items-center'>
            <div className='size-2 rounded-full bg-[#F4C62D] mr-2'></div>
            <span>Pending</span>
          </div>
        );
      case 'Not Active':
        return (
          <div className='flex items-center'>
            <div className='size-2 rounded-full bg-[#E54B47] mr-2'></div>
            <span>Not Active</span>
          </div>
        );
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <>
      <div className='bg-white min-h-screen rounded-lg p-4'>
        {/* Header */}
        <div className='flex items-center mb-5'>
          <div>
            <h1 className='text-xl font-semibold text-gray-900'>Table List</h1>
            <p className='text-sm text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>

        <div className='flex justify-between gap-4 mb-9'>
          {/* Search Bar - exactly as in the image */}
          <div className='relative w-full max-w-md'>
            <input
              type='text'
              placeholder='Search by Customer Name, Table, or Order...'
              className='w-full py-2 px-4 pr-10 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] placeholder:text-[#131313] placeholder:text-sm outline-none'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Search className='absolute right-3 top-2.5 text-[#131313] w-5 h-5' />
          </div>

          {/* Add Table Button - dark blue with plus icon as in the image */}
          <button
            onClick={handleAddTable}
            className='flex items-center justify-center gap-2 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white px-4 py-2 rounded-xl'
          >
            <span className='text-sm'>Add Table</span>
            <Plus className='size-5' />
          </button>
        </div>

        {/* Table - with exact styling from the image */}
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-[#EEF5FF]'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left font-semibold text-[#131313]'
                >
                  Date Updated
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left font-semibold text-[#131313]'
                >
                  Name
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left font-semibold text-[#131313]'
                >
                  Description
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left font-semibold text-[#131313]'
                >
                  Status
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left font-semibold text-[#131313]'
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {currentItems.map(item => (
                <tr key={item.id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {item.date}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    {item.name}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {item.description}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    {renderStatus(item.status)}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                    <button className='text-gray-400 hover:text-gray-600'>
                      <MoreVertical className='h-5 w-5' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - exactly matching the image */}
        <div className='flex justify-end gap-x-5 items-center mt-6 px-4'>
          <div className='flex items-center mb-4 sm:mb-0'>
            <span className='text-sm text-gray-700 mr-2'>Results Per Page</span>
            <div className='relative inline-block'>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='appearance-none bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl px-4 py-0.5 text-sm outline-none flex items-center'
              >
                <span>{itemsPerPage}</span>
                <ChevronDown className='h-4 w-4 text-gray-500 ml-2' />
              </button>

              {isDropdownOpen && (
                <div className='absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg'>
                  <div className='py-1'>
                    <button
                      onClick={() => {
                        setItemsPerPage(4);
                        setIsDropdownOpen(false);
                      }}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                    >
                      4
                    </button>
                    <button
                      onClick={() => {
                        setItemsPerPage(8);
                        setIsDropdownOpen(false);
                      }}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                    >
                      8
                    </button>
                    <button
                      onClick={() => {
                        setItemsPerPage(12);
                        setIsDropdownOpen(false);
                      }}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                    >
                      12
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className='flex items-center'>
            <span className='text-sm text-gray-700 mr-4'>1 - 10 Of 16</span>
            <div className='flex'>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-1 rounded-md ${
                  currentPage === 1 ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className='h-5 w-5' />
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
                className={`p-1 rounded-md text-gray-700 hover:bg-gray-100`}
              >
                <ChevronRight className='h-5 w-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
