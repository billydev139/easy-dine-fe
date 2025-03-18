import { useRef, useState } from 'react';

const RestaurantInfo = () => {
  const [restaurantName, setRestaurantName] = useState('Sasta Lounge');
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

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      restaurantName,
      address,
      logoImage,
      faviconImage,
    };

    console.log('Form submitted with data:', formData);
  };

  return (
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
              type='text'
              className='w-full px-4 py-2 outline-none border border-[#9EC3FF] bg-[#EEF5FF] text-[#696969] text-sm font-medium rounded-full'
              value={restaurantName}
              onChange={e => setRestaurantName(e.target.value)}
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
                The site icon is what you see in browser tabs etc. It should be square and
                at least <span className='font-medium'>512 x 512</span> pixels.
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
                    <img src={faviconImage} alt='Favicon' className='h-5' />
                  ) : (
                    <img src='../src/assets/images/A-icon.png' alt='favicon' />
                  )}
                </div>
              </div>
              <p className='text-xs text-[#696969] dark:text-white mt-1'>
                The site icon is what you see in browser tabs etc. It should be square and
                at least 512 x 512 pixels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RestaurantInfo;
