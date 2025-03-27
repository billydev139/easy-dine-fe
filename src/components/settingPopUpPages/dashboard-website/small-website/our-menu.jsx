import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurant } from '../../../../store/restaurant/restaurantSlice';
import { Skeleton } from '../../../../components/skeleton';

const OurMenu = () => {
  const [activeTab, setActiveTab] = useState('Starters');
  const dispatch = useDispatch();
  const { restaurant, isLoading, isSuccess, errorMessage } = useSelector((state) => state.restaurant);
  console.log("OurMenu -> restaurant", restaurant)

  // Define categories for the menu tabs
  const menuCategories = ['Starters', 'Main Course', 'Lunch', 'Dessert', 'Drinks'];

  // Fetch restaurant data when component mounts
  useEffect(() => {
    dispatch(getAllRestaurant({ page: 1, limit: 10, searchQuery: '' }));
  }, [dispatch]);

  // Process menu items from the restaurant data
  const menuItems = useMemo(() => {
    if (!restaurant || !restaurant.results || restaurant.results.length === 0) return {};
  
    // Initialize grouped items
    const groupedItems = {};
  
    // Iterate over menu categories
    menuCategories.forEach(category => {
      groupedItems[category] = [];
  
      // Iterate over all restaurants in the results array
      restaurant.results.results.forEach(res => {
        console.log("OurMenu -> res", res)
        if (res.menuItems && res.menuItems.length > 0) {
          // Filter and map menu items for the current category
          const items = res.menuItems
            .filter(item => item.category === category)
            .map(item => ({
              img: item.image,
              name: item.dishName,
              description: item.description,
              price: item.price,
            }));
  
          // Add the filtered items to the grouped category
          groupedItems[category] = [...groupedItems[category], ...items];
        }
      });
    });
  
    return groupedItems;
  }, [restaurant, menuCategories]);

  // Show a loading state while fetching data
  if (isLoading) {
    return (
      <div className='bg-blue-50 min-h-screen py-24'>
        <div className='max-w-6xl mx-auto'>
          <h1 className='text-4xl text-[#131313] font-bold text-center mb-2.5'>Our Menu</h1>
          <p className='text-center text-[#696969] mb-10'>
            View your restaurant and make reservations through QR Codes
          </p>
          
          {/* Loading state for tabs */}
          <div className='flex justify-center mb-8'>
            {menuCategories.map((_, index) => (
              <Skeleton key={index} className="h-10 w-24 mx-2" />
            ))}
          </div>
          
          {/* Loading state for menu items */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className='bg-white border border-[#C1C1C1C1] rounded-[10px] shadow-md py-11 px-9 flex items-center'>
                <Skeleton className="w-28 h-28 rounded-full mr-8" />
                <div className="space-y-2 w-full">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show error message if there was an error fetching data
  if (errorMessage) {
    return (
      <div className='bg-blue-50 min-h-screen py-24'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-4xl text-[#131313] font-bold mb-2.5'>Our Menu</h1>
          <p className='text-red-500 mb-4'>Error loading menu: {errorMessage}</p>
        </div>
      </div>
    );
  }

  // Fallback to empty arrays if data isn't ready yet
  const currentMenuItems = menuItems[activeTab] || [];

  return (
    <div className='bg-blue-50 min-h-screen py-24'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl text-[#131313] font-bold text-center mb-2.5'>Our Menu</h1>
        <p className='text-center text-[#696969] mb-10'>
          View your restaurant and make reservations through QR Codes
        </p>

        {/* Menu Tabs */}
        <div className='flex justify-center mb-8 overflow-x-auto'>
          {menuCategories.map(category => (
            <button
              key={category}
              className={`px-10 py-2 duration-300 ${
                activeTab === category
                  ? 'text-black font-bold duration-300'
                  : 'text-[#696969] font-medium duration-300'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {currentMenuItems.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {currentMenuItems.map((item, index) => (
              <div
                key={index}
                className='bg-white border border-[#C1C1C1C1] rounded-[10px] shadow-md py-11 px-9 flex items-center'
              >
                <div className='w-28 h-28 mr-8 flex-shrink-0'>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
                <div>
                  <h3 className='text-xl font-bold text-black mb-2'>{item.name}</h3>
                  <p className='text-gray-700'>{item.description}</p>
                  {item.price && <p className='text-[#696969] mt-2 font-medium'>${item.price}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center py-10'>
            <p className='text-[#696969]'>No menu items found for {activeTab}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurMenu;