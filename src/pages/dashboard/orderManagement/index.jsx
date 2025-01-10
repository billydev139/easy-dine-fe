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
import { useSelector } from "react-redux";

const OrderManagement = () => {
  //   const [data] = useState([
  //     {
  //       name: "Red Stiletto Restaurant",
  //       lastName: "Thomsan",
  //       email: "tgnzl@freesourcecodes.com",
  //       gender: "Male",
  //       status: "Active",
  //       manager: "Mr John",
  //     },
  //     {
  //       name: "The Nouveau Table",
  //       lastName: "Marrie",
  //       gender: "Female",
  //       email: "tgnzl@gmel.com",
  //       status: "Active",
  //       manager: "Mr Smith",
  //     },
  //     {
  //       name: "Red Stiletto Restaurant",
  //       lastName: "Doe",
  //       gender: "Male",
  //       email: "iendnx@codes.com",
  //       status: "Active",
  //       manager: "Mr Johnson",
  //     },
  //     {
  //       name: "The Nouveau Table",
  //       lastName: "Marrie",
  //       gender: "Female",
  //       email: "poensu@gamil.com",
  //       status: "Active",
  //       manager: "Mr John",
  //     },
  //     {
  //       gender: "Female",
  //       name: "The Winstonian",
  //       lastName: "Marrie",
  //       email: "sdafafa@fmieaes.com",
  //       status: "Active",
  //       manager: "Mr Johnson",
  //     },
  //     {
  //       gender: "Female",
  //       name: "Fauna Kitchen",
  //       lastName: "Marrie",
  //       email: "tgnzl@fremmail.com",
  //       status: "Not Active",
  //       manager: "Mr Johnson",
  //     },
  //     {
  //       gender: "Male",
  //       name: "The Nouveau Table",
  //       lastName: "Marrie",
  //       email: "opeio@email.com",
  //       status: "Not Active",
  //       manager: "Mr Johnson",
  //     },
  //     {
  //       gender: "Male",
  //       name: "Duke's Table",
  //       lastName: "Marrie",
  //       email: "tgnzl@meailscodes.com",
  //       status: "Active",
  //       manager: "Mr Johnson",
  //     },
  //     {
  //       gender: "Female",
  //       name: "Alpine-Style Cuisine",
  //       lastName: "Marrie",
  //       email: "tgnzl@freesourcecodes.com",
  //       status: "Active",
  //       manager: "Mr Johnson",
  //     },
  //     {
  //       gender: "Female",
  //       name: "The Nouveau Table",
  //       lastName: "Marrie",
  //       email: "tgnzl@freesourcecodes.com",
  //       status: "Active",
  //       manager: "Mr Johnson",
  //     },
  //   ]);

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
          <h2 class="text-primaryBlue text-center text-base font-semibold mb-5">
            Are you sure you want to Delete <br />
            the Restaurant in the Bin?
          </h2>
          <p class="text-primaryBlue text-center text-sm mb-6">
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
          "px-6 py-2 border border-blue-500 text-blue-500 rounded-md  hover:text-primaryBlue",
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
  const times = [
    "12:00:00 AM",
    "12:30:00 AM",
    "1:00:00 AM",
    "1:30:00 AM",
    "2:00:00 AM", // Add all time slots
    "11:30:00 PM",
  ];
  const theme = useSelector((state) => state?.theme?.theme);
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
              className="relative transform overflow-hidden rounded-lg bg-white  pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-5xl  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex justify-between items-center px-6 bg-[#150F43] ">
                <SectionHeading
                  heading={"Add Seating"}
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
                    label={"Customer Name"}
                    placeholder="Type First Name ...."
                    borderColor={"border-white"}
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Phone Number"}
                    labelstyle={""}
                    placeholder="Type Last Name ...."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                {/* Time Dropdown */}
                <div className="relative">
                  <label className="  text-sm font-semibold text-primaryBlue">
                    Select Time
                  </label>
                  <button
                    className="flex items-center justify-between w-full mt-1 px-4 py-3 bg-[#1A1448] text-sm border text-primaryBlue rounded-md "
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
                          className="px-4 py-2 hover:bg-[#1A1448] hover:text-primaryBlue cursor-pointer border-b"
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
                </div>
                <div>
                  <InputField
                    type="date"
                    label={"Select Date"}
                    placeholder="Date"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full p-2 border rounded-md text-sm text-primaryBlue"
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Number of Guests"}
                    placeholder="Type phone number....."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Available Seats"}
                    placeholder="Type email address........"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="  text-sm font-semibold text-primaryBlue">
                    Payment Methods
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="bg-[#1A1448] px-4 py-3 border  mt-1 text-primaryBlue rounded-md shadow-md outline-none w-full"
                  >
                    <option className="online">Online</option>
                    <option className="cash">Cash</option>
                  </select>
                </div>
                <div className="col-span-2 flex justify-end gap-2 pt-8">
                  <button
                    type="submit"
                    className=" px-4 py-2 bg-inherit border border-[#7B68FF] text-primaryBlue font-medium rounded-md  "
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
      {/* ////////////////////////////////////order management///////////////////////// */}
      <div
       className={`bg-white  text-primaryBlue mb-12 rounded-md shadow-xl ${theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '}`}
      >
        <SectionHeading
          heading={"Manage Orders"}
          para={"Lorem ipsum dolor sit amet,consecteture"}
        />
        <div className="flex justify-between items-center mb-8">
          <div className="w-[40%]">
            <SearchBar placeholder={"Search for name, email......"} />
          </div>
          <div className="flex gap-2 mr-4">
            <select className="border rounded bg-secondaryGray text-sm font-medium text-primaryBlack px-3 py-2 focus:outline-none ">
              <option>Payment</option>
              <option>Card</option>
              <option>Cash</option>
              <option>Express</option>
            </select>
            <select className="border rounded bg-secondaryGray text-sm font-medium text-primaryBlue px-3 py-2 focus:outline-none">
              <option>Order Status</option>
              <option>New Order</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>
        <table className="w-full text-left ">
          <thead className="bg-[#150F43] font-semibold text-white ">
            <tr>
              <th className="py-4 px-6">Order ID</th>
              <th className="py-4 px-6">Order Number</th>
              <th className="py-4 px-6">Item #</th>
              <th className="py-4 px-6">Customer name</th>
              <th className="py-4 px-6">Order Status</th>
              <th className="py-4 px-6">Payment</th>
              <th className="py-4 px-6">Tracking Id</th>

              <th className="py-4 px-6"></th>
              {/* <th className="py-4 px-6">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((job, index) => (
              <tr key={index} className="border-b border-[#1F1565] ">
                <td className="py-4 px-6 font-semibold">59217</td>

                <td className="py-6 px-6 font-semibold">#5552375</td>
                <td className="py-4 px-6 text-primaryBlue text-sm">0{index + 1}</td>
                <td className="py-4 px-6 text-primaryBlue text-sm">{job.server}</td>
                {/* <td className="py-4 px-6 font-semibold">{job.date}</td> */}
                <td className="py-4 px-6 text-sm ">
                  <span
                    className={`${
                      job.status === "New Order"
                        ? "text-[#FF625F] border-[#FF625F]"
                        : `${
                            job.status === "Delivered"
                              ? "text-[#17EFA0] border-[#17EFA0]"
                              : `${
                                  job.status === "Pending"
                                    ? "text-[#F4C62D] border-[#F4C62D]"
                                    : ``
                                }`
                          }`
                    }  border px-3 py-1 rounded-md `}
                  >
                    {" "}
                    {job.status}{" "}
                  </span>
                </td>
                <td className="py-4 px-6 text-primaryBlue text-sm">94001001</td>
                <td className="py-4 px-6 text-primaryBlue text-sm">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-[#17EFA0] inline-block mr-2"></span>
                  {job.payment}
                </td>
                <td className="px-4 py-2 space-x-2">
                  {/* <button
                    onClick={() => setOpen(true)}
                    className="text-green-500 hover:text-green-700 border border-green-500 bg-green-500 bg-opacity-30 p-1 rounded-md"
                  >
                    <Icons.FaRegEdit />
                  </button>
                  <button
                    onClick={handleDelete}
                    className="text-red-500 hover:text-red-700 border-red-500 border bg-red-500 bg-opacity-30 p-1 rounded-md"
                  >
                    <Icons.RiDeleteBin6Line />
                  </button> */}
                  <Icons.FaEllipsisH />
                </td>
                {/* <td className="py-4 px-6 text-[#00C92C]">{job.date}</td> */}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end items-center gap-4 py-8 mr-4">
          <div className="text-primaryBlue text-sm">
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

          <div className="text-primaryBlue">
            Showing 1-{perPage} of {data.length}
          </div>
          <div className="flex gap-2 ">
            <Icons.MdKeyboardArrowLeft size={25} />
            <Icons.MdKeyboardArrowRight size={25} />
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////Seating Assignment///////////////////////// */}

      <div className={`bg-white  text-primaryBlue mb-12 rounded-md shadow-xl ${theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '}`}>
        <SectionHeading
          heading={"Seating Assignment"}
          para={"Lorem ipsum dolor sit amet,consecteture"}
        />
        <div className="flex justify-between items-center mb-8">
          <div className="w-[40%]">
            <SearchBar
              placeholder={"Search by Customer Name, Table, or Order..."}
            />
          </div>
          <div className="flex gap-2 ">
            <select className="border rounded bg-secondaryGray font-medium text-[13px] text-primaryBlue  px-3 py-2 focus:outline-none ">
              <option>Seating Status</option>
              <option>Assigned</option>
              <option>UnAssigned</option>
            </select>
            <select className="border rounded bg-secondaryGray font-medium text-[13px] text-primaryBlue  px-3 py-2 focus:outline-none ">
              <option>Time Range</option>
              <option>1:00 AM</option>
              <option>2:00 AM</option>
              <option>3:00 AM</option>
            </select>
            <select className="border rounded  bg-secondaryGray font-medium text-[13px] text-primaryBlue px-3 py-2 focus:outline-none ">
              <option>Order Status</option>
              <option>New Order</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
            <Button
              textSize={"text-[13px]"}
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 rounded-md  text-primaryBlue mr-4"
            >
              Add +
            </Button>
          </div>
        </div>
        <table className="w-full text-left ">
          <thead className="bg-[#150F43] font-semibold text-white ">
            <tr>
              <th className="py-4 px-6">Seat ID</th>
              <th className="py-4 px-6">Table #</th>
              <th className="py-4 px-6">Order #</th>
              <th className="py-4 px-6">Customer name</th>
              <th className="py-4 px-6">Order Status</th>
              <th className="py-4 px-6">Seating Status</th>
              <th className="py-4 px-6">Time Seated</th>

              <th className="py-4 px-6"></th>
              {/* <th className="py-4 px-6 text-white">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((job, index) => (
              <tr key={index} className="border-b border-[#1F1565] ">
                <td className="py-4 px-6 text-sm">59217</td>

                <td className="py-4 px-6 text-primaryBlue text-sm">0{index + 1}</td>
                <td className="py-6 px-6 text-sm">#5552375</td>
                <td className="py-4 px-6 text-primaryBlue text-sm">{job.server}</td>
                {/* <td className="py-4 px-6 font-semibold">{job.date}</td> */}
                <td className="py-4 px-6 text-sm ">
                  <span
                    className={`${
                      job.status === "New Order"
                        ? "text-[#FF625F] border-[#FF625F]"
                        : `${
                            job.status === "Delivered"
                              ? "text-[#17EFA0] border-[#17EFA0]"
                              : `${
                                  job.status === "Pending"
                                    ? "text-[#F4C62D] border-[#F4C62D]"
                                    : ``
                                }`
                          }`
                    }  border px-3 py-1 rounded-md `}
                  >
                    {" "}
                    {job.status}{" "}
                  </span>
                </td>
                <td className="py-4 px-6 text-primaryBlue text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#17EFA0] inline-block mr-2"></span>
                  Assigned
                </td>
                <td className="py-4 px-6 text-primaryBlue text-sm"> 4:30 PM</td>

                <td className="px-4 py-2 space-x-2">
                  {/* /////////////////////menu////////////////////////// */}
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className=" flex items-center px-4 py-1  cursor-pointer text-sm font-medium">
                        <span className="sr-only">Open options</span>
                        <Icons.FaEllipsisH
                          aria-hidden="true"
                          size={16}
                          className="ml-2"
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
                            onClick={() => setOpen(true)}
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
          <div className=" text-sm">
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

          <div className="">
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

export default OrderManagement;
