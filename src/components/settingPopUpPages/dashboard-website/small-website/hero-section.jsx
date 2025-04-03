import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurant } from '../../../../store/restaurant/restaurantSlice';
import { Phone } from 'lucide-react';
import { BsEnvelope, BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

const HeroSection = () => {
  const dispatch = useDispatch();
  const { restaurant, isLoading, errorMessage } = useSelector((state) => state.restaurant);

  useEffect(() => {
    dispatch(getAllRestaurant({ page: 1, limit: 10, searchQuery: '' }));
  }, [dispatch]);

  const bannerImage = restaurant?.results?.results?.[0]?.restaurant.bannerImage || './src/assets/images/main-page.png';
  const email = restaurant?.results?.results?.[0]?.contact.email || 'support@easydine.com';
  const phoneNumber = restaurant?.results?.results?.[0]?.contact.phoneNumber || '+ 42 345 67890';
  const logo = restaurant?.results?.results?.[0]?.restaurant.logo || './src/assets/images/lightLogo.png';
  console.log('HeroSection -> bannerImage', email,phoneNumber);
  console.log('HeroSection -> restaurant', restaurant);

  if (isLoading) {
    return (
      <div className="bg-[#131313] text-white py-24 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="bg-[#131313] text-white py-24 text-center">
        <p>{errorMessage}</p>
      </div>
    );
  }

  return (
    <div>
      {/* header */}
      <header className="bg-[#131313] text-white py-7 px-20 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-x-3">
            <Phone className="size-5" />
            <span className="text-xl">{phoneNumber}</span>
          </div>
          <div className="flex items-center">
            <BsEnvelope className="size-5 mr-2.5" />
            <span className="text-lg font-medium">{email}</span>
          </div>
        </div>

        <div className="relative flex gap-x-5 cursor-pointer">
          <BsInstagram className="size-5 hover:text-gray-300" />
          <FaFacebookSquare className="size-5 hover:text-gray-300" />
          <FaTwitter className="size-5 hover:text-gray-300" />
          <FaLinkedin className="size-5 hover:text-gray-300" />
        </div>
      </header>

      {/* Main content */}
      <main className="py-24 flex-grow flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerImage} alt="Banner" className="w-full h-full object-cover" />
        </div>

        <div className="z-10">
          <h1 className="text-4xl font-bold mb-4">
            EFFORTLESS RESTAURANT RESERVATIONS & MANAGEMENT
          </h1>
          <p className="text-xl mb-8">Leenrütimattweg 3, 4704 Niederbipp</p>

          <div className="w-full max-w-lg mx-auto h-px bg-white mb-8"></div>

          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <img
                  src="./src/assets/images/wine.png"
                  alt="wine"
                  className="w-[650px]"
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
