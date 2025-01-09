import Icons from "../../assets/icons";
import SearchBar from "../searchBar";

/* eslint-disable react/prop-types */
const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow p-3 rounded-md text-primaryBlue">
      <div className="flex gap-2 ">
        <button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className="z-10 block  "
        >
          <Icons.RiMenu3Fill size={20} />
        </button>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
      <div className="flex items-center space-x-4 ">
        {/* <select
          name=""
          id=""
          className="bg-[#1F1565] px-4 py-2 rounded-md shadow-md outline-none"
        >
          <option>Select Restaurant..</option>
        </select>
        <SearchBar /> */}
        <div className="flex items-center gap-2 relative py-2 border-r-2 border-white pr-4">
          <p className="h-2 w-2 bg-red-600 rounded-full absolute left-4 top-2"></p>
          <Icons.PiBellSimpleBold color="#0F0A33" size={30} />
        </div>
        <div className="!text-primaryBlue">
          <p className=" text-base">kristan</p>
          <p className="text-[10px]">Admin</p>
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
