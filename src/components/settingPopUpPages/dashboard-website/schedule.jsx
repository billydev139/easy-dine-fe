import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const OpeningHoursDays = () => {
  // Opening Hours State
  const [openingHourStart, setOpeningHourStart] = useState('00:00');
  const [openingHourEnd, setOpeningHourEnd] = useState('00:00');
  const [showHourStartDropdown, setShowHourStartDropdown] = useState(false);
  const [showHourEndDropdown, setShowHourEndDropdown] = useState(false);

  // Working Days State
  const [workingDayStart, setWorkingDayStart] = useState('Monday');
  const [workingDayEnd, setWorkingDayEnd] = useState('Friday');
  const [showDayStartDropdown, setShowDayStartDropdown] = useState(false);
  const [showDayEndDropdown, setShowDayEndDropdown] = useState(false);

  // Refs for dropdowns
  const hourStartRef = useRef(null);
  const hourEndRef = useRef(null);
  const dayStartRef = useRef(null);
  const dayEndRef = useRef(null);

  // Time options
  const generateTimeOptions = () => {
    const options = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 15) {
        const hour = h.toString().padStart(2, '0');
        const minute = m.toString().padStart(2, '0');
        options.push(`${hour}:${minute}`);
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  // Day options
  const dayOptions = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (hourStartRef.current && !hourStartRef.current.contains(event.target)) {
        setShowHourStartDropdown(false);
      }
      if (hourEndRef.current && !hourEndRef.current.contains(event.target)) {
        setShowHourEndDropdown(false);
      }
      if (dayStartRef.current && !dayStartRef.current.contains(event.target)) {
        setShowDayStartDropdown(false);
      }
      if (dayEndRef.current && !dayEndRef.current.contains(event.target)) {
        setShowDayEndDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex gap-4'>
      {/* Opening Hours Section */}
      <div className='bg-white dark:bg-[#222630] transition-all rounded-[10px] shadow-md px-9 pt-5 pb-8 flex-1'>
        <h2 className='text-lg font-semibold dark:text-white text-[#1A2042] mb-6'>
          Opening Hours
        </h2>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-x-2.5'>
            <span className='text-[#1A2042] text-base font-medium'>From</span>
            <div className='relative' ref={hourStartRef}>
              <button
                className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#131313] px-4 py-2 rounded-xl flex items-center justify-between w-48'
                onClick={() => setShowHourStartDropdown(!showHourStartDropdown)}
              >
                <span>{openingHourStart}</span>
                <ChevronDown size={16} className='ml-2' />
              </button>

              {showHourStartDropdown && (
                <div className='absolute mt-1 w-48 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg z-10'>
                  <div className='grid grid-cols-3 gap-1 p-2'>
                    {timeOptions.slice(0, 24).map(time => (
                      <button
                        key={time}
                        className={`px-2 py-1 rounded text-sm ${
                          openingHourStart === time
                            ? 'bg-blue-100 text-blue-700'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => {
                          setOpeningHourStart(time);
                          setShowHourStartDropdown(false);
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className='flex items-center gap-x-2.5'>
            <span className='text-[#1A2042] text-base font-medium'>To</span>
            <div className='relative' ref={hourEndRef}>
              <button
                className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#131313] px-4 py-2 rounded-xl flex items-center justify-between w-48'
                onClick={() => setShowHourEndDropdown(!showHourEndDropdown)}
              >
                <span>{openingHourEnd}</span>
                <ChevronDown size={16} className='ml-2' />
              </button>

              {showHourEndDropdown && (
                <div className='absolute mt-1 w-48 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10'>
                  <div className='grid grid-cols-3 gap-1 p-2'>
                    {timeOptions.slice(0, 24).map(time => (
                      <button
                        key={time}
                        className={`px-2 py-1 rounded text-sm ${
                          openingHourEnd === time
                            ? 'bg-blue-100 text-blue-700'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => {
                          setOpeningHourEnd(time);
                          setShowHourEndDropdown(false);
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Working Days Section */}
      <div className='bg-white dark:bg-[#222630] transition-all rounded-[10px] shadow-md px-9 pt-5 pb-8 flex-1'>
        <h2 className='text-lg font-semibold dark:text-white text-[#1A2042] mb-6'>
          Working Days
        </h2>

        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-x-2.5'>
            <span className='text-[#1A2042] text-base font-medium'>From</span>
            <div className='relative' ref={dayStartRef}>
              <button
                className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#131313] px-4 py-2 rounded-xl flex items-center justify-between w-48'
                onClick={() => setShowDayStartDropdown(!showDayStartDropdown)}
              >
                <span>{workingDayStart}</span>
                <ChevronDown size={16} className='ml-2' />
              </button>

              {showDayStartDropdown && (
                <div className='absolute mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
                  {dayOptions.map(day => (
                    <button
                      key={day}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        workingDayStart === day
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setWorkingDayStart(day);
                        setShowDayStartDropdown(false);
                      }}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='flex items-center gap-x-2.5'>
            <span className='text-[#1A2042] text-base font-medium'>To</span>
            <div className='relative' ref={dayEndRef}>
              <button
                className='bg-[#EEF5FF] border border-[#9EC3FF] text-[#131313] px-4 py-2 rounded-xl flex items-center justify-between w-48'
                onClick={() => setShowDayEndDropdown(!showDayEndDropdown)}
              >
                <span>{workingDayEnd}</span>
                <ChevronDown size={16} className='ml-2' />
              </button>

              {showDayEndDropdown && (
                <div className='absolute mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10'>
                  {dayOptions.map(day => (
                    <button
                      key={day}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        workingDayEnd === day
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setWorkingDayEnd(day);
                        setShowDayEndDropdown(false);
                      }}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHoursDays;
