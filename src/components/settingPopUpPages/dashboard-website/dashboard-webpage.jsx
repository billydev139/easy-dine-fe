import { ArrowLeft, Upload, ExternalLink } from 'lucide-react';
import { useState, useRef } from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout';

const RestaurantSettingsPage = () => {
  // State management
  const [activeTab, setActiveTab] = useState('Restaurant 1');
  const [restaurantName, setRestaurantName] = useState('Sasta Lounge');
  const [address, setAddress] = useState('');
  const [bannerImage, setBannerImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [faviconImage, setFaviconImage] = useState(null);

  // Refs for file inputs
  const bannerInputRef = useRef(null);
  const logoInputRef = useRef(null);
  const faviconInputRef = useRef(null);

  // Handle file uploads
  const handleBannerUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
    }
  };

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

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();

    // Example of what you might do with the form data
    const formData = {
      restaurantName,
      address,
      bannerImage,
      logoImage,
      faviconImage,
    };

    console.log('Form submitted with data:', formData);
    // Here you would typically send this data to your API
  };

  return (
    <>
      <DashboardLayout>
        <div className='max-w-full my-11 bg-gray-50 min-h-screen'>
          <div className='p-4 bg-white'>
            <div className='flex items-center mb-4'>
              <ArrowLeft className='h-5 w-5 text-gray-500 mr-2' />
              <span className='text-gray-600'>Setting &gt; Webpage</span>
            </div>
            <div className='flex justify-between mb-4'>
              <div className='flex'>
                <button
                  className={`px-4 py-2 text-sm ${
                    activeTab === 'Restaurant 1'
                      ? 'text-green-500 border-b-2 border-green-500 font-medium'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab('Restaurant 1')}
                >
                  Restaurant 1
                </button>
                <button
                  className={`px-4 py-2 text-sm ${
                    activeTab === 'Restaurant 2'
                      ? 'text-green-500 border-b-2 border-green-500 font-medium'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab('Restaurant 2')}
                >
                  Restaurant 2
                </button>
              </div>

              <div className='flex'>
                <button
                  className='bg-blue-500 text-white px-4 py-2 rounded-md text-sm mr-2'
                  onClick={() => alert('Create new restaurant functionality')}
                >
                  Create New Restaurant
                </button>
                <button
                  className='bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm flex items-center'
                  onClick={() => window.open('/website', '_blank')}
                >
                  <ExternalLink className='h-4 w-4 mr-1' />
                  To the website
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='p-4'>
              <div className='bg-white rounded-lg shadow-sm mb-4 p-4'>
                <h3 className='text-sm font-medium text-gray-700 mb-2'>
                  Restaurant Banner Image
                </h3>
                <div
                  className='bg-gray-800 rounded-lg h-32 relative flex items-center justify-center overflow-hidden cursor-pointer'
                  onClick={() => bannerInputRef.current.click()}
                  style={{
                    backgroundImage: bannerImage ? `url(${bannerImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {!bannerImage && (
                    <>
                      <div className='absolute inset-0 bg-black opacity-40'></div>
                      <div className='text-center text-white z-10 flex flex-col items-center'>
                        <Upload className='h-6 w-6 mb-1' />
                        <span className='text-sm'>Click to change background image</span>
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
                  className='mt-4 bg-blue-500 text-white px-3 py-1 rounded-md text-sm'
                  onClick={() => bannerInputRef.current.click()}
                >
                  Choose File
                </button>
              </div>

              <div className='bg-white rounded-lg shadow-sm p-4'>
                <h3 className='text-lg font-medium text-gray-700 mb-4'>
                  Restaurant Info
                </h3>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Restaurant Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 border border-gray-200 rounded-md'
                    value={restaurantName}
                    onChange={e => setRestaurantName(e.target.value)}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Address
                  </label>
                  <input
                    type='text'
                    className='w-full px-3 py-2 border border-gray-200 rounded-md'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder='Enter restaurant address'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Logo Upload
                  </label>
                  <div className='flex items-center'>
                    <button
                      type='button'
                      className='bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-3'
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
                        <img src={logoImage} alt='Logo' className='h-6' />
                      ) : (
                        <svg width='90' height='24' viewBox='0 0 90 24' fill='none'>
                          <text x='0' y='18' fill='currentColor' fontSize='18'>
                            WINE
                          </text>
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className='text-xs text-gray-500 mt-1'>
                    The site icon is what you see in browser tabs etc. It should be square
                    and at least 512 x 512 pixels.
                  </p>
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Favicon Upload
                  </label>
                  <div className='flex items-center'>
                    <button
                      type='button'
                      className='bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-3'
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
                    <div className='text-red-500'>
                      {faviconImage ? (
                        <img src={faviconImage} alt='Favicon' className='h-5' />
                      ) : (
                        <svg width='40' height='20' viewBox='0 0 40 20' fill='none'>
                          <path
                            d='M5 5L15 15M15 5L5 15'
                            stroke='currentColor'
                            strokeWidth='2'
                          />
                          <path
                            d='M20 5L30 15M30 5L20 15'
                            stroke='currentColor'
                            strokeWidth='2'
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <p className='text-xs text-gray-500 mt-1'>
                    The site icon is what you see in browser tabs etc. It should be square
                    and at least 512 x 512 pixels.
                  </p>
                </div>

                <div className='mt-6'>
                  <button
                    type='submit'
                    className='bg-green-500 text-white px-4 py-2 rounded-md text-sm'
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </DashboardLayout>
    </>
  );
};

export default RestaurantSettingsPage;
