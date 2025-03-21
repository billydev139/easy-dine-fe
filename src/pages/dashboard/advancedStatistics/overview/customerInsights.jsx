import { useSelector } from "react-redux";
import Icons from "../../../../assets/icons";
import ReactApexChart from "react-apexcharts";

const CustomerInsights = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    grid: { borderColor: '#2D3748' },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: { style: { colors: '#A0AEC0' } },
    },
    yaxis: { labels: { style: { colors: '#A0AEC0' } } },
    // fill: { opacity: 1 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark', // Shade type (dark or light)
        type: 'vertical', // Gradient direction
        shadeIntensity: 0.5, // Shade intensity
        gradientToColors: ['#00AFEC'], // Solid color at the top
        inverseColors: true, // Inverse to fade from solid to transparent
        opacityFrom: 1, // Full opacity at the top
        opacityTo: 0.7, // Fully transparent at the bottom
        stops: [0, 100], // Gradient stops: 0% solid, 100% transparent
      },
    },
    colors: ['#00AFEC'],
    tooltip: { theme: 'dark' },
  };

  const chartSeries = [
    {
      name: 'Primary',
      data: [30, 50, 20, 60, 70, 80, 40],
    },
    // {
    //   name: 'Secondary',
    //   data: [70, 50, 80, 40, 30, 20, 60],
    // },
  ];
  const theme = useSelector(state => state?.theme?.theme);
  return (
    <div
      className={` p-4 rounded-md shadow-lg w-full ${
        theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '
      }`}
    >
      <div className='flex justify-between items-center mb-2'>
        <div>
          <h2 className='text-lg font-medium'>Customer Insights</h2>
          <p className=' text-sm'>Lorem ipsum dolor</p>
        </div>
        <select className='text-primaryBlack bg-[#EEF5FF] px-3 py-1 rounded-xl outline-none font-medium border border-[#9EC3FF] h-10'>
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className='flex items-center gap-1'>
        <Icons.FaUserTie color='#00AFEC' size={30} />
        <div>
          <div className='pt-4 '>Clients</div>
          <strong className=''>41,512k</strong>
        </div>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type='bar'
        height={300}
      />
    </div>
  );
};

export default CustomerInsights;

// const CustomerSegmentationDashboard = () => {
//   const [timeframeDropdownOpen, setTimeframeDropdownOpen] = useState(false);
//   const [selectedTimeframe, setSelectedTimeframe] = useState('Monthly');

//   // Data for the chart
//   const chartData = [
//     { month: 'Jan', newCustomers: 80, returningCustomers: 30 },
//     { month: 'Feb', newCustomers: 90, returningCustomers: 60 },
//     { month: 'Mar', newCustomers: 90, returningCustomers: 30 },
//     { month: 'Apr', newCustomers: 80, returningCustomers: 30 },
//     { month: 'May', newCustomers: 40, returningCustomers: 30 },
//     { month: 'Jun', newCustomers: 80, returningCustomers: 10 },
//     { month: 'Jul', newCustomers: 30, returningCustomers: 30 },
//     { month: 'Aug', newCustomers: 30, returningCustomers: 30 },
//     { month: 'Sep', newCustomers: 70, returningCustomers: 30 },
//     { month: 'Oct', newCustomers: 80, returningCustomers: 30 },
//     { month: 'Nov', newCustomers: 30, returningCustomers: 30 },
//     { month: 'Dec', newCustomers: 80, returningCustomers: 30 },
//   ];

//   // Toggle the dropdown
//   const toggleDropdown = () => {
//     setTimeframeDropdownOpen(!timeframeDropdownOpen);
//   };

//   // Handle timeframe selection
//   const handleTimeframeSelect = timeframe => {
//     setSelectedTimeframe(timeframe);
//     setTimeframeDropdownOpen(false);
//   };

//   return (
//     <div className='bg-white p-6 rounded-lg shadow-sm '>
//       {/* Header Section */}
//       <div className='flex justify-between items-center mb-8'>
//         <div>
//           <h1 className='text-2xl font-bold text-gray-800'>
//             Customer Segmentation Insights
//           </h1>
//           <p className='text-gray-500'>Lorem ipsum dolor</p>
//         </div>

//         {/* Legend */}
//         <div className='flex items-center space-x-6'>
//           <div className='flex items-center'>
//             <div className='w-4 h-4 rounded-full bg-emerald-400 mr-2'></div>
//             <span className='text-sm text-gray-700'>New Customers</span>
//           </div>
//           <div className='flex items-center'>
//             <div className='w-4 h-4 rounded-full bg-sky-400 mr-2'></div>
//             <span className='text-sm text-gray-700'>Returning Customers</span>
//           </div>
//         </div>

//         {/* Dropdown */}
//         <div className='relative'>
//           <button
//             onClick={toggleDropdown}
//             className='bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-between w-32'
//           >
//             <span>{selectedTimeframe}</span>
//             <svg
//               className={`w-4 h-4 ml-2 transition-transform ${
//                 timeframeDropdownOpen ? 'rotate-180' : ''
//               }`}
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//               xmlns='http://www.w3.org/2000/svg'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M19 9l-7 7-7-7'
//               ></path>
//             </svg>
//           </button>

//           {timeframeDropdownOpen && (
//             <div className='absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10'>
//               <ul className='py-1'>
//                 <li
//                   className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
//                     selectedTimeframe === 'Weekly' ? 'bg-blue-500 text-white' : ''
//                   }`}
//                   onClick={() => handleTimeframeSelect('Weekly')}
//                 >
//                   Weekly
//                 </li>
//                 <li
//                   className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
//                     selectedTimeframe === 'Monthly' ? 'bg-blue-500 text-white' : ''
//                   }`}
//                   onClick={() => handleTimeframeSelect('Monthly')}
//                 >
//                   Monthly
//                 </li>
//                 <li
//                   className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
//                     selectedTimeframe === 'Yearly' ? 'bg-blue-500 text-white' : ''
//                   }`}
//                   onClick={() => handleTimeframeSelect('Yearly')}
//                 >
//                   Yearly
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Client Stats */}
//       <div className='flex items-center mb-8'>
//         <div className='bg-blue-50 p-2 rounded-full mr-3'>
//           <svg
//             className='w-8 h-8 text-blue-500'
//             fill='none'
//             stroke='currentColor'
//             viewBox='0 0 24 24'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               strokeWidth='2'
//               d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
//             ></path>
//           </svg>
//         </div>
//         <div>
//           <p className='text-gray-600 text-sm'>Clients</p>
//           <p className='text-xl font-bold'>41,512k</p>
//         </div>
//       </div>

//       {/* Chart */}
//       <div className='relative h-64 mt-6'>
//         {/* Y-axis labels */}
//         <div className='absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500'>
//           <span>100</span>
//           <span>90</span>
//           <span>80</span>
//           <span>70</span>
//           <span>60</span>
//           <span>50</span>
//           <span>40</span>
//           <span>30</span>
//           <span>20</span>
//           <span>10</span>
//           <span>0</span>
//         </div>

//         {/* Chart bars */}
//         <div className='ml-8 h-full flex items-end justify-between'>
//           {chartData.map((data, index) => (
//             <div key={index} className='flex flex-col items-center'>
//               <div className='w-12 flex flex-col'>
//                 {/* New Customers */}
//                 <div
//                   className='bg-emerald-400 w-full'
//                   style={{ height: `${data.newCustomers}px` }}
//                 >
//                   <div className='text-white text-xs text-center font-semibold mt-1'>
//                     {data.newCustomers}%
//                   </div>
//                 </div>
//                 {/* Returning Customers */}
//                 <div
//                   className='bg-sky-400 w-full'
//                   style={{ height: `${data.returningCustomers}px` }}
//                 >
//                   <div className='text-white text-xs text-center font-semibold mt-1'>
//                     {data.returningCustomers}%
//                   </div>
//                 </div>
//               </div>
//               <div className='mt-2 text-xs text-gray-500'>{data.month}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerSegmentationDashboard;
