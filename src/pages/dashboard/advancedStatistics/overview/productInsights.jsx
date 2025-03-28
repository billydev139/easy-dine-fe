// import { FaEdit, FaTrash } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import DashboardLayout from "../../../layouts/dashboardLayout";
// import Pagination from "../../../components/pagination";

import { Menu, MenuButton } from "@headlessui/react";

import Icons from "../../../../assets/icons";
import SectionHeading from "../../../../components/sectionHeading";
import Button from "../../../../components/button";
import { useSelector } from "react-redux";

const jobsData = [
  {
    id: 1,
    title: "Software Engineer",
    server: "Brooklyn Simmons",
    date: "Oct 24, 2024",
    applications: "#5552375",
    position: "03",
    status: "Low Performing",
  },
  {
    id: 2,
    title: "Software Engineer",
    server: "Annette Black",
    date: "Oct 24, 2024",
    applications: "#5552375",
    position: "05",
    status: "Low Performing",
  },
  {
    id: 3,
    title: "Software Engineer",
    server: "Jacob Jones",
    date: "Oct 24, 2024",
    applications: "#5552375",
    position: "07",
    status: "Best Selling",
  },
  {
    id: 4,
    title: "Software Engineer",
    server: "Esther Howard",
    date: "Oct 24, 2024",
    applications: "#5552375",
    position: "06",
    status: "Best Selling",
  },
  {
    id: 5,
    title: "Software Engineer",
    server: "Annette Black",
    date: "Oct 24, 2024",
    applications: "#5552375",
    position: "06",
    status: "Delivered",
  },
  {
    id: 6,
    title: "Software Engineer",
    server: "Annette Black",
    date: "Oct 24, 2024",
    applications: "#5552375",
    position: "10",
    status: "Delivered",
  },
];

const ProductInsights = () => {
  //   const [page] = useState(5);
  //   const [currentStep, setCurrentStep] = useState(1);
  //   const [actionId, setActionId] = useState(null);

  //   const toggleActions = (id) => {
  //     setActionId(actionId === id ? null : id);
  //   };
  const theme = useSelector((state) => state?.theme?.theme);
  return (
    <div className={` shadow rounded-lg mt-8 ${theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '}`}>
      <div className="flex justify-between items-center ">
        <SectionHeading
          heading={"Product Insights"}
          para={"Lorem ipsum dolor sit amet,consecteture"}
        />
        {/* <h2 className="text-base font-bold  pl-6 py-4">Manage Jobs</h2> */}
        <div>
          {/* <Button>View All</Button> */}
          <select className="text-primaryBlack bg-[#EEF5FF] px-3 py-1 rounded-xl outline-none font-medium border border-[#9EC3FF] h-10 mr-4">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Yearly</option>
        </select>
        </div>
      </div>
      <table className="w-full text-left ">
        <thead className={`${theme === 'dark' ? 'bg-secondaryBlue' : 'bg-[#EEF5FF]'}`}>
          <tr>
            <th className="py-2 px-6 font-medium">Product Name</th>
            <th className="py-2 px-6 font-medium">Revenue Generated</th>
            <th className="py-2 px-6 font-medium">Quantity Sold</th>
            <th className="py-2 px-6 font-medium">Average Delivery Time</th>
            <th className="py-2 px-6 font-medium">Order Status</th>
            {/* <th className="py-2 px-6 font-medium"></th> */}
          </tr>
        </thead>
        <tbody>
          {jobsData.map((job) => (
            <tr key={job.id} className={`${theme === 'dark' ? 'hover:bg-secondaryBlue' : 'hover:bg-[#EEF5FF]'}`}>
              {/* <td className="py-8 px-6">
                  <div className="flex items-center ">
                    <img 
                      src={`https://via.placeholder.com/44`} // Replace with actual icons
                      alt="logo"
                      className="mr-3 w-11 h-11 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-base mb-2">
                        {job.title}
                      </p>
                      <div className="flex items-center gap-3 text-primaryGray font-medium">
                        <p className="text-sm text-gray-500 flex gap-1">
                          
                          {job.location}
                        </p>
                        <p className="text-sm text-gray-500 flex gap-1">
                         
                           {job.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </td> */}
              <td className="py-4 px-6 text-sm ">{job.title}</td>
              <td className="py-4 px-6  text-sm">{job.applications}</td>
              <td className="py-4 px-6 text-sm">{job.position}</td>
              <td className="py-4 px-6 text-sm">{job.server}</td>

              <td className="py-4 px-6 text-sm ">
                <span
                  className={`${
                    job.status === "Low Performing"
                      ? "text-[#FF625F] border-[#FF625F] bg-[#B81C1C1A]"
                      : `${
                          job.status === "Best Selling"
                            ? "text-[#17EFA0] border-[#19DB8C] bg-[#19DB8C1A]"
                            : `${
                                job.status === "Delivered"
                                  ? "text-[#17EFA0] border-[#19DB8C] bg-[#19DB8C1A]"
                                  : ``
                              }`
                        }`
                  }  border px-3 py-1 rounded-xl `}
                >
                  {" "}
                  {job.status}{" "}
                </span>
              </td>
              {/* <td className="py-4 px-6 relative"> */}
                {/* /////////////////////menu////////////////////////// */}
                {/* <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className=" flex items-center px-4 py-1  cursor-pointer text-sm font-medium">
                      <span className="sr-only">Open options</span>
                      <Icons.FaEllipsisVertical
                        aria-hidden="true"
                        size={16}
                        className="ml-2"
                      />
                    </MenuButton>
                  </div> */}

                  {/* <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1 font-semibold">
                        <MenuItem>
                          <Link to={"/post-a-job"}>
                            <a
                              href="#"
                              className=" px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none flex items-center gap-1 "
                            >
                              <Icons.AiOutlineEdit size={20} /> Edit
                            </a>
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className=" px-4 py-2 text-sm text-[#E80000] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none flex items-center gap-1 "
                          >
                            <Icons.RiDeleteBin6Line size={17} /> Delete
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems> */}
                {/* </Menu> */}
                {/* /////////////////////////////////////////////////////////// */}
                {/* <button
                    onClick={() => toggleActions(job.id)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <BsThreeDotsVertical />
                  </button>
                  {actionId === job.id && (
                    <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-24 z-10">
                      <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                        <FaEdit className="mr-2" /> Edit
                      </button>
                      <button className="flex items-center px-4 py-2 text-red-500 hover:bg-gray-100 w-full">
                        <FaTrash className="mr-2" /> Delete
                      </button>
                    </div>
                  )} */}
              {/* </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="py-10">
          <Pagination
            totalPages={page}
            currentPage={currentStep}
            setCurrentPage={setCurrentStep}
          />
        </div> */}
      {/* <div className="flex justify-between items-center mt-6 ">
        <p className="text-sm text-gray-500">Showing 1 to 7 of 28 results</p>
        <div className="flex space-x-1">
          <button className="p-2 rounded border hover:bg-gray-100">&lt;</button>
          <button className="p-2 rounded border bg-blue-500 text-primaryBlue">1</button>
          <button className="p-2 rounded border hover:bg-gray-100">2</button>
          <button className="p-2 rounded border hover:bg-gray-100">3</button>
          <button className="p-2 rounded border hover:bg-gray-100">4</button>
          <button className="p-2 rounded border hover:bg-gray-100">&gt;</button>
        </div>
      </div> */}
    </div>
  );
};

export default ProductInsights;
