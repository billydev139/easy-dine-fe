import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const StaffingCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 3, 1)); // April 2023

  // Days with high priority (shown in red in the image)
  const highPriorityDays = [1, 3, 9, 17, 19, 24, 30, 31];

  // Days with normal priority (shown in green in the image)
  const normalPriorityDays = [
    5, 7, 8, 10, 11, 13, 14, 16, 20, 21, 22, 23, 25, 26, 27, 28, 29,
  ];

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const lastDayOfPrevMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    0
  ).getDate();

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const renderDays = () => {
    const days = [];
    const totalCells = Math.ceil((daysInMonth + firstDayOfMonth) / 7) * 7;

    // Previous month days
    for (let i = 0; i < firstDayOfMonth; i++) {
      const prevMonthDay = lastDayOfPrevMonth - firstDayOfMonth + i + 1;
      days.push(
        <div key={`prev-${i}`} className='p-2 text-center text-[#BFBFBF]'>
          {prevMonthDay}
        </div>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isHighPriority = highPriorityDays.includes(day);
      const isNormalPriority = normalPriorityDays.includes(day);

      days.push(
        <div key={`current-${day}`} className='p-2 text-center text-[#131313]'>
          {day}
          {isHighPriority && <div className='mt-0.5 h-1.5 bg-[#E54B47] '></div>}
          {isNormalPriority && <div className='mt-0.5 h-1.5 bg-[#1EB564]'></div>}
        </div>
      );
    }

    // Next month days
    const remainingCells = totalCells - (daysInMonth + firstDayOfMonth);
    for (let i = 1; i <= remainingCells; i++) {
      days.push(
        <div key={`next-${i}`} className='p-2 text-center text-[#BFBFBF]'>
          {i}
        </div>
      );
    }

    return days;
  };

  const getMonthName = () => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${monthNames[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;
  };

  return (
    <div className='max-w-4xl w-full bg-white p-6 mb-6 rounded-lg'>
      <h1 className='text-lg font-bold '>Staffing Suggestions</h1>
      <p className='text-[#131313] text-sm mb-5'>Lorem ipsum dolor</p>

      <div className='bg-[#9EC3FF1A] p-5 rounded-xl'>
        <div className='flex justify-between items-center mb-4'>
          <button onClick={prevMonth} className='text-[#131313]'>
            <ChevronLeft className='size-5' />
          </button>
          <h2 className='text-sm font-medium text-[#131313]'>{getMonthName()}</h2>
          <button onClick={nextMonth} className='text-[#131313]'>
            <ChevronRight className='size-5' />
          </button>
        </div>

        <div className='grid grid-cols-7 gap-1 my-5'>
          <div className='text-center text-sm text-red-500 font-medium'>Sun</div>
          <div className='text-center text-sm font-medium'>Mon</div>
          <div className='text-center text-sm font-medium'>Tue</div>
          <div className='text-center text-sm font-medium'>Wed</div>
          <div className='text-center text-sm font-medium'>Thu</div>
          <div className='text-center text-sm font-medium'>Fri</div>
          <div className='text-center text-sm text-red-500 font-medium'>Sat</div>
        </div>

        <div className='grid grid-cols-7 gap-1'>{renderDays()}</div>
      </div>

      <div className='mt-6 flex text-sm items-center justify-center gap-4'>
        <div className='flex items-center gap-1.5'>
          <div className='size-2 rounded-full bg-[#1EB564]'></div>
          <span>Normal</span>
        </div>
        <div className='flex items-center gap-1.5'>
          <div className='size-2 rounded-full bg-[#E54B47]'></div>
          <span>High Priority</span>
        </div>
      </div>

      <div className='mt-4 flex justify-center items-start gap-2'>
        <div className='size-2 rounded-full bg-black mt-2'></div>
        <p className='text-sm text-[#131313]'>
          Increase staff from 6 PM to 9 PM on weekends to handle peak demand.
        </p>
      </div>
    </div>
  );
};

export default StaffingCalendar;
