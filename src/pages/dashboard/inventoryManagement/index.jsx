/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import DashboardLayout from "../../../layouts/dashboardLayout";
import Icons from "../../../assets/icons";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import InputField from "../../../components/inputField";
import SectionHeading from "../../../components/sectionHeading";
import Swal from "sweetalert2";
import Images from "../../../assets/images";
import SearchBar from "../../../components/searchBar";
import DashboardStats from "../dashboardStats";
import Button from "../../../components/button";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import RevenueChart from "../revenueChart";
import CustomerMap from "../customerMap";
import WasteReduction from "./wasteReduction";

const InventoryManagement = () => {
  const data = [
    {
      id: 1,
      title: "Software Engineer",
      server: "Brooklyn Simmons",
      date: "Oct 24, 2024",
      applications: "#5552375",
      position: "03",
      status: "New Order",
      payment: "Express",
    },
    {
      id: 2,
      title: "Software Engineer",
      server: "Annette Black",
      date: "Oct 24, 2024",
      applications: "#5552375",
      position: "05",
      status: "New Order",
      payment: "Card Payment",
    },
    {
      id: 3,
      title: "Software Engineer",
      server: "Jacob Jones",
      date: "Oct 24, 2024",
      applications: "#5552375",
      position: "07",
      status: "Delivered",
      payment: "Cash in Hand",
    },
    {
      id: 4,
      title: "Software Engineer",
      server: "Esther Howard",
      date: "Oct 24, 2024",
      applications: "#5552375",
      position: "06",
      status: "Pending",
      payment: "Express",
    },
    {
      id: 5,
      title: "Software Engineer",
      server: "Annette Black",
      date: "Oct 24, 2024",
      applications: "#5552375",
      position: "06",
      status: "Pending",
      payment: "Card Payment",
    },
    {
      id: 6,
      title: "Software Engineer",
      server: "Annette Black",
      date: "Oct 24, 2024",
      applications: "#5552375",
      position: "10",
      status: "Delivered",
      payment: "Cash in Hand",
    },
  ];

  const [perPage, setPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    Swal.fire({
      html: `
        <div class="flex flex-col items-center">
          <img 
            src=${Images.bin}
            alt="Trash Bin" 
            class="w-20 h-24 "
          />
          <h2 class="text-white text-center text-base font-semibold mb-5">
            Are you sure you want to Delete <br />
            the Restaurant in the Bin?
          </h2>
          <p class="text-white text-center text-sm mb-6">
            You can’t undo this action.
          </p>
        </div>
      `,
      background: "#0F0A33",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      buttonsStyling: false,
      customClass: {
        popup: "rounded-lg p-6",

        cancelButton:
          "px-6 py-2 border border-blue-500 text-blue-500 rounded-md  hover:text-white",
        confirmButton: "px-6 py-2  text-black bg-white rounded-md mr-4 ",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the delete action here
        console.log("Restaurant deleted!");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log("Delete action cancelled!");
      }
    });
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [categoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(false);


  const categories = [
    "Category A",
    "Category B",
    "Category C",
  ];
  const times = [
    "12:00:00 AM",
    "12:30:00 AM",
    "1:00:00 AM",
    "1:30:00 AM",
    "2:00:00 AM", // Add all time slots
    "11:30:00 PM",
  ];
  return (
    <DashboardLayout>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10  overflow-y-auto">
          <div className="flex min-h-full  items-end justify-center  text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primaryBlue  pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-5xl  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex justify-between items-center px-6 bg-[#150F43] ">
                <SectionHeading
                  heading={"Add Item"}
                  para={"Lorem ipsum dolor sit amet,consecteture"}
                />
                <div>
                  {/* <Button>View All</Button> */}
                  <Icons.FaRegTimesCircle
                    onClick={() => setOpen(false)}
                    color="white"
                    size={27}
                  />
                </div>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 p-6  gap-4">
                <div>
                  {/* <label className=" text-sm font-semibold text-primaryBlack">Company Name</label> */}
                  <InputField
                    type="text"
                    label={"Item Name"}
                    placeholder="Type Item Name ...."
                    borderColor={"border-white"}
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div className="relative">
                  <label className="  text-sm font-semibold text-white">
                    Category
                  </label>
                  <button
                    className="flex items-center justify-between w-full mt-1 px-4 py-3 bg-[#1A1448] text-sm border text-white rounded-md "
                    onClick={() => setIsCategoryOpen(!categoryOpen)}
                    type="button"
                  >
                    {selectedCategory || "Select Category"}
                    <Icons.FaCaretDown />
                  </button>
                  {categoryOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-[#F1EFFF] text-black rounded-md  ">
                      {categories.map((item, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-[#C4C0E1] cursor-pointer border-b"
                          onClick={() => {
                            setSelectedCategory(item);
                            setIsCategoryOpen(false);
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Supplier Name"}
                    labelstyle={""}
                    placeholder="Type Supplier Name ...."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div>
                  <InputField
                    type="number"
                    label={"Stock Quantity"}
                    labelstyle={""}
                    placeholder="Type Stock Quantity...."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div>
                  <InputField
                    type="number"
                    label={"Cost Per Unit"}
                    labelstyle={""}
                    placeholder="€ Cost...."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                {/* Time Dropdown */}
                {/* <div className="relative">
                  <label className="  text-sm font-semibold text-white">
                    Select Time
                  </label>
                  <button
                    className="flex items-center justify-between w-full mt-1 px-4 py-3 bg-[#1A1448] text-sm border text-white rounded-md "
                    onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                    type="button"
                  >
                    {selectedTime || "Select Time"}
                    <Icons.FaCaretDown />
                  </button>
                  {isTimeDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white text-black rounded-md text-center  ">
                      {times.map((time, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-[#1A1448] hover:text-white cursor-pointer border-b"
                          onClick={() => {
                            setSelectedTime(time);
                            setIsTimeDropdownOpen(false);
                          }}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  )}
                </div> */}
                <div>
                  <InputField
                    type="date"
                    label={"Expiry Date"}
                    placeholder="select Date"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full p-2 border rounded-md text-sm text-white"
                  />
                </div>
                <div className="col-span-2">
                  <InputField
                    type="textarea"
                    label={"Comments (Optional)"}
                    placeholder="Type your comments......"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full p-2 ps-7 border-dashed hover:border-[#C4C0E1] rounded-md text-sm text-white"
                  />
                </div>
           
                <div className="col-span-2 flex justify-end gap-2 pt-8">
                  <button
                    type="submit"
                    className=" px-4 py-2 bg-inherit border border-[#7B68FF] text-white font-medium rounded-md  "
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className=" px-4 py-2 bg-[#EBEBEB] border border-[#EBEBEB] text-primaryBlack font-medium rounded-md  "
                  >
                    Save
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <DashboardStats />
      <div className="grid grid-cols-2 gap-4 mb-8">
        <RevenueChart heading={"Stock trends over time"} />
        <WasteReduction/>
        </div>
      {/* ////////////////////////////////////order management///////////////////////// */}
      <div className="bg-primaryBlue  text-white mb-12 rounded-md shadow-xl">
        <SectionHeading
          heading={"Inventory List"}
          para={"Lorem ipsum dolor sit amet,consecteture"}
        />
        <div className="flex justify-between items-center mb-8">
          <div className="w-[40%]">
            <SearchBar placeholder={"Search for name, email......"} />
          </div>
          <div className="flex gap-2 mr-4">
            <select className="border rounded bg-secondaryGray text-sm font-medium text-primaryBlack px-3 py-2 focus:outline-none ">
              <option>Category</option>
              <option>Category A</option>
              <option>Category B</option>
              <option>Category C</option>
            </select>
            <select className="border rounded bg-secondaryGray text-sm font-medium text-primaryBlack px-3 py-2 focus:outline-none ">
              <option>Stock Status</option>
              <option>In Stock</option>
              <option>Out of Stock</option>
              <option>All</option>
            </select>
            <Button
              textSize={"text-[13px]"}
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 rounded-md  text-primaryBlue mr-4"
            >
              Add Item +
            </Button>
          </div>
        </div>
        <table className="w-full text-left ">
          <thead className="bg-[#150F43] font-semibold text-white ">
            <tr>
              <th className="py-4 px-6">Item ID</th>
              <th className="py-4 px-6">Item Name</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Supplier name</th>
              <th className="py-4 px-6">Stock Quantity</th>
              <th className="py-4 px-6">Purchase Cost</th>
              <th className="py-4 px-6">Expiry Date</th>

              <th className="py-4 px-6"></th>
              {/* <th className="py-4 px-6">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((job, index) => (
              <tr key={index} className="border-b border-[#1F1565] ">
                <td className="py-4 px-6 text-sm">59217</td>

                <td className="py-6 px-6 text-sm">{job.server}</td>
                <td className="py-4 px-6 text-white text-sm">Category A</td>
                <td className="py-4 px-6 text-white text-sm">{job.server}</td>

                <td className="py-4 px-6 text-sm">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-[#17EFA0] inline-block mr-2"></span>
                 In Stock
                </td>
           
                <td className="py-4 px-6 text-white text-sm">€ 1500</td>
                <td className="py-4 px-6 text-white text-sm">
                 
                10-08-2020
                </td>
                <td className="px-4 py-2">
                 
                 {/* /////////////////////menu////////////////////////// */}
             <Menu as="div" className="relative inline-block text-left">
               <div>
                 <MenuButton className=" flex items-center px-4 py-1  cursor-pointer text-sm font-medium">
                   <span className="sr-only">Open options</span>
                   <Icons.FaEllipsisH
                     aria-hidden="true"
                     size={16}
                     className=""
                   />
                 </MenuButton>
               </div>

             <MenuItems
                   transition
                   className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                 >
                   <div className="py-1 font-semibold">
                     <MenuItem>
                       {/* <Link to={"/post-a-job"}> */}
                         <button
                          onClick={()=>setOpen(true)}
                           className="w-full px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none flex items-center gap-1 "
                         >
                           <Icons.AiOutlineEdit size={20} /> 
                           Edit
                         </button>
                       {/* </Link> */}
                     </MenuItem>
                     <MenuItem>
                     <button
                          onClick={handleDelete}
                         className="w-full px-4 py-2 text-sm text-[#E80000] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none flex items-center gap-1 "
                       >
                         <Icons.RiDeleteBin6Line size={17} /> 
                         Delete
                       </button>
                     </MenuItem>
                   </div>
                 </MenuItems> 
                 </Menu>
               
             </td>
          
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end items-center gap-4 py-8 mr-4">
          <div className="text-white text-sm">
            Results Per Page:
            <select
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="ml-2 bg-inherit border border-gray-600 text-gray-300 py-1 px-2 rounded"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>

          <div className="text-white">
            Showing 1-{perPage} of {data.length}
          </div>
          <div className="flex gap-2 ">
            <Icons.MdKeyboardArrowLeft size={25} />
            <Icons.MdKeyboardArrowRight size={25} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InventoryManagement;
