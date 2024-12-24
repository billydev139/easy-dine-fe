import { useState } from "react";
import DashboardLayout from "../../../../layouts/dashboardLayout";
import Icons from "../../../../assets/icons";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import InputField from "../../../../components/inputField";
import SectionHeading from "../../../../components/sectionHeading";
import Swal from "sweetalert2";
import Images from "../../../../assets/images";

const ManageRestaurants = () => {
  const [data2] = useState([
    {
      contact: "7025556960",
      manageraddress: "6080 Steubenville Pike",
      website: "freesourcecodes.com",
      seating: "112 People",
    },
    {
      contact: "7025556960",
      manageraddress: "An den Wulzen 7",
      website: "gmel.com",
      seating: "112 People",
    },
    {
      contact: "7025556960",
      manageraddress: "Red Stiletto Restaurant",
      website: "codes.com",
      seating: "112 People",
    },
    {
      contact: "7025556960",
      manageraddress: "1663 Small Street",
      website: "gamil.com",
      seating: "112 People",
    },
    {
      contact: "7025556960",
      manageraddress: "4512 Hamilton Drive",
      website: "fmieaes.com",
      seating: "112 People",
    },
    {
      contact: "7025556960",
      manageraddress: "1058 Buffalo Creek Road",
      website: "fremmail.com",
      seating: "112 People",
    },
    {
      contact: "7025556960",
      manageraddress: "1831 Flint Street",
      website: "email.com",
      seating: "112 People",
    },
    {
      contact: "7025556960",
      manageraddress: "2560 Primrose Lane",
      website: "meailscodes.com",
      seating: "112 People",
    },
    {
      contact: "7025556960",
      manageraddress: "1720 Diane Street",
      website: "freesourcecodes.com",
      seating: "112 People",
    },
    {
      contact: "7025556960",
      manageraddress: "2164 Southside Lane",
      website: "freesourcecodes.com",
      seating: "112 People",
    },
  ]);
  const [data] = useState(
    [
      {
        name: "Red Stiletto Restaurant",
        address: "6080 Steubenville Pike",
        email: "tgnzl@freesourcecodes.com",
        status: "Active",
        manager: "Mr John",
      },
      {
        name: "The Nouveau Table",
        address: "An den Wulzen 7",
        email: "tgnzl@gmel.com",
        status: "Active",
        manager: "Mr Smith",
      },
      {
        name: "Red Stiletto Restaurant",
        address: "Red Stiletto Restaurant",
        email: "iendnx@codes.com",
        status: "Active",
        manager: "Mr Johnson",
      },
      {
        name: "The Nouveau Table",
        address: "1663 Small Street",
        email: "poensu@gamil.com",
        status: "Active",
        manager: "Mr John",
      },
      {
        name: "The Winstonian",
        address: "4512 Hamilton Drive",
        email: "sdafafa@fmieaes.com",
        status: "Active",
        manager: "Mr Johnson",
      },
      {
        name: "Fauna Kitchen",
        address: "1058 Buffalo Creek Road",
        email: "tgnzl@fremmail.com",
        status: "Not Active",
        manager: "Mr Johnson",
      },
      {
        name: "The Nouveau Table",
        address: "1831 Flint Street",
        email: "opeio@email.com",
        status: "Not Active",
        manager: "Mr Johnson",
      },
      {
        name: "Duke's Table",
        address: "2560 Primrose Lane",
        email: "tgnzl@meailscodes.com",
        status: "Active",
        manager: "Mr Johnson",
      },
      {
        name: "Alpine-Style Cuisine",
        address: "1720 Diane Street",
        email: "tgnzl@freesourcecodes.com",
        status: "Active",
        manager: "Mr Johnson",
      },
      {
        name: "The Nouveau Table",
        address: "2164 Southside Lane",
        email: "tgnzl@freesourcecodes.com",
        status: "Active",
        manager: "Mr Johnson",
      },
    ],
    ...data2
  );
  console.log("🚀 ~ ManageRestaurants ~ data:", data);
  const combinedData = data.map((item, index) => ({
    ...item,
    ...data2[index],
  }));
  console.log("🚀 ~ combinedData ~ combinedData:", combinedData);
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
                    label={"Restaurant Name"}
                    placeholder="Restaurant Name"
                    borderColor={"border-white"}
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Address"}
                    labelstyle={""}
                    placeholder="Type your Address...."
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
                    placeholder="031XXXXXXXX"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Email Address"}
                    placeholder="Type your Address...."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  {/* <label className=" text-sm font-semibold text-primaryBlack">Company Name</label> */}
                  <InputField
                    type="text"
                    label={"Website"}
                    placeholder="pizzaplanetxyz.com"
                    borderColor={"border-white"}
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Operating Hours"}
                    labelstyle={""}
                    placeholder="24 hours"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Type of Cuisine"}
                    placeholder="Chinese"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Delivery Available"}
                    placeholder="Yes/No"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Manager Name"}
                    placeholder="Enter your name...."
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Manager Contact"}
                    placeholder="031XXXXXXXX"
                    borderColor={"border-white"}
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Status"}
                    labelstyle={""}
                    placeholder="24 hours"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full  border rounded-md "
                  />
                </div>
                <div>
                  <InputField
                    type="text"
                    label={"Seating Capacity"}
                    placeholder="Type your Capacity"
                    placeholderColor={"placeholder:text-primaryGray"}
                    backgroundcolor={"bg-[#7B68FF1A]"}
                    className="w-full mt-1 p-2 border rounded-md"
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
      <div className="bg-primaryBlue my-8 text-white  rounded-lg">
        <div className="relative overflow-x-auto shadow-md ">
          <table className="w-max  text-sm text-left border-b bg-primaryBlue border-gray-700   ">
            <thead className="bg-[#150F43] font-semibold text-gray-300 ">
              <tr>
                <th className="px-4 py-2">Restaurant Name</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Manager Name</th>
                <th className="px-4 py-2">Manager Contact</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Website</th>
                <th className="px-4 py-2">Seating</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {combinedData.slice(0, perPage).map((row, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="px-4 py-4">{row.name}</td>
                  <td className="px-4 py-2">{row.address}</td>
                  <td className="px-4 py-2">{row.email}</td>
                  <td
                    className={`px-4 py-2 ${
                      row.status === "Active"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {row.status}
                  </td>
                  <td className="px-4 py-2">{row.manager}</td>
                  <td className="px-4 py-2">{row.contact}</td>
                  <td className="px-4 py-2">{row.address}</td>
                  <td className="px-4 py-2">{row.website}</td>
                  <td className="px-4 py-2">{row.seating}</td>
                  <td className="px-4 py-2 space-x-1">
                    <button
                      onClick={() => setOpen(true)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <Icons.FaRegEdit size={20} />
                    </button>
                    <button
                      onClick={handleDelete}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Icons.RiDeleteBin6Line size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end items-center gap-4 py-8">
          <div className="text-gray-400">
            Results Per Page:
            <select
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="ml-2 bg-gray-700 border border-gray-600 text-gray-300 py-1 px-2 rounded"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>

          <div className="text-gray-400">
            Showing 1-{perPage} of {data.length}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageRestaurants;
