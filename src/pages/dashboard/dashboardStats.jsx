import Chart from "react-apexcharts";
import Icons from "../../assets/icons";
import { useSelector } from "react-redux";

const DashboardStats = () => {
  const cardData = [
    {
      title: "Earnings",
      value: "248,25",
      percentage: "+8%",
      color: "green",
      chartColor: "#1EB564",
      icon: <Icons.TfiWallet />, // Replace with your custom icon
    },
    {
      title: "Orders",
      value: "250,48",
      percentage: "+4%",
      color: "blue",
      chartColor: "#00AFEC",
      icon: <Icons.BiEdit />, // Replace with your custom icon
    },
    {
      title: "Customers",
      value: "124,12",
      percentage: "+2%",
      color: "red",
      chartColor: "#E54B47",
      icon: <Icons.FiUsers />, // Replace with your custom icon
    },
  ];

  const chartOptions = (color) => ({
    chart: {
      type: "area",
      sparkline: { enabled: true },
    },
    stroke: { curve: "smooth", width: 2 },
    fill: { opacity: 0.3 },
    colors: [color],
    tooltip: { enabled: false },
  });

  const chartSeries = [
    { data: [10, 30, 25, 40, 35, 50, 45] }, // Sample data
  ];

  const theme = useSelector((state) => state?.theme?.theme);

  return (
    <div className="flex flex-wrap gap-1 justify-between py-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`${
            theme === "dark" ? "bg-primaryBlue text-white" : "bg-white text-primaryBlue"
          } p-4 rounded-lg w-full sm:w-[48%] lg:w-[32%] shadow-md`}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-sm font-semibold">{card.title}</h2>
            <span
              className="text-2xl"
              style={{ color: card.chartColor }}
            >
              {card.icon}
            </span>
          </div>

          <div className="flex items-center mb-2">
            <h3
              className="text-2xl font-bold"
              style={{ color: card.chartColor }}
            >
              {card.value}
            </h3>
            <span
              className="text-xs ml-2 py-1 px-2 rounded text-white"
              style={{ backgroundColor: card.chartColor }}
            >
              {card.percentage}
            </span>
          </div>

          <Chart
            options={chartOptions(card.chartColor)}
            series={chartSeries}
            type="area"
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
