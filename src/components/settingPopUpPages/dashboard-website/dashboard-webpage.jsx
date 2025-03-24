import DashboardLayout from '../../../layouts/dashboardLayout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ChevronDown, ExternalLink, Upload } from 'lucide-react';

const RestaurantSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Restaurant 1');
  const navigate = useNavigate();

  const handleBannerUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
    }
  };

  const bannerInputRef = useRef(null);
  const [bannerImage, setBannerImage] = useState(null);

  const [restaurantName] = useState('Sasta Lounge');
  const [address, setAddress] = useState('');

  const [logoImage, setLogoImage] = useState(null);
  const [faviconImage, setFaviconImage] = useState(null);
  const logoInputRef = useRef(null);
  const faviconInputRef = useRef(null);

  const handleLogoUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setLogoImage(URL.createObjectURL(file));
    }
  };

  const handleFaviconUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setFaviconImage(URL.createObjectURL(file));
    }
  };

  // Opening Hours State
  const [openingHourStart, setOpeningHourStart] = useState('00:00');
  const [openingHourEnd, setOpeningHourEnd] = useState('00:00');
  const [showHourStartDropdown, setShowHourStartDropdown] = useState(false);
  const [showHourEndDropdown, setShowHourEndDropdown] = useState(false);

  // Working Days State
  const [workingDayStart, setWorkingDayStart] = useState('Monday');
  const [workingDayEnd, setWorkingDayEnd] = useState('Friday');
  const [showDayStartDropdown, setShowDayStartDropdown] = useState(false);
  const [showDayEndDropdown, setShowDayEndDropdown] = useState(false);

  // Refs for dropdowns
  const hourStartRef = useRef(null);
  const hourEndRef = useRef(null);
  const dayStartRef = useRef(null);
  const dayEndRef = useRef(null);
  // Time options
  const generateTimeOptions = () => {
    const options = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hour = h.toString().padStart(2, '0');
        const minute = m.toString().padStart(2, '0');
        options.push(`${hour}:${minute}`);
      }
    }
    return options;
  };
  const timeOptions = generateTimeOptions();
  // Day options
  const dayOptions = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (hourStartRef.current && !hourStartRef.current.contains(event.target)) {
        setShowHourStartDropdown(false);
      }
      if (hourEndRef.current && !hourEndRef.current.contains(event.target)) {
        setShowHourEndDropdown(false);
      }
      if (dayStartRef.current && !dayStartRef.current.contains(event.target)) {
        setShowDayStartDropdown(false);
      }
      if (dayEndRef.current && !dayEndRef.current.contains(event.target)) {
        setShowDayEndDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  // const { name, value } = setFormData(prevState => ({
  //   ...prevState,
  //   [name]: value,
  // }));

  // console.log('Form submitted:', formData);
  // Here you would typically send the data to your backend
  // alert(`Form submitted with Phone: ${formData.phoneNumber}, Email: ${formData.email}`);

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: '6080 Steubenville Pike',
      category: 'Starter',
      price: '1,230$',
      image: null,
    },
    {
      id: 2,
      name: 'An den Wulzen 7',
      category: 'Main Course',
      price: '1,230$',
      image: null,
    },
  ]);

  const [galleryImages, setGalleryImages] = useState([{ id: 1, image: null }]);
  const [newMenuItem, setNewMenuItem] = useState({
    category: 'Starter',
    name: '',
    description: '',
    image: null,
  });

  // File upload state
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleAddMenuItem = () => {
    // Check if all necessary fields are filled
    if (
      !newMenuItem.name ||
      !newMenuItem.category ||
      !newMenuItem.description ||
      !newMenuItem.image
    ) {
      alert('Please fill in all fields to add a menu item.');
      return;
    }

    // Create a new menu item object
    const newItem = {
      id: Date.now(), // Unique ID for the item
      name: newMenuItem.name,
      category: newMenuItem.category,
      description: newMenuItem.description,
      image: newMenuItem.image,
      price: newMenuItem.price || 0, // Default price if not provided
    };

    // Add the new item to the menuItems array
    setMenuItems(prevMenuItems => [...prevMenuItems, newItem]);

    // Reset the newMenuItem state for the next addition
    setNewMenuItem({
      name: '',
      category: '',
      description: '',
      image: null,
      price: '',
    });

    // Optional: Provide feedback to the user
    console.log('Menu item added successfully:', newItem);
  };

  const handleMenuItemChange = e => {
    const { name, value } = e.target;
    setNewMenuItem(prev => ({ ...prev, [name]: value }));
  };

  if (newMenuItem.name) {
    const newItem = {
      id: menuItems.length + 1,
      name: newMenuItem.name,
      category: newMenuItem.category,
      price: '1,230$',
      image: preview,
    };

    setMenuItems([...menuItems, newItem]);
    setNewMenuItem({
      category: 'Starter',
      name: '',
      description: '',
      image: null,
    });
    setFile(null);
    setPreview(null);
  }

  const handleDeleteMenuItem = id => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleAddGalleryImage = () => {
    if (preview) {
      const newImage = {
        id: galleryImages.length + 1,
        image: preview,
      };
      setGalleryImages([...galleryImages, newImage]);
      setFile(null);
      setPreview(null);
    } else {
      const newImage = {
        id: galleryImages.length + 1,
        image: null,
      };
      setGalleryImages([...galleryImages, newImage]);
    }
  };

  const handleDeleteGalleryImage = id => {
    setGalleryImages(galleryImages.filter(image => image.id !== id));
  };

  // File handling functions
  const handleFileChange = e => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = event => {
        setPreview(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = e => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);

      const reader = new FileReader();
      reader.onload = event => {
        setPreview(event.target.result);
      };
      reader.readAsDataURL(droppedFile);
    }
  };

  const [links, setLinks] = useState({
    google: '',
    facebook: '',
    instagram: '',
    youtube: '',
    twitter: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setLinks(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Validate URLs
    let newErrors = {};
    let isValid = true;

    setErrors(newErrors);

    if (isValid) {
      console.log('Form submitted with data:', links);
      setSubmitted(true);
    }

    e.preventDefault();
    const formData = {
      restaurantName,
      address,
      logoImage,
      faviconImage,
    };
    console.log('Form submitted with data:', formData);
  };

  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: 'Red Stiletto Restaurant',
      address: '6080 Steubenville Pike',
      email: 'tgnz@freesourcecodes.com',
      status: 'Available',
      isLive: true,
    },
    {
      id: 2,
      name: 'The Nouveau Table',
      address: 'An den Wulzen 7',
      email: 'tgnz@gmel.com',
      status: 'Sold',
      isLive: false,
    },
  ]);

  const toggleLiveStatus = id => {
    setRestaurants(
      restaurants.map(restaurant => {
        if (restaurant.id === id) {
          const newIsLive = !restaurant.isLive;
          // Update status based on isLive value
          const newStatus = newIsLive ? 'Available' : 'Sold';
          return { ...restaurant, isLive: newIsLive, status: newStatus };
        }
        return restaurant;
      })
    );
  };

  // const handleSave = () => {
  //   // Example: Validate data before saving
  //   if (!formData) {
  //     alert('Please fill in all required fields before saving.');
  //     return;
  //   }

  //   // Example: Log the form data to ensure it’s being captured correctly
  //   console.log('Saving data:', formData);

  //   // Example: Save the data via an API call (use fetch/axios)
  //   fetch('/api/save', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData),
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log('Save successful:', data))
  //     .catch(error => console.error('Error saving data:', error));
  // };

  return (
    <>
      <DashboardLayout>
        <div className='max-w-full my-11 min-h-screen'>
          <div className='py-4'>
            <div className='flex justify-between items-center mb-4'>
              <div className='flex items-center'>
                <ArrowLeft className='h-6 w-8 cursor-pointer text-[#282F5A] dark:text-white pr-2' />
                <span className='text-[#282F5A] dark:text-white text-xl cursor-pointer'>
                  Setting &gt;{' '}
                </span>
                <span className='text-[#282F5A] dark:text-white text-xl font-semibold ml-1'>
                  Webpage{' '}
                </span>
              </div>
              <div className='flex'>
                <button
                  className='bg-[#0075FF] hover:bg-[#0055FF] text-white px-4 py-2 rounded-md text-lg font-medium mr-2'
                  onClick={() => alert('Create new restaurant functionality')}
                >
                  Create New Restaurant
                </button>
                <button
                  className='bg-white border border-[#0075FF] text-[#0075FF] px-4 py-2 rounded-md text-lg font-medium flex items-center'
                  onClick={() => navigate('/restaurant-reservation')}
                >
                  <ExternalLink className='h-4 w-4 mr-1' />
                  To the website
                </button>
              </div>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='flex'>
                <button
                  className={`px-3 py-2 ${
                    activeTab === 'Restaurant 1'
                      ? 'text-[#00925C] text-xl font-bold border-b-2 border-[#00925C]'
                      : 'text-[#717B8C] text-xl'
                  }`}
                  onClick={() => setActiveTab('Restaurant 1')}
                >
                  Restaurant 1
                </button>
                <button
                  className={`px-3 py-2 ${
                    activeTab === 'Restaurant 2'
                      ? 'text-[#00925C] text-xl font-bold border-b-2 border-[#00925C]'
                      : 'text-[#717B8C] text-xl'
                  }`}
                  onClick={() => setActiveTab('Restaurant 2')}
                >
                  Restaurant 2
                </button>
              </div>
            </div>
          </div>
          {/* Banner Image */}
          <div className='bg-white dark:bg-[#222630] transition-all rounded-[10px] shadow-md p-4'>
            <h3 className='text-lg font-medium text-[#131313] dark:text-white mb-2.5'>
              Restaurant Banner Image
            </h3>
            <div
              className='bg-gray-800 rounded-lg h-52 relative flex items-center justify-center overflow-hidden cursor-pointer'
              onClick={() => bannerInputRef.current.click()}
              style={{
                backgroundImage: bannerImage ? `url(${bannerImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {!bannerImage && (
                <>
                  <div className='absolute inset-0 bg-black opacity-60'></div>
                  <div className='text-center text-white z-10 flex gap-x-6 items-center'>
                    <Upload className='h-6 w-6 mb-1' />
                    <span className='text-lg'>Click to change background image</span>
                  </div>
                </>
              )}
              {bannerImage && (
                <div className='absolute inset-0 bg-black opacity-20 hover:opacity-40 flex items-center justify-center'>
                  <div className='text-white z-10'>
                    <Upload className='h-6 w-6' />
                  </div>
                </div>
              )}
            </div>
            <input
              type='file'
              ref={bannerInputRef}
              onChange={handleBannerUpload}
              accept='image/*'
              className='hidden'
            />
            <button
              type='button'
              className='mt-8 bg-[#0075FF] hover:bg-[#0055FF] text-white px-4 py-2 rounded-xl text-sm'
              onClick={() => bannerInputRef.current.click()}
            >
              Choose File
            </button>
          </div>
          {/* Restaurant Info */}
          <form onSubmit={handleSubmit}>
            <div className='py-4'>
              <div className='bg-white dark:bg-[#222630] transition-all rounded-[10px] shadow-md px-[51px] py-4'>
                <h3 className='text-lg font-semibold text-[#1A2042] dark:text-white mb-7'>
                  Restaurant Info
                </h3>
                <div className='flex items-center gap-x-24 mb-5'>
                  <label className='block whitespace-nowrap text-base font-medium dark:text-white text-[#111111]'>
                    Restaurant Name
                  </label>
                  <input
                    name='name'
                    type='text'
                    className='w-full px-4 py-2 outline-none border border-[#9EC3FF] bg-[#EEF5FF] text-[#696969] text-sm font-medium rounded-full'
                    value={formData?.name}
                    onChange={e => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    placeholder='Restaurant Name'
                    required
                  />
                </div>
                <div className='flex items-center gap-x-[162px] mb-7'>
                  <label className='block whitespace-nowrap text-base font-medium dark:text-white text-[#111111]'>
                    Address
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 outline-none border border-[#9EC3FF] bg-[#EEF5FF] text-[#696969] text-sm font-medium rounded-full'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder='Enter restaurant address'
                  />
                </div>
                <div className='flex gap-x-32 mb-5'>
                  <label className='block whitespace-nowrap text-base font-medium dark:text-white text-[#111111]'>
                    Logo Upload
                  </label>
                  <div className=''>
                    <div className='flex items-center'>
                      <button
                        type='button'
                        className='bg-[#0075FF] hover:bg-[#0055FF] text-white whitespace-nowrap px-4 py-2 rounded-xl text-sm mr-2.5'
                        onClick={() => logoInputRef.current.click()}
                      >
                        Choose Icon
                      </button>
                      <input
                        type='file'
                        ref={logoInputRef}
                        onChange={handleLogoUpload}
                        accept='image/*'
                        className='hidden'
                      />
                      <div className='text-gray-400'>
                        {logoImage ? (
                          <img src={logoImage} alt='Logo' className='h-7 w-36' />
                        ) : (
                          <img
                            src='../src/assets/images/wine-bottle.png'
                            className='h-7 '
                            alt='choose icon'
                          />
                        )}
                      </div>
                    </div>
                    <p className='text-xs text-[#696969] dark:text-white mt-1'>
                      The site icon is what you see in browser tabs etc. It should be
                      square and at least <span className='font-medium'>512 x 512</span>{' '}
                      pixels.
                    </p>
                  </div>
                </div>
                <div className='flex gap-x-[109px] mb-4'>
                  <label className='block whitespace-nowrap text-base font-medium dark:text-white text-[#111111]'>
                    Favicon Upload
                  </label>
                  <div className=''>
                    <div className='flex items-center'>
                      <button
                        type='button'
                        className='bg-[#0075FF] hover:bg-[#0055FF] text-white whitespace-nowrap px-4 py-2 rounded-xl text-sm mr-2.5'
                        onClick={() => faviconInputRef.current.click()}
                      >
                        Choose Icon
                      </button>
                      <input
                        type='file'
                        ref={faviconInputRef}
                        onChange={handleFaviconUpload}
                        accept='image/*'
                        className='hidden'
                      />
                      <div>
                        {faviconImage ? (
                          <img src={faviconImage} alt='Favicon' className='h-16' />
                        ) : (
                          <img src='../src/assets/images/A-icon.png' alt='favicon' />
                        )}
                      </div>
                    </div>
                    <p className='text-xs text-[#696969] dark:text-white mt-1'>
                      The site icon is what you see in browser tabs etc. It should be
                      square and at least 512 x 512 pixels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* Opening Hour Days */}
          <div className='flex gap-4'>
            <div className='bg-white dark:bg-[#222630] transition-all rounded-[10px] shadow-md px-9 pt-5 pb-8 flex-1'>
              <h2 className='text-lg font-semibold dark:text-white text-[#1A2042] mb-6'>
                Opening Hours
              </h2>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-x-2.5'>
                  <span className='text-[#1A2042] text-base font-medium'>From</span>
                  <div className='relative' ref={hourStartRef}>
                    <button
                      className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#131313] px-4 py-2 rounded-xl flex items-center justify-between w-48'
                      onClick={() => setShowHourStartDropdown(!showHourStartDropdown)}
                    >
                      <span>{openingHourStart}</span>
                      <ChevronDown size={16} className='ml-2' />
                    </button>
                    {showHourStartDropdown && (
                      <div className='absolute mt-1 w-48 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg z-10'>
                        <div className='grid grid-cols-3 gap-1 p-2'>
                          {timeOptions.slice(0, 24).map(time => (
                            <button
                              key={time}
                              className={`px-2 py-1 rounded text-sm ${
                                openingHourStart === time
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'hover:bg-gray-100'
                              }`}
                              onClick={() => {
                                setOpeningHourStart(time);
                                setShowHourStartDropdown(false);
                              }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex items-center gap-x-2.5'>
                  <span className='text-[#1A2042] text-base font-medium'>To</span>
                  <div className='relative' ref={hourEndRef}>
                    <button
                      className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#131313] px-4 py-2 rounded-xl flex items-center justify-between w-48'
                      onClick={() => setShowHourEndDropdown(!showHourEndDropdown)}
                    >
                      <span>{openingHourEnd}</span>
                      <ChevronDown size={16} className='ml-2' />
                    </button>
                    {showHourEndDropdown && (
                      <div className='absolute mt-1 w-48 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10'>
                        <div className='grid grid-cols-3 gap-1 p-2'>
                          {timeOptions.slice(0, 24).map(time => (
                            <button
                              key={time}
                              className={`px-2 py-1 rounded text-sm ${
                                openingHourEnd === time
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'hover:bg-gray-100'
                              }`}
                              onClick={() => {
                                setOpeningHourEnd(time);
                                setShowHourEndDropdown(false);
                              }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Working Days Section */}
            <div className='bg-white dark:bg-[#222630] transition-all rounded-[10px] shadow-md px-9 pt-5 pb-8 flex-1'>
              <h2 className='text-lg font-semibold dark:text-white text-[#1A2042] mb-6'>
                Working Days
              </h2>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-x-2.5'>
                  <span className='text-[#1A2042] text-base font-medium'>From</span>
                  <div className='relative' ref={dayStartRef}>
                    <button
                      className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#131313] px-4 py-2 rounded-xl flex items-center justify-between w-48'
                      onClick={() => setShowDayStartDropdown(!showDayStartDropdown)}
                    >
                      <span>{workingDayStart}</span>
                      <ChevronDown size={16} className='ml-2' />
                    </button>
                    {showDayStartDropdown && (
                      <div className='absolute mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
                        {dayOptions.map(day => (
                          <button
                            key={day}
                            className={`block w-full text-left px-4 py-2 text-sm ${
                              workingDayStart === day
                                ? 'bg-blue-100 text-blue-700'
                                : 'hover:bg-gray-100'
                            }`}
                            onClick={() => {
                              setWorkingDayStart(day);
                              setShowDayStartDropdown(false);
                            }}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex items-center gap-x-2.5'>
                  <span className='text-[#1A2042] text-base font-medium'>To</span>
                  <div className='relative' ref={dayEndRef}>
                    <button
                      className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#131313] px-4 py-2 rounded-xl flex items-center justify-between w-48'
                      onClick={() => setShowDayEndDropdown(!showDayEndDropdown)}
                    >
                      <span>{workingDayEnd}</span>
                      <ChevronDown size={16} className='ml-2' />
                    </button>
                    {showDayEndDropdown && (
                      <div className='absolute mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
                        {dayOptions.map(day => (
                          <button
                            key={day}
                            className={`block w-full text-left px-4 py-2 text-sm ${
                              workingDayEnd === day
                                ? 'bg-blue-100 text-blue-700'
                                : 'hover:bg-gray-100'
                            }`}
                            onClick={() => {
                              setWorkingDayEnd(day);
                              setShowDayEndDropdown(false);
                            }}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className='bg-white dark:bg-[#222630] rounded-[10px] shadow-md py-5 px-12 mt-5'>
            <h2 className='dark:text-white text-xl font-bold mb-5'>
              Contact Information
            </h2>
            <form onSubmit={handleSubmit}>
              <div className='flex items-center gap-x-32 pb-5'>
                <label
                  htmlFor='phoneNumber'
                  className='block text-lg font-semibold whitespace-nowrap text-[#1A2042] dark:text-white'
                >
                  Phone Number
                </label>
                <div className='flex w-full'>
                  <select className='bg-[#EEF5FF] outline-none border border-[#9EC3FF] text-[#131313] text-sm rounded-l-xl py-2.5 px-1 cursor-pointer'>
                    <option value='+91'>+92</option>
                    <option value='+1'>+1</option>
                    <option value='+1'>+7</option>
                    <option value='+44'>+44</option>
                    <option value='+61'>+61</option>
                  </select>
                  <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder='Type your phone number...'
                    className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#696969] text-sm rounded-r-xl outline-none block w-full p-2.5'
                  />
                </div>
              </div>
              <div className='flex items-center gap-x-[132px] mb-4'>
                <label
                  htmlFor='email'
                  className='block text-lg font-semibold whitespace-nowrap text-[#1A2042] dark:text-white mb-1'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Type your address...'
                  className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#696969] outline-none text-sm rounded-xl block w-full p-2.5'
                />
              </div>
            </form>
          </div>
          {/* Restaurant Management App */}
          <div className='mt-5 px-9 py-6 bg-white dark:bg-[#222630] rounded-xl shadow-md'>
            <div className='border-b mb-10'>
              <div className='flex'>
                <button
                  className={`py-2.5 px-3 text-xl ${
                    activeTab === 'menu'
                      ? 'text-[#00925C] border-b-2 font-bold border-[#00925C]'
                      : 'text-gray-500 font-medium'
                  }`}
                  onClick={() => setActiveTab('menu')}
                >
                  Menu Management
                </button>
                <button
                  className={`py-2.5 px-3 text-xl ${
                    activeTab === 'gallery'
                      ? 'text-[#00925C] font-bold border-b-2 border-[#00925C]'
                      : 'text-gray-500 font-medium'
                  }`}
                  onClick={() => setActiveTab('gallery')}
                >
                  Gallery Management
                </button>
              </div>
            </div>
            {/* Menu Management */}
            {activeTab === 'menu' && (
              <>
                <div className='flex justify-between items-center mb-5'>
                  <h2 className='text-lg text-[#1A2042] dark:text-white font-semibold'>
                    Add New Menu Item
                  </h2>
                  <button
                    className='bg-[#0075FF] hover:bg-[#0055FF] text-white text-base font-medium rounded-full px-10 py-2'
                    onClick={handleAddMenuItem}
                  >
                    Add Dish
                  </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 px-3 gap-6 mb-6'>
                  <div>
                    <label className='block text-[#1A2042] dark:text-white text-lg font-medium mb-1'>
                      Category
                    </label>
                    <select
                      name='category'
                      value={newMenuItem.category}
                      onChange={handleMenuItemChange}
                      className='w-full p-2.5 outline-none cursor-pointer border border-[#9EC3FF] rounded-xl bg-[#EEF5FF]'
                    >
                      <option>Starter</option>
                      <option>Main Course</option>
                      <option>Dessert</option>
                      <option>Drinks</option>
                    </select>
                  </div>
                  <div>
                    <label className='block text-[#1A2042] dark:text-white text-lg font-medium mb-1'>
                      Dish Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={newMenuItem.name}
                      onChange={handleMenuItemChange}
                      placeholder='Fettuccine Alfredo'
                      className='w-full p-2.5 outline-none border border-[#9EC3FF] rounded-xl bg-[#EEF5FF]'
                    />
                  </div>
                  <div>
                    <label className='block text-[#1A2042] dark:text-white text-lg font-medium mb-1'>
                      Description
                    </label>
                    <textarea
                      name='description'
                      value={newMenuItem.description}
                      onChange={handleMenuItemChange}
                      placeholder='Lorem ipsum dolor sit amet...'
                      className='w-full p-3 outline-none border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] h-28'
                    />
                  </div>
                  <div>
                    <label className='block text-[#1A2042] dark:text-white text-lg font-medium mb-1'>
                      Upload Image
                    </label>
                    <div className='flex flex-col items-center w-full'>
                      <div
                        className={`flex items-center justify-center h-28 w-full outline-none border rounded-xl relative ${
                          isDragging ? 'bg-[#EEF5FF]' : 'bg-blue-50 border-[#9EC3FF]'
                        } ${preview ? 'p-2' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                      >
                        {preview ? (
                          <div className='relative w-full h-full'>
                            <img
                              src={preview}
                              alt='Preview'
                              className='h-full mx-auto object-contain'
                            />
                          </div>
                        ) : (
                          <div className='text-center'>
                            <div className='flex justify-center'>
                              <svg
                                className='w-8 h-8 text-blue-300'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2'
                                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                                ></path>
                              </svg>
                            </div>
                            <p className='text-sm text-gray-500 mt-1'>
                              {isDragging ? 'Drop to Upload' : 'Drag File to Upload'}
                            </p>
                            {file && (
                              <p className='text-xs text-[#0075FF] mt-1'>{file.name}</p>
                            )}
                          </div>
                        )}
                        <input
                          type='file'
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className='hidden'
                          accept='image/*'
                        />
                        <button
                          onClick={handleButtonClick}
                          className='absolute bottom-2 right-2 bg-[#0075FF] hover:bg-[#0055FF] text-white rounded-xl px-3 py-1.5 text-xs'
                        >
                          Choose Picture
                        </button>
                      </div>
                      {file && (
                        <div className='mt-2 text-sm text-gray-600'>
                          File: {file.name} ({(file.size / 1024).toFixed(1)} KB)
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='mt-8'>
                  <table className='w-full'>
                    <thead>
                      <tr className='border-b bg-[#EEF5FF] text-base font-semibold text-[#131313]'>
                        <th className='py-2 px-6 text-left'>Image</th>
                        <th className='py-2 px-6 text-left'>Name</th>
                        <th className='py-2 px-6 text-left'>Category</th>
                        <th className='py-2 px-6 text-left'>Price</th>
                        <th className='py-2 px-6 text-left'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuItems.map(item => (
                        <tr key={item.id} className='border-b'>
                          <td className='py-3 px-6'>
                            <div className='w-10 h-10 border-2 rounded-full bg-transpa flex items-center justify-center overflow-hidden'>
                              {item.image ? (
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className='w-full h-full object-cover'
                                />
                              ) : (
                                <span className='text-white text-lg'>🍔</span>
                              )}
                            </div>
                          </td>
                          <td className='py-3 px-6 dark:text-white text-sm'>
                            {item.name}
                          </td>
                          <td className='py-3 px-6 dark:text-white text-sm'>
                            {item.category}
                          </td>
                          <td className='py-3 px-6 dark:text-white text-sm'>
                            {item.price}
                          </td>
                          <td className='py-3 px-6 text-sm'>
                            <div className='flex space-x-2'>
                              <button className='text-blue-600'>
                                <svg
                                  className='w-5 h-5'
                                  fill='none'
                                  stroke='currentColor'
                                  viewBox='0 0 24 24'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                                  ></path>
                                </svg>
                              </button>
                              <button
                                className='text-red-600'
                                onClick={() => handleDeleteMenuItem(item.id)}
                              >
                                <svg
                                  className='w-5 h-5'
                                  fill='none'
                                  stroke='currentColor'
                                  viewBox='0 0 24 24'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {/* Gallery Management */}
            {activeTab === 'gallery' && (
              <>
                <div className='flex justify-between items-center mb-4'>
                  <h2 className='text-[#1A2042] text-lg font-semibold'>
                    Add New Gallery Image
                  </h2>
                  <button
                    className='bg-[#0075FF] hover:bg-[#0055FF] text-base font-medium text-white rounded-full px-5 py-2'
                    onClick={handleAddGalleryImage}
                  >
                    Add to Gallery
                  </button>
                </div>
                <div className='mb-8'>
                  <label className='block text-[#1A2042] text-lg font-medium mb-2'>
                    Upload Image
                  </label>
                  <div
                    className={`flex items-center justify-center h-32 w-full border rounded-xl relative ${
                      isDragging
                        ? 'bg-blue-100 border-[#9EC3FF]'
                        : 'bg-blue-50 border-blue-200'
                    } ${preview ? 'p-2' : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {preview ? (
                      <div className='relative w-full h-full'>
                        <img
                          src={preview}
                          alt='Preview'
                          className='h-full mx-auto object-contain'
                        />
                      </div>
                    ) : (
                      <div className='text-center'>
                        <div className='flex justify-center'>
                          <svg
                            className='w-8 h-8 text-blue-300'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                            ></path>
                          </svg>
                        </div>
                        <p className='text-xs text-[#696969] mt-1'>
                          {isDragging ? 'Drop to Upload' : 'Drag File to Upload'}
                        </p>
                        {file && (
                          <p className='text-xs text-blue-500 mt-1'>{file.name}</p>
                        )}
                      </div>
                    )}
                    <input
                      type='file'
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className='hidden'
                      accept='image/*'
                    />
                    <button
                      onClick={handleButtonClick}
                      className='absolute bottom-2 right-2 bg-[#0075FF] hover:bg-[#0055FF] text-white rounded-xl mb-2 mr-2 px-3 py-1.5 text-sm'
                    >
                      Choose Picture
                    </button>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {galleryImages.map(image => (
                    <div
                      key={image.id}
                      className='border rounded-md relative overflow-hidden h-48'
                    >
                      <button
                        className='absolute top-2 right-2 bg-red-500 text-white p-2 rounded-md z-10'
                        onClick={() => handleDeleteGalleryImage(image.id)}
                      >
                        <svg
                          className='w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          ></path>
                        </svg>
                      </button>
                      {image.image ? (
                        <img
                          src={image.image}
                          alt='Gallery item'
                          className='w-full h-full object-cover'
                        />
                      ) : (
                        <div className='w-full h-full flex items-center justify-center text-gray-400'>
                          <img
                            src='/api/placeholder/400/320'
                            className='w-full h-full object-cover'
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  <div className='border rounded-md h-48 flex items-center justify-center text-gray-400'>
                    <p>Empty slot</p>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* Social Media Form */}
          <div className='bg-white dark:bg-[#222630] rounded-xl shadow-md p-7 my-5'>
            <h2 className='text-lg font-semibold text-[#1A2042] dark:text-white mt-2 mb-6'>
              Social Media Links
            </h2>
            {submitted && (
              <div className='mb-4 p-3 bg-green-100 text-green-600 rounded'>
                Your social media links have been saved successfully!
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className='space-y-5'>
                <div className='flex gap-x-28 items-center'>
                  <label
                    htmlFor='google'
                    className='block text-base font-medium whitespace-nowrap text-[#1A2042] dark:text-white'
                  >
                    Google URL
                  </label>
                  <input
                    type='text'
                    id='google'
                    name='google'
                    value={links.google}
                    onChange={handleChange}
                    className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl focus:outline-none'
                    placeholder='https://google.com/...'
                  />
                  {errors.google && (
                    <p className='mt-1 text-sm text-red-600'>{errors.google}</p>
                  )}
                </div>
                <div className='flex gap-x-[92px] items-center'>
                  <label
                    htmlFor='facebook'
                    className='block text-base font-medium whitespace-nowrap text-[#1A2042] dark:text-white'
                  >
                    Facebook URL
                  </label>
                  <input
                    type='text'
                    id='facebook'
                    name='facebook'
                    value={links.facebook}
                    onChange={handleChange}
                    className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl focus:outline-none'
                    placeholder='https://facebook.com/...'
                  />
                  {errors.facebook && (
                    <p className='mt-1 text-sm text-red-600'>{errors.facebook}</p>
                  )}
                </div>
                <div className='flex gap-x-[92px] items-center'>
                  <label
                    htmlFor='instagram'
                    className='block whitespace-nowrap text-base font-medium text-[#1A2042] dark:text-white'
                  >
                    Instagram URL
                  </label>
                  <input
                    type='text'
                    id='instagram'
                    name='instagram'
                    value={links.instagram}
                    onChange={handleChange}
                    className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl focus:outline-none'
                    placeholder='https://instagram.com/...'
                  />
                  {errors.instagram && (
                    <p className='mt-1 text-sm text-red-600'>{errors.instagram}</p>
                  )}
                </div>
                <div className='flex gap-x-[105px] items-center'>
                  <label
                    htmlFor='youtube'
                    className='block whitespace-nowrap text-base font-medium text-[#1A2042] dark:text-white'
                  >
                    Youtube URL
                  </label>
                  <input
                    type='text'
                    id='youtube'
                    name='youtube'
                    value={links.youtube}
                    onChange={handleChange}
                    className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl focus:outline-none'
                    placeholder='https://youtube.com/...'
                  />
                  {errors.youtube && (
                    <p className='mt-1 text-sm text-red-600'>{errors.youtube}</p>
                  )}
                </div>
                <div className='flex gap-x-[116px] items-center'>
                  <label
                    htmlFor='twitter'
                    className='block whitespace-nowrap text-base font-medium text-[#1A2042] dark:text-white'
                  >
                    Twitter URL
                  </label>
                  <input
                    type='text'
                    id='twitter'
                    name='twitter'
                    value={links.twitter}
                    onChange={handleChange}
                    className='w-full px-3 py-2 bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none'
                    placeholder='https://twitter.com/...'
                  />
                  {errors.twitter && (
                    <p className='mt-1 text-sm text-red-600'>{errors.twitter}</p>
                  )}
                </div>
              </div>
            </form>
          </div>
          {/* Restaurant List */}
          <div className='bg-white dark:bg-[#222630] rounded-xl shadow-md'>
            <div className=' px-5 py-6 mb-6'>
              <h1 className='text-xl font-semibold text-[#131313] dark:text-white'>
                Restaurant list
              </h1>
              <p className='text-[#131313] dark:text-white'>
                Lorem ipsum dolor sit amet consectetue
              </p>
            </div>
            <div className='overflow-x-auto'>
              <table className='min-w-full'>
                <thead>
                  <tr className='bg-[#EEF5FF]'>
                    <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                      Restaurant Name
                    </th>
                    <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                      Address
                    </th>
                    <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                      Email
                    </th>
                    <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                      Status
                    </th>
                    <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                      GO Live
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {restaurants.map(restaurant => (
                    <tr key={restaurant.id} className='border-b'>
                      <td className='py-3.5 px-7 text-sm text-[#131313] dark:text-white'>
                        {restaurant.name}
                      </td>
                      <td className='py-3.5 px-7 text-sm text-[#131313] dark:text-white'>
                        {restaurant.address}
                      </td>
                      <td className='py-3.5 px-7 text-sm text-[#131313] dark:text-white'>
                        {restaurant.email}
                      </td>
                      <td className='py-3.5 px-7 text-sm'>
                        <span
                          className={`rounded-full text-base ${
                            restaurant.status === 'Available'
                              ? 'text-[#19DB8C]'
                              : 'text-[#E54B47]'
                          }`}
                        >
                          {restaurant.status}
                        </span>
                      </td>
                      <td className='py-4 px-7'>
                        <button
                          onClick={() => toggleLiveStatus(restaurant.id)}
                          className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${
                            restaurant.isLive ? 'bg-[#19DB8C]' : 'bg-[#E54B47]'
                          }`}
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                              restaurant.isLive ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='mt-8 pb-8 pr-9 flex justify-end space-x-5'>
              <button
                // onClick={handleBack}
                className='px-14 py-2 bg-[#0075FF] text-white text-sm font-semibold rounded-xl hover:bg-[#0055FF]'
              >
                Back
              </button>
              <button
                // onClick={handleSave}
                className='px-14 py-2 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-blue-500'
                style={{ backgroundColor: '#0F172A' }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default RestaurantSettingsPage;
