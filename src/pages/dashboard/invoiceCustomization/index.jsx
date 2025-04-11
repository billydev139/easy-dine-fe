'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Search,
  ChevronDown,
  Download,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Wallet,
  DollarSign,
  Tag,
  X,
  Printer,
  Mail,
  DownloadIcon,
  Plus,
  Check,
  Building,
} from 'lucide-react';
import DashboardLayout from '../../../layouts/dashboardLayout';

// Constants
const TABS = ['Invoices', 'Pending Payments', 'Paid Invoices'];
const RESULTS_PER_PAGE_OPTIONS = [5, 10, 20, 50];
const CATEGORIES = ['All', 'Products', 'Services', 'Subscriptions'];
const STATUSES = ['All', 'Live', 'Expiring', 'Expired', 'Draft'];

// Status color mapping
const STATUS_COLORS = {
  Expired: 'text-gray-500',
  Expiring: 'text-yellow-500',
  Live: 'text-green-500',
  Draft: 'text-blue-500',
  Pending: 'text-orange-500',
  Paid: 'text-purple-500',
};

// Sample data for each tab
const MOCK_DATA = {
  Invoices: [
    {
      id: '6065',
      customer: 'Miles, Esther',
      date: 'February 29, 2012',
      amount: '$779.58',
      method: 'Credit Card',
      status: 'Expired',
      category: 'Products',
    },
    {
      id: '5028',
      customer: 'Henry, Arthur',
      date: 'May 29, 2017',
      amount: '$406.27',
      method: 'TWINT',
      status: 'Expired',
      category: 'Services',
    },
    {
      id: '9261',
      customer: 'Black, Marvin',
      date: 'September 9, 2013',
      amount: '$630.44',
      method: 'TWINT',
      status: 'Expiring',
      category: 'Subscriptions',
    },
    {
      id: '4846',
      customer: 'Flores, Juanita',
      date: 'March 6, 2018',
      amount: '$105.55',
      method: 'Apple Pay',
      status: 'Expiring',
      category: 'Products',
    },
    {
      id: '1374',
      customer: 'Cooper, Kristin',
      date: 'November 7, 2017',
      amount: '$202.87',
      method: 'Apple Pay',
      status: 'Live',
      category: 'Services',
    },
    {
      id: '1577',
      customer: 'Nguyen, Shane',
      date: 'February 11, 2014',
      amount: '$351.02',
      method: 'Credit Card',
      status: 'Draft',
      category: 'Subscriptions',
    },
    {
      id: '2389',
      customer: 'Johnson, Maria',
      date: 'April 15, 2019',
      amount: '$523.75',
      method: 'PayPal',
      status: 'Live',
      category: 'Products',
    },
    {
      id: '4721',
      customer: 'Smith, Robert',
      date: 'June 22, 2020',
      amount: '$189.99',
      method: 'Credit Card',
      status: 'Draft',
      category: 'Services',
    },
  ],
  'Pending Payments': [
    {
      id: '7823',
      customer: 'Williams, David',
      date: 'January 12, 2022',
      amount: '$450.00',
      method: 'Bank Transfer',
      status: 'Pending',
      category: 'Products',
    },
    {
      id: '5491',
      customer: 'Garcia, Ana',
      date: 'March 3, 2022',
      amount: '$275.50',
      method: 'PayPal',
      status: 'Pending',
      category: 'Services',
    },
    {
      id: '3267',
      customer: 'Martinez, Carlos',
      date: 'April 18, 2022',
      amount: '$890.25',
      method: 'Credit Card',
      status: 'Pending',
      category: 'Subscriptions',
    },
    {
      id: '9045',
      customer: 'Taylor, Emma',
      date: 'May 7, 2022',
      amount: '$120.75',
      method: 'TWINT',
      status: 'Pending',
      category: 'Products',
    },
    {
      id: '6128',
      customer: 'Anderson, Thomas',
      date: 'June 14, 2022',
      amount: '$345.00',
      method: 'Apple Pay',
      status: 'Pending',
      category: 'Services',
    },
  ],
  'Paid Invoices': [
    {
      id: '2934',
      customer: 'Brown, Michael',
      date: 'July 5, 2021',
      amount: '$560.30',
      method: 'Credit Card',
      status: 'Paid',
      category: 'Products',
    },
    {
      id: '8156',
      customer: 'Davis, Sarah',
      date: 'August 22, 2021',
      amount: '$175.99',
      method: 'PayPal',
      status: 'Paid',
      category: 'Services',
    },
    {
      id: '4378',
      customer: 'Wilson, James',
      date: 'September 10, 2021',
      amount: '$720.45',
      method: 'Bank Transfer',
      status: 'Paid',
      category: 'Subscriptions',
    },
    {
      id: '7612',
      customer: 'Moore, Jennifer',
      date: 'October 17, 2021',
      amount: '$290.00',
      method: 'Apple Pay',
      status: 'Paid',
      category: 'Products',
    },
    {
      id: '5289',
      customer: 'Lee, Daniel',
      date: 'November 29, 2021',
      amount: '$430.75',
      method: 'TWINT',
      status: 'Paid',
      category: 'Services',
    },
    {
      id: '3941',
      customer: 'Clark, Lisa',
      date: 'December 8, 2021',
      amount: '$185.50',
      method: 'Credit Card',
      status: 'Paid',
      category: 'Subscriptions',
    },
  ],
};

// Stats data for each tab
const STATS_DATA = {
  Invoices: [
    {
      title: 'Daily Revenue',
      value: '$3,521',
      subtext: '+13.65% from yesterday',
      icon: <CreditCard className='text-green-500' />,
      bgColor: 'bg-green-100',
    },
    {
      title: 'Daily Revenue',
      value: '$3,521',
      subtext: '+13.65% from yesterday',
      icon: <Wallet className='text-yellow-500' />,
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Completed Payments',
      value: '3521',
      icon: <CreditCard className='text-blue-500' />,
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Revenue Collected',
      value: '3521',
      icon: <Tag className='text-red-500' />,
      bgColor: 'bg-red-100',
    },
  ],
  'Pending Payments': [
    {
      title: 'Pending Revenue',
      value: '$2,082',
      subtext: '+5.25% from yesterday',
      icon: <CreditCard className='text-orange-500' />,
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Average Wait Time',
      value: '3.2 days',
      subtext: '-0.5 days from last week',
      icon: <Wallet className='text-purple-500' />,
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Pending Payments',
      value: '42',
      icon: <DollarSign className='text-blue-500' />,
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Expected Revenue',
      value: '$8,450',
      icon: <Tag className='text-green-500' />,
      bgColor: 'bg-green-100',
    },
  ],
};

// Reusable stat card component
const StatCard = ({ title, value, subtext, bgColor, icon }) => (
  <div className='bg-white shadow-md shadow-[#282F5A1F] border-1 rounded-lg py-5 pl-7 pr-4 flex justify-between items-start'>
    <div>
      <p className='text-sm text-[#1A2042] font-medium mb-1'>{title}</p>
      <h3 className='text-lg md:text-xl font-semibold mb-1'>{value}</h3>
      {subtext && <p className='text-xs text-green-500'>{subtext}</p>}
    </div>
    <div className={`w-14 h-14 rounded-full ${bgColor} flex items-center justify-center`}>
      {icon}
    </div>
  </div>
);

// Dropdown component for filters
const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        className='flex items-center justify-between w-40 px-4 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl text-[#131313]'
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup='listbox'
        aria-expanded={isOpen}
      >
        <span>{value}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className='absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
          <ul className='py-1 max-h-60 overflow-auto' role='listbox'>
            {options.map((option, index) => (
              <li
                key={index}
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                role='option'
                aria-selected={value === option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Custom Select component for the invoice form
const CustomSelect = ({ label, value, onChange, options, icon, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative w-full'>
      {label && <label className='block text-sm font-medium mb-1'>{label}</label>}
      <div
        className='flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-md cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center'>
          {icon && <span className='mr-2'>{icon}</span>}
          <span className='text-gray-700'>{value || placeholder || 'Select...'}</span>
        </div>
        <ChevronDown size={16} className='text-gray-500' />
      </div>

      {isOpen && (
        <div className='absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg'>
          <ul className='py-1 max-h-60 overflow-auto'>
            {options.map((option, index) => (
              <li
                key={index}
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Invoice Item component for the invoice form
const InvoiceItem = ({ item, index, onUpdate, onRemove }) => {
  return (
    <tr className='border-b border-gray-200'>
      <td className='py-2 px-2 text-center'>{index + 1}</td>
      <td className='py-2 px-2'>
        <input
          type='text'
          value={item.name}
          onChange={e => onUpdate(index, { ...item, name: e.target.value })}
          className='w-full p-1 border border-gray-300 rounded-md'
        />
      </td>
      <td className='py-2 px-2'>
        <input
          type='number'
          value={item.quantity}
          onChange={e => onUpdate(index, { ...item, quantity: e.target.value })}
          className='w-20 p-1 border border-gray-300 rounded-md'
        />
      </td>
      <td className='py-2 px-2'>
        <select
          value={item.unit}
          onChange={e => onUpdate(index, { ...item, unit: e.target.value })}
          className='w-full p-1 border border-gray-300 rounded-md'
        >
          <option value='Std'>Std</option>
          <option value='Pcs'>Pcs</option>
          <option value='Kg'>Kg</option>
        </select>
      </td>
      <td className='py-2 px-2'>
        <div className='flex items-center'>
          <input
            type='text'
            value={item.description}
            onChange={e => onUpdate(index, { ...item, description: e.target.value })}
            className='w-full p-1 border border-gray-300 rounded-md'
          />
          <button className='ml-1 text-green-500'>
            <Check size={16} />
          </button>
        </div>
      </td>
      <td className='py-2 px-2'>
        <div className='flex items-center'>
          <input
            type='number'
            value={item.unitPrice}
            onChange={e => onUpdate(index, { ...item, unitPrice: e.target.value })}
            className='w-20 p-1 border border-gray-300 rounded-md'
          />
          <button className='ml-1 text-green-500'>
            <Check size={16} />
          </button>
        </div>
      </td>
      <td className='py-2 px-2'>
        <select
          value={item.taxRate}
          onChange={e => onUpdate(index, { ...item, taxRate: e.target.value })}
          className='w-full p-1 border border-gray-300 rounded-md'
        >
          <option value='8.05%'>8.05%</option>
          <option value='7.70%'>7.70%</option>
          <option value='2.50%'>2.50%</option>
        </select>
      </td>
      <td className='py-2 px-2'>{(item.quantity * item.unitPrice).toFixed(2)}</td>
    </tr>
  );
};

// Main component
export default function InvoiceManagement() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [showActionMenu, setShowActionMenu] = useState(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showAddInvoiceModal, setShowAddInvoiceModal] = useState(false);
  const actionMenuRef = useRef(null);

  // Invoice form state
  const [invoiceForm, setInvoiceForm] = useState({
    invoiceDate: '10/05/2021',
    acceptanceDate: '12/05/2021',
    paymentDeadline: '7 Days',
    processor: 'Sadhu Rijard',
    subject: 'Restaurant',
    selectedRestaurant: '',
    restaurantDescription:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
    items: [
      {
        name: 'Pasta',
        quantity: 1,
        unit: 'Std',
        description: 'Lorem Perspiciatis Amet...',
        unitPrice: 103.0,
        taxRate: '8.05%',
      },
      {
        name: 'Pasta',
        quantity: 2,
        unit: 'Std',
        description: 'Lorem Perspiciatis Amet...',
        unitPrice: 103.0,
        taxRate: '8.05%',
      },
      {
        name: 'Pasta',
        quantity: 3,
        unit: 'Std',
        description: 'Lorem Perspiciatis Amet...',
        unitPrice: 103.0,
        taxRate: '8.05%',
      },
      {
        name: 'Pasta',
        quantity: 4,
        unit: 'Std',
        description: 'Lorem Perspiciatis Amet...',
        unitPrice: 103.0,
        taxRate: '8.05%',
      },
      {
        name: 'Pasta',
        quantity: 10,
        unit: 'Std',
        description: 'Lorem Perspiciatis Amet...',
        unitPrice: 103.0,
        taxRate: '8.05%',
      },
    ],
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target)) {
        setShowActionMenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Apply filters whenever dependencies change
  useEffect(() => {
    let filtered = [...MOCK_DATA[activeTab]];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        invoice =>
          invoice.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          invoice.id.includes(searchQuery)
      );
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(invoice => invoice.category === selectedCategory);
    }

    // Apply status filter
    if (selectedStatus !== 'All') {
      filtered = filtered.filter(invoice => invoice.status === selectedStatus);
    }

    setFilteredInvoices(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeTab, searchQuery, selectedCategory, selectedStatus]);

  // Calculate pagination values
  const totalInvoices = filteredInvoices.length;
  const totalPages = Math.ceil(totalInvoices / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, totalInvoices);
  const currentInvoices = filteredInvoices.slice(startIndex, endIndex);

  // Handle page navigation
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle results per page change
  const handleResultsPerPageChange = value => {
    setResultsPerPage(value);
    setCurrentPage(1); // Reset to first page when changing results per page
  };

  // Handle tab change
  const handleTabChange = tab => {
    setActiveTab(tab);
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedStatus('All');
  };

  const handleMoreClick = (e, invoiceId) => {
    e.stopPropagation();
    setShowActionMenu(showActionMenu === invoiceId ? null : invoiceId);
  };

  const handleViewInvoice = invoice => {
    setSelectedInvoice(invoice);
    setShowInvoiceModal(true);
    setShowActionMenu(null);
  };

  const handleDeleteInvoice = invoiceId => {
    // In a real app, you would delete the invoice here
    setFilteredInvoices(filteredInvoices.filter(invoice => invoice.id !== invoiceId));
    setShowActionMenu(null);
  };

  const closeInvoiceModal = () => {
    setShowInvoiceModal(false);
    setSelectedInvoice(null);
  };

  const openAddInvoiceModal = () => {
    setShowAddInvoiceModal(true);
  };

  const closeAddInvoiceModal = () => {
    setShowAddInvoiceModal(false);
  };

  const handleAddInvoiceItem = () => {
    setInvoiceForm({
      ...invoiceForm,
      items: [
        ...invoiceForm.items,
        {
          name: 'Pasta',
          quantity: 1,
          unit: 'Std',
          description: '',
          unitPrice: 0,
          taxRate: '8.05%',
        },
      ],
    });
  };

  const handleUpdateInvoiceItem = (index, updatedItem) => {
    const newItems = [...invoiceForm.items];
    newItems[index] = updatedItem;
    setInvoiceForm({
      ...invoiceForm,
      items: newItems,
    });
  };

  const handleRemoveInvoiceItem = index => {
    const newItems = [...invoiceForm.items];
    newItems.splice(index, 1);
    setInvoiceForm({
      ...invoiceForm,
      items: newItems,
    });
  };

  const handleCreateInvoice = () => {
    // In a real app, you would save the invoice here
    closeAddInvoiceModal();
    // Optionally add the new invoice to the list
  };

  return (
    <DashboardLayout>
      {/* Tabs */}
      <div className='flex border-b border-gray-200 my-6 overflow-x-auto'>
        {TABS.map((tab, i) => (
          <button
            key={i}
            className={`pb-2 px-1 mr-8 font-medium text-sm md:text-lg whitespace-nowrap ${
              activeTab === tab
                ? 'text-[#00925C] border-b-2 border-[#00925C]'
                : 'text-[#717B8C] hover:text-gray-700'
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {STATS_DATA[activeTab]?.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtext={stat.subtext}
            bgColor={stat.bgColor}
            icon={stat.icon}
          />
        ))}
      </div>
      <div className='bg-white p-4 rounded-md my-4'>
        <div>
          {/* Invoice Table Section */}
          <div className='bg-white rounded-lg p-4 md:p-6 mb-4'>
            <div className='mb-6'>
              <h2 className='text-xl font-semibold mb-1'>{activeTab} Table</h2>
              <p className='text-sm text-gray-500'>
                {activeTab === 'Invoices' && 'Manage and track all your invoices'}
                {activeTab === 'Pending Payments' && 'Track payments awaiting completion'}
                {activeTab === 'Paid Invoices' && 'View your completed payment history'}
              </p>
            </div>
            {/* Search and Filters */}
            <div className='flex flex-col md:flex-row justify-between mb-6 gap-4'>
              <div className='relative w-full md:w-80'>
                <input
                  type='text'
                  placeholder='Search for name, id.....'
                  className='w-full pl-4 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none placeholder:text-[#131313]'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <div className='absolute right-3 top-2.5 text-[#131313]'>
                  <Search size={20} />
                </div>
              </div>

              <div className='flex gap-3 flex-wrap'>
                <div>
                  <button
                    className='flex items-center gap-2 px-4 py-2 bg-[#0075FF] hover:bg-[#0055FF] text-white rounded-xl transition-colors'
                    onClick={openAddInvoiceModal}
                  >
                    <Plus size={16} />
                    <span>Add Invoice</span>
                  </button>
                </div>
                <Dropdown
                  label='Category'
                  options={CATEGORIES}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                />
                <Dropdown
                  label='Status'
                  options={STATUSES}
                  value={selectedStatus}
                  onChange={setSelectedStatus}
                />
                <button className='flex items-center gap-2 px-4 py-2 bg-[#0075FF] hover:bg-[#0055FF] text-white rounded-xl transition-colors'>
                  <Download size={16} />
                  <span>Export</span>
                </button>
              </div>
            </div>
            {/* Table */}
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='border-b border-gray-200 bg-[#EEF5FF]'>
                    <th className='text-left py-3 px-4 font-semibold text-[#131313]'>
                      Invoice ID
                    </th>
                    <th className='text-left py-3 px-4 font-semibold text-[#131313]'>
                      Customer Name
                    </th>
                    <th className='text-left py-3 px-4 font-semibold text-[#131313]'>
                      Date
                    </th>
                    <th className='text-left py-3 px-4 font-semibold text-[#131313]'>
                      Amount
                    </th>
                    <th className='text-left py-3 px-4 font-semibold text-[#131313]'>
                      Payment Method
                    </th>
                    <th className='text-left py-3 px-4 font-semibold text-[#131313]'>
                      Status
                    </th>
                    <th
                      className='text-left py-3 px-4 font-medium text-gray-600'
                      aria-label='Actions'
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {currentInvoices.length > 0 ? (
                    currentInvoices.map((invoice, i) => (
                      <tr
                        key={i}
                        className='border-b border-gray-200 hover:bg-gray-50 text-[#131313] text-sm'
                      >
                        <td className='py-4 px-4'>{invoice.id}</td>
                        <td className='py-4 px-4'>{invoice.customer}</td>
                        <td className='py-4 px-4'>{invoice.date}</td>
                        <td className='py-4 px-4'>{invoice.amount}</td>
                        <td className='py-4 px-4'>{invoice.method}</td>
                        <td className='py-4 px-4'>
                          <span
                            className={STATUS_COLORS[invoice.status] || 'text-gray-500'}
                          >
                            {invoice.status}
                          </span>
                        </td>
                        <td className='py-4 px-4 relative'>
                          <button
                            className='text-gray-400 hover:text-gray-600'
                            aria-label={`More options for invoice ${invoice.id}`}
                            onClick={e => handleMoreClick(e, invoice.id)}
                          >
                            <MoreVertical size={18} />
                          </button>
                          {showActionMenu === invoice.id && (
                            <div
                              ref={actionMenuRef}
                              className='absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-10 border border-gray-200'
                            >
                              <ul className='py-1'>
                                <li
                                  className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center'
                                  onClick={() => handleViewInvoice(invoice)}
                                >
                                  <span>View</span>
                                </li>
                                <li
                                  className='px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer flex items-center'
                                  onClick={() => handleDeleteInvoice(invoice.id)}
                                >
                                  <span>Delete</span>
                                </li>
                              </ul>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan='7' className='py-4 px-4 text-center text-gray-500'>
                        No invoices found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className='flex justify-end items-center gap-x-3 mt-10'>
              <div className='flex items-center mb-4 md:mb-0'>
                <span className='text-sm text-gray-600 mr-2'>Results Per Page</span>
                <div className='relative'>
                  <select
                    className='appearance-none w-16 px-3 py-1 bg-white border border-gray-300 rounded-lg text-gray-700 pr-8'
                    value={resultsPerPage}
                    onChange={e => handleResultsPerPageChange(Number(e.target.value))}
                    aria-label='Results per page'
                  >
                    {RESULTS_PER_PAGE_OPTIONS.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
              <div className='flex items-center'>
                <span className='text-sm text-gray-600 mr-4'>
                  {totalInvoices > 0
                    ? `${startIndex + 1} - ${endIndex} of ${totalInvoices}`
                    : '0 results'}
                </span>
                <div className='flex'>
                  <button
                    className={`p-1 rounded-md border border-gray-300 mr-2 ${
                      currentPage === 1
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    aria-label='Previous page'
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className={`p-1 rounded-md border border-gray-300 ${
                      currentPage >= totalPages
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={goToNextPage}
                    disabled={currentPage >= totalPages}
                    aria-label='Next page'
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Invoice Detail Modal */}
      {showInvoiceModal && selectedInvoice && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4'>
          <div className='bg-[#F2FAFF] rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto'>
            <div className='p-6'>
              {/* Header with close button */}
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold'>Invoice Details</h2>
                <button
                  onClick={closeInvoiceModal}
                  className='p-1 rounded-full hover:bg-gray-200'
                >
                  <X size={24} />
                </button>
              </div>

              {/* Invoice Content */}
              <div className='bg-[#F2F7FF] p-4 rounded-lg'>
                {/* Invoice Header */}
                <div className='mb-6'>
                  <h3 className='text-xl font-bold text-gray-800'>
                    The Invoice #{selectedInvoice.id}
                  </h3>
                  <p className='text-3xl font-bold text-[#19DB8C]'>1&apos;846.20 CHF</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {/* Left Column - Restaurant Info */}
                  <div className='col-span-2'>
                    <div className='bg-white rounded-lg p-4 mb-5'>
                      <h4 className='font-semibold border-b pb-3 text-gray-700 mb-4'>
                        Restaurant Information
                      </h4>
                      <div className='grid grid-cols-2 gap-4'>
                        <div>
                          <p className='text-sm text-gray-600'>Owner Name</p>
                          <p className='font-medium'>Kristian Kovac</p>
                        </div>
                        <div>
                          <p className='text-sm text-gray-600'>Designation</p>
                          <p className='font-medium'>Owner</p>
                        </div>
                        <div>
                          <p className='text-sm text-gray-600'>Restaurant Type</p>
                          <p className='font-medium'>Fine Dining</p>
                        </div>
                        <div>
                          <p className='text-sm text-gray-600'>Restaurant ID</p>
                          <p className='font-medium'>101</p>
                        </div>
                        <div>
                          <p className='text-sm text-gray-600'>Establishment</p>
                          <p className='font-medium'>01.01.2012</p>
                        </div>
                        <div>
                          <p className='text-sm text-gray-600'>Email Adresse</p>
                          <p className='font-medium'>contact@gourmetbistro.com</p>
                        </div>
                        <div>
                          <p className='text-sm text-gray-600'>Telefonnummer</p>
                          <p className='font-medium'>0767895671</p>
                        </div>
                        <div>
                          <p className='text-sm text-gray-600'>Adresse</p>
                          <p className='font-medium'>Langenthalerstrasse 12</p>
                        </div>
                      </div>
                      <div className='mt-4 grid grid-cols-3 gap-2'>
                        <img
                          src='/placeholder.svg?height=80&width=120'
                          alt='Restaurant'
                          className='rounded-md object-cover'
                        />
                        <img
                          src='/placeholder.svg?height=80&width=120'
                          alt='Restaurant'
                          className='rounded-md object-cover'
                        />
                        <img
                          src='/placeholder.svg?height=80&width=120'
                          alt='Restaurant'
                          className='rounded-md object-cover'
                        />
                      </div>
                    </div>

                    {/* Invoice Data */}
                    <div className='bg-white rounded-lg p-4 mb-5'>
                      <h4 className='font-semibold text-gray-700 border-b pb-3 mb-4'>
                        Invoice Data
                      </h4>
                      <div className='grid grid-cols-1 gap-2'>
                        <div className='flex gap-x-[76px]'>
                          <p className='text-basefont-medium text-[#1A2042]'>
                            Invoice Date:
                          </p>
                          <p className='font-medium'>02.12.2024</p>
                        </div>
                        <div className='flex gap-x-[98px]'>
                          <p className='text-base font-medium text-[#1A2042]'>
                            Due Date:
                          </p>
                          <p className='font-medium'>02.12.2024</p>
                        </div>
                        <div className='flex gap-x-[36px]'>
                          <p className='text-base font-medium text-[#1A2042]'>
                            Acceptance Date:
                          </p>
                          <p className='font-medium'>02.12.2024</p>
                        </div>
                        <div className='flex gap-x-[83px]'>
                          <p className='text-base font-medium text-[#1A2042]'>
                            Handled By:
                          </p>
                          <p className='font-medium'>Sadriu Rijard</p>
                        </div>
                      </div>
                    </div>

                    {/* Invoice Items */}
                    <div className='bg-white rounded-lg w-[935px] p-4'>
                      <h4 className='font-semibold text-gray-700 mb-4'>Invoice Items</h4>
                      <div className='overflow-x-auto'>
                        <table className='w-full'>
                          <thead>
                            <tr className='bg-[#EEF5FF] text-left'>
                              <th className='p-2 text-sm font-semibold text-[#131313]'>
                                No.
                              </th>
                              <th className='p-2 text-sm font-semibold text-[#131313]'>
                                Title
                              </th>
                              <th className='p-2 text-sm font-semibold text-[#131313]'>
                                Quantity
                              </th>
                              <th className='p-2 text-sm font-semibold text-[#131313]'>
                                Unit
                              </th>
                              <th className='p-2 text-sm font-semibold text-[#131313]'>
                                Description
                              </th>
                              <th className='p-2 text-sm font-semibold text-[#131313]'>
                                Unit Price
                              </th>
                              <th className='p-2 text-sm font-semibold text-[#131313]'>
                                Discount
                              </th>
                              <th className='p-2 text-sm font-semibold text-[#131313]'>
                                Discounted Price
                              </th>
                              <th className='p-2 text-sm font-semibold text-[#131313]'>
                                Tax Rate
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[1, 2, 3, 4, 5].map(item => (
                              <tr key={item} className='border-b border-gray-100'>
                                <td className='p-2 text-sm'>{item}</td>
                                <td className='p-2 text-sm'>Pasta</td>
                                <td className='p-2 text-sm'>01</td>
                                <td className='p-2 text-sm'>
                                  {item % 2 === 0 ? 'hr' : 'pcs'}
                                </td>
                                <td className='p-2 text-sm'>Home Delivery</td>
                                <td className='p-2 text-sm'>1200.78 CHF</td>
                                <td className='p-2 text-sm'>0 %</td>
                                <td className='p-2 text-sm'>1200.78 CHF</td>
                                <td className='p-2 text-sm'>8.10%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className='flex justify-end mt-4 mr-3'>
                        <div className='flex items-center gap-x-2'>
                          <p className='text-lg font-bold text-[#131313]'>Discount</p>
                          <p className='font-medium text-lg text-[#696969]'>0.00 CHF</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Payment Info */}
                  <div className='col-span-1'>
                    <div className='bg-[#DAE8FF] rounded-t-lg flex items-center justify-between px-5 py-2'>
                      <h4 className='font-semibold text-gray-700'>Zahlungen</h4>
                    </div>
                    <div className='bg-white rounded-b-lg p-2.5 mb-6'>
                      <div className='space-y-3'>
                        <div className='flex justify-between'>
                          <p className='text-sm text-gray-600'>Gesamtbetrag</p>
                          <p className='font-medium'>237.87 CHF</p>
                        </div>
                        <div className='flex justify-between'>
                          <p className='text-sm text-gray-600'>Zahlungen gesamt</p>
                          <p className='font-medium'>237.87 CHF</p>
                        </div>
                        <div className='flex justify-between'>
                          <p className='text-sm text-gray-600'>Offener Betrag</p>
                          <p className='font-medium text-green-500'>237.87 CHF</p>
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center justify-between mb-1.5'>
                      <h4 className='font-bold text-[#131313]'>Invoice</h4>
                      <p className='text-sm font-bold text-[#131313]'>16.12.2024</p>
                    </div>
                    <div className='bg-white rounded-lg p-4 mb-9'>
                      <div className='flex justify-between gap-2 mb-4'>
                        <button className='flex-1 p-2 bg-gray-100 rounded-md flex justify-center items-center'>
                          <Printer size={20} />
                        </button>
                        <button className='flex-1 p-2 bg-gray-100 rounded-md flex justify-center items-center'>
                          <Mail size={20} />
                        </button>
                        <button className='flex-1 p-2 bg-gray-100 rounded-md flex justify-center items-center'>
                          <DownloadIcon size={20} />
                        </button>
                      </div>
                      <button className='w-full text-left text-sm text-gray-600 flex items-center'>
                        <span>Show more</span>
                        <ChevronDown size={16} className='ml-1' />
                      </button>
                    </div>

                    <div className='flex items-center gap-x-2 mb-2 pt-2'>
                      <h4 className='font-semibold text-[#1A2042]'>Notes</h4>
                      <button className='text-[#19DB8C]'>
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className='bg-white rounded-lg px-4 py-1.5 mb-1.5'>
                      <p className='text-sm text-[#696969]'>
                        The Notizen is For Adding And Managing Reminders Or Details
                        Related To Invoices And Tasks.
                      </p>
                    </div>

                    <div className='flex items-center gap-x-2 mb-1'>
                      <h4 className='font-semibold text-[#1A2042]'>Tasks</h4>
                      <button className='text-[#19DB8C]'>
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className='bg-white rounded-lg px-4 py-1.5'>
                      <p className='text-sm text-[#696969]'>
                        The Notizen is For Adding And Managing Reminders Or Details
                        Related To Invoices And Tasks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Invoice Modal */}
      {showAddInvoiceModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4'>
          <div className='bg-[#F2FAFF] rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto'>
            <div className='p-6'>
              {/* Header with close button */}
              <div className='flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold'>Invoices (Rechnungen)</h2>
                <button
                  onClick={closeAddInvoiceModal}
                  className='p-1 rounded-full hover:bg-gray-200'
                >
                  <X size={24} />
                </button>
              </div>

              {/* Invoice Form */}
              <div className='bg-white p-6 rounded-lg'>
                <h3 className='text-lg font-semibold mb-4'>Informationen</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                  {/* Left Column */}
                  <div>
                    <div className='mb-4'>
                      <label className='block text-sm font-medium mb-1'>
                        Rechnungsdatum
                      </label>
                      <div className='relative'>
                        <input
                          type='date'
                          value={invoiceForm.invoiceDate}
                          onChange={e =>
                            setInvoiceForm({
                              ...invoiceForm,
                              invoiceDate: e.target.value,
                            })
                          }
                          className='w-full p-2 border border-gray-300 rounded-md'
                        />
                      </div>
                    </div>

                    <div className='mb-4'>
                      <label className='block text-sm font-medium mb-1'>
                        Zahlungsfris
                      </label>
                      <div className='relative'>
                        <select
                          value={invoiceForm.paymentDeadline}
                          onChange={e =>
                            setInvoiceForm({
                              ...invoiceForm,
                              paymentDeadline: e.target.value,
                            })
                          }
                          className='w-full p-2 border border-gray-300 rounded-md appearance-none pr-10'
                        >
                          <option>7 Days</option>
                          <option>14 Days</option>
                          <option>30 Days</option>
                        </select>
                        <div className='absolute right-3 top-2.5'>
                          <ChevronDown size={18} className='text-gray-500' />
                        </div>
                      </div>
                    </div>

                    <div className='mb-4'>
                      <label className='block text-sm font-medium mb-1'>Subject</label>
                      <div className='relative'>
                        <select
                          value={invoiceForm.subject}
                          onChange={e =>
                            setInvoiceForm({ ...invoiceForm, subject: e.target.value })
                          }
                          className='w-full p-2 border border-gray-300 rounded-md appearance-none pr-10'
                        >
                          <option>Restaurant</option>
                          <option>Catering</option>
                          <option>Event</option>
                        </select>
                        <div className='absolute right-3 top-2.5'>
                          <ChevronDown size={18} className='text-gray-500' />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className='mb-4'>
                      <label className='block text-sm font-medium mb-1'>Annahme</label>
                      <div className='relative'>
                        <input
                          type='date'
                          value={invoiceForm.acceptanceDate}
                          onChange={e =>
                            setInvoiceForm({
                              ...invoiceForm,
                              acceptanceDate: e.target.value,
                            })
                          }
                          className='w-full p-2 border border-gray-300 rounded-md'
                        />
                      </div>
                    </div>

                    <div className='mb-4'>
                      <label className='block text-sm font-medium mb-1'>
                        Bearbeiter*in
                      </label>
                      <div className='relative'>
                        <select
                          value={invoiceForm.processor}
                          onChange={e =>
                            setInvoiceForm({ ...invoiceForm, processor: e.target.value })
                          }
                          className='w-full p-2 border border-gray-300 rounded-md appearance-none pr-10'
                        >
                          <option>Sadhu Rijard</option>
                          <option>John Doe</option>
                          <option>Jane Smith</option>
                        </select>
                        <div className='absolute right-3 top-2.5'>
                          <ChevronDown size={18} className='text-gray-500' />
                        </div>
                      </div>
                    </div>

                    <div className='mb-4'>
                      <label className='block text-sm font-medium mb-1'>
                        Select Restaurant
                      </label>
                      <div className='relative'>
                        <div className='flex items-center w-full p-2 border border-gray-300 rounded-md'>
                          <Building size={18} className='text-gray-500 mr-2' />
                          <span>Select Restaurant</span>
                          <ChevronDown size={18} className='text-gray-500 ml-auto' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Restaurant Description */}
                <div className='mb-6'>
                  <label className='block text-sm font-medium mb-1'>
                    Restaurant Description
                  </label>
                  <textarea
                    value={invoiceForm.restaurantDescription}
                    onChange={e =>
                      setInvoiceForm({
                        ...invoiceForm,
                        restaurantDescription: e.target.value,
                      })
                    }
                    className='w-full p-2 border border-gray-300 rounded-md h-24'
                  ></textarea>
                </div>

                {/* Right Sidebar */}
                <div className=' gap-6'>
                  <div className='col-span-2'>
                    {/* Invoice Items */}
                    <div>
                      <h3 className='text-lg font-semibold mb-4'>Invoice Items</h3>
                      <div className='overflow-x-auto mb-4'>
                        <table className='w-full'>
                          <thead>
                            <tr className='bg-[#EEF5FF]'>
                              <th className='p-2 text-left font-semibold text-sm'>No.</th>
                              <th className='p-2 text-left font-semibold text-sm'>
                                Item
                              </th>
                              <th className='p-2 text-left font-semibold text-sm'>
                                Quantity
                              </th>
                              <th className='p-2 text-left font-semibold text-sm'>
                                Unit
                              </th>
                              <th className='p-2 text-left font-semibold text-sm'>
                                Description
                              </th>
                              <th className='p-2 text-left font-semibold text-sm'>
                                Unit Price
                              </th>
                              <th className='p-2 text-left font-semibold text-sm'>
                                Tax Rate
                              </th>
                              <th className='p-2 text-left font-semibold text-sm'>
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {invoiceForm.items.map((item, index) => (
                              <InvoiceItem
                                key={index}
                                item={item}
                                index={index}
                                onUpdate={handleUpdateInvoiceItem}
                                onRemove={() => handleRemoveInvoiceItem(index)}
                              />
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <button
                        className='bg-[#0075FF] text-white px-4 py-2 rounded-md flex items-center'
                        onClick={handleAddInvoiceItem}
                      >
                        <Plus size={16} className='mr-2' />
                        Add Items
                      </button>
                    </div>
                  </div>
                </div>

                {/* Create Button */}
                <div className='flex justify-end mt-6'>
                  <button
                    className='bg-[#0075FF] text-white px-6 py-2 rounded-md'
                    onClick={handleCreateInvoice}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
