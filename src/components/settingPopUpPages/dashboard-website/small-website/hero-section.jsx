import { Phone } from 'lucide-react';
import { BsEnvelope, BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div>
      {/* header */}
      <header className='bg-[#131313] text-white py-7 px-20 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center gap-x-3'>
            <Phone className='size-5' />
            <span className='text-xl'>+ 42 345 67890</span>
          </div>
          <div className='flex items-center'>
            <BsEnvelope className='size-5 mr-2.5' />
            <span className='text-lg font-medium'>support@easydine.com</span>
          </div>
        </div>

        <div className='relative flex gap-x-5 cursor-pointer'>
          <BsInstagram className='size-5 hover:text-gray-300' />
          <FaFacebookSquare className='size-5 hover:text-gray-300' />
          <FaTwitter className='size-5 hover:text-gray-300' />
          <FaLinkedin className='size-5 hover:text-gray-300' />
        </div>
      </header>

      {/* Main content */}
      <main className='py-24 flex-grow flex flex-col items-center justify-center text-center text-white relative overflow-hidden'>
        <div className='absolute inset-0'>
          <img src='./src/assets/images/main-page.png' />
        </div>

        <div className='z-10'>
          <h1 className='text-4xl font-bold mb-4'>
            EFFORTLESS RESTAURANT RESERVATIONS & MANAGEMENT
          </h1>
          <p className='text-xl mb-8'>Leenrütimattweg 3, 4704 Niederbipp</p>

          <div className='w-full max-w-lg mx-auto h-px bg-white mb-8'></div>

          <div className='mb-8'>
            <div className='flex items-center justify-center'>
              <div className='flex items-center'>
                <img
                  src='./src/assets/images/wine.png'
                  alt='wine'
                  className='w-[650px]'
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
