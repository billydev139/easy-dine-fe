/* eslint-disable react/prop-types */

import ReactApexChart from 'react-apexcharts';
import Icons from '../../../../assets/icons';
import { useSelector } from 'react-redux';

const RevenueAnalytics = ({ heading }) => {
  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    grid: {
      borderColor: '#FFFFFF',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    dataLabels: {
      enabled: false, // Disable point headings
    },
    tooltip: {
      enabled: true, // Tooltip will still appear when hovering
      theme: 'dark',
    },
    colors: ['#00FF7F'],
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: { style: { colors: '#8A8B9F' } },
    },
    yaxis: {
      labels: { style: { colors: '#8A8B9F' } },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.4,
        opacityFrom: 0.9,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
  };

  const chartSeries = [
    {
      name: 'Income',
      data: [20, 80, 10, 60, 20, 0, 10, 50, 80, 60, 45, 70],
    },
  ];
  const theme = useSelector(state => state?.theme?.theme);
  return (
    <div
      className={` p-4 rounded-md w-full  ${
        theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white  text-primaryBlue'
      }`}
    >
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h2 className=' text-lg font-medium'>{heading || 'Revenue Analytics'}</h2>
          <p className=' text-sm '>Lorem ipsum dolor sit amet,consecteture</p>
        </div>
        <select className='text-primaryBlack bg-[#EEF5FF] px-3 py-1 rounded-xl outline-none font-medium border border-[#9EC3FF] h-10'>
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className='flex items-center mb-8'>
        <Icons.BiBarChart color='#1EB564' size={40} />
        <div>
          <div className=' '>Income</div>
          <strong className=''>41,512k</strong>
        </div>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type='area'
        height={300}
      />
    </div>
  );
};

export default RevenueAnalytics;
