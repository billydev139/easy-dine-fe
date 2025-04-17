import { useState } from 'react';

export default function StockManagement() {
  const [activeTab, setActiveTab] = useState('Pizza');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const categories = ['Pizza', 'Soda', 'Fish', 'Steak'];

  const menuItems = [
    {
      id: 1,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Pizza',
    },
    {
      id: 2,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Soda',
    },
    {
      id: 3,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Fish',
    },
    {
      id: 4,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Steak',
    },
    {
      id: 5,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Pizza',
    },
    {
      id: 6,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Soda',
    },
    {
      id: 7,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Pizza',
    },
    {
      id: 8,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Steak',
    },
    {
      id: 9,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Soda',
    },
    {
      id: 10,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Pizza',
    },
    {
      id: 11,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Fish',
    },
    {
      id: 12,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Steak',
    },
    {
      id: 13,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Pizza',
    },
    {
      id: 14,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Soda',
    },
    {
      id: 15,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Fish',
    },
    {
      id: 16,
      name: 'Nudeln',
      tags: ['hookah', 'smoke'],
      image: '/api/placeholder/400/320',
      price: '300 Stk',
      category: 'Steak',
    },
  ];

  const filteredItems =
    activeTab === 'All'
      ? menuItems
      : menuItems.filter(item => item.category === activeTab);

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage * 3 // Display 3 rows of items
  );

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

  const handleTabClick = tab => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className='bg-white rounded-b-lg px-4 pb-6 mb-6'>
      {/* Category Tabs */}
      <div className='flex mb-6 gap-x-6'>
        {categories.map(category => (
          <button
            key={category}
            className={`px-3 py-2 font-bold text-sm border-b-2 ${
              activeTab === category
                ? 'border-[#00925C] text-[#00925C]'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {currentItems.map(item => (
          <div
            key={item.id}
            className='border border-[#C1C1C1] rounded-xl overflow-hidden bg-white shadow-sm'
          >
            <div className='relative h-40'>
              <img
                src='https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bnVkZWxufGVufDB8fDB8fHww'
                alt={item.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-3'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-bold text-base text-[#131313]'>{item.name}</h3>
                  <p className='text-xs font-semibold text-[#131313]'>
                    {item.tags.join(', ')}
                  </p>
                </div>
                <div className='bg-[#19DB8C] text-white text-xs px-3 py-1 rounded-full'>
                  Vorhanden
                </div>
              </div>
              <div className='flex justify-between items-center mt-3'>
                <button className='bg-[#0075FF] hover:bg-[#0055FF] text-white px-5 py-1 rounded-[10px] text-sm'>
                  View
                </button>
                <span className='text-xl text-[#131313] font-bold'>{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-end items-center mt-6 space-x-2'>
        <span className='text-sm text-[#131313]'>Results</span>
        <select
          value={itemsPerPage}
          onChange={e => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          className='border rounded px-2 py-1 text-sm'
        >
          <option value='4'>4</option>
          <option value='8'>8</option>
          <option value='12'>12</option>
        </select>
        <span className='text-sm text-[#131313]'>
          1–{Math.min(currentPage * itemsPerPage, totalItems)} Of {totalItems}
        </span>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-2 py-1 ${currentPage === 1 ? 'text-gray-300' : 'text-gray-700'}`}
        >
          &lt;
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 ${
            currentPage === totalPages ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
