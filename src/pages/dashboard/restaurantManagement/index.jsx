import { useCallback, useState } from "react";

// import SelectField from "../../../components/selectField";
import DashboardLayout from "../../../layouts/dashboardLayout";
import InputField from "../../../components/inputField";
import SectionHeading from "../../../components/sectionHeading";
import Button from "../../../components/button";
import { useDropzone } from "react-dropzone";
import Icons from "../../../assets/icons";
import { useSelector } from "react-redux";

const RestaurantManagement = () => {
  const [newInterest, setNewInterest] = useState("");
  const options = [
    { value: "Muslim", label: "Muslim" },
    { value: "Christian", label: "Christian" },
  ];

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
      <div className={`container mx-auto ${theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '}  rounded-md shadow-md mb-20 mt-8`}>
        <div className="flex justify-between items-center ">
          <SectionHeading
            heading={"Add Restaurant"}
            para={"Lorem ipsum dolor sit amet,consecteture"}
          />
          <div>
            <Button>View All</Button>
            <select className="border rounded bg-secondaryGray font-medium text-primaryBlack px-3 py-2 focus:outline-none mx-4">
              <option>Location</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6  p-6">
          <div>
            {/* <label className=" text-sm font-semibold text-primaryBlack">Company Name</label> */}
            <InputField
              type="text"
              label={"Restaurant Name"}
              
              placeholder="Restaurant Name"
              // borderColor={"border-white"}
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
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
              backgroundcolor={"bg-transparent"}
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
              backgroundcolor={"bg-transparent"}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Email Address"}
              placeholder="Type your Address...."
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            {/* <label className=" text-sm font-semibold text-primaryBlack">Company Name</label> */}
            <InputField
              type="text"
              label={"Website"}
              placeholder="pizzaplanetxyz.com"
              // borderColor={"border-white"}
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
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
              backgroundcolor={"bg-transparent"}
              className="w-full  border rounded-md "
            />
          </div>
          <div>
           
            <InputField
              type="text"
              label={"Type of Cuisine"}
              placeholder="Chinese"
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
           
            <InputField
              type="text"
              label={"Delivery Available"}
              placeholder="Yes/No"
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Manager Name"}
              placeholder="Enter your name...."
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          <div>
         
            <InputField
              type="text"
              label={"Manager Contact"}
              placeholder="031XXXXXXXX"
              // borderColor={"border-white"}
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
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
              backgroundcolor={"bg-transparent"}
              className="w-full  border rounded-md "
            />
          </div>
          <div>
           
            <InputField
              type="text"
              label={"Seating Capacity"}
              placeholder="Type your Capacity"
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full mt-1 p-2 border rounded-md"
            />
          </div>
          {/* ////////////////////////drop zone /////////////////////////// */}
          <div className="col-span-2">
      <label className="block mb-2 text-white font-medium">Upload Logo</label>
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
        <div className="mt-2 text-sm text-white">
          File Uploaded: <strong>{uploadedFile.name}</strong>
        </div>
      )}
    </div>
     
          <div className="col-span-2 flex justify-end gap-2 py-12">
          <button
              type="submit"
              className=" px-4 py-2 bg-inherit border border-[#7B68FF] text-secondaryBlue font-medium rounded-md  "
            >
              Back
            </button>
            <button
              type="submit"
              className=" px-4 py-2 bg-[#EBEBEB] border border-[#EBEBEB] text-primaryBlack font-medium rounded-md  "
            >
              Add Restaurant
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default RestaurantManagement;
