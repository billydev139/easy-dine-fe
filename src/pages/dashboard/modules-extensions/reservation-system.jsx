'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Search,
  ChevronDown,
  Plus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  CookingPot,
} from 'lucide-react';
import TodaysReservations from './todays-reservations';

export default function ReservationSystem() {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('All Times');
  const [statusFilter, setStatusFilter] = useState('Seating Status');
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown states
  const [resultsDropdownOpen, setResultsDropdownOpen] = useState(false);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  // Action menu state
  const [activeActionMenu, setActiveActionMenu] = useState(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReservation, setNewReservation] = useState({
    clientName: '',
    floor: '',
    table: '',
    contact: '',
    address: '',
    status: 'Pending',
    timeSeated: '',
  });

  // Sample data for the reservation list
  const [reservations, setReservations] = useState([
    {
      id: 1,
      clientName: 'Albert Flores',
      floor: 6,
      table: 3,
      contact: '(405) 555-0128',
      address: '7529 E. Pecan St.',
      status: 'Reserved',
      timeSeated: '6:00pm - 6:30pm',
      name: 'Albert Flores',
      time: '6:00 PM',
      guests: 2,
    },
    {
      id: 2,
      clientName: 'Jerome Bell',
      floor: 4,
      table: 4,
      contact: '(480) 555-0103',
      address: '3890 Poplar Dr.',
      status: 'Available',
      timeSeated: '2:00pm - 5:30pm',
      name: 'Jerome Bell',
      time: '2:00 PM',
      guests: 3,
    },
    {
      id: 3,
      clientName: 'Jane Cooper',
      floor: 5,
      table: 5,
      contact: '(205) 555-0100',
      address: '3605 Parker Rd.',
      status: 'Pending',
      timeSeated: '6:00am - 6:30am',
      name: 'Jane Cooper',
      time: '6:00 AM',
      guests: 4,
    },
    {
      id: 4,
      clientName: 'Albert Flores',
      floor: 6,
      table: 3,
      contact: '(405) 555-0128',
      address: '7529 E. Pecan St.',
      status: 'Available',
      timeSeated: '6:00pm - 6:30pm',
      name: 'Albert Flores',
      time: '6:00 PM',
      guests: 2,
    },
    {
      id: 5,
      clientName: 'Jerome Bell',
      floor: 4,
      table: 4,
      contact: '(480) 555-0103',
      address: '3890 Poplar Dr.',
      status: 'Reserved',
      timeSeated: '2:00pm - 5:30pm',
      name: 'Jerome Bell',
      time: '2:00 PM',
      guests: 5,
    },
    {
      id: 6,
      clientName: 'Jane Cooper',
      floor: 5,
      table: 5,
      contact: '(205) 555-0100',
      address: '3605 Parker Rd.',
      status: 'Available',
      timeSeated: '6:00am - 6:30am',
      name: 'Jane Cooper',
      time: '6:00 AM',
      guests: 2,
    },
    {
      id: 7,
      clientName: 'Albert Flores',
      floor: 6,
      table: 3,
      contact: '(405) 555-0128',
      address: '7529 E. Pecan St.',
      status: 'Pending',
      timeSeated: '6:00pm - 6:30pm',
      name: 'Albert Flores',
      time: '6:00 PM',
      guests: 3,
    },
    {
      id: 8,
      clientName: 'Jerome Bell',
      floor: 4,
      table: 4,
      contact: '(480) 555-0103',
      address: '3890 Poplar Dr.',
      status: 'Available',
      timeSeated: '2:00pm - 5:30pm',
      name: 'Jerome Bell',
      time: '2:00 PM',
      guests: 4,
    },
    {
      id: 9,
      clientName: 'Jane Cooper',
      floor: 5,
      table: 5,
      contact: '(205) 555-0100',
      address: '3605 Parker Rd.',
      status: 'Reserved',
      timeSeated: '6:00am - 6:30am',
      name: 'Jane Cooper',
      time: '6:00 AM',
      guests: 2,
    },
    {
      id: 10,
      clientName: 'Albert Flores',
      floor: 6,
      table: 3,
      contact: '(405) 555-0128',
      address: '7529 E. Pecan St.',
      status: 'Available',
      timeSeated: '6:00pm - 6:30pm',
      name: 'Albert Flores',
      time: '6:00 PM',
      guests: 6,
    },
    {
      id: 11,
      clientName: 'Jerome Bell',
      floor: 4,
      table: 4,
      contact: '(480) 555-0103',
      address: '3890 Poplar Dr.',
      status: 'Pending',
      timeSeated: '2:00pm - 5:30pm',
      name: 'Jerome Bell',
      time: '2:00 PM',
      guests: 2,
    },
    {
      id: 12,
      clientName: 'Jane Cooper',
      floor: 5,
      table: 5,
      contact: '(205) 555-0100',
      address: '3605 Parker Rd.',
      status: 'Reserved',
      timeSeated: '6:00am - 6:30am',
      name: 'Jane Cooper',
      time: '6:00 AM',
      guests: 3,
    },
  ]);

  // Filter reservations based on search query and filters
  const filteredReservations = reservations.filter(reservation => {
    const matchesSearch =
      searchQuery === '' ||
      reservation.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.table.toString().includes(searchQuery) ||
      reservation.floor.toString().includes(searchQuery) ||
      reservation.contact.includes(searchQuery) ||
      reservation.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'Seating Status' || reservation.status === statusFilter;

    // Time filtering logic (simplified for demo)
    const matchesTime =
      timeFilter === 'All Times' ||
      (timeFilter === 'Morning' && reservation.timeSeated.includes('am')) ||
      (timeFilter === 'Afternoon' && reservation.timeSeated.includes('pm'));

    return matchesSearch && matchesStatus && matchesTime;
  });

  // Pagination
  const totalPages = Math.ceil(filteredReservations.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, filteredReservations.length);
  const currentReservations = filteredReservations.slice(startIndex, endIndex);

  // Refs for handling outside clicks
  const timeDropdownRef = useRef(null);
  const statusDropdownRef = useRef(null);
  const resultsDropdownRef = useRef(null);
  const actionMenuRef = useRef(null);
  const modalRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(event.target)) {
        setTimeDropdownOpen(false);
      }
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setStatusDropdownOpen(false);
      }
      if (
        resultsDropdownRef.current &&
        !resultsDropdownRef.current.contains(event.target)
      ) {
        setResultsDropdownOpen(false);
      }
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target)) {
        setActiveActionMenu(null);
      }
      if (modalRef.current && !modalRef.current.contains(event.target) && isModalOpen) {
        setIsModalOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  // Function to get status badge color
  const getStatusBadgeClass = status => {
    switch (status) {
      case 'Reserved':
        return 'border border-[#FF625F] bg-[#B81C1C33] text-[#E54B47]';
      case 'Available':
        return 'border border-[#17EFA0] bg-[#1CB85033] text-[#00925C]';
      case 'Pending':
        return 'border border-[#F4C62D] bg-[#F4C62D33] text-[#C69800]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Function to handle adding a new reservation
  const handleAddReservation = () => {
    setIsModalOpen(true);
  };

  // Function to submit new reservation
  const handleSubmitReservation = () => {
    // Validate form
    if (
      !newReservation.clientName ||
      !newReservation.floor ||
      !newReservation.table ||
      !newReservation.contact ||
      !newReservation.address ||
      !newReservation.timeSeated
    ) {
      alert('Please fill in all required fields');
      return;
    }

    // Add new reservation
    const newId = Math.max(...reservations.map(r => r.id)) + 1;
    setReservations([
      ...reservations,
      {
        id: newId,
        ...newReservation,
        name: newReservation.clientName,
        time: newReservation.timeSeated.split(' - ')[0],
        guests: Math.floor(Math.random() * 5) + 1,
      },
    ]);

    // Reset form and close modal
    setNewReservation({
      clientName: '',
      floor: '',
      table: '',
      contact: '',
      address: '',
      status: 'Pending',
      timeSeated: '',
    });
    setIsModalOpen(false);
  };

  // Function to handle reservation actions
  const handleReservationAction = (action, id) => {
    if (action === 'edit') {
      // Find the reservation to edit
      const reservationToEdit = reservations.find(r => r.id === id);
      setNewReservation(reservationToEdit);
      setIsModalOpen(true);
    } else if (action === 'delete') {
      // Filter out the reservation to delete
      setReservations(reservations.filter(r => r.id !== id));
    } else if (action === 'change-status') {
      // Toggle between Available, Reserved, and Pending
      setReservations(
        reservations.map(r => {
          if (r.id === id) {
            const statusMap = {
              Available: 'Reserved',
              Reserved: 'Pending',
              Pending: 'Available',
            };
            return { ...r, status: statusMap[r.status] };
          }
          return r;
        })
      );
    }

    // Close the action menu
    setActiveActionMenu(null);
  };

  // Available time filter options
  const timeOptions = ['All Times', 'Morning', 'Afternoon', 'Evening'];

  // Available status filter options
  const statusOptions = ['Seating Status', 'Available', 'Reserved', 'Pending'];

  // Available results per page options
  const resultsOptions = [5, 10, 15, 20];

  const StatCard = ({ title, value, bgColor, icon }) => (
    <div className='bg-white border shadow-[#282F5A1F] rounded-lg py-7 pl-7 pr-4 flex justify-between items-start'>
      <div>
        <p className='text-[#1A2042] font-medium mb-1.5'>{title}</p>
        <h3 className='text-2xl font-semibold'>{value}</h3>
      </div>
      <div
        className={`w-14 h-14 rounded-full ${bgColor} flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>
  );

  const tableStats = [
    {
      title: 'Available Tables',
      value: '18',
      icon: <CookingPot className='text-green-500' />,
      bgColor: 'bg-green-100',
    },
    {
      title: 'Daily Revenue',
      value: '24',
      icon: <CookingPot className='text-[#E54B47]' />,
      bgColor: 'bg-[#E54B4733]',
    },
    {
      title: 'Completed Payments',
      value: '18',
      icon: <CookingPot className='text-[#F4C62D]' />,
      bgColor: 'bg-[#F4C62D33]',
    },
  ];

  return (
    <>
      {/* Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4'>
        {tableStats?.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtext={stat.subtext}
            bgColor={stat.bgColor}
            icon={stat.icon}
          />
        ))}
      </div>

      <div>
        <div>
          {/* Reservation List */}
          <div className='bg-white rounded-lg shadow-sm p-6'>
            <div className='mb-6'>
              <h2 className='text-xl font-bold text-gray-900'>Reservation List</h2>
              <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            {/* Search and Filters */}
            <div className='flex flex-col md:flex-row justify-between gap-4 mb-6'>
              <div className='relative w-full max-w-md'>
                <input
                  type='text'
                  placeholder='Search by Customer Name, Table, or Order...'
                  className='w-full py-2 px-4 pr-10 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] placeholder:text-[#131313] placeholder:text-sm outline-none'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <Search className='absolute right-3 top-2.5 text-[#131313] w-5 h-5' />
              </div>
              <div className='flex flex-wrap gap-4'>
                <div className='relative' ref={timeDropdownRef}>
                  <button
                    className='flex items-center justify-between w-36 px-4 py-2 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] text-gray-700'
                    onClick={() => setTimeDropdownOpen(!timeDropdownOpen)}
                  >
                    <span>{timeFilter}</span>
                    <ChevronDown className='h-4 w-4 ml-2' />
                  </button>
                  {timeDropdownOpen && (
                    <div className='absolute z-10 mt-1 w-36 bg-white border border-gray-300 rounded-lg shadow-lg'>
                      {timeOptions.map(option => (
                        <div
                          key={option}
                          className='px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between'
                          onClick={() => {
                            setTimeFilter(option);
                            setTimeDropdownOpen(false);
                          }}
                        >
                          <span>{option}</span>
                          {timeFilter === option && (
                            <Check className='h-4 w-4 text-blue-500' />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className='relative' ref={statusDropdownRef}>
                  <button
                    className='flex items-center justify-between w-44 px-4 py-2 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] text-gray-700'
                    onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                  >
                    <span>{statusFilter}</span>
                    <ChevronDown className='h-4 w-4 ml-2' />
                  </button>
                  {statusDropdownOpen && (
                    <div className='absolute z-10 mt-1 w-36 bg-white border border-gray-300 rounded-lg shadow-lg'>
                      {statusOptions.map(option => (
                        <div
                          key={option}
                          className='px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center justify-between'
                          onClick={() => {
                            setStatusFilter(option);
                            setStatusDropdownOpen(false);
                          }}
                        >
                          <span>{option}</span>
                          {statusFilter === option && (
                            <Check className='h-4 w-4 text-blue-500' />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  className='flex items-center px-4 py-2 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white rounded-xl'
                  onClick={handleAddReservation}
                >
                  <Plus className='h-4 w-4 mr-2' />
                  Add Reservation
                </button>
              </div>
            </div>
            {/* Reservation Table */}
            <div className='overflow-x-auto'>
              <table className='w-full'>
                <thead>
                  <tr className='bg-[#EEF5FF] border-b border-gray-200'>
                    <th className='py-2 px-4 text-left text-sm font-semibold text-[#131313]'>
                      Client Name
                    </th>
                    <th className='py-2 px-4 text-left text-sm font-semibold text-[#131313]'>
                      Floor #
                    </th>
                    <th className='py-2 px-4 text-left text-sm font-semibold text-[#131313]'>
                      Table #
                    </th>
                    <th className='py-2 px-4 text-left text-sm font-semibold text-[#131313]'>
                      Contact#
                    </th>
                    <th className='py-2 px-4 text-left text-sm font-semibold text-[#131313]'>
                      Address
                    </th>
                    <th className='py-2 px-4 text-left text-sm font-semibold text-[#131313]'>
                      Status
                    </th>
                    <th className='py-2 px-4 text-left text-sm font-semibold text-[#131313]'>
                      Time Seated
                    </th>
                    <th className='py-2 px-4 text-left text-sm font-semibold text-[#131313]'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentReservations.map(reservation => (
                    <tr
                      key={reservation.id}
                      className='border-b border-gray-200 hover:bg-gray-50'
                    >
                      <td className='py-4 px-4 text-sm text-gray-900'>
                        {reservation.clientName}
                      </td>
                      <td className='py-4 px-4 text-sm text-gray-900'>
                        {reservation.floor}
                      </td>
                      <td className='py-4 px-4 text-sm text-gray-900'>
                        {reservation.table}
                      </td>
                      <td className='py-4 px-4 text-sm text-gray-900'>
                        {reservation.contact}
                      </td>
                      <td className='py-4 px-4 text-sm text-gray-900'>
                        {reservation.address}
                      </td>
                      <td className='py-4 px-4 text-sm'>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                            reservation.status
                          )}`}
                        >
                          {reservation.status}
                        </span>
                      </td>
                      <td className='py-4 px-4 text-sm text-gray-900'>
                        {reservation.timeSeated}
                      </td>
                      <td className='py-4 px-4 text-sm text-gray-900 relative'>
                        <button
                          className='text-gray-500 hover:text-gray-700'
                          onClick={() =>
                            setActiveActionMenu(
                              activeActionMenu === reservation.id ? null : reservation.id
                            )
                          }
                        >
                          <MoreVertical className='h-5 w-5' />
                        </button>
                        {activeActionMenu === reservation.id && (
                          <div
                            ref={actionMenuRef}
                            className='absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg'
                          >
                            <div
                              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                              onClick={() =>
                                handleReservationAction('edit', reservation.id)
                              }
                            >
                              Edit Reservation
                            </div>
                            <div
                              className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                              onClick={() =>
                                handleReservationAction('change-status', reservation.id)
                              }
                            >
                              Change Status
                            </div>
                            <div
                              className='px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600'
                              onClick={() =>
                                handleReservationAction('delete', reservation.id)
                              }
                            >
                              Delete Reservation
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className='flex justify-end gap-x-5 items-center mt-6'>
              <div className='flex items-center mb-4 sm:mb-0'>
                <span className='text-sm text-gray-700 mr-2'>Results Per Page</span>
                <div className='relative' ref={resultsDropdownRef}>
                  <button
                    className='flex items-center justify-between w-[72px] px-3 py-0.5 rounded-xl bg-[#EEF5FF] border border-[#9EC3FF] text-gray-700'
                    onClick={() => setResultsDropdownOpen(!resultsDropdownOpen)}
                  >
                    <span>{resultsPerPage}</span>
                    <ChevronDown className='h-4 w-4 ml-1' />
                  </button>
                  {resultsDropdownOpen && (
                    <div className='absolute z-10 mt-1 w-16 bg-white border border-gray-300 rounded-lg shadow-lg'>
                      {resultsOptions.map(option => (
                        <div
                          key={option}
                          className='px-3 py-1.5 hover:bg-gray-200 cursor-pointer flex items-center justify-between'
                          onClick={() => {
                            setResultsPerPage(option);
                            setResultsDropdownOpen(false);
                            setCurrentPage(1); // Reset to first page when changing results per page
                          }}
                        >
                          <span>{option}</span>
                          {resultsPerPage === option && (
                            <Check className='h-4 w-4 text-blue-500' />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className='flex items-center'>
                <span className='text-sm text-gray-700 mr-4'>
                  {filteredReservations.length > 0
                    ? `${startIndex + 1}-${endIndex} Of ${filteredReservations.length}`
                    : '0 Results'}
                </span>
                <div className='flex'>
                  <button
                    className='p-1 rounded-md hover:bg-gray-100 disabled:opacity-50'
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  >
                    <ChevronLeft className='h-5 w-5 text-gray-700' />
                  </button>
                  <button
                    className='p-1 rounded-md hover:bg-gray-100 disabled:opacity-50'
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  >
                    <ChevronRight className='h-5 w-5 text-gray-700' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add/Edit Reservation Modal */}
        {isModalOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4'>
            <div ref={modalRef} className='bg-white rounded-lg shadow-lg w-full max-w-lg'>
              <div className='flex justify-between items-center p-6 border-b'>
                <h3 className='text-xl font-bold text-gray-900'>
                  {newReservation.id ? 'Edit Reservation' : 'Add New Reservation'}
                </h3>
                <button className='text-[#131313]' onClick={() => setIsModalOpen(false)}>
                  <X className='size-7 hover:bg-gray-200 rounded-full p-1' />
                </button>
              </div>
              <div className='p-6'>
                <div className='grid gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Client Name
                    </label>
                    <input
                      type='text'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      value={newReservation.clientName}
                      onChange={e =>
                        setNewReservation({
                          ...newReservation,
                          clientName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        Floor #
                      </label>
                      <input
                        type='number'
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={newReservation.floor}
                        onChange={e =>
                          setNewReservation({
                            ...newReservation,
                            floor: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>
                        Table #
                      </label>
                      <input
                        type='number'
                        className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={newReservation.table}
                        onChange={e =>
                          setNewReservation({
                            ...newReservation,
                            table: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Contact #
                    </label>
                    <input
                      type='number'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      value={newReservation.contact}
                      onChange={e =>
                        setNewReservation({
                          ...newReservation,
                          contact: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Address
                    </label>
                    <input
                      type='text'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      value={newReservation.address}
                      onChange={e =>
                        setNewReservation({
                          ...newReservation,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Time Seated
                    </label>
                    <input
                      type='text'
                      placeholder='e.g. 6:00pm - 6:30pm'
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      value={newReservation.timeSeated}
                      onChange={e =>
                        setNewReservation({
                          ...newReservation,
                          timeSeated: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-1'>
                      Status
                    </label>
                    <select
                      className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                      value={newReservation.status}
                      onChange={e =>
                        setNewReservation({ ...newReservation, status: e.target.value })
                      }
                    >
                      <option value='Available'>Available</option>
                      <option value='Reserved'>Reserved</option>
                      <option value='Pending'>Pending</option>
                    </select>
                  </div>
                </div>
                <div className='mt-6 flex justify-end gap-3'>
                  <button
                    className='px-4 py-2 border border-[#696969] rounded-lg font-medium text-[#131313] hover:bg-gray-100'
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className='px-4 py-2 bg-[#0F0A33] hover:shadow-lg hover:shadow-[#0075FF] text-white rounded-xl'
                    onClick={handleSubmitReservation}
                  >
                    {newReservation.id ? 'Update Reservation' : 'Add Reservation'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <TodaysReservations />
    </>
  );
}
