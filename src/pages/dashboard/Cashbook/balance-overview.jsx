'use client';

import { useState, useEffect } from 'react';
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  ArrowUpRight,
  PencilLine,
  X,
} from 'lucide-react';
import { PiMedalMilitary } from 'react-icons/pi';
import { GoGoal } from 'react-icons/go';

export default function BalanceOverview() {
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('Monthly');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showPerPageDropdown, setShowPerPageDropdown] = useState(false);

  // State for goals modal
  const [showGoalsModal, setShowGoalsModal] = useState(false);
  const [targetAmount, setTargetAmount] = useState('');
  const [presetAmount, setPresetAmount] = useState('');

  // Sample transaction data
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      itemName: 'Beta Gadget',
      shopName: 'Global Store',
      date: 'May 31, 2015',
      paymentMethod: 'Luqapay Havale/EFT',
      amount: 230.0,
      positive: true,
    },
    {
      id: 2,
      itemName: 'Epsilon Instrument',
      shopName: 'Trendy Trove Shop',
      date: 'September 9, 2013',
      paymentMethod: 'Fast QR',
      amount: 11.45,
      positive: true,
    },
    {
      id: 3,
      itemName: 'Eta Gizmo',
      shopName: 'Elite Bazaar Hub',
      date: 'November 16, 2014',
      paymentMethod: 'Ecopayz',
      amount: 12.2,
      positive: true,
    },
    {
      id: 4,
      itemName: 'Theta Module',
      shopName: 'Nik Shop',
      date: 'December 19, 2013',
      paymentMethod: 'CepBank',
      amount: 54.99,
      positive: true,
    },
    {
      id: 5,
      itemName: 'Iota Component',
      shopName: 'Digital Dress Room',
      date: 'March 6, 2018',
      paymentMethod: 'Paysafecard',
      amount: 33.7,
      positive: false,
    },
    {
      id: 6,
      itemName: 'Kappa Mechanism',
      shopName: 'Echo Emporium',
      date: 'February 28, 2018',
      paymentMethod: 'Luqapay',
      amount: 29.99,
      positive: false,
    },
    {
      id: 7,
      itemName: 'Theta Module',
      shopName: 'Nik Shop',
      date: 'December 19, 2013',
      paymentMethod: 'CepBank',
      amount: 54.99,
      positive: true,
    },
    {
      id: 8,
      itemName: 'Iota Component',
      shopName: 'Digital Dress Room',
      date: 'March 6, 2018',
      paymentMethod: 'Paysafecard',
      amount: 33.7,
      positive: false,
    },
    {
      id: 9,
      itemName: 'Kappa Mechanism',
      shopName: 'Echo Emporium',
      date: 'February 28, 2018',
      paymentMethod: 'Luqapay',
      amount: 29.99,
      positive: false,
    },
    {
      id: 10,
      itemName: 'Lambda Device',
      shopName: 'Tech Haven',
      date: 'April 15, 2018',
      paymentMethod: 'CepBank',
      amount: 45.5,
      positive: true,
    },
    {
      id: 11,
      itemName: 'Omega Tool',
      shopName: 'Hardware Plus',
      date: 'June 22, 2018',
      paymentMethod: 'Paysafecard',
      amount: 67.8,
      positive: true,
    },
    {
      id: 12,
      itemName: 'Sigma Accessory',
      shopName: 'Gadget World',
      date: 'July 10, 2018',
      paymentMethod: 'Luqapay',
      amount: 23.45,
      positive: true,
    },
    {
      id: 13,
      itemName: 'Gamma Component',
      shopName: 'Electronic Hub',
      date: 'August 5, 2018',
      paymentMethod: 'Fast QR',
      amount: 19.99,
      positive: true,
    },
    {
      id: 14,
      itemName: 'Delta System',
      shopName: 'System Solutions',
      date: 'September 12, 2018',
      paymentMethod: 'Ecopayz',
      amount: 89.95,
      positive: true,
    },
    {
      id: 15,
      itemName: 'Alpha Upgrade',
      shopName: 'Upgrade Center',
      date: 'October 20, 2018',
      paymentMethod: 'Luqapay Havale/EFT',
      amount: 120.0,
      positive: true,
    },
    {
      id: 16,
      itemName: 'Zeta Extension',
      shopName: 'Extension Mart',
      date: 'November 15, 2018',
      paymentMethod: 'CepBank',
      amount: 35.25,
      positive: true,
    },
  ]);

  // Handle opening the goals modal
  const handleOpenGoalsModal = () => {
    setShowGoalsModal(true);
  };

  // Handle closing the goals modal
  const handleCloseGoalsModal = () => {
    setShowGoalsModal(false);
    setTargetAmount('');
    setPresetAmount('');
  };

  // Handle saving the goals
  const handleSaveGoals = () => {
    // Here you would typically update your goals with the new values
    // For this example, we'll just close the modal
    console.log('Saving goals:', { targetAmount, presetAmount });
    handleCloseGoalsModal();
  };

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter(
    transaction =>
      transaction.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.shopName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  // Handle page change
  const handlePageChange = pageNumber => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowFilterDropdown(false);
      setShowPerPageDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Progress calculation for the circular gauge
  const goalAmount = 20000;
  const achievedAmount = 12500;
  const progressPercentage = (achievedAmount / goalAmount) * 100;

  // Calculate the stroke-dasharray and stroke-dashoffset for the circular progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className='my-6'>
      <div className=''>
        {/* Top Section - Balance and Goals */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          {/* Total Balance Card */}
          <div className='bg-white rounded-lg shadow-sm p-7'>
            <h2 className='text-[#171717] text-lg font-medium'>Total Balance</h2>
            <div className='text-2xl text-[#171717] font-bold mb-6'>$240,399</div>

            {/* Credit Card */}
            <div className='bg-[#00925C] rounded-lg p-4 text-white'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <p className='text-[#FFFFFF] opacity-95 text-sm'>Account Type</p>
                  <p className='font-medium'>Credit Card</p>
                  <p className='text-sm mt-1'>•••• •••• •••• ••••</p>
                  <p className='text-sm mt-1'>01 / 26</p>
                </div>
                <div className='flex items-center mt-5'>
                  <div className='relative w-8 h-5'>
                    <div className='w-5 h-5 bg-red-500 rounded-full absolute right-0'></div>
                    <div className='w-5 h-5 bg-yellow-500 rounded-full absolute left-0'></div>
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div></div>
                <div className='flex items-center'>
                  <span className='font-semibold'>$25000</span>
                  <div className='bg-white rounded-full p-1 ml-2 cursor-pointer'>
                    <ArrowUpRight className='text-[#299D91] size-5' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goals Card */}
          <div className='bg-white rounded-lg shadow-sm p-6'>
            <div className='flex flex-col gap-y-1 mb-6'>
              <h2 className='text-gray-700 font-medium'>Goals</h2>
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <span className='text-xl font-bold'>$20,000</span>
                  <div
                    className='bg-blue-500 rounded-md p-1 ml-2 cursor-pointer'
                    onClick={handleOpenGoalsModal}
                  >
                    <PencilLine stroke='white' className='size-5' />
                  </div>
                </div>
                <span className='text-gray-500 text-sm'>May, 2023</span>
              </div>
            </div>

            {/* Target Achieved */}
            <div className='mb-6'>
              <div className='flex items-center gap-x-2 mb-2'>
                <PiMedalMilitary className='size-5 text-[#8A8B9F]' />
                <span className='text-gray-600 text-sm'>Target Achieved</span>
              </div>
              <div className='text-xl font-bold'>$12,500</div>
            </div>

            {/* Circular Progress Gauge */}
            <div className='mb-6'>
              <div className='flex justify-center mb-4'>
                <div className='relative w-24 h-24'>
                  {/* Background circle */}
                  <svg className='w-full h-full' viewBox='0 0 100 100'>
                    <circle
                      cx='50'
                      cy='50'
                      r={radius}
                      fill='none'
                      stroke='#e5e7eb'
                      strokeWidth='8'
                    />
                    {/* Progress circle */}
                    <circle
                      cx='50'
                      cy='50'
                      r={radius}
                      fill='none'
                      stroke='#10b981'
                      strokeWidth='8'
                      strokeLinecap='round'
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      transform='rotate(-90 50 50)'
                    />
                  </svg>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center'>
                      <div className='text-sm font-medium'>12K</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-between text-sm text-gray-500 mb-1'>
                <span>$0</span>
                <span>$20k</span>
              </div>
              <div className='text-center text-sm text-gray-600'>
                Target vs Achievement
              </div>
            </div>

            {/* This month Target */}
            <div>
              <div className='flex items-center gap-x-2 mb-2'>
                <GoGoal className='size-5 text-[#8A8B9F]' />
                <span className='text-[#8A8B9F] text-sm'>This month Target</span>
              </div>
              <div className='text-xl font-bold'>$20,000</div>
            </div>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className='bg-white rounded-lg shadow-sm p-6'>
          <div className='mb-4'>
            <h2 className='text-lg font-medium'>Recent Transactions</h2>
            <p className='text-gray-500 text-sm'>
              Lorem ipsum dolor sit amet, consecteteure
            </p>
          </div>

          {/* Search and Filter */}
          <div className='flex flex-col md:flex-row justify-between mb-6'>
            <div className='relative mb-4 md:mb-0'>
              <input
                type='text'
                placeholder='Search for name, id......'
                className='pl-4 py-2 border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] placeholder:text-[#131313] outline-none w-full md:w-96'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <div className='absolute right-3 top-2.5'>
                <Search size={18} className='text-[#131313] mr-1 mt-0.5' />
              </div>
            </div>

            <div className='relative'>
              <button
                className='flex items-center justify-between px-4 py-2 border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] text-gray-700 w-32'
                onClick={e => {
                  e.stopPropagation();
                  setShowFilterDropdown(!showFilterDropdown);
                }}
              >
                <span>{filterOption}</span>
                <ChevronDown size={16} />
              </button>

              {showFilterDropdown && (
                <div className='absolute right-0 mt-1 w-32 border-[#9EC3FF] rounded-xl bg-[#EEF5FF] shadow-lg z-10'>
                  {['Daily', 'Weekly', 'Monthly', 'Yearly'].map(option => (
                    <div
                      key={option}
                      className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                      onClick={() => {
                        setFilterOption(option);
                        setShowFilterDropdown(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Transactions Table */}
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-[#EEF5FF]'>
                  <th className='text-left py-3 px-4 text-[#000000] font-semibold rounded-l-lg'>
                    Item Name
                  </th>
                  <th className='text-left py-3 px-4 text-[#000000] font-semibold'>
                    Shop Name
                  </th>
                  <th className='text-left py-3 px-4 text-[#000000] font-semibold'>
                    Date
                  </th>
                  <th className='text-left py-3 px-4 text-[#000000] font-semibold'>
                    Payment Method
                  </th>
                  <th className='text-left py-3 px-4 text-[#000000] font-semibold'>
                    Amount
                  </th>
                  <th className='text-left py-3 px-4 text-[#000000] font-semibold rounded-r-lg'></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map(transaction => (
                  <tr
                    key={transaction.id}
                    className='border-b border-gray-100 last:border-0'
                  >
                    <td className='py-4 px-4'>{transaction.itemName}</td>
                    <td className='py-4 px-4'>{transaction.shopName}</td>
                    <td className='py-4 px-4'>{transaction.date}</td>
                    <td className='py-4 px-4'>{transaction.paymentMethod}</td>
                    <td className='py-4 px-4'>
                      <div className='flex items-center'>
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            transaction.positive ? 'bg-[#17EFA0]' : 'bg-[#EF6E6B]'
                          }`}
                        ></div>
                        <span
                          className={
                            transaction.positive ? 'text-[#131313]' : 'text-[#131313]'
                          }
                        >
                          {transaction.positive ? '€' : '-€'}
                          {transaction.amount.toFixed(2)}
                        </span>
                      </div>
                    </td>
                    <td className='py-4 px-4'>
                      <button className='text-gray-500'>
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className='flex flex-col md:flex-row justify-end gap-x-2 items-center mt-6'>
            <div className='mb-4 md:mb-0 text-[#131313] text-sm'>
              Results Per Page
              <div className='relative inline-block'>
                <button
                  className='ml-2 px-3 py-1 bg-[#EEF5FF] rounded-xl font-medium flex items-center'
                  onClick={e => {
                    e.stopPropagation();
                    setShowPerPageDropdown(!showPerPageDropdown);
                  }}
                >
                  10
                  <ChevronDown size={14} className='ml-1' />
                </button>

                {showPerPageDropdown && (
                  <div className='absolute left-2 mt-1 w-16 bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
                    {[5, 10, 15, 20].map(number => (
                      <div
                        key={number}
                        className='px-3 py-1 hover:bg-gray-100 cursor-pointer text-center'
                        onClick={() => {
                          // In a real app, you would update itemsPerPage here
                          setShowPerPageDropdown(false);
                        }}
                      >
                        {number}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className='flex items-center'>
              <span className='text-gray-600 text-sm mr-4'>
                {`1-${Math.min(itemsPerPage, filteredTransactions.length)} Of ${
                  filteredTransactions.length
                }`}
              </span>
              <div className='flex'>
                <button
                  className='p-1 rounded-md text-gray-500 disabled:opacity-50'
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className='p-1 rounded-md text-gray-500 disabled:opacity-50'
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Modal */}
      {showGoalsModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='rounded-lg w-full max-w-lg mx-4'>
            {/* Modal Header */}
            <div className='flex justify-between items-center rounded-t-xl bg-[#EEF5FF] p-5'>
              <h2 className='text-xl font-bold'>Add Goals</h2>
              <button
                onClick={handleCloseGoalsModal}
                className='text-black hover:bg-blue-200 rounded-full p-1'
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className='p-5 bg-white rounded-b-xl'>
              {/* Target Amount Input */}
              <div className='mb-6'>
                <label className='block text-lg font-semibold mb-2'>Target Amount</label>
                <input
                  type='text'
                  placeholder='Type Item Name ....'
                  className='w-full p-3 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl text-[#131313] placeholder:text-[#696969] outline-none'
                  value={targetAmount}
                  onChange={e => setTargetAmount(e.target.value)}
                />
              </div>

              {/* Presets Amount Input */}
              <div className='mb-6'>
                <label className='block text-lg font-semibold mb-2'>Presets amount</label>
                <input
                  type='text'
                  placeholder='Type Item Name ....'
                  className='w-full p-3 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl text-[#131313] placeholder:text-[#696969] outline-none'
                  value={presetAmount}
                  onChange={e => setPresetAmount(e.target.value)}
                />
              </div>

              {/* Action Buttons */}
              <div className='flex justify-center gap-4 mt-8 mb-4'>
                <button
                  onClick={handleCloseGoalsModal}
                  className='px-9 py-3 bg-[#0075FF] hover:bg-[#0055FF] text-white font-medium rounded-xl transition-colors'
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveGoals}
                  className='px-11 py-3 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white font-medium rounded-xl transition-colors shadow-md'
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
