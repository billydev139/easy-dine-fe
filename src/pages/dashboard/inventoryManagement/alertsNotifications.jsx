import { useState } from 'react';
import { Search } from 'lucide-react';

export default function AlertsNotifications() {
  // Initial alerts data
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      product: 'Garlic knots',
      status: 'Low Stock',
      stockLevel: 'Stock levels below 10 units',
      time: '2 Hours',
    },
    {
      id: 2,
      product: 'Garlic knots',
      status: 'Out of Stock',
      stockLevel: 'Stock levels below 10 units',
      time: '2 Hours',
    },
    {
      id: 3,
      product: 'Garlic knots',
      status: 'Low Stock',
      stockLevel: 'Stock levels below 10 units',
      time: '2 Hours',
    },
    {
      id: 4,
      product: 'Garlic knots',
      status: 'Expiring Soon',
      stockLevel: 'Stock levels below 10 units',
      time: '2 Hours',
    },
    {
      id: 5,
      product: 'Garlic knots',
      status: 'Low Stock',
      stockLevel: 'Stock levels below 10 units',
      time: '2 Hours',
    },
    {
      id: 6,
      product: 'Garlic knots',
      status: 'Low Stock',
      stockLevel: 'Stock levels below 10 units',
      time: '2 Hours',
    },
    {
      id: 7,
      product: 'Garlic knots',
      status: 'Low Stock',
      stockLevel: 'Stock levels below 10 units',
      time: '2 Hours',
    },
    {
      id: 8,
      product: 'Garlic knots',
      status: 'Low Stock',
      stockLevel: 'Stock levels below 10 units',
      time: '2 Hours',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Handle resolving an alert
  const handleResolve = id => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  // Handle search input change
  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  // Filter alerts based on search term
  const filteredAlerts = alerts.filter(alert =>
    alert.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get status color
  const getStatusColor = status => {
    switch (status) {
      case 'Out of Stock':
        return 'bg-[#E54B471A] border border-[#E54B47] text-[#E54B47]';
      case 'Expiring Soon':
        return 'bg-[#0075FF1A] border border-[#0075FF] text-[#0075FF]';
      case 'Low Stock':
      default:
        return 'bg-[#F4C62D1A] border border-[#F4C62D] text-[#E3B210]';
    }
  };

  return (
    <div className='px-5 py-7 bg-white min-h-screen rounded-lg'>
      <div className='mb-7'>
        <h1 className='text-lg font-semibold text-[#131313]'>Alerts and Notifications</h1>
        <p className='text-[#131313] text-sm'>
          {alerts.length} active alerts requiring attention
        </p>
      </div>

      {/* Search bar */}
      <div className='relative mb-7'>
        <input
          type='text'
          placeholder='Search for name, id......'
          className='w-full py-3 px-4 border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] outline-none text-[#131313] placeholder:text-[#131313] text-sm'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className='absolute right-3 top-3 text-[#131313]'>
          <Search size={20} />
        </div>
      </div>

      {/* Alerts list */}
      <div className='space-y-4 pb-16'>
        {filteredAlerts.map(alert => (
          <div
            key={alert.id}
            className='bg-white rounded-xl p-4 border border-[#C1C1C1] flex justify-between items-center'
          >
            <div>
              <div className='flex items-center gap-4 mb-1'>
                <h3 className='font-bold text-lg text-[#131313]'>{alert.product}</h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-md ${getStatusColor(
                    alert.status
                  )}`}
                >
                  {alert.status}
                </span>
              </div>
              <p className='text-sm text-[#696969E5] mb-1'>{alert.stockLevel}</p>
              <p className='text-sm text-[#696969E5]'>{alert.time}</p>
            </div>
            <button
              onClick={() => handleResolve(alert.id)}
              className='bg-[#0075FF] hover:bg-[#0055FF] text-white px-11 py-2 rounded-xl text-sm font-semibold'
            >
              Resolve
            </button>
          </div>
        ))}

        {filteredAlerts.length === 0 && (
          <div className='text-center py-6'>
            <p className='text-gray-500'>No alerts match your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
