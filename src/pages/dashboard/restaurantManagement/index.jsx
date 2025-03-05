import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import DashboardLayout from "../../../layouts/dashboardLayout";
import InputField from "../../../components/inputField";
import SectionHeading from "../../../components/sectionHeading";
import Icons from "../../../assets/icons";
import Button from "../../../components/button";
import ReactQuill from "react-quill";
import { IoToggleSharp } from "react-icons/io5";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";

const modules = {
  toolbar: [
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const countryOptions = [
  { value: "AF", label: "Afghanistan" },
  { value: "AL", label: "Albania" },
  { value: "DZ", label: "Algeria" },
  { value: "AS", label: "American Samoa" },
  { value: "AD", label: "Andorra" },
  { value: "AO", label: "Angola" },
  { value: "AI", label: "Anguilla" },
  { value: "AQ", label: "Antarctica" },
  { value: "AG", label: "Antigua and Barbuda" },
  { value: "AR", label: "Argentina" },
  { value: "AM", label: "Armenia" },
  { value: "AW", label: "Aruba" },
  { value: "AU", label: "Australia" },
  { value: "AT", label: "Austria" },
  { value: "AZ", label: "Azerbaijan" },
  // Add more countries as needed
];

const RestaurantManagement = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const [uploadedFile, setUploadedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    country: "",
    website: "",
    operatingHours: "",
    cuisine: "",
    delivery: "",
    managerName: "",
    managerContact: "",
    status: "",
    seatingCapacity: "",
    description: "",
    notAvailable: false,
    discountEnabled: false,
    discount: "",
    managingDirector: "",
    staffMembers: [],
  });

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (content) => {
    setFormData({ ...formData, description: content });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption.value });
  };

  return (
    <DashboardLayout>
      <div
        className={`container mx-auto rounded-md shadow-md mb-20 mt-8 p-6 ${
          theme === "dark"
            ? "!bg-primaryBlue text-white"
            : "!bg-white text-primaryBlue"
        }`}
      >
        <SectionHeading title="Restaurant Management" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="bg-white shadow-md rounded-md p-4 mb-6">
              <h2 className="text-lg font-semibold mb-4">Restaurant Image</h2>
              <img
                src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
                alt="Restaurant"
                className="w-full h-60 object-cover rounded-3xl"
              />
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => {}}
                  className="w-32 px-4 py-2 text-white font-medium rounded-xl bg-black text-bold"
                >
                  Edit
                </button>
                <button
                  onClick={() => setUploadedFile(null)}
                  className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-[#0075FF] text-bold"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-4 mb-6">
              <img
                src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
                alt="Restaurant"
                className="w-full h-60 object-cover rounded-3xl"
              />
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => {}}
                  className="w-32 px-4 py-2 text-white font-medium rounded-xl bg-black text-bold"
                >
                  Edit
                </button>
                <button
                  onClick={() => setUploadedFile(null)}
                  className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-[#0075FF] text-bold"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md p-4 mb-6">
              <img
                src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg"
                alt="Restaurant"
                className="w-full h-60 object-cover rounded-3xl"
              />
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => {}}
                  className="w-32 px-4 py-2 text-white font-medium rounded-xl bg-black text-bold"
                >
                  Edit
                </button>
                <button
                  onClick={() => setUploadedFile(null)}
                  className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-[#0075FF] text-bold"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-md p-4 mb-6 bg-white rounded-md">
            <InputField
              type="text"
              name="name"
              label="Restaurant Name"
              value={formData.name}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-xl mb-4"
            />
            <InputField
              type="text"
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-xl mb-4"
            />
            <label className="block mb-2 font-semibold">Description</label>
            <ReactQuill
              value={formData.description}
              onChange={handleEditorChange}
              theme="snow"
              modules={modules}
              className="bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl mb-4"
            />
            <label className="block mb-2 font-semibold">Country</label>
            <Select
              options={countryOptions}
              value={countryOptions.find(option => option.value === formData.country)}
              onChange={handleCountryChange}
              classNamePrefix="react-select"
              className="w-full border border-[#9EC3FF] rounded-xl mb-4 bg-[#EEF5FF] px-7 py-[10px]"
            />
            {/* Opening Hours Section */}
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Opening Hours</label>
              <div className="flex items-center space-x-4">
                <Select
                  // options={openingHoursOptions}
                  // value={openingHoursOptions.find(option => option.value === formData.openingTime)}
                  onChange={(selectedOption) => setFormData({ ...formData, openingTime: selectedOption.value })}
                  classNamePrefix="react-select"
                  className="w-1/2 border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px]"
                />
                <Select
                  // options={openingHoursOptions}
                  // value={openingHoursOptions.find(option => option.value === formData.closingTime)}
                  onChange={(selectedOption) => setFormData({ ...formData, closingTime: selectedOption.value })}
                  classNamePrefix="react-select"
                  className="w-1/2 border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px]"
                />
              </div>
            </div>

            {/* Not Available Toggle */}
            <div className="mb-4 flex items-center justify-between">
              {/* Left Side: Toggle and Label */}
              <div className="flex items-center space-x-3">
                <div onClick={() => setFormData({ ...formData, notAvailable: !formData.notAvailable })} className="cursor-pointer text-2xl">
                  {formData.notAvailable ? <IoToggleSharp className="text-black" /> : <IoToggleSharp className="text-gray-400 rotate-180" />}
                </div>
                <span className="text-gray-700 text-sm font-medium">Not Available</span>
              </div>

              {/* Right Side: Select Dropdown */}
              <div className="w-1/3 ml-3">
                <Select
                  onChange={(selectedOption) => setFormData({ ...formData, discount: selectedOption.value })}
                  classNamePrefix="react-select"
                  className="border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px]"
                  isDisabled={!formData.discountEnabled}
                />
              </div>
            </div>
            {/* Discount in % Section */}
            <div className="mb-4 flex items-center justify-between">
              {/* Left Side: Toggle and Label */}
              <div className="flex items-center space-x-3">
                <div onClick={() => setFormData({ ...formData, discountEnabled: !formData.discountEnabled })} className="cursor-pointer text-2xl">
                  {formData.discountEnabled ? <IoToggleSharp className="text-black" /> : <IoToggleSharp className="text-gray-400 rotate-180" />}
                </div>
                <span className="text-gray-700 text-sm font-medium">Discount in %</span>
              </div>

              {/* Right Side: Select Dropdown */}
              <div className="w-1/3 ml-3">
                <Select
                  onChange={(selectedOption) => setFormData({ ...formData, discount: selectedOption.value })}
                  classNamePrefix="react-select"
                  className="border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px]"
                  isDisabled={!formData.discountEnabled}
                />
              </div>
            </div>
            {/* Managing Director Field */}
            <InputField
              type="text"
              name="managingDirector"
              label="Managing Director"
              value={formData.managingDirector}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-xl mb-4"
            />
          {/* Staff Member Section */}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Staff Members</label>
            <div className="flex flex-wrap gap-3">
              {formData.staffMembers.map((member, index) => (
                <div key={index} className="relative flex items-center bg-[#0075FF]  rounded-2xl px-3 py-2 text-white">
                  <input
                    type="text"
                    name={`staffMember-${index}`}
                    value={member}
                    onChange={(e) => {
                      const updatedStaff = [...formData.staffMembers];
                      updatedStaff[index] = e.target.value;
                      setFormData({ ...formData, staffMembers: updatedStaff });
                    }}
                    className="bg-transparent outline-none border-none w-full pr-6"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updatedStaff = formData.staffMembers.filter((_, i) => i !== index);
                      setFormData({ ...formData, staffMembers: updatedStaff });
                    }}
                    className="absolute right-2 text-white hover:text-red-500 text-lg"
                  >
                    ✖
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setFormData({ ...formData, staffMembers: [...formData.staffMembers, ""] })}
                className="bg-gray-700 text-white px-4 py-2 rounded-xl text-sm"
              >
                + Add People
              </button>
            </div>
          </div>


          </div>
        </div>
        <div>
          hello
        </div>
        <div className="mt-6 flex justify-end">
          <Button 
          // onClick={handleSubmit}
          >Save Changes</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RestaurantManagement;
