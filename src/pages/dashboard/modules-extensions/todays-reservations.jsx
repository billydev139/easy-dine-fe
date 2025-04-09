'use client';

import { useState } from 'react';
import { ChevronDown, User, MapPin, Clock } from 'lucide-react';

export default function TodaysReservations() {
  const [timeFilter, setTimeFilter] = useState('All Times');
  const [statusFilter, setStatusFilter] = useState('Seating Status');
  const [showAllReservations, setShowAllReservations] = useState(false);

  // Sample reservation data
  const reservations = [
    {
      id: 1,
      table: 'Table #45',
      status: 'Available',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 2,
      table: 'Table #45',
      status: 'Reserved',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 3,
      table: 'Table #45',
      status: 'Available',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 4,
      table: 'Table #45',
      status: 'Available',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 5,
      table: 'Table #45',
      status: 'Available',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 6,
      table: 'Table #45',
      status: 'Reserved',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 7,
      table: 'Table #45',
      status: 'Reserved',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 8,
      table: 'Table #45',
      status: 'Reserved',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 9,
      table: 'Table #45',
      status: 'Available',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 10,
      table: 'Table #45',
      status: 'Reserved',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 11,
      table: 'Table #45',
      status: 'Available',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
    {
      id: 12,
      table: 'Table #45',
      status: 'Reserved',
      name: 'Emily Davis',
      floor: 'Floor 2',
      time: '6:45 PM',
      guests: 2,
    },
  ];

  // Filter reservations based on selected filters
  const filteredReservations = reservations.filter(reservation => {
    let matchesStatus = true;
    if (statusFilter !== 'Seating Status') {
      matchesStatus = reservation.status === statusFilter;
    }
    return matchesStatus;
  });

  // Show only first 8 reservations unless "Show More" is clicked
  const displayedReservations = showAllReservations
    ? filteredReservations
    : filteredReservations.slice(0, 8);

  // Toggle dropdown for time filter
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const toggleTimeDropdown = () => setTimeDropdownOpen(!timeDropdownOpen);

  // Toggle dropdown for status filter
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const toggleStatusDropdown = () => setStatusDropdownOpen(!statusDropdownOpen);

  // Handle status change

  return (
    <div className='bg-white px-5 py-6 mt-4 rounded-lg'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
        <div>
          <h1 className='text-lg font-bold text-[#131313]'>Today&apos;s Reservations</h1>
          <p className='text-[#131313] text-sm'>
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 mt-4 md:mt-0'>
          {/* Time Filter Dropdown */}
          <div className='relative'>
            <button
              onClick={toggleTimeDropdown}
              className='flex items-center justify-between w-full px-4 py-2 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] text-gray-700'
            >
              <span>{timeFilter}</span>
              <ChevronDown className='w-4 h-4 ml-2' />
            </button>

            {timeDropdownOpen && (
              <div className='absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg'>
                <ul>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => {
                      setTimeFilter('All Times');
                      setTimeDropdownOpen(false);
                    }}
                  >
                    All Times
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => {
                      setTimeFilter('Morning');
                      setTimeDropdownOpen(false);
                    }}
                  >
                    Morning
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => {
                      setTimeFilter('Afternoon');
                      setTimeDropdownOpen(false);
                    }}
                  >
                    Afternoon
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => {
                      setTimeFilter('Evening');
                      setTimeDropdownOpen(false);
                    }}
                  >
                    Evening
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Status Filter Dropdown */}
          <div className='relative'>
            <button
              onClick={toggleStatusDropdown}
              className='flex items-center justify-between w-full px-4 py-2 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] text-gray-700'
            >
              <span>{statusFilter}</span>
              <ChevronDown className='w-4 h-4 ml-2' />
            </button>

            {statusDropdownOpen && (
              <div className='absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg'>
                <ul>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => {
                      setStatusFilter('Seating Status');
                      setStatusDropdownOpen(false);
                    }}
                  >
                    Seating Status
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => {
                      setStatusFilter('Available');
                      setStatusDropdownOpen(false);
                    }}
                  >
                    Available
                  </li>
                  <li
                    className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                    onClick={() => {
                      setStatusFilter('Reserved');
                      setStatusDropdownOpen(false);
                    }}
                  >
                    Reserved
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reservation Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {displayedReservations.map(reservation => (
          <div
            key={reservation.id}
            className='bg-white p-5 rounded-[10px] border border-[#C1C1C1C1] shadow-md'
          >
            <div className='flex justify-between items-start mb-4'>
              <div>
                {reservation.status === 'Available' ? (
                  <span className='inline-block px-4 py-1 bg-[#1CB85033] text-[#00925C] border border-[#17EFA0] text-xs font-medium rounded-xl'>
                    Available
                  </span>
                ) : (
                  <span className='inline-block px-3 py-1 border border-[#FF625F] bg-[#B81C1C33] text-[#E54B47] text-xs font-medium rounded-xl'>
                    Reserved
                  </span>
                )}
              </div>
              <div className='text-[#1A2042] font-semibold'>{reservation.table}</div>
            </div>

            <div className='space-y-2'>
              <div className='flex items-center text-xs font-medium text-[#696969]'>
                <User className='size-5 mr-2' />
                <span>{reservation.name}</span>
              </div>

              <div className='flex items-center text-xs font-medium text-[#696969]'>
                <MapPin className='size-5 mr-2' />
                <span>{reservation.floor}</span>
              </div>

              <div className='flex items-center gap-x-1.5 mt-4'>
                <div className='flex items-center text-gray-700'>
                  <span className='text-xs font-medium bg-[#F1F5F9] py-1.5 px-3 rounded-xl text-[#696969]'>
                    {reservation.time}
                  </span>
                </div>

                <div className='text-[#696969] bg-[#F1F5F9] py-1.5 px-3 rounded-full text-xs font-medium'>
                  {reservation.guests} guests
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {filteredReservations.length > 8 && (
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => setShowAllReservations(!showAllReservations)}
            className='flex items-center font-medium text-[#131313] hover:text-gray-600'
          >
            <span>{showAllReservations ? 'Show Less' : 'Show More'}</span>
            <ChevronDown
              className={`w-5 h-5 ml-1 transition-transform ${
                showAllReservations ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
}
