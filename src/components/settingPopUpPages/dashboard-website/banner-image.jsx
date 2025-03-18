import { Upload } from 'lucide-react';
import { useRef, useState } from 'react';

const BannerImage = () => {
  const bannerInputRef = useRef(null);
  const [bannerImage, setBannerImage] = useState(null);

  const handleBannerUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(URL.createObjectURL(file));
    }
  };

  return (
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
  );
};

export default BannerImage;
