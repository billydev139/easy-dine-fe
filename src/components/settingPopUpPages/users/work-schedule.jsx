import { PlusCircle, MoreVertical } from 'lucide-react';

const WorkSchedule = () => {
  // Sample user data for the profile icons
  const users = [
    { id: 1, name: 'Add', isAddButton: true },
    {
      id: 2,
      name: 'Esmerel J',
      avatar: '/lovable-uploads/f1baa6cb-d78d-4012-90bd-14e61da26d5e.png',
    },
    {
      id: 3,
      name: 'Bjorn U',
      avatar: '/lovable-uploads/f1baa6cb-d78d-4012-90bd-14e61da26d5e.png',
    },
    {
      id: 4,
      name: 'Kay S',
      avatar: '/lovable-uploads/f1baa6cb-d78d-4012-90bd-14e61da26d5e.png',
    },
    {
      id: 5,
      name: 'Tom H',
      avatar: '/lovable-uploads/f1baa6cb-d78d-4012-90bd-14e61da26d5e.png',
    },
    {
      id: 6,
      name: 'Nicole N',
      avatar: '/lovable-uploads/f1baa6cb-d78d-4012-90bd-14e61da26d5e.png',
    },
    {
      id: 7,
      name: 'Maria P',
      avatar: '/lovable-uploads/f1baa6cb-d78d-4012-90bd-14e61da26d5e.png',
    },
    {
      id: 8,
      name: 'Bruce M',
      avatar: '/lovable-uploads/f1baa6cb-d78d-4012-90bd-14e61da26d5e.png',
    },
  ];

  // Sample calendar data
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [
    [28, 29, 30, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, 1],
  ];

  // Sample events data
  const events = [
    {
      id: 1,
      name: 'Online Marketing',
      color: 'bg-green-500',
      start: { week: 0, day: 0 },
      end: { week: 0, day: 0 },
    },
    {
      id: 2,
      name: 'Planning with John',
      color: 'bg-orange-400',
      start: { week: 0, day: 1 },
      end: { week: 0, day: 2 },
    },
    {
      id: 3,
      name: 'Digital Event',
      color: 'bg-purple-500',
      start: { week: 0, day: 4 },
      end: { week: 0, day: 5 },
    },
    {
      id: 4,
      name: 'Facebook Ads Webinar',
      color: 'bg-cyan-400',
      start: { week: 1, day: 2 },
      end: { week: 1, day: 3 },
    },
    {
      id: 5,
      name: 'Black Friday',
      color: 'bg-blue-500',
      start: { week: 1, day: 4 },
      end: { week: 1, day: 4 },
    },
    {
      id: 6,
      name: 'Product Design Workshop',
      color: 'bg-orange-400',
      start: { week: 3, day: 1 },
      end: { week: 3, day: 3 },
    },
    {
      id: 7,
      name: 'Marketing Strategy',
      color: 'bg-cyan-400',
      start: { week: 3, day: 4 },
      end: { week: 3, day: 5 },
    },
  ];

  // Sample tasks data
  const tasks = [
    { id: 1, name: 'Kristian Kovac', role: 'PRODUCT MANAGER' },
    { id: 2, name: 'Kristian Kovac', role: 'PRODUCT MANAGER' },
    { id: 3, name: 'Kristian Kovac', role: 'PRODUCT MANAGER' },
  ];

  // Function to check if an event should be displayed in a cell
  const getEventForCell = (weekIndex, dayIndex) => {
    return events.find(
      event => event.start.week === weekIndex && event.start.day === dayIndex
    );
  };

  // Function to calculate event width (in grid columns)
  const getEventWidth = event => {
    const startDay = event.start.day;
    const endDay = event.end.day;
    return endDay - startDay + 1;
  };

  return (
    <div className='mt-6 mb-9 p-5 bg-white rounded-[20px] min-h-screen'>
      {/* User Profiles Section */}
      <div className='mb-6 overflow-x-auto'>
        <div className='flex justify-evenly border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] p-4 md:p-6'>
          {users.map(user => (
            <div key={user.id} className='flex flex-col items-center min-w-[60px]'>
              {user.isAddButton ? (
                <div className='w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white cursor-pointer'>
                  <PlusCircle size={24} />
                </div>
              ) : (
                <div className='w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white'>
                  <img
                    src={`https://i.pravatar.cc/150?u=${user.id}`}
                    alt={user.name}
                    className='w-full h-full object-cover'
                  />
                </div>
              )}
              <span className='text-xs text-gray-600 mt-1 whitespace-nowrap'>
                {user.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Section */}
      <div className='mb-6'>
        <div className='border border-[#CCCCCC80] rounded-[10px] shadow-lg px-5 py-6'>
          <div className='flex justify-between items-center mb-4'>
            <div>
              <h2 className='text-xl font-bold'>Arbeitsplan</h2>
              <p className='text-sm text-gray-500'>Wednesday, 2023</p>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className='overflow-x-auto'>
            <div className='min-w-[700px]'>
              {/* Days of week */}
              <div className='grid grid-cols-7 gap-1 mb-1'>
                {days.map((day, index) => (
                  <div key={index} className='text-center py-2 text-sm font-medium'>
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              {dates.map((week, weekIndex) => (
                <div key={weekIndex} className='relative'>
                  <div className='grid grid-cols-7'>
                    {week.map((date, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`border h-20 p-1 ${
                          (date < 7 && weekIndex > 0) || (date > 20 && weekIndex < 4)
                            ? 'bg-gray-50'
                            : 'bg-white'
                        }`}
                      >
                        <div className='text-right text-sm'>{date}</div>
                      </div>
                    ))}
                  </div>

                  {/* Events overlay */}
                  <div className='absolute top-0 left-0 right-0 grid grid-cols-7 gap-1 pointer-events-none'>
                    {week.map((_, dayIndex) => {
                      const event = getEventForCell(weekIndex, dayIndex);
                      if (event && event.start.day === dayIndex) {
                        const width = getEventWidth(event);
                        return (
                          <div
                            key={`event-${event.id}`}
                            className={`${event.color} text-white text-center rounded-lg py-1 truncate mt-9 z-10 pointer-events-auto`}
                            style={{
                              gridColumn: `span ${width}`,
                              maxHeight: '30px',
                              fontSize: '12px',
                            }}
                          >
                            {event.name}
                          </div>
                        );
                      }
                      return dayIndex === 0 ||
                        getEventForCell(weekIndex, dayIndex - 1) ? null : (
                        <div key={`empty-${weekIndex}-${dayIndex}`}></div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Task Management Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Current Tasks */}
        <div>
          <div className='border rounded-md px-4 py-5'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-bold'>Arbeiten Gerade</h2>
              <div className='flex items-center bg-[#EEF5FF] border border-[#9EC3FF] rounded-md px-3.5 py-2.5 text-sm'>
                <span>21/10/2023 | 14:30</span>
                <span className='ml-2'>↓</span>
              </div>
            </div>
            <div className='space-y-4'>
              {tasks.map(task => (
                <div key={task.id} className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 rounded-md bg-gray-200 overflow-hidden mr-3'>
                      <img
                        src={`https://i.pravatar.cc/150?u=${task.id + 10}`}
                        alt={task.name}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div>
                      <h3 className='font-medium'>{task.name}</h3>
                      <p className='text-xs text-gray-500'>{task.role}</p>
                    </div>
                  </div>
                  <MoreVertical size={20} className='text-gray-400' />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div>
          <div className='border rounded-md px-4 py-3.5 md:p-6'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-lg font-bold'>Arbeiten Gerade</h2>
            </div>
            <div className='space-y-4'>
              <button className='w-full bg-[#0075FF] rounded-xl hover:bg-[#0055FF] text-white py-6'>
                Arbeitsplan Erstellen
              </button>
              <button className='w-full border border-[#0075FF] rounded-xl hover:text-white text-blue-500 hover:bg-[#0075FF] py-6'>
                Arbeitsplan bearbeiten
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSchedule;
