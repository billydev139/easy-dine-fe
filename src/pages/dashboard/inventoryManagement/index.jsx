'use client';

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import DashboardLayout from '../../../layouts/dashboardLayout';
import Icons from '../../../assets/icons';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import InputField from '../../../components/inputField';
import SectionHeading from '../../../components/sectionHeading';
import Swal from 'sweetalert2';
import Images from '../../../assets/images';
import DashboardStats from '../dashboardStats';
import Button from '../../../components/button';
import RevenueChart from '../revenueChart';
import WasteReduction from './wasteReduction';
import { useSelector } from 'react-redux';
import InventoryAlerts from './inventoryAlerts';
import AlertsNotifications from './alertsNotifications';
import StockManagement from './stockManagement/stockSearch';

const InventoryManagement = () => {
  const data = [
    {
      id: 1,
      title: 'Software Engineer',
      server: 'Brooklyn Simmons',
      date: 'Oct 24, 2024',
      applications: '#5552375',
      position: '03',
      status: 'New Order',
      payment: 'Express',
    },
    {
      id: 2,
      title: 'Software Engineer',
      server: 'Annette Black',
      date: 'Oct 24, 2024',
      applications: '#5552375',
      position: '05',
      status: 'New Order',
      payment: 'Card Payment',
    },
    {
      id: 3,
      title: 'Software Engineer',
      server: 'Jacob Jones',
      date: 'Oct 24, 2024',
      applications: '#5552375',
      position: '07',
      status: 'Delivered',
      payment: 'Cash in Hand',
    },
    {
      id: 4,
      title: 'Software Engineer',
      server: 'Esther Howard',
      date: 'Oct 24, 2024',
      applications: '#5552375',
      position: '06',
      status: 'Pending',
      payment: 'Express',
    },
    {
      id: 5,
      title: 'Software Engineer',
      server: 'Annette Black',
      date: 'Oct 24, 2024',
      applications: '#5552375',
      position: '06',
      status: 'Pending',
      payment: 'Card Payment',
    },
    {
      id: 6,
      title: 'Software Engineer',
      server: 'Annette Black',
      date: 'Oct 24, 2024',
      applications: '#5552375',
      position: '10',
      status: 'Delivered',
      payment: 'Cash in Hand',
    },
  ];

  const [perPage, setPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    Swal.fire({
      html: `
        <div class="flex flex-col items-center">
          <img
            src=${Images.bin}
            alt="Trash Bin"
            class="w-20 h-24 "
          />
          <h2 class="text-secondaryBlue text-center text-base font-semibold mb-5">
            Are you sure you want to Delete <br />
            the Restaurant in the Bin?
          </h2>
          <p class="text-secondaryBlue text-center text-sm mb-6">
            You can’t undo this action.
          </p>
        </div>
      `,
      background: '#0F0A33',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      buttonsStyling: false,
      customClass: {
        popup: 'rounded-lg p-6',

        cancelButton:
          'px-6 py-2 border border-blue-500 text-blue-500 rounded-md  hover:text-secondaryBlue',
        confirmButton: 'px-6 py-2  text-black bg-white rounded-md mr-4 ',
      },
    }).then(result => {
      if (result.isConfirmed) {
        // Handle the delete action here
        console.log('Restaurant deleted!');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log('Delete action cancelled!');
      }
    });
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [categoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const categories = ['Category A', 'Category B', 'Category C'];
  const times = [
    '12:00:00 AM',
    '12:30:00 AM',
    '1:00:00 AM',
    '1:30:00 AM',
    '2:00:00 AM', // Add all time slots
    '11:30:00 PM',
  ];
  const theme = useSelector(state => state?.theme?.theme);
  return (
    <DashboardLayout>
      <div className='flex mt-6 gap-x-6'>
        <button
          className={`py-2 px-4 font-bold ${
            activeTab === 'Overview'
              ? 'text-[#00925C] border-b-2 border-[#00925C] text-xl'
              : 'text-[#717B8C] text-xl font-medium'
          }`}
          onClick={() => setActiveTab('Overview')}
        >
          Overview
        </button>
        <button
          className={`py-2 px-4 font-bold ${
            activeTab === 'Stock Management'
              ? 'text-[#00925C] border-b-2 border-[#00925C] text-xl'
              : 'text-[#717B8C] text-xl font-medium'
          }`}
          onClick={() => setActiveTab('Stock Management')}
        >
          Stock Management
        </button>
        <button
          className={`py-2 px-4 font-bold ${
            activeTab === 'Alerts & Notifications'
              ? 'text-[#00925C] border-b-2 border-[#00925C] text-xl'
              : 'text-[#717B8C] text-xl font-medium'
          }`}
          onClick={() => setActiveTab('Alerts & Notifications')}
        >
          Alerts & Notifications
        </button>
      </div>
      <Dialog open={open} onClose={setOpen} className='relative z-10'>
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
        />

        <div className='fixed inset-0 z-10  overflow-y-auto'>
          <div className='flex min-h-full  items-end justify-center  text-center sm:items-center sm:p-0'>
            <DialogPanel
              transition
              className='relative transform overflow-hidden rounded-lg bg-white  pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-5xl  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
            >
              <div className='flex justify-between items-center px-6 bg-[#150F43] '>
                <SectionHeading
                  heading={'Add Item'}
                  para={'Lorem ipsum dolor sit amet,consecteture'}
                />
                <div>
                  {/* <Button>View All</Button> */}
                  <Icons.FaRegTimesCircle
                    onClick={() => setOpen(false)}
                    color='white'
                    size={27}
                  />
                </div>
              </div>
              <form className='grid grid-cols-1 md:grid-cols-2 p-6  gap-4'>
                <div>
                  {/* <label className=" text-sm font-semibold text-primaryBlack">Company Name</label> */}
                  <InputField
                    type='text'
                    label={'Item Name'}
                    placeholder='Type Item Name ....'
                    borderColor={'border-white'}
                    placeholderColor={'placeholder:text-primaryGray'}
                    backgroundcolor={'bg-[#7B68FF1A]'}
                    className='w-full  border rounded-md '
                  />
                </div>
                <div className='relative'>
                  <label className='  text-sm font-semibold text-secondaryBlue'>
                    Category
                  </label>
                  <button
                    className='flex items-center justify-between w-full mt-1 px-4 py-3 bg-[#1A1448] text-sm border text-secondaryBlue rounded-md '
                    onClick={() => setIsCategoryOpen(!categoryOpen)}
                    type='button'
                  >
                    {selectedCategory || 'Select Category'}
                    <Icons.FaCaretDown />
                  </button>
                  {categoryOpen && (
                    <div className='absolute z-10 w-full mt-2 bg-[#F1EFFF] text-black rounded-md  '>
                      {categories.map((item, index) => (
                        <div
                          key={index}
                          className='px-4 py-2 hover:bg-[#C4C0E1] cursor-pointer border-b'
                          onClick={() => {
                            setSelectedCategory(item);
                            setIsCategoryOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <InputField
                    type='text'
                    label={'Supplier Name'}
                    labelstyle={''}
                    placeholder='Type Supplier Name ....'
                    placeholderColor={'placeholder:text-primaryGray'}
                    backgroundcolor={'bg-[#7B68FF1A]'}
                    className='w-full  border rounded-md '
                  />
                </div>
                <div>
                  <InputField
                    type='number'
                    label={'Stock Quantity'}
                    labelstyle={''}
                    placeholder='Type Stock Quantity....'
                    placeholderColor={'placeholder:text-primaryGray'}
                    backgroundcolor={'bg-[#7B68FF1A]'}
                    className='w-full  border rounded-md '
                  />
                </div>
                <div>
                  <InputField
                    type='number'
                    label={'Cost Per Unit'}
                    labelstyle={''}
                    placeholder='€ Cost....'
                    placeholderColor={'placeholder:text-primaryGray'}
                    backgroundcolor={'bg-[#7B68FF1A]'}
                    className='w-full  border rounded-md '
                  />
                </div>
                {/* Time Dropdown */}
                {/* <div className="relative">
                  <label className="  text-sm font-semibold text-secondaryBlue">
                    Select Time
                  </label>
                  <button
                    className="flex items-center justify-between w-full mt-1 px-4 py-3 bg-[#1A1448] text-sm border text-secondaryBlue rounded-md "
                    onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                    type="button"
                  >
                    {selectedTime || "Select Time"}
                    <Icons.FaCaretDown />
                  </button>
                  {isTimeDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white text-black rounded-md text-center  ">
                      {times.map((time, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-[#1A1448] hover:text-secondaryBlue cursor-pointer border-b"
                          onClick={() => {
                            setSelectedTime(time);
                            setIsTimeDropdownOpen(false);
                          }}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  )}
                </div> */}
                <div>
                  <InputField
                    type='date'
                    label={'Expiry Date'}
                    placeholder='select Date'
                    placeholderColor={'placeholder:text-primaryGray'}
                    backgroundcolor={'bg-[#7B68FF1A]'}
                    className='w-full p-2 border rounded-md text-sm text-secondaryBlue'
                  />
                </div>
                <div className='col-span-2'>
                  <InputField
                    type='textarea'
                    label={'Comments (Optional)'}
                    placeholder='Type your comments......'
                    placeholderColor={'placeholder:text-primaryGray'}
                    backgroundcolor={'bg-[#7B68FF1A]'}
                    className='w-full p-2 ps-7 border-dashed hover:border-[#C4C0E1] rounded-md text-sm text-secondaryBlue'
                  />
                </div>

                <div className='col-span-2 flex justify-end gap-2 pt-8'>
                  <button
                    type='submit'
                    className=' px-4 py-2 bg-inherit border border-[#7B68FF] text-secondaryBlue font-medium rounded-md  '
                  >
                    Back
                  </button>
                  <button
                    type='submit'
                    className=' px-4 py-2 bg-[#EBEBEB] border border-[#EBEBEB] text-primaryBlack font-medium rounded-md  '
                  >
                    Save
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      {activeTab === 'Overview' && (
        <>
          <DashboardStats />
          <div className='grid grid-cols-2 gap-4 mb-8'>
            <RevenueChart heading={'Stock trends over time'} />
            <WasteReduction />
          </div>
          <InventoryAlerts />
        </>
      )}

      {activeTab === 'Stock Management' && (
        <div className=''>
          <StockManagement />
        </div>
      )}

      {activeTab === 'Alerts & Notifications' && (
        <div className='p-4'>
          <AlertsNotifications />
        </div>
      )}
    </DashboardLayout>
  );
};

export default InventoryManagement;
