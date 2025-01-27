import React, { useState } from "react";
import DashboardLayout from "../../../layouts/dashboardLayout";
import PopularItems from "../manualOrderTool/popularItems";
import { useSelector } from "react-redux";
import ItemCard from "../manualOrderTool/ItemCard";
import Icons from "../../../assets/icons";

const MenuManagement = () => {
  const [activeTab, setActiveTab] = useState("Breakfast"); // State to track active tab
  const [perPage, setPerPage] = useState(10);
  const items = [
    {
      name: "Chicken curry special with cucumber",
      category: "Pasta",
      image: "https://via.placeholder.com/64",
      price: "$12.99",
      reviews: "4.5 stars",
    },
    {
      name: "Classic Cheeseburger",
      category: "Burgers",
      image: "https://via.placeholder.com/64",
      price: "$10.99",
      reviews: "4.7 stars",
    },
    {
      name: "Chicken Caesar Wrap",
      category: "Wraps",
      image: "https://via.placeholder.com/64",
      price: "$8.99",
      reviews: "4.3 stars",
    },
  ];
  const menuData = {
    Breakfast: "Start your day with energy.",
    Lunch: "Power up for the afternoon.",
    Dinner: "End your day with a feast.",
  };
  const theme = useSelector((state) => state?.theme?.theme);

  return (
    <DashboardLayout>
      <div className="px-8 py-6">
        {/* Menu Selector */}
        <div className="flex gap-4 justify-between mb-6">
          {["Breakfast", "Lunch", "Dinner"].map((menu, index) => (
            <div
              key={index}
              className={`flex items-center justify-between border ${
                activeTab === menu
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300"
              } rounded-lg px-4 py-3 w-1/4 cursor-pointer`}
              onClick={() => setActiveTab(menu)} // Switch tabs on click
            >
              <div>
                <h3
                  className={`text-lg font-medium ${
                    activeTab === menu ? "text-green-600" : "text-gray-600"
                  }`}
                >
                  {menu}
                </h3>
                <p className="text-sm text-gray-500">
                  {menuData[menu]} {/* Display description dynamically */}
                </p>
              </div>
              <div>
                {/* Example Icons */}
                {menu === "Breakfast" && (
                  <span className="text-green-500 text-lg">☕</span>
                )}
                {menu === "Lunch" && (
                  <span className="text-blue-500 text-lg">🍱</span>
                )}
                {menu === "Dinner" && (
                  <span className="text-yellow-500 text-lg">🍴</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${
            theme === "dark"
              ? "!bg-primaryBlue text-white "
              : "!bg-white text-primaryBlue "
          } py-5 rounded-lg shadow-md mb-4`}
        >
          <h2 className="text-lg font-medium m-3">{activeTab} List</h2>
          {/* Dynamically render content based on the active tab */}
          {activeTab === "Breakfast" && (
            <div className="grid grid-cols-2 gap-4 p-4">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          )}
          {activeTab === "Lunch" && (
            <div className="grid grid-cols-2 gap-4 p-4">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          )}
          {activeTab === "Dinner" && (
            <div className="grid grid-cols-2 gap-4 p-4">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          )}
          <div className="flex justify-center items-center gap-4 py-8 mr-4 text-sm">
            <div className="text-sm">
              Results Per Page:
              <select
                value={perPage}
                onChange={(e) => setPerPage(Number(e.target.value))}
                className="ml-2 bg-inherit border border-gray-600  py-1 px-2 rounded"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>

            <div className=" ">
              Showing 1-{perPage} of {items?.length}
            </div>
            <div className="flex gap-2 ">
              <Icons.MdKeyboardArrowLeft size={25} />
              <Icons.MdKeyboardArrowRight size={25} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {/* Left Section: Popular Items */}
          <div className="col-span-2">
            <div>
              <PopularItems />
            </div>
          </div>

          {/* Right Section: Menu Preview */}
          <div className="col-span-1">
            <div
              className={`${
                theme === "dark"
                  ? "!bg-primaryBlue text-white "
                  : "!bg-white text-primaryBlue "
              }  rounded-lg p-6`}
            >
              <h2 className="text-lg font-medium mb-4">Menu Preview</h2>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600">Track the Placed Orders</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 border rounded-md">
                    Desktop
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 border rounded-md">
                    Mobile
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 p-8 rounded-lg">
                <span className="text-3xl text-gray-400">📄</span>
                <p className="mt-2 text-gray-500">
                  You haven’t added anything to your {activeTab} Menu!
                </p>
                <p className="text-sm text-gray-400">Drag & Drop Menu Items</p>
              </div>
              <button className="mt-6 w-full px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MenuManagement;
