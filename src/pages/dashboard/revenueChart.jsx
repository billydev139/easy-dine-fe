
import ReactApexChart from 'react-apexcharts';
import Icons from '../../assets/icons';

const RevenueChart = () => {
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
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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

  return (
    <div className="bg-primaryBlue p-4 rounded-md w-full ">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-white text-lg font-medium">Revenue</h2>
          <p className="text-white text-sm ">Lorem ipsum dolor sit amet,consecteture</p>
        </div>
        <select className="text-primaryBlack bg-white px-3 py-1 rounded-md outline-none font-medium">
          <option>Monthly</option>
        </select>
      </div>
      <div className='flex items-center'>
        <Icons.BiBarChart color='#1EB564' size={40} />
      <div>
      <div className="text-white ">Income</div>
      <strong className='text-white'>41,512k</strong>
      </div>
      </div>
      <ReactApexChart options={chartOptions} series={chartSeries} type="area" height={300} />
    </div>
  );
};

export default RevenueChart;
