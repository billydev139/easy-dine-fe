import Chart from 'react-apexcharts';
import Icons from '../../assets/icons';
import { useSelector } from 'react-redux';

const DashboardStats = () => {
  const cardData = [
    {
      title: 'Total Items in Stock',
      value: '248,25',
      percentage: '+8%',
      color: 'green',
      chartColor: '#19DB8C',
      icon: <Icons.LuClipboardCheck />, // Replace with your custom icon
    },
    {
      title: 'Low Stock Items',
      value: '1200',
      percentage: '+4%',
      color: 'yellow',
      chartColor: '#F4C62D',
      icon: <Icons.LuClipboardCheck />, // Replace with your custom icon
    },
    {
      title: 'Out of Stock Items',
      value: '123',
      percentage: '+2%',
      color: 'red',
      chartColor: '#E54B47',
      icon: <Icons.LuClipboardCheck />, // Replace with your custom icon
    },
  ];

  const chartOptions = color => ({
    chart: {
      type: 'area',
      sparkline: { enabled: true },
    },
    stroke: { curve: 'smooth', width: 2 },
    fill: { opacity: 0.3 },
    colors: [color],
    tooltip: { enabled: false },
  });

  const chartSeries = [
    { data: [10, 30, 25, 40, 35, 50, 45] }, // Sample data
  ];

  const theme = useSelector(state => state?.theme?.theme);

  return (
    <div className='flex flex-wrap justify-between py-8'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`${
            theme === 'dark' ? 'bg-primaryBlue text-white' : 'bg-white text-primaryBlue'
          } p-3 rounded-lg w-full sm:w-[48%] lg:w-[32%] `}
        >
          <div className='flex justify-between items-center mb-2'>
            <h2 className='text-sm text-[#131313] font-semibold'>{card.title}</h2>
            <span className='text-2xl' style={{ color: card.chartColor }}>
              {card.icon}
            </span>
          </div>

          <div className='flex items-center mb-2'>
            <h3 className='text-2xl font-bold' style={{ color: card.chartColor }}>
              {card.value}
            </h3>
            <span
              className='text-xs ml-2 py-1 px-2 rounded text-white'
              style={{ backgroundColor: card.chartColor }}
            >
              {card.percentage}
            </span>
          </div>

          <Chart
            options={chartOptions(card.chartColor)}
            series={chartSeries}
            type='area'
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
