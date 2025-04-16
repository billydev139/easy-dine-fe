'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Trash2,
  RotateCcw,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Hourglass,
  CalendarDays,
  History,
} from 'lucide-react';

export default function TrashStaff() {
  // Tab state
  //   const [activeTab] = useState('All');

  // Dropdown states
  const [selectedItem, setSelectedItem] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter1, setTimeFilter1] = useState('All Time');
  const [timeFilter2, setTimeFilter2] = useState('All Status');
  const [showTimeFilter1, setShowTimeFilter1] = useState(false);
  const [showTimeFilter2, setShowTimeFilter2] = useState(false);
  const timeFilter1Ref = useRef(null);
  const timeFilter2Ref = useRef(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Data states
  const [deletedItems, setDeletedItems] = useState([
    {
      id: 1,
      category: 'Orders',
      name: 'Bottled Soda',
      dateDeleted: 'May 31, 2015',
      timeLeft: '10 Days',
      status: 'In Trash',
    },
    {
      id: 2,
      category: 'Orders',
      name: 'Bottled Soda',
      dateDeleted: 'September 9, 2013',
      timeLeft: '11 Days',
      status: 'In Trash',
    },
    {
      id: 3,
      category: 'Orders',
      name: 'Milkshake',
      dateDeleted: 'November 16, 2014',
      timeLeft: '4 Days',
      status: 'In Trash',
    },
    {
      id: 4,
      category: 'Orders',
      name: 'Sparkling Water',
      dateDeleted: 'December 19, 2013',
      timeLeft: '10 Days',
      status: 'In Trash',
    },
    {
      id: 5,
      category: 'Orders',
      name: 'Fountain Drink',
      dateDeleted: 'March 6, 2018',
      timeLeft: '1 Day',
      status: 'Expiring soon',
    },
    {
      id: 6,
      category: 'Orders',
      name: 'Root Beer Float',
      dateDeleted: 'February 28, 2018',
      timeLeft: '1 Day',
      status: 'Expiring soon',
    },
    {
      id: 7,
      category: 'Orders',
      name: 'Sparkling Water',
      dateDeleted: 'December 19, 2013',
      timeLeft: '2 Days',
      status: 'In Trash',
    },
    {
      id: 8,
      category: 'Menu Items',
      name: 'Fountain Drink',
      dateDeleted: 'March 6, 2018',
      timeLeft: '2 Days',
      status: 'Expiring soon',
    },
    {
      id: 9,
      category: 'Manufacturing',
      name: 'Fountain Drink',
      dateDeleted: 'February 28, 2018',
      timeLeft: '3 Days',
      status: 'Expiring soon',
    },
    {
      id: 10,
      category: 'Menu Items',
      name: 'Bottled Soda',
      dateDeleted: 'May 31, 2015',
      timeLeft: '10 Days',
      status: 'In Trash',
    },
    {
      id: 11,
      category: 'Menu Items',
      name: 'Bottled Soda',
      dateDeleted: 'September 9, 2013',
      timeLeft: '11 Days',
      status: 'In Trash',
    },
    {
      id: 12,
      category: 'Menu Items',
      name: 'Milkshake',
      dateDeleted: 'November 16, 2014',
      timeLeft: '4 Days',
      status: 'In Trash',
    },
    {
      id: 13,
      category: 'Menu Items',
      name: 'Sparkling Water',
      dateDeleted: 'December 19, 2013',
      timeLeft: '10 Days',
      status: 'In Trash',
    },
    {
      id: 14,
      category: 'Menu Items',
      name: 'Fountain Drink',
      dateDeleted: 'March 6, 2018',
      timeLeft: '1 Day',
      status: 'Expiring soon',
    },
    {
      id: 15,
      category: 'Menu Items',
      name: 'Root Beer Float',
      dateDeleted: 'February 28, 2018',
      timeLeft: '1 Day',
      status: 'Expiring soon',
    },
    {
      id: 16,
      category: 'Menu Items',
      name: 'Sparkling Water',
      dateDeleted: 'December 19, 2013',
      timeLeft: '2 Days',
      status: 'In Trash',
    },
  ]);

  // Stats data
  const stats = [
    {
      title: 'Total Deleted Items',
      value: '1,642',
      change: '+1 times from yesterday',
      icon: <Trash2 className='w-6 h-6 text-[#E54B47]' />,
      bgColor: 'bg-[#FCEDED]',
    },
    {
      title: 'Expiring Soon',
      value: '8,716',
      change: '+13.55% from yesterday',
      icon: <Hourglass className='w-6 h-6 text-[#F4C62D]' />,
      bgColor: 'bg-[#F4C62D33]',
    },
    {
      title: 'Monthly Items',
      value: '3,521',
      change: '+13.6% from yesterday',
      icon: <CalendarDays className='w-6 h-6 text-[#00AFEC]' />,
      bgColor: 'bg-[#00AFEC33]',
    },
    {
      title: 'Recovered Items',
      value: '30,521',
      change: '+13.6% from yesterday',
      icon: <History className='w-6 h-6 text-[#5B3CCC]' />,
      bgColor: 'bg-[#5B3CCC33]',
    },
  ];

  // Filter options
  const timeFilterOptions = ['All Time', 'Last 7 Days', 'Last 30 Days', 'Last 90 Days'];
  const statusFilterOptions = ['All Status', 'In Trash', 'Expiring soon'];

  // Tab content data

  // Filter items based on search query and filters
  const filteredItems = deletedItems.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toString().includes(searchQuery);

    const matchesTimeFilter =
      timeFilter1 === 'All Time' ||
      (timeFilter1 === 'Last 7 Days' && Number.parseInt(item.timeLeft) <= 7) ||
      (timeFilter1 === 'Last 30 Days' && Number.parseInt(item.timeLeft) <= 30) ||
      (timeFilter1 === 'Last 90 Days' && Number.parseInt(item.timeLeft) <= 90);

    const matchesStatusFilter =
      timeFilter2 === 'All Status' || item.status === timeFilter2;

    return matchesSearch && matchesTimeFilter && matchesStatusFilter;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle dropdown menu for item actions
  const handleMoreClick = (e, item) => {
    e.stopPropagation();
    setSelectedItem(item.id);
    setDropdownOpen(true);
  };

  // Handle item actions
  const handleRestore = itemId => {
    // In a real app, you would call an API to restore the item
    // For this demo, we'll just remove it from the deleted items list
    setDeletedItems(deletedItems.filter(item => item.id !== itemId));
    setDropdownOpen(false);
  };

  const handlePermanentDelete = itemId => {
    // In a real app, you would call an API to permanently delete the item
    // For this demo, we'll just remove it from the deleted items list
    setDeletedItems(deletedItems.filter(item => item.id !== itemId));
    setDropdownOpen(false);
  };

  const handleEmptyTrash = () => {
    // In a real app, you would call an API to empty the trash
    // For this demo, we'll just remove all items
    setDeletedItems([]);
  };

  // Handle clicks outside of dropdowns
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }

      if (timeFilter1Ref.current && !timeFilter1Ref.current.contains(event.target)) {
        setShowTimeFilter1(false);
      }

      if (timeFilter2Ref.current && !timeFilter2Ref.current.contains(event.target)) {
        setShowTimeFilter2(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, timeFilter1, timeFilter2, itemsPerPage]);

  // Helper functions
  const getStatusColor = status => {
    if (status === 'In Trash') return 'text-green-500';
    if (status === 'Expiring soon') return 'text-red-500';
    return 'text-gray-500';
  };

  const getStatusDot = status => {
    if (status === 'In Trash') return 'bg-green-500';
    if (status === 'Expiring soon') return 'bg-red-500';
    return 'bg-gray-500';
  };

  // tab content
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='rounded-lg py-5 px-6 bg-white shadow flex items-start justify-between'
          >
            <div>
              <p className='text-sm font-medium text-[#1A2042] mb-1'>{stat.title}</p>
              <h3 className='text-xl text-[#1A2042] font-bold mb-1.5'>{stat.value}</h3>
              <p className='text-xs font-medium text-[#19DB8C]'>{stat.change}</p>
            </div>
            <div className={`${stat.bgColor} p-3 rounded-full`}>{stat.icon}</div>
          </div>
        ))}
      </div>

      <div>
        <div className='bg-white rounded-md p-5'>
          <div className='bg-white pb-4 flex items-center'>
            <Trash2 className='text-[#131313] size-5 mr-2' />
            <span className='font-medium text-[#131313] mr-2'>Trash:</span>
            <span className='text-[#8A8B9F]'>
              Task that have been in Trash for 30 days will be automatically Deleted
            </span>

            <button
              className='ml-auto border border-[#E54B47] bg-[#E54B471A] hover:bg-red-600 hover:text-white text-[#E54B47] px-5 py-2 rounded-md text-sm font-medium flex items-center'
              onClick={handleEmptyTrash}
            >
              <Trash2 className='w-4 h-4 mr-2' /> Empty Trash
            </button>
          </div>
          <h2 className='text-lg font-semibold text-[#131313]'>Deleted Items</h2>
          <p className='text-sm text-[#131313] mb-5'>
            You can see the deleted items moved to trash
          </p>
          <div className='flex flex-col justify-between md:flex-row gap-4 mb-9'>
            <div className='relative w-full max-w-md'>
              <input
                type='text'
                placeholder='Search for name, id......'
                className='w-full py-2 px-4 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] placeholder:text-[#131313] placeholder:text-sm outline-none'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <Search className='absolute right-3 top-2.5 text-[#131313] w-5 h-5' />
            </div>
            <div className='flex gap-4'>
              <div className='relative w-full md:w-48' ref={timeFilter1Ref}>
                <button
                  className='w-full flex items-center justify-between px-4 py-2 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF]'
                  onClick={() => setShowTimeFilter1(!showTimeFilter1)}
                >
                  <span className='text-[#131313]'>{timeFilter1}</span>
                  <ChevronDown className='w-4 h-4 text-[#131313]' />
                </button>
                {showTimeFilter1 && (
                  <div className='absolute z-10 w-full mt-1 bg-white border border-[#C1C1C1] rounded-md shadow-lg'>
                    {timeFilterOptions.map(option => (
                      <button
                        key={option}
                        className='w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                        onClick={() => {
                          setTimeFilter1(option);
                          setShowTimeFilter1(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className='relative w-full md:w-48' ref={timeFilter2Ref}>
                <button
                  className='w-full flex items-center justify-between px-4 py-2 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF]'
                  onClick={() => setShowTimeFilter2(!showTimeFilter2)}
                >
                  <span className='text-[#131313]'>{timeFilter2}</span>
                  <ChevronDown className='w-4 h-4 text-[#131313]' />
                </button>
                {showTimeFilter2 && (
                  <div className='absolute z-10 w-full mt-1 bg-white border border-[#C1C1C1] rounded-md shadow-lg'>
                    {statusFilterOptions.map(option => (
                      <button
                        key={option}
                        className='w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                        onClick={() => {
                          setTimeFilter2(option);
                          setShowTimeFilter2(false);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          {filteredItems.length === 0 ? (
            <div className='text-center py-8'>
              <Trash2 className='w-12 h-12 text-gray-300 mx-auto mb-4' />
              <h3 className='text-lg font-medium text-gray-500'>No items found</h3>
              <p className='text-gray-400'>
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
            </div>
          ) : (
            <div className='overflow-x-auto'>
              <table className='min-w-full'>
                <thead>
                  <tr className='bg-[#EEF5FF]'>
                    <th className='px-4 py-3 text-left text-base font-semibold text-[#000000]'>
                      Category
                    </th>
                    <th className='px-4 py-3 text-left text-base font-semibold text-[#000000]'>
                      Item Name
                    </th>
                    <th className='px-4 py-3 text-left text-base font-semibold text-[#000000]'>
                      Date Deleted
                    </th>
                    <th className='px-4 py-3 text-left text-base font-semibold text-[#000000]'>
                      Time Left
                    </th>
                    <th className='px-4 py-3 text-left text-base font-semibold text-[#000000]'>
                      Status
                    </th>
                    <th className='px-4 py-3 text-left text-base font-semibold text-[#000000]'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map(item => (
                    <tr key={item.id} className='border-b border-[#E1E1E1]'>
                      <td className='px-4 py-4 text-sm'>
                        <div className='flex items-center'>{item.category}</div>
                      </td>
                      <td className='px-4 py-4 text-sm text-[#000000]'>{item.name}</td>
                      <td className='px-4 py-4 text-sm text-[#000000]'>
                        {item.dateDeleted}
                      </td>
                      <td className='px-4 py-4 text-sm text-[#000000]'>
                        {item.timeLeft}
                      </td>
                      <td className='px-4 py-4 text-sm text-[#000000]'>
                        <div className='flex items-center'>
                          <span
                            className={`w-2 h-2 rounded-full ${getStatusDot(
                              item.status
                            )} mr-2`}
                          ></span>
                          <span className={getStatusColor(item.status)}>
                            {item.status}
                          </span>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm relative'>
                        <button
                          className='p-1 hover:bg-gray-100 rounded-full'
                          onClick={e => handleMoreClick(e, item)}
                        >
                          <MoreVertical className='w-4 h-4 text-gray-500' />
                        </button>
                        {dropdownOpen && selectedItem === item.id && (
                          <div
                            ref={dropdownRef}
                            className='absolute z-10 w-48 bg-white rounded-lg border py-1'
                            style={{
                              right: '80%',
                            }}
                          >
                            <button
                              className='flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              onClick={() => handleRestore(item.id)}
                            >
                              <div className='bg-gray-800 text-white p-1 rounded mr-2'>
                                <RotateCcw className='w-4 h-4' />
                              </div>
                              Restore
                            </button>
                            <button
                              className='flex items-center w-full px-3.5 py-2 text-sm text-red-500 hover:bg-gray-100'
                              onClick={() => handlePermanentDelete(item.id)}
                            >
                              <div className='bg-red-100 text-red-500 p-1 rounded mr-2'>
                                <Trash2 className='w-4 h-4' />
                              </div>
                              Permanently Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className='flex items-center justify-end gap-x-3 mt-8 mb-12'>
            <div className='text-sm text-[#131313]'>
              Results Per Page
              <select
                className='ml-2 bg-[#EEF5FF] rounded-xl px-4 py-1'
                value={itemsPerPage}
                onChange={e => setItemsPerPage(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
            <div className='flex items-center'>
              <span className='text-sm text-[#131313] mr-4'>
                {filteredItems.length > 0
                  ? `${startIndex + 1}-${Math.min(endIndex, filteredItems.length)} Of ${
                      filteredItems.length
                    }`
                  : '0-0 Of 0'}
              </span>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`p-1 rounded ${
                  currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className='w-5 h-5' />
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`p-1 rounded ${
                  currentPage === totalPages || totalPages === 0
                    ? 'text-gray-300'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                <ChevronRight className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
