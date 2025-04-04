import { useState } from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout';
import { Search, Plus, Star, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MenuManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Breakfast');
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Classic Chicken Steak With Fries',
      image:
        'https://images.unsplash.com/photo-1659881981676-33ab127152c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2xhc3NpYyUyMENoaWNrZW4lMjBTdGVhayUyMFdpdGglMjBGcmllc3xlbnwwfHwwfHx8MA%3D%3D',
      rating: 4.5,
      price: 12.63,
      preparationTime: 15,
      tags: ['Popular', 'Grilled'],
      availableFor: ['Lunch', 'Dinner'],
      ingredients: 'Grilled chicken breast, crispy fries, pepper sauce, fresh herbs',
      inStock: true,
      reviews: 2,
      inMenu: false,
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      image:
        'https://plus.unsplash.com/premium_photo-1691948106030-d5e76d461b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3BhZ2hldHRpJTIwQ2FyYm9uYXJhfGVufDB8fDB8fHww',
      rating: 4.8,
      price: 10.99,
      preparationTime: 20,
      tags: ['Italian', 'Pasta'],
      availableFor: ['Lunch', 'Dinner'],
      ingredients: 'Spaghetti, egg yolk, pancetta, Parmesan cheese, black pepper',
      inStock: true,
      reviews: 5,
      inMenu: false,
    },
    {
      id: 3,
      name: 'Margarita Pizza',
      image:
        'https://images.unsplash.com/photo-1669895616443-5d21d5acc6e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFyZ2FyaXRhJTIwUGl6emF8ZW58MHx8MHx8fDA%3D',
      rating: 4.7,
      price: 14.5,
      preparationTime: 18,
      tags: ['Pizza', 'Vegetarian'],
      availableFor: ['Lunch', 'Dinner'],
      ingredients: 'Fresh Mozzarella, Tomato Sauce, Fresh Basil, Olive Oil',
      inStock: true,
      reviews: 3,
      inMenu: false,
    },
    {
      id: 4,
      name: 'Avocado Toast with Poached Egg',
      image:
        'https://plus.unsplash.com/premium_photo-1692883560684-b7aa96067290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXZvY2FkbyUyMFRvYXN0JTIwd2l0aCUyMFBvYWNoZWQlMjBFZ2d8ZW58MHx8MHx8fDA%3D',
      rating: 4.6,
      price: 8.75,
      preparationTime: 10,
      tags: ['Healthy', 'Breakfast'],
      availableFor: ['Breakfast', 'Brunch'],
      ingredients: 'Whole grain toast, avocado, poached egg, chili flakes, microgreens',
      inStock: true,
      reviews: 4,
      inMenu: false,
    },
  ]);

  const [menuPreview, setMenuPreview] = useState([]);
  // const [viewOption, setViewOption] = useState('Default');

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

  const handleAddToMenu = id => {
    setMenuItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, inMenu: true } : item))
    );

    const itemToAdd = menuItems.find(item => item.id === id);
    if (itemToAdd && !menuPreview.some(item => item.id === id)) {
      setMenuPreview(prev => [...prev, itemToAdd]);
    }
  };

  const handleRemoveFromMenu = id => {
    setMenuPreview(prev => prev.filter(item => item.id !== id));

    setMenuItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, inMenu: false } : item))
    );
  };
  const navigate = useNavigate();

  const handleCreateNewDish = () => {
    // Navigate('/add-product-page', { state: { from: 'menu-management' } });
    navigate('/add-product-page'); // Navigate to the Add Product page route
  };

  const handleSaveChanges = () => {
    alert(`Saved ${menuPreview.length} items to your menu!`);
  };

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' ||
      (activeCategory === 'Breakfast' && item.availableFor.includes('Breakfast')) ||
      (activeCategory === 'Lunch' && item.availableFor.includes('Lunch')) ||
      (activeCategory === 'Dinner' && item.availableFor.includes('Dinner'));

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <DashboardLayout>
        <div className='flex flex-col lg:flex-row gap-x-4 py-4'>
          {/* Menu Customization Panel */}
          <div className=' bg-white rounded-lg shadow-sm px-5 py-9'>
            <h2 className='text-xl font-bold text-gray-800'>Menu Customization</h2>
            <p className='text-sm text-gray-500 mb-4'>
              Customize your restaurant menu by adding, editing, and organizing dishes
            </p>

            <div className='flex flex-col sm:flex-row gap-3 mb-6'>
              <div className='relative flex-grow'>
                <input
                  type='text'
                  placeholder='Search for name, id.....'
                  className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <Search className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
              </div>
              <button
                onClick={handleCreateNewDish}
                className='flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'
              >
                <Plus className='h-5 w-5' />
                Create New Dish
              </button>
            </div>

            <div className='flex gap-2 mb-6 overflow-x-auto'>
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {filteredItems.map(item => (
                <div
                  key={item.id}
                  className='border border-gray-200 rounded-lg overflow-hidden'
                >
                  <div className='relative'>
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      className='w-full h-48 object-cover'
                    />
                    {item.inStock && (
                      <div className='absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded'>
                        In Stock
                      </div>
                    )}
                    <div className='absolute bottom-2 right-2 bg-white text-gray-700 text-xs px-2 py-1 rounded shadow'>
                      {item.preparationTime} mins
                    </div>
                  </div>

                  <div className='p-4'>
                    <div className='flex justify-between items-start mb-2'>
                      <h3 className='font-medium text-gray-800'>{item.name}</h3>
                      <div className='flex items-center'>
                        <Star className='h-4 w-4 text-yellow-400 fill-yellow-400' />
                        <span className='text-sm ml-1'>{item.rating}</span>
                      </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className='text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className='text-lg font-semibold mb-2'>
                      {item.price.toFixed(2)} CHF
                    </div>

                    <div className='mb-2'>
                      <p className='text-xs text-gray-500'>Available For</p>
                      <div className='flex gap-2 mt-1'>
                        {['Lunch', 'Dinner'].map(meal => (
                          <span
                            key={meal}
                            className={`text-xs px-2 py-0.5 rounded ${
                              item.availableFor.includes(meal)
                                ? 'bg-blue-100 text-blue-600 border border-blue-200'
                                : 'bg-gray-100 text-gray-500'
                            }`}
                          >
                            {meal}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className='mb-3'>
                      <p className='text-xs text-gray-500'>Ingredients:</p>
                      <p className='text-xs text-gray-700 mt-1'>{item.ingredients}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                      <div className='relative'>
                        <button className='flex items-center text-xs text-gray-600'>
                          Show Reviews ({item.reviews})
                          <ChevronDown className='h-3 w-3 ml-1' />
                        </button>
                      </div>

                      <button
                        onClick={() => handleAddToMenu(item.id)}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm font-medium ${
                          item.inMenu
                            ? 'bg-gray-200 text-gray-700'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                        disabled={item.inMenu}
                      >
                        <Plus className='h-4 w-4' />
                        {item.inMenu ? 'Added to Menu' : 'Add to Menu'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Preview Panel */}
          <div className='w-full lg:w-2/5 bg-white rounded-lg shadow-sm p-6'>
            <div className='flex justify-between items-center mb-4'>
              <div>
                <h2 className='text-xl font-bold text-gray-800'>Menu Preview</h2>
                <p className='text-sm text-gray-500'>Real-time Placed Orders</p>
              </div>

              <div className='relative'>
                <button className='flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-lg text-sm'>
                  View
                  <ChevronDown className='h-4 w-4' />
                </button>
              </div>
            </div>

            {menuPreview.length === 0 ? (
              <div className='flex flex-col items-center justify-center h-96 text-center'>
                <div className='w-24 h-24 mb-4'>
                  <svg viewBox='0 0 100 100' className='text-blue-200'>
                    <rect
                      x='20'
                      y='10'
                      width='60'
                      height='80'
                      fill='currentColor'
                      rx='5'
                    />
                    <rect x='30' y='30' width='40' height='5' fill='#e0e7ff' rx='2' />
                    <rect x='30' y='40' width='40' height='5' fill='#e0e7ff' rx='2' />
                    <rect x='30' y='50' width='40' height='5' fill='#e0e7ff' rx='2' />
                    <path d='M50,20 L70,40 L50,40 Z' fill='#e0e7ff' />
                  </svg>
                </div>
                <h3 className='text-lg font-medium text-gray-700 mb-2'>
                  You haven&apos;t added anything to your Menu!
                </h3>
                <p className='text-gray-500'>Drag & Drop Menu Items</p>
              </div>
            ) : (
              <div className='overflow-y-auto max-h-[500px] mb-4'>
                {menuPreview.map(item => (
                  <div
                    key={item.id}
                    className='flex items-center gap-3 p-3 border border-gray-200 rounded-lg mb-2'
                  >
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      className='w-16 h-16 object-cover rounded'
                    />
                    <div className='flex-grow'>
                      <h3 className='font-medium text-gray-800'>{item.name}</h3>
                      <p className='text-sm text-gray-500'>{item.price.toFixed(2)} CHF</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromMenu(item.id)}
                      className='text-red-500 text-sm hover:text-red-700'
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleSaveChanges}
              className='w-full py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors'
            >
              Save Changes
            </button>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default MenuManagement;
