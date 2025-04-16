'use client';

import { useState, useRef, useEffect } from 'react';
import {
  TrendingUp,
  Search,
  ChevronDown,
  Download,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Edit,
  Trash,
  Eye,
  ClipboardCheck,
  UsersRound,
} from 'lucide-react';
import DashboardLayout from '../../../layouts/dashboardLayout';
import { TfiWallet } from 'react-icons/tfi';
import ReportIncome from './report-income';
import ReportRevenue from './report-revenue';
import ReportTableReservation from './report-table-reservation';
import ReportCardPayments from './report-card-payments';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Invoices');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openActionMenu, setOpenActionMenu] = useState(null);

  const categoryRef = useRef(null);
  const statusRef = useRef(null);
  const resultsPerPageRef = useRef(null);

  const tabs = ['Invoices', 'Income', 'Revenue', 'Table Reservations', 'Card Payments'];

  const categories = ['All', 'Subscription', 'One-time', 'Refund'];
  const statuses = ['All', 'Expired', 'Expiring', 'Live', 'Draft'];
  const perPageOptions = [5, 10, 15, 20];

  const allInvoiceData = [
    {
      id: '6065',
      customerName: 'Miles, Esther',
      date: '29.02.2015',
      amount: '$779.58',
      paymentMethod: 'Credit Card',
      paidAmount: '$12,766',
      status: 'Expired',
      category: 'Subscription',
    },
    {
      id: '5028',
      customerName: 'Henry, Arthur',
      date: '29.02.2015',
      amount: '$406.27',
      paymentMethod: 'TWINT',
      paidAmount: '$12,766',
      status: 'Expired',
      category: 'One-time',
    },
    {
      id: '9261',
      customerName: 'Black, Marvin',
      date: '29.02.2015',
      amount: '$630.44',
      paymentMethod: 'TWINT',
      paidAmount: '$12,766',
      status: 'Expiring',
      category: 'Subscription',
    },
    {
      id: '4846',
      customerName: 'Flores, Juanita',
      date: '29.02.2015',
      amount: '$105.55',
      paymentMethod: 'Apple Pay',
      paidAmount: '$12,766',
      status: 'Expiring',
      category: 'One-time',
    },
    {
      id: '1374',
      customerName: 'Cooper, Kristin',
      date: '29.02.2015',
      amount: '$202.87',
      paymentMethod: 'Apple Pay',
      paidAmount: '$12,766',
      status: 'Live',
      category: 'Subscription',
    },
    {
      id: '1577',
      customerName: 'Nguyen, Shane',
      date: '29.02.2015',
      amount: '$351.02',
      paymentMethod: 'Credit Card',
      paidAmount: '$12,766',
      status: 'Draft',
      category: 'Refund',
    },
    {
      id: '2345',
      customerName: 'Johnson, Michael',
      date: '29.02.2015',
      amount: '$521.75',
      paymentMethod: 'Credit Card',
      paidAmount: '$12,766',
      status: 'Live',
      category: 'One-time',
    },
    {
      id: '3456',
      customerName: 'Williams, Sarah',
      date: '29.02.2015',
      amount: '$189.99',
      paymentMethod: 'TWINT',
      paidAmount: '$12,766',
      status: 'Expired',
      category: 'Subscription',
    },
    {
      id: '4567',
      customerName: 'Brown, David',
      date: '29.02.2015',
      amount: '$299.50',
      paymentMethod: 'Apple Pay',
      paidAmount: '$12,766',
      status: 'Expiring',
      category: 'One-time',
    },
    {
      id: '5678',
      customerName: 'Davis, Emma',
      date: '29.02.2015',
      amount: '$450.25',
      paymentMethod: 'Credit Card',
      paidAmount: '$12,766',
      status: 'Draft',
      category: 'Refund',
    },
    {
      id: '6789',
      customerName: 'Miller, James',
      date: '29.02.2015',
      amount: '$175.30',
      paymentMethod: 'TWINT',
      paidAmount: '$12,766',
      status: 'Live',
      category: 'Subscription',
    },
    {
      id: '7890',
      customerName: 'Wilson, Olivia',
      date: '29.02.2015',
      amount: '$625.45',
      paymentMethod: 'Apple Pay',
      paidAmount: '$12,766',
      status: 'Expired',
      category: 'One-time',
    },
    {
      id: '8901',
      customerName: 'Moore, William',
      date: '29.02.2015',
      amount: '$310.15',
      paymentMethod: 'Credit Card',
      paidAmount: '$12,766',
      status: 'Expiring',
      category: 'Subscription',
    },
    {
      id: '9012',
      customerName: 'Taylor, Sophia',
      date: '29.02.2015',
      amount: '$199.99',
      paymentMethod: 'TWINT',
      paidAmount: '$12,766',
      status: 'Draft',
      category: 'Refund',
    },
    {
      id: '0123',
      customerName: 'Anderson, Benjamin',
      date: '29.02.2015',
      amount: '$750.00',
      paymentMethod: 'Apple Pay',
      paidAmount: '$12,766',
      status: 'Live',
      category: 'One-time',
    },
    {
      id: '1234',
      customerName: 'Thomas, Charlotte',
      date: '29.02.2015',
      amount: '$425.75',
      paymentMethod: 'Credit Card',
      paidAmount: '$12,766',
      status: 'Expired',
      category: 'Subscription',
    },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        if (openDropdown === 'category') setOpenDropdown(null);
      }
      if (statusRef.current && !statusRef.current.contains(event.target)) {
        if (openDropdown === 'status') setOpenDropdown(null);
      }
      if (
        resultsPerPageRef.current &&
        !resultsPerPageRef.current.contains(event.target)
      ) {
        if (openDropdown === 'resultsPerPage') setOpenDropdown(null);
      }
      if (!event.target.closest('.action-menu-button')) {
        setOpenActionMenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  // Filter and paginate data
  const filteredData = allInvoiceData.filter(invoice => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.customerName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === '' ||
      categoryFilter === 'All' ||
      invoice.category === categoryFilter;

    const matchesStatus =
      statusFilter === '' || statusFilter === 'All' || invoice.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalPages = Math.ceil(filteredData.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + resultsPerPage);
  const displayRange = `${startIndex + 1}-${Math.min(
    startIndex + resultsPerPage,
    filteredData.length
  )} Of ${filteredData.length}`;

  const handleExport = () => {
    alert('Exporting data...');
    // In a real application, this would generate a CSV or Excel file
  };

  const handleActionClick = (action, invoice) => {
    switch (action) {
      case 'view':
        alert(`Viewing invoice #${invoice.id} for ${invoice.customerName}`);
        break;
      case 'edit':
        alert(`Editing invoice #${invoice.id} for ${invoice.customerName}`);
        break;
      case 'delete':
        alert(`Deleting invoice #${invoice.id} for ${invoice.customerName}`);
        break;
      default:
        break;
    }
    setOpenActionMenu(null);
  };

  const getStatusColor = status => {
    switch (status) {
      case 'Expired':
        return 'text-red-500';
      case 'Expiring':
        return 'text-yellow-500';
      case 'Live':
        return 'text-green-500';
      case 'Draft':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const getIconForMetric = index => {
    switch (index) {
      case 0:
        return (
          <div className='bg-[#19DB8C33] p-4 rounded-full'>
            <TfiWallet className='size-6 text-[#19DB8C]' />
          </div>
        );
      case 1:
        return (
          <div className='bg-[#F4C62D33] p-4 rounded-full'>
            <ClipboardCheck className='size-6 text-[#F4C62D]' />
          </div>
        );
      case 2:
        return (
          <div className='bg-[#00AFEC33] p-4 rounded-full'>
            <UsersRound className='size-6 text-[#00AFEC]' />
          </div>
        );
      case 3:
        return (
          <div className='bg-[#5B3CCC33] p-4 rounded-full'>
            <TrendingUp className='size-6 text-[#5B3CCC]' />
          </div>
        );
      default:
        return null;
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Invoices':
        return (
          <div className='space-y-6'>
            {/* Metrics Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {[
                { title: 'Daily Revenue', value: '$3,521', percentage: '+13.65%' },
                { title: 'Weekly Orders', value: '$3,521', percentage: '+13.65%' },
                { title: 'Table Reservation', value: '3,521', percentage: '+13.65%' },
                { title: 'Monthly Growth', value: '$3,521', percentage: '+13.65%' },
              ].map((metric, index) => (
                <div
                  key={index}
                  className='bg-white p-5 rounded-lg shadow-md shadow-[#282F5A1F] flex justify-between items-center'
                >
                  <div>
                    <p className='text-[#1A2042] text-sm font-medium mb-1.5'>
                      {metric.title}
                    </p>
                    <p className='text-2xl text-[#1A2042] font-bold mb-2.5'>
                      {metric.value}
                    </p>
                    <p className='text-[#19DB8C] text-xs mt-1'>
                      {metric.percentage} from yesterday
                    </p>
                  </div>
                  {getIconForMetric(index)}
                </div>
              ))}
            </div>

            {/* Transactions Section */}
            <div className='bg-white rounded-md shadow-sm px-6 py-7'>
              <div className='mb-4'>
                <h2 className='text-xl font-bold'>Transactions</h2>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur</p>
              </div>

              {/* Search and Filters */}
              <div className='flex flex-col md:flex-row justify-between mb-6 gap-4'>
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
                <div className='flex gap-4 flex-wrap'>
                  <div className='relative' ref={categoryRef}>
                    <button
                      className='flex items-center gap-2 px-4 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl'
                      onClick={() =>
                        setOpenDropdown(openDropdown === 'category' ? null : 'category')
                      }
                    >
                      {categoryFilter || 'Category'}
                      <ChevronDown className='w-4 h-4' />
                    </button>
                    {openDropdown === 'category' && (
                      <div className='absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg'>
                        <div className='py-1'>
                          {categories.map(category => (
                            <button
                              key={category}
                              className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                              onClick={() => {
                                setCategoryFilter(category);
                                setOpenDropdown(null);
                                setCurrentPage(1);
                              }}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='relative' ref={statusRef}>
                    <button
                      className='flex items-center gap-2 px-4 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl'
                      onClick={() =>
                        setOpenDropdown(openDropdown === 'status' ? null : 'status')
                      }
                    >
                      {statusFilter || 'Status'}
                      <ChevronDown className='w-4 h-4' />
                    </button>
                    {openDropdown === 'status' && (
                      <div className='absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg'>
                        <div className='py-1'>
                          {statuses.map(status => (
                            <button
                              key={status}
                              className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                              onClick={() => {
                                setStatusFilter(status);
                                setOpenDropdown(null);
                                setCurrentPage(1);
                              }}
                            >
                              {status}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    className='px-4 py-2 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white rounded-xl flex items-center gap-2'
                    onClick={handleExport}
                  >
                    <Download className='w-4 h-4' />
                    Export
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className='overflow-x-auto'>
                <table className='w-full'>
                  <thead>
                    <tr className='border-b bg-[#EEF5FF]'>
                      <th className='text-left py-2 px-3 font-semibold text-[#131313]'>
                        Trans. ID
                      </th>
                      <th className='text-left py-2 px-3 font-semibold text-[#131313]'>
                        Customer Name
                      </th>
                      <th className='text-left py-2 px-3 font-semibold text-[#131313]'>
                        Date
                      </th>
                      <th className='text-left py-2 px-3 font-semibold text-[#131313]'>
                        Amount
                      </th>
                      <th className='text-left py-2 px-3 font-semibold text-[#131313]'>
                        Payment Method
                      </th>
                      <th className='text-left py-2 px-3 font-semibold text-[#131313]'>
                        Paid Amount
                      </th>
                      <th className='text-left py-2 px-3 font-semibold text-[#131313]'>
                        Status
                      </th>
                      <th className='text-left py-2 px-3 font-semibold text-[#131313]'>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.length > 0 ? (
                      paginatedData.map(invoice => (
                        <tr key={invoice.id} className='border-b'>
                          <td className='p-3'>{invoice.id}</td>
                          <td className='p-3'>{invoice.customerName}</td>
                          <td className='p-3'>{invoice.date}</td>
                          <td className='p-3'>{invoice.amount}</td>
                          <td className='p-3'>{invoice.paymentMethod}</td>
                          <td className='p-3'>{invoice.paidAmount}</td>
                          <td className='p-3'>
                            <span className={getStatusColor(invoice.status)}>
                              {invoice.status}
                            </span>
                          </td>
                          <td className='py-4 px-2 relative'>
                            <button
                              className='text-gray-500 hover:text-gray-700 action-menu-button'
                              onClick={() =>
                                setOpenActionMenu(
                                  openActionMenu === invoice.id ? null : invoice.id
                                )
                              }
                            >
                              <MoreVertical className='w-5 h-5' />
                            </button>
                            {openActionMenu === invoice.id && (
                              <div className='absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
                                <button
                                  className='flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                                  onClick={() => handleActionClick('view', invoice)}
                                >
                                  <Eye className='w-4 h-4 mr-2' />
                                  View Details
                                </button>
                                <button
                                  className='flex items-center w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                                  onClick={() => handleActionClick('edit', invoice)}
                                >
                                  <Edit className='w-4 h-4 mr-2' />
                                  Edit Invoice
                                </button>
                                <button
                                  className='flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                                  onClick={() => handleActionClick('delete', invoice)}
                                >
                                  <Trash className='w-4 h-4 mr-2' />
                                  Delete Invoice
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan='8' className='py-4 px-2 text-center text-gray-500'>
                          No results found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className='flex flex-col md:flex-row justify-end gap-x-2.5 items-center mt-6'>
                <div className='flex items-center gap-2 mb-4 md:mb-0'>
                  <span className='text-gray-600'>Results Per Page</span>
                  <div className='relative' ref={resultsPerPageRef}>
                    <button
                      className='flex items-center gap-2 px-3 py-1 bg-[#EEF5FF] rounded-xl'
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === 'resultsPerPage' ? null : 'resultsPerPage'
                        )
                      }
                    >
                      {resultsPerPage}
                      <ChevronDown className='w-4 h-4' />
                    </button>
                    {openDropdown === 'resultsPerPage' && (
                      <div className='absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg'>
                        <div className='py-1'>
                          {perPageOptions.map(option => (
                            <button
                              key={option}
                              className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                              onClick={() => {
                                setResultsPerPage(option);
                                setOpenDropdown(null);
                                setCurrentPage(1);
                              }}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <span className='text-gray-600'>{displayRange}</span>
                  <div className='flex gap-2'>
                    <button
                      className={`p-1 rounded-md border ${
                        currentPage === 1
                          ? 'text-gray-300 cursor-not-allowed'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className='w-4 h-4' />
                    </button>
                    <button
                      className={`p-1 rounded-md border ${
                        currentPage === totalPages
                          ? 'text-gray-300 cursor-not-allowed'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() =>
                        currentPage < totalPages && setCurrentPage(currentPage + 1)
                      }
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Income':
        return <ReportIncome />;
      case 'Revenue':
        return <ReportRevenue />;
      case 'Table Reservations':
        return <ReportTableReservation />;
      case 'Card Payments':
        return <ReportCardPayments />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className='min-h-screen py-6'>
        {/* Tabs */}
        <div className='overflow-x-auto'>
          <div className='flex space-x-8'>
            {tabs.map(tab => (
              <button
                key={tab}
                className={`pb-2 px-2 text-lg ${
                  activeTab === tab
                    ? 'text-[#00925C] font-semibold border-b-2 border-[#00925C]'
                    : 'text-[#717B8C] font-medium hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* Tab Content */}
        <div className='mt-6'>{renderTabContent()}</div>
      </div>
    </DashboardLayout>
  );
}
