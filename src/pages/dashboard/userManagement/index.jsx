import { useCallback, useState } from "react";
import DashboardLayout from "../../../layouts/dashboardLayout";
import Icons from "../../../assets/icons";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import InputField from "../../../components/inputField";
import SectionHeading from "../../../components/sectionHeading";
import Swal from "sweetalert2";
import Images from "../../../assets/images";
import Button from "../../../components/button";
import SearchBar from "../../../components/searchBar";
import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";

const UserManagement = () => {
  const [data] = useState([
    {
      name: "Red Stiletto Restaurant",
      lastName: "Thomsan",
      email: "tgnzl@freesourcecodes.com",
      gender: "Male",
      status: "Active",
      manager: "Mr John",
    },
    {
      name: "The Nouveau Table",
      lastName: "Marrie",
      gender: "Female",
      email: "tgnzl@gmel.com",
      status: "Active",
      manager: "Mr Smith",
    },
    {
      name: "Red Stiletto Restaurant",
      lastName: "Doe",
      gender: "Male",
      email: "iendnx@codes.com",
      status: "Active",
      manager: "Mr Johnson",
    },
    {
      name: "The Nouveau Table",
      lastName: "Marrie",
      gender: "Female",
      email: "poensu@gamil.com",
      status: "Active",
      manager: "Mr John",
    },
    {
      gender: "Female",
      name: "The Winstonian",
      lastName: "Marrie",
      email: "sdafafa@fmieaes.com",
      status: "Active",
      manager: "Mr Johnson",
    },
    {
      gender: "Female",
      name: "Fauna Kitchen",
      lastName: "Marrie",
      email: "tgnzl@fremmail.com",
      status: "Not Active",
      manager: "Mr Johnson",
    },
    {
      gender: "Male",
      name: "The Nouveau Table",
      lastName: "Marrie",
      email: "opeio@email.com",
      status: "Not Active",
      manager: "Mr Johnson",
    },
    {
      gender: "Male",
      name: "Duke's Table",
      lastName: "Marrie",
      email: "tgnzl@meailscodes.com",
      status: "Active",
      manager: "Mr Johnson",
    },
    {
      gender: "Female",
      name: "Alpine-Style Cuisine",
      lastName: "Marrie",
      email: "tgnzl@freesourcecodes.com",
      status: "Active",
      manager: "Mr Johnson",
    },
    {
      gender: "Female",
      name: "The Nouveau Table",
      lastName: "Marrie",
      email: "tgnzl@freesourcecodes.com",
      status: "Active",
      manager: "Mr Johnson",
    },
  ]);
  console.log("🚀 ~ ManageRestaurants ~ data:", data);

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
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Handle file upload
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });
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
              className={`relative transform overflow-hidden rounded-lg bg-white  pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-5xl  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 ${theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '}`}
            >
              <div className={`flex justify-between items-center px-6 bg-[#150F43] ${theme === 'dark' ? '!bg-[#150F43] text-white ' : '!bg-white text-primaryBlue '} `}>
                <SectionHeading
                  heading={"Edit Restaurant"}
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
                    label={"First Name"}
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
                    label={"Last Name"}
                    labelstyle={""}
                    placeholder="Type Last Name ...."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div>
                  {/* <label className="block text-sm font-medium text-gray-700">
              Application Email/URL
            </label> */}
                  <InputField
                    type="text"
                    label={"Phone Number"}
                    placeholder="Type phone number....."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Email Address"}
                    placeholder="Type email address........"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="  text-sm font-semibold ">
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className=" bg-transparent px-4 py-3 border  mt-1  rounded-md shadow-md outline-none w-full"
                  >
                    <option className=" ">Select Gender</option>
                    <option className=" ">Male</option>
                    <option className=" ">Female</option>
                  </select>
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Age"}
                    labelstyle={""}
                    placeholder="Type Age.."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
             {/* ////////////////////////drop zone /////////////////////////// */}
          <div className="col-span-2">
      <label className="block mb-2  font-medium">Upload Picture</label>
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer  hover:border-blue-500 transition-all"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center text-gray-400">
            <Icons.IoMdCloudUpload size={60} />
          {/* <svg
            className="w-10 h-10 mb-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 102 0V3a3 3 0 00-3-3H4a3 3 0 00-3 3v10a1 1 0 102 0V3zm14 10a1 1 0 10-2 0v4H5v-4a1 1 0 10-2 0v4a3 3 0 003 3h8a3 3 0 003-3v-4z"
              clipRule="evenodd"
            />
          </svg> */}
          <p className="text-sm">Drag File to Upload</p>
          <p className="text-xs">(or click to choose a file)</p>
        </div>
      </div>

      {/* Display Uploaded File Name */}
      {uploadedFile && (
        <div className="mt-2 text-sm text-primaryBlue">
          File Uploaded: <strong>{uploadedFile.name}</strong>
        </div>
      )}
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

      <div className={ `my-12 rounded-md shadow-xl ${theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '}`}>
        <div className="flex justify-between items-center ">
          <SectionHeading
            heading={"Staff User List"}
            para={"Lorem ipsum dolor sit amet,consecteture"}
          />
          <div className="w-[40%]">
            <SearchBar placeholder={"Search for name, email......"} />
          </div>
          <div className="flex gap-2 mr-4">
            <Button    onClick={() => setOpen(true)} className="flex items-center gap-2 rounded-md">
              <Icons.FaUserPlus />
              Add User
            </Button>
            <button className="flex items-center bg-inherit gap-2 border border-white py-2 px-3 rounded-md">
              <Icons.LuDownload />
              Export
            </button>
          </div>
        </div>
        <table className="w-full text-left ">
          <thead className="font-semibold text-white bg-primaryBlue ">
            <tr>
              <th className="py-4 px-6">ID</th>
              <th className="py-4 px-6">Profile</th>
              <th className="py-4 px-6">Last Name</th>
              <th className="py-4 px-6">Gender</th>
              <th className="py-4 px-6">Email</th>
              <th className="py-4 px-6">Status</th>

              <th className="py-4 px-6">Action</th>
              {/* <th className="py-4 px-6">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((job, index) => (
              <tr key={index} className="border-b border-[#1F1565] ">
                <td className="py-4 px-6 font-semibold">{index + 1}</td>

                <td className="py-6 px-6">
                  <div className="flex items-center ">
                    <img
                      src={Images.user1} // Replace with actual icons
                      alt="logo"
                      className="mr-3 w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-sm ">
                        {job.name}
                      </p>

                      <p className="text-xs text-[#6B7280] font-medium flex gap-1">
                        Loyalty User
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm">{job.lastName}</td>
                <td className="py-4 px-6 text-sm">{job.gender}</td>
                <td className="py-4 px-6  text-sm">{job.email}</td>
                {/* <td className="py-4 px-6 font-semibold">{job.date}</td> */}
                <td
                  className={`px-4 py-2 ${
                    job.status === "Active" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {job.status}
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
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
                  </button>
                </td>
                {/* <td className="py-4 px-6 text-[#00C92C]">{job.date}</td> */}
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

export default UserManagement;
