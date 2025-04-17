// stockManagement.jsx
import { Search } from 'lucide-react';
import { useState } from 'react';
import { FiPlus, FiChevronDown } from 'react-icons/fi';
import StockManagement from './stockManagement';
import AddNewStock from './addNewStock/addNewStock';

const StockSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [stockStatus, setStockStatus] = useState('All');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [showAddNewStock, setShowAddNewStock] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics', stock: 15, status: 'In Stock' },
    { id: 2, name: 'Desk Chair', category: 'Furniture', stock: 8, status: 'Low Stock' },
    {
      id: 3,
      name: 'Notebook',
      category: 'Office Supplies',
      stock: 0,
      status: 'Out of Stock',
    },
    { id: 4, name: 'Monitor', category: 'Electronics', stock: 12, status: 'In Stock' },
    {
      id: 5,
      name: 'Pen Set',
      category: 'Office Supplies',
      stock: 3,
      status: 'Low Stock',
    },
  ]);

  const categories = ['All', 'Electronics', 'Furniture', 'Office Supplies'];
  const statusOptions = ['All', 'In Stock', 'Low Stock', 'Out of Stock'];

  const handleAddItem = () => {
    // Instead of adding an item directly, show the AddNewStock component
    setShowAddNewStock(true);
  };

  // Function to handle adding a new item from the AddNewStock component
  const handleSaveNewItem = newItem => {
    setItems([
      ...items,
      {
        id: Math.max(...items.map(i => i.id)) + 1,
        ...newItem,
      },
    ]);
    setShowAddNewStock(false);
  };

  // Function to close the AddNewStock component without adding an item
  const handleCancelAddNewItem = () => {
    setShowAddNewStock(false);
  };

  // If showing AddNewStock component, return it instead of the main view
  if (showAddNewStock) {
    return <AddNewStock onSave={handleSaveNewItem} onCancel={handleCancelAddNewItem} />;
  }

  return (
    <>
      <div className='p-4 mt-6 bg-white rounded-t-lg shadow-sm'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>Inventory List</h1>
        {/* Search and Filter Bar */}
        <div className='flex flex-col md:flex-row justify-between gap-4 mb-6'>
          <div className='relative w-full md:w-auto'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search for name, id.....'
                className='pl-4 py-2 border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl placeholder:text-[#131313] text-sm w-full md:w-96 outline-none'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <Search className='h-5 w-5 text-[#131313]' />
              </div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-2'>
            {/* Category Dropdown */}
            <div className='relative space-x-'>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className='flex justify-between w-auto px-4 py-2 text-sm font-medium text-[#131313] bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl hover:bg-gray-50 outline-none'
              >
                {selectedCategory}
                <FiChevronDown className='ml-2 -mr-1 h-5 w-5' />
              </button>
              {isCategoryOpen && (
                <div className='absolute z-10 mt-1 w-36 bg-white shadow-lg rounded-xl'>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsCategoryOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        selectedCategory === category
                          ? 'bg-blue-100 text-blue-800'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Stock Status Dropdown */}
            <div className='relative'>
              <button
                onClick={() => setIsStatusOpen(!isStatusOpen)}
                className='inline-flex justify-between w-auto px-4 py-2 text-sm font-medium text-[#131313] bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl hover:bg-gray-50 outline-none'
              >
                {stockStatus}
                <FiChevronDown className='ml-2 -mr-1 h-5 w-5' />
              </button>
              {isStatusOpen && (
                <div className='absolute z-10 mt-1 w-32 bg-white shadow-lg rounded-xl ring-1 ring-black ring-opacity-5'>
                  {statusOptions.map(status => (
                    <button
                      key={status}
                      onClick={() => {
                        setStockStatus(status);
                        setIsStatusOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        stockStatus === status
                          ? 'bg-blue-100 text-blue-800'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Add Item Button */}
            <button
              onClick={handleAddItem}
              className='flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0055FF] outline-none'
            >
              Add Item
              <FiPlus className='ml-2' />
            </button>
          </div>
        </div>
      </div>
      <StockManagement />
    </>
  );
};

export default StockSearch;
