import { useState, useEffect } from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout';
import {
  Search,
  Plus,
  Star,
  ChevronDown,
  CheckCircle,
  Trash2,
  Minus,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../../utils/EndPoints';
import { getAllMenus, createMenuItemsBulk } from '../../../store/menuSlice/menuSlice';
import axios from 'axios'; // Import axios for API calls

const MenuManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Breakfast');
  const [menuPreview, setMenuPreview] = useState([]);
  const [itemsInMenu, setItemsInMenu] = useState(new Set());
  const [savingMenu, setSavingMenu] = useState(false); // Add state for saving indicator

  // State to track quantities for each menu item
  const [itemQuantities, setItemQuantities] = useState({});
  
  // Get the menus data from Redux store
  const { menus, loading, error } = useSelector((state) => state.menu);
  const menuList = menus?.results?.menus || [];
  const allMenuItems = menuList.flatMap((menu) => menu.menuItems || []);
  console.log('allMenuItems✌️', allMenuItems);
  const dispatch = useDispatch();
  
  // Use the menuItems from the Redux store
  const [menuItems, setMenuItems] = useState([]);

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];

  const navigate = useNavigate();

  // Fetch menus on component mount
  useEffect(() => {
    // Dispatch the action to get all menus
    dispatch(getAllMenus({
      isActive: true,
      limit: 100 // Get a reasonable number of items
    }));
  }, [dispatch]);

  // Update menuItems when menus are fetched from API
  useEffect(() => {
    if (allMenuItems) {
      
      // Transform API data to match our component's expected structure
      const transformedMenuItems = allMenuItems.map(item => ({
        id: item._id,
        name: item.productName,
        image: item.images,
        rating: item.rating || 4.0,
        price: item.price,
        preparationTime: item.preparationTime || 15,
        tags: item.tags || [],
        availableFor: item.category ? [item.category] : ['Breakfast', 'Lunch', 'Dinner'],
        ingredients: item.ingredients || [],
        inStock: item.inStock || true,
        reviews: item.reviews?.length || 0,
        inMenu: false
      }));
      
      setMenuItems(transformedMenuItems);
    }
  }, [menus]);

  const handleAddToMenu = id => {
    setItemsInMenu(prev => new Set(prev).add(id));
    const itemToAdd = menuItems.find(item => item.id === id);
    if (itemToAdd && !menuPreview.some(item => item.id === id)) {
      setMenuPreview(prev => [...prev, itemToAdd]);
  
      // Initialize quantity for this item
      setItemQuantities(prev => ({
        ...prev,
        [id]: 1,
      }));
    }
  };

  const handleRemoveFromMenu = id => {
    setItemsInMenu(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  
    setMenuPreview(prev => prev.filter(item => item.id !== id));
  
    const newQuantities = { ...itemQuantities };
    delete newQuantities[id];
    setItemQuantities(newQuantities);
  };

  // Function to increase quantity
  const increaseQuantity = id => {
    setItemQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  // Function to decrease quantity
  const decreaseQuantity = id => {
    if (itemQuantities[id] > 1) {
      setItemQuantities(prev => ({
        ...prev,
        [id]: prev[id] - 1,
      }));
    }
  };

  const handleCreateNewDish = () => {
    navigate('/add-product-page');
  };

  // Filter items based on search query and selected category
  const filteredItems = allMenuItems.filter(item => {
    const matchesSearch = item.productName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' ||
      (activeCategory === 'Breakfast' && item.category.includes('Breakfast')) ||
      (activeCategory === 'Lunch' && item.category.includes('Lunch')) ||
      (activeCategory === 'Dinner' && item.category.includes('Dinner'));

    return matchesSearch && matchesCategory;
  });

  const [showModal, setShowModal] = useState(false);

  const saveMenuItemsToDatabase = async () => {
    setSavingMenu(true);
    try {
      // Get restaurantId from your state/props/context
      const restaurantId = "67e3e27803c48233005233b6"; // Replace with actual source
      
      // Prepare payload with quantities
      const itemsWithQuantities = menuPreview.map(item => ({
        ...item,
        quantity: itemQuantities[item.id] || 1
      }));
      // Dispatch the bulk creation action
      await dispatch(createMenuItemsBulk({
        restaurantId,
        menuItems: itemsWithQuantities
      })).unwrap(); // unwrap() handles the Promise properly
  
      setShowModal(true);
      // Optionally clear the preview after successful save
      setMenuPreview([]);
      setItemsInMenu(new Set());
      setItemQuantities({});
      
    } catch (error) {
      alert(error.message || 'Failed to save menu items');
    } finally {
      setSavingMenu(false);
    }
  };
  const handleSaveChanges = () => {
    saveMenuItemsToDatabase();
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Auto-close modal after 3 seconds
  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showModal]);

  const getCurrentDateTime = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(now);
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');

    return `${day} ${month} ${year} | ${formattedHours}:${minutes} ${ampm}`;
  };

  return (
    <>
      <DashboardLayout>
        <div className='flex flex-col lg:flex-row gap-x-4 py-4'>
          {/* Menu Customization Panel */}
          <div className='bg-white rounded-lg shadow-sm px-5 py-9'>
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

            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <p>Error loading menu items. Please try again later.</p>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {filteredItems.length === 0 ? (
                  <div className="col-span-2 py-8 text-center">
                    <p className="text-gray-500">No menu items found matching your search criteria.</p>
                  </div>
                ) : (
                  filteredItems.map(item => (
                    <div
                      key={item._id}
                      className='border border-gray-200 rounded-lg overflow-hidden'
                    >
                      <div className='relative'>
                      <img
                        src={item.images ? `${config.imageUrl}${item.images}` : '/placeholder.svg'}
                        alt={item.productName}
                        className='w-full h-48 object-cover'
                      />
                        {item.isAvailable && (
                          <div className='absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded'>
                            In Stock
                          </div>
                        )}
                        <div className='absolute bottom-2 right-2 bg-white text-gray-700 text-xs px-2 py-1 rounded shadow'>
                          {item.prepTime} mins
                        </div>
                      </div>
  
                      <div className='p-4'>
                        <div className='flex justify-between items-start mb-2'>
                          <h3 className='font-medium text-gray-800'>{item.productName}</h3>
                          <div className='flex items-center'>
                            <Star className='h-4 w-4 text-yellow-400 fill-yellow-400' />
                          </div>
                        </div>

                        <div className='flex gap-2 mb-2'>
                          {["popular", "vegetarian"].map((tag, index) => (
                            <span
                              key={index}
                              className='text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded'
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className='text-lg font-semibold mb-2'>
                          {item.price?.toFixed(2) || '0.00'} CHF
                        </div>

                        <div className='mb-2'>
                          <p className='text-xs text-gray-500'>Available For</p>
                          <div className='flex gap-2 mt-1'>
                             <span
                                className='text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-600 border border-blue-200'
                              >
                                {item.category}
                              </span>
                          </div>
                        </div>

                        <div className='mb-3'>
                          <p className='text-xs text-gray-500'>Ingredients:
                          {" "}
                            {item.ingredients.map((ingredient, index) => (
                              <span key={index}>
                                {ingredient.name}
                                {index !== item.ingredients.length - 1 && ', '}
                              </span>
                            ))}
                          </p>
                        </div>

                        <div className='flex justify-between items-center'>
                          <div className='relative'>
                            <button className='flex items-center text-xs text-gray-600'>
                              Show Reviews ({"23"})
                              <ChevronDown className='h-3 w-3 ml-1' />
                            </button>
                          </div>

                          <button
                            onClick={() => handleAddToMenu(item._id)}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded text-sm font-medium ${
                              itemsInMenu.has(item._id)
                                ? 'bg-gray-200 text-gray-700'
                                : 'bg-blue-500 text-white hover:bg-blue-600'
                            }`}
                            disabled={itemsInMenu.has(item._id)}
                          >
                            <Plus className='h-4 w-4' />
                            {itemsInMenu.has(item._id) ? 'Added to Menu' : 'Add to Menu'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Menu Preview Panel - New Version */}
          <div className='bg-gray-100 h-full rounded-xl shadow-sm flex flex-col'>
            <div className='flex justify-between items-center p-4 border-b border-gray-200'>
              <div>
                <h2 className='text-lg font-semibold text-gray-800'>Menu Preview</h2>
                <p className='text-sm text-gray-500'>Track the Placed Orders</p>
              </div>

              <div className='relative'>
                <button className='flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-300 rounded-lg text-sm'>
                  View
                  <ChevronDown className='h-4 w-4' />
                </button>
              </div>
            </div>

            {menuPreview.length === 0 ? (
              <div className='flex flex-col items-center justify-center min-h-80 p-3 text-center'>
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
              <div className='bg-white flex-grow overflow-y-auto p-4 space-y-3'>
                {menuPreview.map(item => (
                  console.log('item inside preview🤷‍♂️', item),
                  <div
                    key={item.id}
                    className='bg-white p-3 rounded-lg shadow-sm flex items-center gap-3 border border-gray-100'
                  >
                    <img
                       src={item.image ? `${config.imageUrl}${item.image}` : '/placeholder.svg'}
                      alt={item.productName}
                      className='w-28 h-20 rounded-md object-cover'
                    />

                    <div className='flex-grow'>
                      <h3 className='font-medium text-gray-800'>{item.productName}</h3>
                      <p className='text-blue-600 font-medium mt-1'>
                        {item.price?.toFixed(2) || '0.00'} CHF
                      </p>
                      <div className='flex items-center mt-1'>
                        <span className='w-2 h-2 bg-green-500 rounded-full mr-2'></span>
                        <span className='text-sm text-gray-600'>In Stock</span>
                      </div>
                    </div>

                    <div className='flex items-center gap-2'>
                      <button
                        onClick={() => handleRemoveFromMenu(item.id)}
                        className='p-1 text-red-500 hover:bg-red-50 rounded'
                      >
                        <Trash2 className='h-5 w-5' />
                      </button>

                      <div className='flex items-center border border-gray-200 rounded'>
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className='px-2 py-1 text-gray-500 hover:bg-gray-100'
                        >
                          <Minus className='h-4 w-4' />
                        </button>

                        <span className='px-3 py-1 font-medium text-gray-700'>
                          {itemQuantities[item.id] || 1}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className='px-2 py-1 text-gray-500 hover:bg-gray-100'
                        >
                          <Plus className='h-4 w-4' />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className='p-4 bg-white mt-auto'>
              <button
                onClick={handleSaveChanges}
                className={`w-full py-3 mb-4 font-medium rounded-lg transition-colors ${
                  menuPreview.length > 0
                    ? savingMenu 
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : 'bg-[#0F0A33] text-white hover:shadow-lg hover:shadow-blue-700'
                    : 'bg-[#F0F0F0] text-[#555555] cursor-not-allowed'
                }`}
                disabled={menuPreview.length === 0 || savingMenu}
              >
                {savingMenu ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>

      {/* Success Modal */}
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-96 text-center border border-gray-200 relative'>
            {/* Close button added here */}
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full'
            >
              <X className='h-5 w-5 text-gray-500' />
            </button>
            <CheckCircle className='text-blue-500 mx-auto w-12 h-12' />
            <h2 className='text-xl font-semibold mt-4'>
              Menu Saved <span className='text-blue-500'>Successfully</span>
            </h2>
            <hr className='my-4 border-blue-300' />
            <div className='flex justify-between items-center text-gray-600 text-sm'>
              <div className='flex items-center gap-1'>📅 {getCurrentDateTime()}</div>
              <div className='flex items-center gap-1'>👤 Admin</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuManagement;