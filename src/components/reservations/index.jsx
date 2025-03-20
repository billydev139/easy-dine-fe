import { ChevronDown, Clock, Phone } from 'lucide-react';
import { useState } from 'react';
import {
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const RestaurantReservation = () => {
  // State for showing/hiding opening hours popup
  const [showHours, setShowHours] = useState(false);
  const navigate = useNavigate();

  // Opening hours data
  const openingHours = [
    { day: 'Thursday', hours: '12:00 pm - 11:30 pm' },
    { day: 'Friday', hours: '12:00 pm - 11:30 pm' },
    { day: 'Saturday', hours: '12:00 pm - 11:30 pm' },
    { day: 'Sunday', hours: '12:00 pm - 11:30 pm' },
    { day: 'Monday', hours: '12:00 pm - 11:30 pm' },
    { day: 'Tuesday', hours: '12:00 pm - 11:30 pm' },
    { day: 'Wednesday', hours: '12:00 pm - 11:30 pm' },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className='bg-[#131313] text-white py-7 px-20 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center gap-x-3'>
            <Phone className='size-5' />
            <span className='text-xl'>+42 345 67890</span>
          </div>
          <div className='flex '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-7 mr-1'
              fill='none'
              viewBox='0 0 20 20'
              stroke='currentColor'
            >
              <BsEnvelope />
            </svg>
            <span className='text-xl font-medium'>support@easydine.com</span>
          </div>
        </div>
        <div className='relative'>
          <button
            className='bg-[#0075FF] hover:bg-[#0055FF] text-white px-4 py-1.5 rounded-full text-lg flex items-center'
            onClick={() => setShowHours(!showHours)}
          >
            <Clock className='size-5 mr-2.5' />
            Show opening hours
            <ChevronDown className='ml-2 mt-1' />
          </button>

          {/* Opening hours popup */}
          {showHours && (
            <div className='absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-20'>
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className='px-3 py-1 text-sm text-gray-700 flex justify-between'
                >
                  <span className='font-medium'>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className='flex-grow flex flex-col items-center justify-center text-center text-white relative overflow-hidden'>
        <div className='absolute inset-0'>
          <img src='./src/assets/images/main-page.png' />
        </div>

        <div className='z-10'>
          <h1 className='text-4xl font-bold mb-4'>
            EFFORTLESS RESTAURANT RESERVATIONS & MANAGEMENT
          </h1>
          <p className='text-xl mb-8'>Leenrütimattweg 3, 4704 Niederbipp</p>

          <div className='w-full max-w-lg mx-auto h-px bg-white mb-8'></div>

          {/* Logo */}
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

          <button
            className='bg-white text-black py-3 px-8 rounded-full text-xl font-medium transition-all hover:bg-gray-200'
            onClick={() => navigate('/small-website')}
          >
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-[#131313] text-white p-4 flex flex-wrap justify-around items-center'>
        <div className='flex items-center gap-x-10'>
          <div className=''>
            <img src='../src/assets/images/lightLogo.png' alt='logo' className='h-11' />
          </div>
          <span className='text-sm text-[#8F8F8F]'>
            Copyright © 2024 <span className='text-white mx-1'>EasyDine</span> All rights
            reserved.
          </span>
        </div>

        <div className='flex space-x-4 my-2'>
          <a href='#' className='hover:text-gray-300 text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-7'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <BsFacebook />
            </svg>
          </a>
          <a href='#' className='hover:text-gray-300 text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-7'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <BsInstagram />
            </svg>
          </a>
          <a href='#' className='hover:text-gray-300 text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-7'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <BsLinkedin />
            </svg>
          </a>
          <a href='#' className='hover:text-gray-300 text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='size-7'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <BsYoutube />
            </svg>
          </a>
        </div>

        <div className='flex flex-wrap space-x-4 text-sm'>
          <a href='#' className='hover:text-gray-300 text-white'>
            • Über uns
          </a>
          <a href='#' className='hover:text-gray-300 text-white'>
            • Produkte
          </a>
          <a href='#' className='hover:text-gray-300 text-white'>
            • Preise
          </a>
          <a href='#' className='hover:text-gray-300 text-white'>
            • Bewertungen
          </a>
          <a href='#' className='hover:text-gray-300 text-white'>
            • News
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantReservation;
