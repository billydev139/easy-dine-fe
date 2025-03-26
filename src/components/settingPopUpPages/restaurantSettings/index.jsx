import { ChevronLeft, ChevronRight, CircleX, Edit, Trash2, User } from 'lucide-react';
import { useState } from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { MdAccessTimeFilled, MdLocationOn, MdRemoveRedEye } from 'react-icons/md';
import { FaArrowLeft, FaRegBuilding } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const RestaurantSettings = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: 'Kitchen Cafe',
      logo: '/src/assets/images/restaurant-01.png',
      address: '6080 Steubenville Pike',
      email: 'tgnz@freesourcecodes.com',
      isActive: true,
    },
    {
      id: 2,
      name: 'The Grill',
      logo: '/src/assets/images/restaurant-02.png',
      address: '6080 Steubenville Pike',
      email: 'tgnz@freesourcecodes.com',
      isActive: true,
    },
    {
      id: 3,
      name: 'Kitchen Cafe',
      logo: '/src/assets/images/restaurant-03.png',
      address: '6080 Steubenville Pike',
      email: 'tgnz@freesourcecodes.com',
      isActive: false,
    },
    {
      id: 4,
      name: 'Restaurant',
      logo: '/src/assets/images/restaurant-04.png',
      address: '6080 Steubenville Pike',
      email: 'tgnz@freesourcecodes.com',
      isActive: false,
    },
    {
      id: 5,
      name: 'Fried Chicken',
      logo: '/src/assets/images/restaurant-05.png',
      address: '6080 Steubenville Pike',
      email: 'tgnz@freesourcecodes.com',
      isActive: false,
    },
    {
      id: 6,
      name: 'Kitchen Cafe',
      logo: '/src/assets/images/restaurant-01.png',
      address: '6080 Steubenville Pike',
      email: 'tgnz@freesourcecodes.com',
      isActive: false,
    },
  ]);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(null);

  const toggleRestaurantActive = id => {
    setRestaurants(
      restaurants.map(restaurant =>
        restaurant.id === id
          ? { ...restaurant, isActive: !restaurant.isActive }
          : restaurant
      )
    );
  };

  const handleDeleteRestaurant = id => {
    // Remove the restaurant from the list
    const updatedRestaurants = restaurants.filter(restaurant => restaurant.id !== id);
    setRestaurants(updatedRestaurants);

    // Close the confirm delete modal
    setConfirmDelete(null);
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/dashboard/restaurant-edit-form');
  };

  return (
    <DashboardLayout>
      <div className='pt-9 w-full min-h-screen'>
        <div className='flex w-full items-center mb-7'>
          <FaArrowLeft className='w-6 h-6 mr-2 text-[#282F5A] cursor-pointer' />
          <span className='text-[#282F5A] text-xl mr-2'>Setting &gt;</span>
          <span className='text-[#282F5A] text-xl font-semibold'>
            Restaurant Settings
          </span>
        </div>

        <div className='bg-white rounded-md'>
          <div className='p-6 mb-7'>
            <div className='flex justify-between items-center mb-6'>
              <div>
                <h1 className='text-xl text-[#131313] font-semibold'>
                  Manage Restaurant
                </h1>
                <p className='text-[#131313] text-sm'>
                  Lorem ipsum dolor sit amet, consecteture
                </p>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Search Restaurant'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className='w-[503px] pl-10 pr-4 py-2 placeholder:text-[#131313] placeholder:text-sm bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl outline-none'
                />
                <svg
                  className='absolute flex-1 left-3 top-3 w-5 h-5 text-[#131313]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-x-5 gap-y-4'>
              {filteredRestaurants.map(restaurant => (
                <div
                  key={restaurant.id}
                  className='border border-[#9EC3FF] rounded-xl py-4 px-5 bg-[#EEF5FF] flex flex-col'
                >
                  <div className='flex items-center'>
                    <img
                      src={restaurant.logo}
                      alt={restaurant.name}
                      className='size-44 rounded-lg mr-4'
                    />
                    <div className='flex-grow'>
                      <div className='flex items-center justify-between mb-4'>
                        <h2 className='text-xl text-[#131313] font-semibold'>
                          {restaurant.name}
                        </h2>
                        <label className='inline-flex items-center cursor-pointer'>
                          <input
                            type='checkbox'
                            checked={restaurant.isActive}
                            onChange={() => toggleRestaurantActive(restaurant.id)}
                            className='sr-only peer'
                          />
                          <div className="relative w-11 h-6 bg-[#696969] outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#19DB8C]"></div>
                        </label>
                      </div>

                      <div className='flex items-center space-x-2 mb-3.5'>
                        <FaLocationDot />
                        <p className='text-sm text-[#131313]'>{restaurant.address}</p>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <IoMdMail />
                        <p className='text-sm text-[#131313]'>{restaurant.email}</p>
                      </div>

                      <div className='pt-3'>
                        <div className='flex items-center space-x-2'>
                          <button className='text-[#0075FF] hover:text-[#0055FF] p-2 rounded'>
                            <Edit size={20} />
                          </button>
                          <button
                            onClick={() => setConfirmDelete(restaurant.id)}
                            className='text-[#E54B47] hover:text-[#E54947] p-2 rounded'
                          >
                            <Trash2 size={20} />
                          </button>
                          <div className=''>
                            <button
                              onClick={() => setSelectedRestaurant(restaurant)}
                              className='flex items-center gap-1 text-xs text-white bg-[#0075FF] hover:bg-[#0055FF] px-4 py-1.5 rounded-full'
                            >
                              <MdRemoveRedEye className='size-4' />
                              {/* <Eye size={20} /> */}
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Confirm Delete Modal */}
            {confirmDelete && (
              <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                <div className='bg-white rounded-lg w-full max-w-md p-6'>
                  <h2 className='text-xl font-semibold mb-4'>Confirm Delete</h2>
                  <p className='mb-6'>Are you sure you want to delete this restaurant?</p>
                  <div className='flex justify-end space-x-4'>
                    <button
                      onClick={() => setConfirmDelete(null)}
                      className='px-4 py-2 bg-gray-200 rounded'
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDeleteRestaurant(confirmDelete)}
                      className='px-4 py-2 bg-red-500 text-white rounded'
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Existing Restaurant Details Modal */}
            {selectedRestaurant && (
              <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'>
                <div className='bg-white py-6 rounded-lg w-full max-w-3xl min-h-screen'>
                  <div className='bg-[#2561E8] text-white py-5 px-6 flex items-center'>
                    <img
                      src={selectedRestaurant.logo}
                      alt={selectedRestaurant.name}
                      className='size-20 mr-6 rounded-full'
                    />
                    <div>
                      <h2 className='text-2xl font-bold mb-2.5'>
                        {selectedRestaurant.name}
                      </h2>
                      <span className='text-white  bg-[#19DB8C] rounded-xl text-sm font-medium px-4 py-1'>
                        Active
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedRestaurant(null)}
                      className='ml-auto text-white'
                    >
                      <CircleX />
                    </button>
                  </div>

                  <div className='py-3 px-16'>
                    <div className='flex gap-x-2 mb-4'>
                      <MdLocationOn className='mt-1.5 text-[#696969]' />
                      <div className='flex flex-col'>
                        <p className='text-lg font-semibold'>Address</p>
                        <p className='text-[#696969] text-sm'>
                          123 Main St, New York, NY 10001
                        </p>
                      </div>
                    </div>

                    <div className='flex gap-x-2 mb-4'>
                      <IoMdMail className='mt-1 text-[#696969]' />
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Email</p>
                        <p>info@grilhousecom</p>
                      </div>
                    </div>

                    <div className='flex gap-x-2 mb-4'>
                      <FiPhone className='mt-1 text-[#696969]' />
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Phone</p>
                        <p>+123-456-7890</p>
                      </div>
                    </div>

                    <div className='flex gap-x-2 mb-4'>
                      <MdAccessTimeFilled className='mt-1 text-[#696969]' />
                      <div className='flex flex-col'>
                        <p className='font-semibold'>Hours</p>
                        <p>Mon-Sun 9 AM - 11 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className='px-10 mb-4'>
                    <p className='text-xl text-[#131313] px-1 font-semibold'>
                      Restaurant Settings
                    </p>
                    <hr className='my-2.5' />

                    <div className='px-6'>
                      <div className='flex items-center gap-x-2 mb-2'>
                        <FaRegBuilding className='text-[#696969]' />
                        <p className='text-[#11111] font-medium'>
                          Locations{' '}
                          <span className='ml-1.5 font-medium text-[#696969] text-xs'>
                            (4 locations)
                          </span>
                        </p>
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <FaRegBuilding className='text-[#696969]' />
                        <p className='text-[#11111] font-medium'>
                          Areas{' '}
                          <span className='ml-1.5 font-medium text-[#696969] text-xs'>
                            (6 Areas)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='px-10'>
                    <p className='text-xl text-[#131313] px-1 font-semibold'>
                      Users & Roles
                    </p>
                    <hr className='mt-2.5 mb-4' />

                    <div className='grid grid-cols-3 gap-x-4'>
                      <div className='border rounded-[10px] border-[#C1C1C1C1] shadow px-5 py-4'>
                        <div className='flex gap-x-1.5'>
                          <User />
                          <p className='text-[#111111] font-medium'>John Doe</p>
                        </div>
                        <p className='text-[#696969] text-sm ml-8 mb-5'>
                          john@example.com
                        </p>
                        <span className='text-black dark:text-white ml-8'>Admin</span>
                      </div>

                      <div className='border rounded-[10px] border-[#C1C1C1C1] shadow px-5 py-4'>
                        <div className='flex gap-x-1.5'>
                          <User />
                          <p className='text-[#111111] font-medium'>John Doe</p>
                        </div>
                        <p className='text-[#696969] text-sm ml-8 mb-5'>
                          john@example.com
                        </p>
                        <span className='text-black dark:text-white ml-8'>Manager</span>
                      </div>

                      <div className='border rounded-[10px] border-[#C1C1C1C1] shadow px-5 py-4'>
                        <div className='flex gap-x-1.5'>
                          <User />
                          <p className='text-[#111111] font-medium'>John Doe</p>
                        </div>
                        <p className='text-[#696969] text-sm ml-8 mb-5'>
                          john@example.com
                        </p>
                        <span className='text-black dark:text-white ml-8'>Chef</span>
                      </div>
                    </div>
                  </div>

                  <div className='px-10 mt-7'>
                    <p className='text-xl text-[#131313] px-1 font-semibold'>
                      Users & Roles
                    </p>
                    <hr className='mt-2.5 mb-5' />

                    <div className='flex flex-col items-start ml-5 gap-x-2 mb-2'>
                      <div className='flex items-center gap-x-3 mb-1.5'>
                        <FaRegBuilding className='text-[#696969]' />
                        <p className='text-[#11111] font-medium'>Premium Plan</p>
                      </div>
                      <span className='text-xs text-[#696969] font-medium ml-7'>
                        Expires on Dec 31, 2025
                      </span>
                    </div>
                    <hr className='my-5' />
                  </div>

                  <div className='mt-4 flex justify-end gap-x-4 px-10'>
                    <button
                      onClick={() => setSelectedRestaurant(null)}
                      className='px-12 py-2 font-semibold text-white text-sm bg-[#0075FF] hover:bg-[#0055FF] rounded-xl'
                    >
                      Close
                    </button>
                    <button
                      className='px-8 py-2 font-semibold bg-[#0F0A33] text-sm shadow-lg hover:shadow-[#0075FFCC] text-white rounded-xl'
                      onClick={handleEditClick}
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className='mt-9 mb-28 flex justify-end gap-x-3 items-center'>
              <span className='text-sm font-medium text-[#131313]'>Results Per Page</span>
              <div className='flex items-center space-x-4'>
                <span>10</span>
                <span className='text-[#131313]'>1-10 Of 16</span>
                <div className='flex cursor-pointer space-x-2'>
                  <ChevronLeft />
                  <ChevronRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RestaurantSettings;
