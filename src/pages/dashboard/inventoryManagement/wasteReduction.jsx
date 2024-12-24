
import Chart from "react-apexcharts";

const WasteReduction = () => {
  const chartData = {
    series: [40, 30, 20, 10], // Percentages
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Expired", "Damaged", "Overstock", "Others"],
      colors: ["#8777FB", "#EF6E6B", "#DAB129", "#E8E8E8"], // Colors for each slice
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '0%', // Ensures it remains a pie chart
          }
        }
      },
      stroke: {
        show: false, // Disables the border
        width: 0,
      },
      
    },
  };

  return (
    <div className="bg-primaryBlue text-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-white text-lg font-medium">Waste Reduction</h2>
          <p className="text-white text-sm ">Lorem ipsum dolor sit amet,consecteture</p>
        </div>
        <select className="text-primaryBlack bg-white px-3 py-1 rounded-md outline-none font-medium">
          <option>Monthly</option>
          <option>Weekly</option>

        </select>
      </div>
      {/* Chart Section */}
      <div className="flex justify-center mb-6">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width="300"
        />
      </div>

      {/* Table Section */}
      <table className="w-full text-left text-sm ">
        <thead className="">
          <tr className="text-sm border  text-white">
            <th className="px-4 py-2">Items</th>
            <th className="px-4 py-2 text-right">Percentage</th>
          </tr>
        </thead>
        <tbody className=" border">
          <tr className="border text-[#8777FB]">
            <td className="px-4 py-2 ">Expired</td>
            <td className="px-4 py-2 text-right">40%</td>
          </tr>
          <tr className="border text-[#EF6E6B]">
            <td className="px-4 py-2 ">Damaged</td>
            <td className="px-4 py-2 text-right">30%</td>
          </tr>
          <tr className="border text-[#DAB129]">
            <td className="px-4 py-2 ">Overstock</td>
            <td className="px-4 py-2 text-right">20%</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2">Others</td>
            <td className="px-4 py-2 text-right">10%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WasteReduction;
