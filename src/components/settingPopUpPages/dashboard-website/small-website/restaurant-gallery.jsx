import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurant } from '../../../../store/restaurant/restaurantSlice';

const RestaurantGallery = () => {
  const dispatch = useDispatch();
  const { restaurant, isLoading, errorMessage } = useSelector((state) => state.restaurant);

  // Fetch restaurant data when the component mounts
  useEffect(() => {
    dispatch(getAllRestaurant({ page: 1, limit: 10, searchQuery: '' }));
  }, [dispatch]);

  // Extract gallery images from the restaurant state
  const galleryImages = restaurant?.results?.results?.flatMap((res) => res.galleryManagement?.images || []) || [];

  // Show a loading state while fetching data
  if (isLoading) {
    return (
      <div className="bg-blue-50 min-h-screen py-24">
        <p className="text-center text-lg font-medium text-gray-600">Loading gallery...</p>
      </div>
    );
  }

  // Show an error message if there's an error
  if (errorMessage) {
    return (
      <div className="bg-blue-50 min-h-screen py-24">
        <p className="text-center text-lg font-medium text-red-600">{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 min-h-screen pb-36 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center text-[#131313] mb-2.5">Gallery</h1>
        <p className="text-lg font-semibold text-center text-[#696969] mb-12">
          View your restaurant and make reservations through QR Codes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-52">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantGallery;
