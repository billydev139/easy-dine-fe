import { ArrowDown, ArrowUp, Dot } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { BiBarChart } from 'react-icons/bi';
import { useSelector } from 'react-redux';

const TrendingPredictions = ({ heading }) => {
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
      enabled: false,
    },
    tooltip: {
      enabled: true,
      theme: 'dark',
    },
    colors: ['#00AFEC'],
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
  const theme = useSelector(state => state?.theme?.theme) || 'light';

  const [percentValue] = useState(10);

  return (
    <>
      <div
        className={`p-4 my-6 rounded-lg w-full ${
          theme === 'dark' ? '!bg-primaryBlue text-white' : '!bg-white text-primaryBlue'
        }`}
      >
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h2 className='text-lg font-medium'>{heading || 'Trend Predictions.'}</h2>
            <p className='text-sm'>AI-based recommendations to improve performance.</p>
          </div>
          <label htmlFor='time-select' className='sr-only'>
            Time Period
          </label>
          <select
            id='time-select'
            className='text-primaryBlack text-sm bg-[#EEF5FF] px-3 py-1 rounded-xl outline-none font-medium border border-[#9EC3FF] h-10'
          >
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Yearly</option>
          </select>
        </div>
        <div className='flex items-center mb-8'>
          <BiBarChart color='#00AFEC' size={40} />
          <div className='ml-4'>
            <div>Popularity Score</div>
            <strong>41,512k</strong>
          </div>
        </div>
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type='area'
          height={300}
        />
        <div className='flex justify-center items-center'>
          <Dot className='size-14 text-[#131313]' />
          <span className='text-sm font-jakarta text-[#131313]'>
            Dishes like Caesar Salad are expected to gain popularity this summer.
          </span>
          <span
            className={`text-xs ml-2 py-1 rounded-full text-white w-14 text-center flex items-center justify-center ${
              percentValue < 10 ? 'bg-red-500' : 'bg-[#19DB8C]'
            }`}
          >
            {percentValue < 10 ? (
              <ArrowDown className='text-[#131313] size-3' />
            ) : (
              <ArrowUp className='text-[#131313] size-4' />
            )}
            {percentValue} %
          </span>
        </div>
      </div>
    </>
  );
};

TrendingPredictions.propTypes = {
  heading: PropTypes.string,
};

export default TrendingPredictions;
