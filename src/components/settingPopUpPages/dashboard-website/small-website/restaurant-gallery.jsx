const RestaurantGallery = () => {
  const restaurantImages = [
    {
      id: 1,
      src: '../src/assets/images//gallery-1.png',
      alt: 'Modern restaurant interior with dark furniture and wooden accents',
    },
    {
      id: 2,
      src: '../src/assets/images//gallery-2.png',
      alt: 'Industrial style restaurant with open kitchen and warm lighting',
    },
    {
      id: 3,
      src: '../src/assets/images//gallery-3.png',
      alt: 'Vibrant restaurant with colorful accents and modern design',
    },
    {
      id: 4,
      src: '../src/assets/images//gallery-4.png',
      alt: 'Bright cafe with plants and blue accents',
    },
    {
      id: 5,
      src: '../src/assets/images//gallery-5.png',
      alt: 'Elegant restaurant with wooden tables and soft lighting',
    },
    {
      id: 6,
      src: '../src/assets/images//gallery-6.png',
      alt: 'Modern restaurant with brick walls and yellow chairs',
    },
  ];

  return (
    <div className='bg-blue-50 min-h-screen pb-36 py-10 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-6xl font-bold text-center text-[#131313] mb-2.5'>Gallery</h1>
        <p className='text-lg font-semibold text-center text-[#696969] mb-12'>
          View your restaurant and make reservations through QR Codes
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5'>
          {restaurantImages.map(image => (
            <div
              key={image.id}
              className='overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <div className='relative h-52'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                  <button className='bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200'>
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
