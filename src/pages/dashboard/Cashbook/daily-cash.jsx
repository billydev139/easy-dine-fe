'use client';

import { useState } from 'react';
import {
  Search,
  FileText,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Printer,
  Share2,
  CircleX,
} from 'lucide-react';
import { createPortal } from 'react-dom';

export default function DailyCash() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Sample transaction data
  const transactions = [
    {
      id: 1,
      date: '18/09/2016',
      description: 'Cash Payment Received',
      amount: '$102.00',
      paymentMethod: 'Luqapay Havale/EFT',
      status: 'Completed',
    },
    {
      id: 2,
      date: '18/09/2016',
      description: 'Credit Card Payment',
      amount: '$120,000.00',
      paymentMethod: 'Fast QR',
      status: 'Completed',
    },
    {
      id: 3,
      date: '16/08/2013',
      description: 'Tips Collected',
      amount: '$3,666.71',
      paymentMethod: 'Ecopayz',
      status: 'Completed',
    },
    {
      id: 4,
      date: '15/08/2017',
      description: 'Tips Collected',
      amount: '$350.00',
      paymentMethod: 'CepBank',
      status: 'Completed',
    },
    {
      id: 5,
      date: '12/06/2020',
      description: 'Tips Collected',
      amount: '$680.00',
      paymentMethod: 'Paysafecard',
      status: 'Pending',
    },
    {
      id: 6,
      date: '07/05/2016',
      description: 'Restaurant Expense',
      amount: '$16,500.00',
      paymentMethod: 'Luqapay',
      status: 'Pending',
    },
    {
      id: 7,
      date: '15/08/2017',
      description: 'Restaurant Expense',
      amount: '$150.00',
      paymentMethod: 'CepBank',
      status: 'Completed',
    },
    {
      id: 8,
      date: '16/08/2013',
      description: 'Refund Processed',
      amount: '$35,580.00',
      paymentMethod: 'Paysafecard',
      status: 'Pending',
    },
    {
      id: 9,
      date: '28/10/2012',
      description: 'Credit Card Payment',
      amount: '$855.00',
      paymentMethod: 'Luqapay',
      status: 'Pending',
    },
    {
      id: 10,
      date: '01/01/2022',
      description: 'Subscription Payment',
      amount: '$19.99',
      paymentMethod: 'PayPal',
      status: 'Completed',
    },
    {
      id: 11,
      date: '02/02/2022',
      description: 'Online Purchase',
      amount: '$299.99',
      paymentMethod: 'Credit Card',
      status: 'Completed',
    },
    {
      id: 12,
      date: '03/03/2022',
      description: 'Service Fee',
      amount: '$25.00',
      paymentMethod: 'Bank Transfer',
      status: 'Pending',
    },
    {
      id: 13,
      date: '04/04/2022',
      description: 'Membership Renewal',
      amount: '$99.00',
      paymentMethod: 'Debit Card',
      status: 'Completed',
    },
    {
      id: 14,
      date: '05/05/2022',
      description: 'Product Return',
      amount: '$45.50',
      paymentMethod: 'Store Credit',
      status: 'Completed',
    },
    {
      id: 15,
      date: '06/06/2022',
      description: 'Monthly Bill',
      amount: '$120.00',
      paymentMethod: 'Auto-debit',
      status: 'Completed',
    },
    {
      id: 16,
      date: '07/07/2022',
      description: 'Consulting Fee',
      amount: '$500.00',
      paymentMethod: 'Wire Transfer',
      status: 'Pending',
    },
  ];

  // Calculate totals for the report
  const totalSales = 1000.0;
  const totalExpenses = 632.0;
  const netAmount = totalSales - totalExpenses;

  // Current date for the report
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Timestamp for the report
  const reportTimestamp = '17 December 2022 | 12:15 PM';

  // Filter transactions based on search query
  const filteredTransactions = transactions.filter(transaction => {
    return (
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.amount.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredTransactions.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, filteredTransactions.length);
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  // Handle page navigation
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Toggle dropdown for results per page
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Set results per page
  const handleResultsPerPage = value => {
    setResultsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing results per page
    setShowDropdown(false);
  };

  // Toggle modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Handle print report
  const handlePrintReport = () => {
    window.print();
  };

  // Handle export report
  const handleExportReport = () => {
    // Implement export functionality here
    console.log('Exporting report...');
  };

  // Modal component
  const ReportModal = () => {
    if (!showModal) return null;

    return createPortal(
      <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60'>
        <div className='bg-white rounded-xl shadow-lg w-full max-w-3xl'>
          {/* Modal header */}
          <div className='bg-[#EEF5FF] p-6 rounded-t-xl relative'>
            <button
              onClick={toggleModal}
              className='absolute top-4 right-4 text-gray-700 hover:text-gray-900'
              aria-label='Close modal'
            >
              <CircleX size={24} />
            </button>
            <h2 className='text-xl font-semibold text-black'>
              Daily Cash Report - {formattedDate}
            </h2>
            <p className='text-[#131313] text-sm mt-1'>
              Generate a report for the selected day&apos;s transactions
            </p>
          </div>

          {/* Modal body */}
          <div className='p-6'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {/* Total Sales */}
              <div className='text-center'>
                <h3 className='text-[#131313] font-medium mb-1.5'>Total Sales</h3>
                <p className='text-2xl font-bold text-[#00925C]'>
                  ${totalSales.toFixed(2)}
                </p>
              </div>

              {/* Total Expenses */}
              <div className='text-center border-l-0 md:border-l border-r-0 md:border-r border-gray-200'>
                <h3 className='text-[#131313] font-medium mb-1.5'>Total Expenses</h3>
                <p className='text-3xl font-bold text-[#EF6E6B]'>
                  -${totalExpenses.toFixed(2)}
                </p>
              </div>

              {/* Net Amount */}
              <div className='text-center'>
                <h3 className='text-[#131313] font-medium mb-1.5'>Net Amount</h3>
                <p className='text-3xl font-bold text-[#0075FF]'>
                  ${netAmount.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* Modal footer */}
          <div className='p-6 bg-white border-t rounded-b-xl border-gray-200 flex flex-col md:flex-row justify-between items-center'>
            <div className='text-[#131313] text-sm mb-4 md:mb-0'>{reportTimestamp}</div>
            <div className='flex space-x-4'>
              <button
                onClick={handlePrintReport}
                className='flex items-center gap-2 bg-[#0075FF] text-white px-6 py-3 rounded-lg hover:bg-[#0055FF] transition-colors'
              >
                <Printer size={20} />
                <span>Print Report</span>
              </button>
              <button
                onClick={handleExportReport}
                className='flex items-center gap-2 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white px-6 py-3 rounded-lg hover:bg-[#0F0F1A] transition-colors'
              >
                <Share2 size={20} />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className='bg-white py-6 px-5 my-6 rounded-lg'>
      <div className='mb-5'>
        <h1 className='text-xl font-semibold text-[#131313] mb-1'>
          Table of Transactions
        </h1>
        <p className='text-[#131313] text-sm'>Lorem ipsum dolor sit amet, consectetur</p>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6 mt-4 gap-4'>
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

        <button
          className='bg-[#0075FF] hover:bg-[#0055FF] text-white px-10 py-2.5 rounded-xl flex items-center gap-2 transition-colors'
          onClick={toggleModal}
        >
          <FileText size={20} />
          <span>Generate Report</span>
        </button>
      </div>

      <div className=''>
        <table className='min-w-full bg-white'>
          <thead>
            <tr className='bg-[#EEF5FF]'>
              <th className='py-2.5 px-4 text-left font-semibold text-[#000000]'>Date</th>
              <th className='py-2.5 px-4 text-left font-semibold text-[#000000]'>
                Description
              </th>
              <th className='py-2.5 px-4 text-left font-semibold text-[#000000]'>
                Amount
              </th>
              <th className='py-2.5 px-4 text-left font-semibold text-[#000000]'>
                Payment Method
              </th>
              <th className='py-2.5 px-4 text-left font-semibold text-[#000000]'>
                Status
              </th>
              <th className='py-2.5 px-4 text-left font-semibold text-[#000000]'></th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map(transaction => (
              <tr key={transaction.id} className='border-b border-[#E1E1E1] text-sm'>
                <td className='py-4 px-4 text-[#000000]'>{transaction.date}</td>
                <td className='py-4 px-4 text-[#000000]'>{transaction.description}</td>
                <td className='py-4 px-4 text-[#000000]'>{transaction.amount}</td>
                <td className='py-4 px-4 text-[#000000]'>{transaction.paymentMethod}</td>
                <td className='py-4 px-4'>
                  <div className='flex items-center'>
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        transaction.status === 'Completed'
                          ? 'bg-[#17EFA0]'
                          : 'bg-[#EF6E6B]'
                      }`}
                    ></div>
                    <span className='text-gray-700'>{transaction.status}</span>
                  </div>
                </td>
                <td className='py-4 px-4 text-right'>
                  <button className='text-gray-500 hover:text-gray-700'>
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex flex-col md:flex-row justify-end gap-x-3 items-center mt-10 mb-20'>
        <div className='relative mb-4 md:mb-0'>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600'>Results Per Page</span>
            <div className='relative'>
              <button
                onClick={toggleDropdown}
                className='flex items-center gap-1 bg-[#EEF5FF] rounded-xl px-3 py-1'
              >
                <span>{resultsPerPage}</span>
                <ChevronDown size={16} />
              </button>
              {showDropdown && (
                <div className='absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-10'>
                  {[5, 10, 20, 50].map(value => (
                    <div
                      key={value}
                      className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                      onClick={() => handleResultsPerPage(value)}
                    >
                      {value}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <div className='text-gray-600'>
            {startIndex + 1}-{endIndex} Of {filteredTransactions.length}
          </div>
          <div className='flex gap-2'>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`p-1 rounded-full ${
                currentPage === 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-1 rounded-full ${
                currentPage === totalPages
                  ? 'text-gray-300'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Render the modal */}
      <ReportModal />
    </div>
  );
}
