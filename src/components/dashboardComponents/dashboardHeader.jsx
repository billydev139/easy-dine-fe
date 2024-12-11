import Icons from "../../assets/icons";

/* eslint-disable react/prop-types */
const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex justify-between items-center bg-[#343434] shadow p-3 rounded-md text-white">
      <div className="flex gap-2">
        <button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className="z-10 block  "
        >
          <Icons.RiMenu3Fill size={20}  />
        </button>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2 relative py-2 border-r-2 border-black pr-4">
          <p className="h-2 w-2 bg-red-600 rounded-full absolute left-4 top-2"></p>
          <Icons.PiBellSimpleBold color="white" size={30} />
        </div>
        <div className="text-white">
        <p className=" text-base">Flora</p>
        <p className="text-[10px]">admin</p>
        </div> 
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
