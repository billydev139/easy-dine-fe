import { useState } from 'react';

const RestaurantList = () => {
  // Initial restaurant data
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: 'Red Stiletto Restaurant',
      address: '6080 Steubenville Pike',
      email: 'tgnz@freesourcecodes.com',
      status: 'Available',
      isLive: true,
    },
    {
      id: 2,
      name: 'The Nouveau Table',
      address: 'An den Wulzen 7',
      email: 'tgnz@gmel.com',
      status: 'Sold',
      isLive: false,
    },
    {
      id: 3,
      name: 'The Nouveau Table',
      address: 'An den Wulzen 7',
      email: 'tgnz@gmel.com',
      status: 'Sold',
      isLive: false,
    },
  ]);

  // Function to toggle the live status
  const toggleLiveStatus = id => {
    setRestaurants(
      restaurants.map(restaurant => {
        if (restaurant.id === id) {
          const newIsLive = !restaurant.isLive;
          // Update status based on isLive value
          const newStatus = newIsLive ? 'Available' : 'Sold';
          return { ...restaurant, isLive: newIsLive, status: newStatus };
        }
        return restaurant;
      })
    );
  };

  // Function to handle save button click
  const handleSave = () => {
    alert('Changes saved successfully!');
  };

  // Function to handle back button click
  const handleBack = () => {
    alert('Going back to previous page');
  };

  return (
    <div className='bg-white rounded-xl shadow-md'>
      <div className=' px-5 py-6 mb-6'>
        <h1 className='text-xl font-semibold text-[#131313]'>Restaurant list</h1>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetue</p>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full'>
          <thead>
            <tr className='bg-[#EEF5FF]'>
              <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                Restaurant Name
              </th>
              <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                Address
              </th>
              <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                Email
              </th>
              <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                Status
              </th>
              <th className='py-3 px-7 text-left text-base font-semibold text-[#131313]'>
                GO Live
              </th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map(restaurant => (
              <tr key={restaurant.id} className='border-b'>
                <td className='py-3.5 px-7 text-sm text-[#131313]'>{restaurant.name}</td>
                <td className='py-3.5 px-7 text-sm text-[#131313]'>
                  {restaurant.address}
                </td>
                <td className='py-3.5 px-7 text-sm text-[#131313]'>{restaurant.email}</td>
                <td className='py-3.5 px-7 text-sm'>
                  <span
                    className={`rounded-full text-base ${
                      restaurant.status === 'Available'
                        ? 'text-[#19DB8C]'
                        : 'text-[#E54B47]'
                    }`}
                  >
                    {restaurant.status}
                  </span>
                </td>
                <td className='py-4 px-7'>
                  <button
                    onClick={() => toggleLiveStatus(restaurant.id)}
                    className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${
                      restaurant.isLive ? 'bg-[#19DB8C]' : 'bg-[#E54B47]'
                    }`}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                        restaurant.isLive ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='mt-8 pb-8 pr-9 flex justify-end space-x-5'>
        <button
          onClick={handleBack}
          className='px-14 py-2 bg-[#0075FF] text-white text-sm font-semibold rounded-xl hover:bg-[#0055FF]'
        >
          Back
        </button>
        <button
          onClick={handleSave}
          className='px-14 py-2 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-blue-500'
          style={{ backgroundColor: '#0F172A' }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default RestaurantList;
