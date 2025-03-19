import { useState } from 'react';

const RestaurantReservation = () => {
  // State for showing/hiding opening hours popup
  const [showHours, setShowHours] = useState(false);

  // Opening hours data
  const openingHours = [
    { day: 'Thursday', hours: '12-11:30 pm' },
    { day: 'Friday', hours: '12-11:30 pm' },
    { day: 'Saturday', hours: '12-11:30 pm' },
    { day: 'Sunday', hours: '12-11:30 pm' },
    { day: 'Monday', hours: '12-11:30 pm' },
    { day: 'Tuesday', hours: '12-11:30 pm' },
    { day: 'Wednesday', hours: '12-11:30 pm' },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className='bg-[#131313] text-white py-7 px-28 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center'>
            <span className='text-xl'>+42 345 6789 0</span>
          </div>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            <span>support@easydine.com</span>
          </div>
        </div>
        <div className='relative'>
          <button
            className='bg-blue-500 text-white px-10 py-1.5 rounded-full text-lg flex items-center'
            onClick={() => setShowHours(!showHours)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 mr-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            Show opening hours
          </button>

          {/* Opening hours popup */}
          {showHours && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className='px-4 py-2 text-sm text-gray-700 flex justify-between'
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
      <main className='flex-grow flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-900 to-pink-900 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black bg-opacity-70 '>
          <div className=''>
            <img src='./src/assets/images/main-page.png' />
          </div>
        </div>

        <div className='z-10'>
          <h1 className='text-5xl font-bold mb-4'>
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

          <button className='bg-white text-black py-3 px-8 rounded-full text-xl font-medium transition-all hover:bg-gray-200'>
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-[#131313] text-white p-4 flex flex-wrap justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <div className='bg-gradient-to-r from-blue-500 to-teal-400 p-2 rounded'>
            <span className='font-bold'>EASY</span>
            <span className='block text-xs'>DINE</span>
          </div>
          <span className='text-sm text-gray-400'>
            Copyright © 2024 Easy Dine All rights reserved.
          </span>
        </div>

        <div className='flex space-x-4 my-2'>
          <a href='#' className='text-gray-400 hover:text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.416 22 12c0-5.523-4.477-10-10-10z' />
            </svg>
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' />
            </svg>
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
            </svg>
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
            </svg>
          </a>
        </div>

        <div className='flex flex-wrap space-x-4 text-sm'>
          <a href='#' className='text-gray-400 hover:text-white'>
            • Über uns
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            • Produkte
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            • Preise
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            • Bewertungen
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            • News
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantReservation;
