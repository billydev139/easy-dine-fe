import { useCallback, useState } from "react";

// import SelectField from "../../../components/selectField";
import DashboardLayout from "../../../layouts/dashboardLayout";
import InputField from "../../../components/inputField";
import SectionHeading from "../../../components/sectionHeading";
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
              <h5 className="font-large font-semibold">Updated Logo</h5>
              <p className="text-xs">
                The site icon is what you see in browser tabs etc. It should be
                square and at least 512 x 512 pixels.
              </p>
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
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Address"}
              labelstyle={""}
              placeholder="Type your Address...."
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
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
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Email Address"}
              placeholder="Type your Address...."
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            {/* <label className=" text-sm font-semibold text-primaryBlack">Company Name</label> */}
            <InputField
              type="text"
              label={"Website"}
              placeholder="pizzaplanetxyz.com"
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Operating Hours"}
              labelstyle={""}
              placeholder="24 hours"
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Type of Cuisine"}
              placeholder="Chinese"
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Delivery Available"}
              placeholder="Yes/No"
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Manager Name"}
              placeholder="Enter your name...."
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Manager Contact"}
              placeholder="031XXXXXXXX"
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Status"}
              labelstyle={""}
              placeholder="24 hours"
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div>
            <InputField
              type="text"
              label={"Seating Capacity"}
              placeholder="Type your Capacity"
              placeholderColor={"placeholder:text-primaryGray"}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
          <div className="col-span-2 flex justify-end gap-2 py-12">
            <button
              type="submit"
              className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-[#0075FF]  s"
            >
              Close
            </button>
            <button
              type="submit"
              className="w-32 px-4 py-2 border border-[#EBEBEB] text-white font-medium rounded-xl bg-[#0F0A33] "
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="-mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Locations Card */}
        <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Locations</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              className="border rounded-lg p-2 flex-1 border-[#9EC3FF] bg-[#EEF5FF]"
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
                  className="text-red-500 hover:text-red-700"
                  onClick={() =>
                    setLocations(locations.filter((_, i) => i !== index))
                  }
                >
                  <Icons.RiDeleteBin6Line size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Areas Card */}
        <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 mb-">
          <h3 className="text-lg font-semibold mb-2">Areas</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              className="border rounded-lg p-2 flex-1 border-[#9EC3FF] bg-[#EEF5FF]"
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
                  <Icons.RiDeleteBin6Line size={18} />
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
