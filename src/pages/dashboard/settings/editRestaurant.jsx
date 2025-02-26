import { useCallback, useState } from "react";

// import SelectField from "../../../components/selectField";
import DashboardLayout from "../../../layouts/dashboardLayout";
import InputField from "../../../components/inputField";
import SectionHeading from "../../../components/sectionHeading";
import Button from "../../../components/button";
import { useDropzone } from "react-dropzone";
import Icons from "../../../assets/icons";
import { useSelector } from "react-redux";
import Images from "../../../assets/images";

const EditRestaurant = () => {
  const [newInterest, setNewInterest] = useState("");
  const [locationName, setLocationName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [locations, setLocations] = useState([]);
  const [areas, setAreas] = useState([]);
  const options = [
    { value: "Muslim", label: "Muslim" },
    { value: "Christian", label: "Christian" },
  ];

  //const [uploadedFile, setUploadedFile] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     // Handle file upload
//     const file = acceptedFiles[0];
//     setUploadedFile(file);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: "image/*",
//     multiple: false,
//   });
  const theme = useSelector((state) => state?.theme?.theme);

  const handleAddLocation = () => {
    if (locationName.trim() !== "") {
      setLocations([...locations, locationName]);
      setLocationName("");
    }
  };

  const handleAddArea = () => {
    if (areaName.trim() !== "") {
      setAreas([...areas, areaName]);
      setAreaName("");
    }
  };

  return (
    <DashboardLayout>
      <div
        className={`container mx-auto ${
          theme === "dark"
            ? "!bg-primaryBlue text-white "
            : "!bg-white text-primaryBlue "
        }  rounded-md shadow-md mb-20 mt-8`}
      >
        <div className="flex justify-between items-center ">
          <SectionHeading
            heading={"Edit Restaurant"}
            para={"Lorem ipsum dolor sit amet,consecteture"}
          />
          {/* <div>
            <Button>View All</Button>
            <select className="border rounded bg-secondaryGray font-medium text-primaryBlack px-3 py-2 focus:outline-none mx-4">
              <option>Location</option>
              <option>Yearly</option>
            </select>
          </div> */}
        </div>
        <div className="mt-6 mx-3">
          <div className="grid grid-cols-[auto_1fr] gap-5 items-center p-4">
            <img
              src={Images.chicken1}
              className="w-[85px] h-[85px] rounded-full object-cover"
            />
            <div>
              <h5 className="font-large font-semibold">
                Updated Logo
              </h5>
              <p className="text-xs">The site icon is what you see in browser tabs etc. It should be square and at least 512 x 512 pixels.</p>
            </div>
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
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF] !important"

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
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
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
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"

            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Email Address"}
              placeholder="Type your Address...."
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
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
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
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
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Type of Cuisine"}
              placeholder="Chinese"
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Delivery Available"}
              placeholder="Yes/No"
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Manager Name"}
              placeholder="Enter your name...."
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
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
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
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
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Seating Capacity"}
              placeholder="Type your Capacity"
              placeholderColor={"placeholder:text-primaryGray"}
              backgroundcolor={"bg-transparent"}
              className="w-full border border-[#9EC3FF] rounded-md bg-[#EEF5FF]"
            />
          </div>
          {/* ////////////////////////drop zone /////////////////////////// */}
          {/* <div className="col-span-2">
            <label className="block mb-2 text-white font-medium">
              Upload Logo
            </label>
            <div
              {...getRootProps()}
              className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer  hover:border-blue-500 transition-all"
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center text-gray-400">
                <Icons.IoMdCloudUpload size={60} /> */}
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
                {/* <p className="text-sm">Drag File to Upload</p>
                <p className="text-xs">(or click to choose a file)</p>
              </div>
            </div> */}

            {/* Display Uploaded File Name */}
            {/* {uploadedFile && (
              <div className="mt-2 text-sm text-white">
                File Uploaded: <strong>{uploadedFile.name}</strong>
              </div>
            )}
          </div> */}

          <div className="col-span-2 flex justify-end gap-2 py-12">
            <button
              type="submit"
              className="w-32 px-4 py-2 bg-inherit border border-[#7B68FF] text-white font-medium rounded-xl bg-[#0075FF]"
            >
              Close
            </button>
            <button
              type="submit"
              className="w-32 px-4 py-2 bg-[#EBEBEB] border border-[#EBEBEB] text-white font-medium rounded-xl bg-[#0F0A33] "
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="-mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Locations Card */}
      <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Locations</h3>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="border rounded-lg p-2 flex-1"
            placeholder="New Location Name..."
             value={locationName}
             onChange={(e) => setLocationName(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
             onClick={handleAddLocation}
          >
            + Add
          </button>
        </div>
        <div className="space-y-2">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border rounded-lg bg-gray-100"
            >
              <span>{loc}</span>
              <button
                className="text-red-500"
                onClick={() =>
                  setLocations(locations.filter((_, i) => i !== index))
                }
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Areas Card */}
      <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
        <h3 className="text-lg font-semibold mb-2">Areas</h3>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="border rounded-lg p-2 flex-1"
            placeholder="New Area Name..."
            value={areaName}
            onChange={(e) => setAreaName(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={handleAddArea}
          >
            + Add
          </button>
        </div>
        <div className="space-y-2">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 border rounded-lg bg-gray-100"
            >
              <span>{area}</span>
              <button
                className="text-red-500"
                onClick={() => setAreas(areas.filter((_, i) => i !== index))}
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default EditRestaurant;
