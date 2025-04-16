'use client';

import { useState } from 'react';
import {
  Search,
  ChevronDown,
  Plus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import DashboardLayout from '../../../layouts/dashboardLayout';
import BalanceOverview from './balance-overview';
import DailyCash from './daily-cash';

export default function CashTransactions() {
  const [activeTab, setActiveTab] = useState('transactions');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [addTransactionModalOpen, setAddTransactionModalOpen] = useState(false);
  const [activeActionMenu, setActiveActionMenu] = useState(null);

  // Form state for new transaction
  const [newTransaction, setNewTransaction] = useState({
    itemName: '',
    shopName: '',
    date: '',
    paymentMethod: '',
    amount: '',
  });

  // Sample transaction data
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      itemName: 'Beta Gadget',
      shopName: 'Global Store',
      date: 'May 31, 2015',
      paymentMethod: 'Luqapay Havale/EFT',
      amount: 230.0,
      status: 'positive',
      category: 'Electronics',
    },
    {
      id: 2,
      itemName: 'Epsilon Instrument',
      shopName: 'Trendy Trove Shop',
      date: 'September 9, 2013',
      paymentMethod: 'Fast QR',
      amount: 11.45,
      status: 'positive',
      category: 'Tools',
    },
    {
      id: 3,
      itemName: 'Eta Gizmo',
      shopName: 'Elite Bazaar Hub',
      date: 'November 16, 2014',
      paymentMethod: 'Ecopayz',
      amount: 12.2,
      status: 'positive',
      category: 'Gadgets',
    },
    {
      id: 4,
      itemName: 'Theta Module',
      shopName: 'Nik Shop',
      date: 'December 19, 2013',
      paymentMethod: 'CepBank',
      amount: 54.99,
      status: 'positive',
      category: 'Electronics',
    },
    {
      id: 5,
      itemName: 'Iota Component',
      shopName: 'Digital Dress Room',
      date: 'March 6, 2018',
      paymentMethod: 'Paysafecard',
      amount: -33.7,
      status: 'negative',
      category: 'Clothing',
    },
    {
      id: 6,
      itemName: 'Kappa Mechanism',
      shopName: 'Echo Emporium',
      date: 'February 28, 2018',
      paymentMethod: 'Luqapay',
      amount: -29.99,
      status: 'negative',
      category: 'Tools',
    },
    {
      id: 7,
      itemName: 'Theta Module',
      shopName: 'Nik Shop',
      date: 'December 19, 2013',
      paymentMethod: 'CepBank',
      amount: 54.99,
      status: 'positive',
      category: 'Electronics',
    },
    {
      id: 8,
      itemName: 'Iota Component',
      shopName: 'Digital Dress Room',
      date: 'March 6, 2018',
      paymentMethod: 'Paysafecard',
      amount: -33.7,
      status: 'negative',
      category: 'Clothing',
    },
    {
      id: 9,
      itemName: 'Kappa Mechanism',
      shopName: 'Echo Emporium',
      date: 'February 28, 2018',
      paymentMethod: 'Luqapay',
      amount: -29.99,
      status: 'negative',
      category: 'Tools',
    },
  ]);

  // Available categories and statuses
  const categories = ['Electronics', 'Tools', 'Gadgets', 'Clothing', 'Food', 'Services'];
  const statuses = ['All', 'Positive', 'Negative'];

  // Payment methods
  const paymentMethods = [
    'Luqapay Havale/EFT',
    'Fast QR',
    'Ecopayz',
    'CepBank',
    'Paysafecard',
    'Credit Card',
    'Bank Transfer',
  ];

  // Sample data for other tabs
  const balanceOverviewContent = <BalanceOverview />;

  const dailyCashClosureContent = <DailyCash />;

  // Handle adding a new transaction
  const handleAddTransaction = () => {
    // Validate form
    if (
      !newTransaction.itemName ||
      !newTransaction.shopName ||
      !newTransaction.date ||
      !newTransaction.paymentMethod ||
      !newTransaction.amount
    ) {
      alert('Please fill in all fields');
      return;
    }

    const amount = Number.parseFloat(newTransaction.amount);

    // Create new transaction object
    const transaction = {
      id: transactions.length + 1,
      itemName: newTransaction.itemName,
      shopName: newTransaction.shopName,
      date: newTransaction.date,
      paymentMethod: newTransaction.paymentMethod,
      amount: Math.abs(amount),
      status: amount < 0 ? 'negative' : 'positive',
      category: selectedCategory || 'Other',
    };

    // Add to transactions array
    setTransactions([transaction, ...transactions]);

    // Reset form
    setNewTransaction({
      itemName: '',
      shopName: '',
      date: '',
      paymentMethod: '',
      amount: '',
    });

    // Close modal
    setAddTransactionModalOpen(false);
  };

  // Handle deleting a transaction
  const handleDeleteTransaction = id => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    setActiveActionMenu(null);
  };

  // Filter transactions based on search query, category, and status
  const filteredTransactions = transactions.filter(transaction => {
    // Search filter
    const matchesSearch =
      transaction.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.shopName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory =
      !selectedCategory || transaction.category === selectedCategory;

    // Status filter
    const matchesStatus =
      !selectedStatus ||
      selectedStatus === 'All' ||
      (selectedStatus === 'Positive' && transaction.status === 'positive') ||
      (selectedStatus === 'Negative' && transaction.status === 'negative');

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredTransactions.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, filteredTransactions.length);
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  // Format amount with currency
  const formatAmount = (amount, status) => {
    const formattedAmount = Math.abs(amount).toFixed(2);
    return status === 'negative' ? `-€${formattedAmount}` : `€${formattedAmount}`;
  };

  // Close all dropdowns when clicking outside
  const handleClickOutside = () => {
    setCategoryDropdownOpen(false);
    setStatusDropdownOpen(false);
    setActiveActionMenu(null);
  };

  return (
    <DashboardLayout>
      <div className='' onClick={handleClickOutside}>
        <div className='my-6'>
          {/* Tabs */}
          <div className='border-gray-200'>
            <nav className='flex gap-x-6'>
              <button
                onClick={() => setActiveTab('transactions')}
                className={`py-2 px-3 border-b-2 font-medium text-lg ${
                  activeTab === 'transactions'
                    ? 'border-[#00925C] text-[#00925C]'
                    : 'border-transparent text-[#717B8C] hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Cash Transactions
              </button>
              <button
                onClick={() => setActiveTab('balance')}
                className={`py-2 px-3 border-b-2 font-medium text-lg ${
                  activeTab === 'balance'
                    ? 'border-[#00925C] text-[#00925C]'
                    : 'border-transparent text-[#717B8C] hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Balance Overview
              </button>
              <button
                onClick={() => setActiveTab('closure')}
                className={`py-2 px-3 border-b-2 font-medium text-lg ${
                  activeTab === 'closure'
                    ? 'border-[#00925C] text-[#00925C]'
                    : 'border-transparent text-[#717B8C] hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Daily Cash Closure
              </button>
            </nav>
          </div>
          {/* Tab content */}
          {activeTab === 'transactions' && (
            <div className='bg-white mt-6 px-5 py-6 rounded-xl'>
              <div className='mb-6'>
                <h1 className='text-xl font-semibold text-[#131313]'>
                  Cash Transactions
                </h1>
                <p className='text-sm text-[#131313]'>
                  Lorem ipsum dolor sit amet, consecteture
                </p>
              </div>
              {/* Search and filters */}
              <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4'>
                <div className='relative w-full md:w-auto'>
                  <div className='relative'>
                    <input
                      type='text'
                      placeholder='Search for name, id.....'
                      className='pl-4 py-2 border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl placeholder:text-[#131313] w-full md:w-96 outline-none'
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                    <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                      <Search className='h-5 w-5 text-[#131313]' />
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-x-4 w-full md:w-auto'>
                  <div className='relative'>
                    <button
                      className='flex items-center justify-between px-4 py-2 border border-[#9EC3FF] rounded-lg bg-[#EEF5FF] text-sm text-[#131313] w-full md:w-32'
                      onClick={e => {
                        e.stopPropagation();
                        setCategoryDropdownOpen(!categoryDropdownOpen);
                        setStatusDropdownOpen(false);
                      }}
                    >
                      <span>{selectedCategory || 'Category'}</span>
                      <ChevronDown className='h-4 w-4 ml-2' />
                    </button>
                    {categoryDropdownOpen && (
                      <div className='absolute z-10 mt-1 w-full bg-white border border-[#C1C1C1] shadow-lg rounded-md py-1'>
                        {categories.map(category => (
                          <button
                            key={category}
                            className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            onClick={e => {
                              e.stopPropagation();
                              setSelectedCategory(category);
                              setCategoryDropdownOpen(false);
                            }}
                          >
                            {category}
                          </button>
                        ))}
                        {selectedCategory && (
                          <button
                            className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                            onClick={e => {
                              e.stopPropagation();
                              setSelectedCategory(null);
                              setCategoryDropdownOpen(false);
                            }}
                          >
                            Clear Filter
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  <div className='relative'>
                    <button
                      className='flex items-center justify-between px-4 py-2 border border-[#9EC3FF] rounded-lg bg-[#EEF5FF] text-sm text-[#131313] w-full md:w-32'
                      onClick={e => {
                        e.stopPropagation();
                        setStatusDropdownOpen(!statusDropdownOpen);
                        setCategoryDropdownOpen(false);
                      }}
                    >
                      <span>{selectedStatus || 'Status'}</span>
                      <ChevronDown className='h-4 w-4 ml-2' />
                    </button>
                    {statusDropdownOpen && (
                      <div className='absolute z-10 mt-1 w-full border border-[#C1C1C1] bg-white shadow-lg rounded-md py-1'>
                        {statuses.map(status => (
                          <button
                            key={status}
                            className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            onClick={e => {
                              e.stopPropagation();
                              setSelectedStatus(status);
                              setStatusDropdownOpen(false);
                            }}
                          >
                            {status}
                          </button>
                        ))}
                        {selectedStatus && (
                          <button
                            className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                            onClick={e => {
                              e.stopPropagation();
                              setSelectedStatus(null);
                              setStatusDropdownOpen(false);
                            }}
                          >
                            Clear Filter
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  <button
                    className='flex items-center px-4 py-2 bg-[#0F0A33] text-white rounded-lg hover:shadow-lg hover:shadow-[#0075FF] transition-colors'
                    onClick={() => setAddTransactionModalOpen(true)}
                  >
                    <span>Add Transaction</span>
                    <Plus className='h-4 w-4 ml-2' />
                  </button>
                </div>
              </div>

              {/* Transactions table */}
              <div className='bg-white rounded-lg shadow overflow-hidden'>
                <div className=''>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-[#EEF5FF]'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-base font-semibold text-[#000000]  tracking-wider'
                        >
                          Item Name
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-base font-semibold text-[#000000]  tracking-wider'
                        >
                          Shop Name
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-base font-semibold text-[#000000]  tracking-wider'
                        >
                          Date
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-base font-semibold text-[#000000]  tracking-wider'
                        >
                          Payment Method
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-base font-semibold text-[#000000]  tracking-wider'
                        >
                          Amount
                        </th>
                        <th scope='col' className='relative px-6 py-3'>
                          <span className='sr-only'>Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {currentTransactions.map(transaction => (
                        <tr key={transaction.id}>
                          <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[#000000]'>
                            {transaction.itemName}
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-[#000000]'>
                            {transaction.shopName}
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-[#000000]'>
                            {transaction.date}
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm text-[#000000]'>
                            {transaction.paymentMethod}
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-sm'>
                            <div className='flex items-center'>
                              <span
                                className={`h-2 w-2 rounded-full mr-2 ${
                                  transaction.status === 'positive'
                                    ? 'bg-green-500'
                                    : 'bg-red-500'
                                }`}
                              ></span>
                              <span
                                className={
                                  transaction.status === 'positive'
                                    ? 'text-gray-900'
                                    : 'text-red-600'
                                }
                              >
                                {formatAmount(transaction.amount, transaction.status)}
                              </span>
                            </div>
                          </td>
                          <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                            <div className='relative'>
                              <button
                                className='text-gray-400 hover:text-gray-500'
                                onClick={e => {
                                  e.stopPropagation();
                                  setActiveActionMenu(
                                    activeActionMenu === transaction.id
                                      ? null
                                      : transaction.id
                                  );
                                }}
                              >
                                <MoreVertical className='h-5 w-5' />
                              </button>
                              {activeActionMenu === transaction.id && (
                                <div className='absolute right-0 mt-2 w-48 bg-white border border-[#C1C1C1] rounded-md shadow-lg py-1 z-10'>
                                  <button
                                    className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                    onClick={e => {
                                      e.stopPropagation();
                                      // View details functionality
                                      alert(`Details for ${transaction.itemName}`);
                                      setActiveActionMenu(null);
                                    }}
                                  >
                                    View Details
                                  </button>
                                  <button
                                    className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                    onClick={e => {
                                      e.stopPropagation();
                                      // Edit functionality
                                      alert(`Edit ${transaction.itemName}`);
                                      setActiveActionMenu(null);
                                    }}
                                  >
                                    Edit
                                  </button>
                                  <button
                                    className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                                    onClick={e => {
                                      e.stopPropagation();
                                      handleDeleteTransaction(transaction.id);
                                    }}
                                  >
                                    Delete
                                  </button>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Pagination */}
                <div className='bg-white px-4 py-3 flex items-center justify-end border-t border-gray-200 sm:px-6'>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-700'>Results Per Page</p>
                    <div className='relative mx-2'>
                      <select
                        className='appearance-none h-full rounded-xl bg-[#EEF5FF] pl-3 py-1 pr-8 cursor-pointer text-[#131313] text-sm outline-none'
                        value={resultsPerPage}
                        onChange={e => {
                          setResultsPerPage(Number(e.target.value));
                          setCurrentPage(1); // Reset to first page when changing results per page
                        }}
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                        <ChevronDown className='h-4 w-4' />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-700'>
                      {filteredTransactions.length > 0
                        ? `${startIndex + 1}-${endIndex} Of ${
                            filteredTransactions.length
                          }`
                        : '0 Results'}
                    </p>
                    <nav
                      className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px ml-4'
                      aria-label='Pagination'
                    >
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                          currentPage === 1
                            ? 'text-gray-300'
                            : 'text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        <span className='sr-only'>Previous</span>
                        <ChevronLeft className='h-5 w-5' />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage(Math.min(totalPages, currentPage + 1))
                        }
                        disabled={currentPage === totalPages || totalPages === 0}
                        className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                          currentPage === totalPages || totalPages === 0
                            ? 'text-gray-300'
                            : 'text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        <span className='sr-only'>Next</span>
                        <ChevronRight className='h-5 w-5' />
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'balance' && balanceOverviewContent}
          {activeTab === 'closure' && dailyCashClosureContent}
        </div>
        {/* Add Transaction Modal */}
        {addTransactionModalOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4'>
            <div
              className='bg-white rounded-xl shadow-xl max-w-lg w-full p-6'
              onClick={e => e.stopPropagation()}
            >
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-semibold'>Add New Transaction</h2>
                <button
                  className='text-gray-400 hover:text-gray-500'
                  onClick={() => setAddTransactionModalOpen(false)}
                >
                  <X className='size-7 hover:bg-gray-200 rounded-full p-1' />
                </button>
              </div>
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Item Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                    value={newTransaction.itemName}
                    onChange={e =>
                      setNewTransaction({ ...newTransaction, itemName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Shop Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                    value={newTransaction.shopName}
                    onChange={e =>
                      setNewTransaction({ ...newTransaction, shopName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Date
                  </label>
                  <input
                    type='date'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                    value={newTransaction.date}
                    onChange={e => {
                      // Format date to match our display format
                      const date = new Date(e.target.value);
                      const formattedDate = date.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      });
                      setNewTransaction({ ...newTransaction, date: formattedDate });
                    }}
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Payment Method
                  </label>
                  <select
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                    value={newTransaction.paymentMethod}
                    onChange={e =>
                      setNewTransaction({
                        ...newTransaction,
                        paymentMethod: e.target.value,
                      })
                    }
                  >
                    <option value=''>Select Payment Method</option>
                    {paymentMethods.map(method => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Amount (€)
                  </label>
                  <input
                    type='number'
                    step='0.01'
                    placeholder='Use negative value for expenses'
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                    value={newTransaction.amount}
                    onChange={e =>
                      setNewTransaction({ ...newTransaction, amount: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Category
                  </label>
                  <select
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500'
                    value={selectedCategory || ''}
                    onChange={e => setSelectedCategory(e.target.value || null)}
                  >
                    <option value=''>Select Category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='mt-6 flex justify-end space-x-3'>
                <button
                  className='px-4 py-2 border border-[#C1C1C1] rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100'
                  onClick={() => setAddTransactionModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className='px-4 py-2 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white rounded-lg text-sm font-medium'
                  onClick={handleAddTransaction}
                >
                  Add Transaction
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
