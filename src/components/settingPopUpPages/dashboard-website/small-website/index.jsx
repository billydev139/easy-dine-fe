import HeroSection from './hero-section';
import OurMenu from './our-menu';
import QRCodeScannerPage from './qrScanner';
import ReservationForm from './reservation-form';
import RestaurantGallery from './restaurant-gallery';

const SmallWebsite = () => {
  return (
    <>
      <HeroSection />
      <OurMenu />
      <ReservationForm />
      <RestaurantGallery />
      <QRCodeScannerPage />

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
    </>
  );
};

export default SmallWebsite;
