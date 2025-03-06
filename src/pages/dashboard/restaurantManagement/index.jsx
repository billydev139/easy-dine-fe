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
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
const openingHoursOptions = [
  { value: "06:00", label: "06:00 AM" },
  { value: "07:00", label: "07:00 AM" },
  { value: "08:00", label: "08:00 AM" },
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "01:00 PM" },
  { value: "14:00", label: "02:00 PM" },
  { value: "15:00", label: "03:00 PM" },
  { value: "16:00", label: "04:00 PM" },
  { value: "17:00", label: "05:00 PM" },
  { value: "18:00", label: "06:00 PM" },
  { value: "19:00", label: "07:00 PM" },
  { value: "20:00", label: "08:00 PM" },
  { value: "21:00", label: "09:00 PM" },
  { value: "22:00", label: "10:00 PM" },
  { value: "23:00", label: "11:00 PM" },
];
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
const discountOptions = [
  { value: "5", label: "5%" },
  { value: "10", label: "10%" },
  { value: "15", label: "15%" },
  { value: "20", label: "20%" },
  { value: "25", label: "25%" },
  { value: "30", label: "30%" },
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
    paymentMethods: ["MasterCard", "Twint"],
  });
  const [settings, setSettings] = useState({
    closed: false,
    breakfast_Menu: true,
    optional_Selection_Packages: true,
    age_Requirement_18_1: true,
    minimum_Order_Value: false,
    orderValue: 250,
    storage_System: true,
    easy_Meet: false,
    monthly_Product_Updates: false,
    take_Away: true,
    age_Requirement_18: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
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
            <div className="bg-white shadow-md rounded-md p-4 mb-6">
              <h2 className="text-lg font-semibold mb-4">Settings</h2>
              <div className="space-y-4">
                {Object.keys(settings).map((key) =>
                  key !== "orderValue" ? (
                    <div key={key} className="flex items-center">
                      {/* Toggle Button */}
                      <button
                        onClick={() => toggleSetting(key)}
                        className={`w-10 h-5 flex items-center rounded-full p-0.5 transition ${
                          settings[key] ? "bg-blue-500" : "bg-black"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                            settings[key] ? "translate-x-5" : ""
                          }`}
                        ></div>
                      </button>

                      {/* Setting Label - Very Close to Toggle */}
                      <span className="ml-4 text-sm">
                        {key
                          .replace(/_/g, " ") // Replace underscores with spaces
                          .split(" ") // Split words into an array
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          ) // Capitalize first letter of each word
                          .join(" ")}{" "}
                        {/* Join words back into a single string */}
                      </span>
                    </div>
                  ) : (
                    <div key={key} className="flex flex-col items-start">
                      <span className="text-sm">Minimum Order Value</span>
                      <input
                        type="text"
                        value={`${settings.orderValue} CHF`}
                        className="border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl px-2 py-1 w-40 text-center mt-1"
                      />
                    </div>
                  )
                )}
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
            <select
              value={formData.country}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="w-full border border-[#9EC3FF] rounded-xl px-4 py-3 focus:outline-none bg-[#EEF5FF]"
            >
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* Opening Hours Section */}
            <div className="mb-4 mt-6">
              <label className="block mb-2 font-semibold">Opening Hours</label>
              <div className="flex items-center space-x-4">
                <select
                  value={formData.openingTime}
                  onChange={(e) =>
                    setFormData({ ...formData, openingTime: e.target.value })
                  }
                  className="w-1/2 border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px] focus:outline-none"
                >
                  <option value="">Select Opening Time</option>
                  {openingHoursOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <select
                  value={formData.closingTime}
                  onChange={(e) =>
                    setFormData({ ...formData, closingTime: e.target.value })
                  }
                  className="w-1/2 border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px] focus:outline-none"
                >
                  <option value="">Select Closing Time</option>
                  {openingHoursOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Not Available Toggle */}
            <div className="mb-4 flex items-center justify-between">
              {/* Left Side: Toggle and Label */}
              <div className="flex items-center space-x-3">
                <div
                  onClick={() =>
                    setFormData({
                      ...formData,
                      notAvailable: !formData.notAvailable,
                    })
                  }
                  className="cursor-pointer text-2xl"
                >
                  {formData.notAvailable ? (
                    <IoToggleSharp className="text-black text-4xl" />
                  ) : (
                    <IoToggleSharp className="text-blue-500 rotate-180 text-4xl" />
                  )}
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  Not Available
                </span>
              </div>

              {/* Right Side: Select Dropdown */}
              <div className="w-1/3 ml-3">
                <select
                  value={formData.discount || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, discount: e.target.value })
                  }
                  className="border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px]"
                  disabled={!formData.discountEnabled}
                >
                  <option value="">Select Discount</option>
                  {discountOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Discount in % Section */}
            <div className="mb-4 flex items-center justify-between">
              {/* Left Side: Toggle and Label */}
              <div className="flex items-center space-x-3">
                <div
                  onClick={() =>
                    setFormData({
                      ...formData,
                      discountEnabled: !formData.discountEnabled,
                    })
                  }
                  className="cursor-pointer text-2xl"
                >
                  {formData.discountEnabled ? (
                    <IoToggleSharp className="text-black text-4xl" />
                  ) : (
                    <IoToggleSharp className="text-blue-500 rotate-180 text-4xl" />
                  )}
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  Discount in %
                </span>
              </div>

              {/* Right Side: Select Dropdown */}
              <div className="w-1/3 ml-3">
                <select
                  value={formData.discount || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, discount: e.target.value })
                  }
                  className="border border-[#9EC3FF] rounded-xl bg-[#EEF5FF] px-4 py-[10px]"
                  disabled={!formData.discountEnabled}
                >
                  <option value="">Select Discount</option>
                  {discountOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
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
            <div className="mb-4 shadow-md p-4 bg-white rounded-xl mt-2 bg">
              <label className="block mb-2 font-semibold">Staff Members</label>
              <div className="flex flex-wrap gap-3">
                {/* Add People Button (Always Fixed at the Start) */}
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      staffMembers: [...formData.staffMembers, ""],
                    })
                  }
                  className="bg-gray-700 text-white px-4 py-2 rounded-xl text-sm order-first"
                >
                  + Add People
                </button>

                {/* Staff Members (Appear After the Button) */}
                {formData.staffMembers.map((member, index) => (
                  <div
                    key={index}
                    className="relative flex items-center bg-[#0075FF] rounded-2xl px-3 py-2 text-white"
                  >
                    <input
                      type="text"
                      name={`staffMember-${index}`}
                      value={member}
                      onChange={(e) => {
                        const updatedStaff = [...formData.staffMembers];
                        updatedStaff[index] = e.target.value;
                        setFormData({
                          ...formData,
                          staffMembers: updatedStaff,
                        });
                      }}
                      className="bg-transparent outline-none border-none w-full pr-6"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const updatedStaff = formData.staffMembers.filter(
                          (_, i) => i !== index
                        );
                        setFormData({
                          ...formData,
                          staffMembers: updatedStaff,
                        });
                      }}
                      className="absolute right-2 text-white hover:text-red-500 text-lg"
                    >
                      ✖
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4 shadow-md p-4 bg-white rounded-xl mt-2">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

              {/* Toggle Buttons */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => toggleSetting("easyDine")}
                  className={`w-10 h-5 flex items-center rounded-full p-0.5 transition ${
                    settings.easyDine ? "bg-blue-500" : "bg-black"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                      settings.easyDine ? "translate-x-5" : ""
                    }`}
                  ></div>
                </button>
                <span className="text-sm font-medium text-gray-400">
                  EasyDine Zahlungsmethode
                </span>

                <button
                  onClick={() => toggleSetting("andere")}
                  className={`w-10 h-5 flex items-center rounded-full p-0.5 transition ${
                    settings.andere ? "bg-blue-500" : "bg-black"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
                      settings.andere ? "translate-x-5" : ""
                    }`}
                  ></div>
                </button>
                <span className="text-sm font-medium text-gray-400">
                  Andere
                </span>
              </div>

              {/* Payment Method, Order Deadline, Calories, Currency */}
              <div className="grid grid-cols-4 gap-4 mb-4 pt-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    Payment Method
                  </label>
                  <select className="border border-[#9EC3FF] rounded-xl px-3 py-2 bg-[#EEF5FF]">
                    <option>Wordline</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">
                    Order Deadline
                  </label>
                  <input
                    type="text"
                    value="Schnittstelle"
                    className="border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl px-3 py-2"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Calories</label>
                  <input
                    type="text"
                    value="Kalorien"
                    className="border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl px-3 py-2"
                    readOnly
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium mb-1">Currency</label>
                  <input
                    type="text"
                    value="CHF"
                    className="border border-[#9EC3FF] bg-[#EEF5FF] rounded-xl px-3 py-2"
                    readOnly
                  />
                </div>
              </div>

              {/* Payment Method Selection */}
              <h3 className="text-sm font-bold mb-2 mt-8">Payment Method</h3>
              <div className="bg-[#EEF5FF] border border-[#9EC3FF] rounded-xl p-4">
                <div className="flex flex-wrap gap-3">
                  {/* Add Payment Button (Always in Fixed Position) */}
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        paymentMethods: [...formData.paymentMethods, ""],
                      })
                    }
                    className="bg-gray-700 text-white px-4 py-2 rounded-xl text-sm order-first"
                  >
                    + Add Payment
                  </button>

                  {/* Render Payment Methods (Added after the button) */}
                  {formData.paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className="relative flex items-center bg-blue-500 rounded-2xl px-3 py-2 text-white"
                    >
                      <input
                        type="text"
                        name={`paymentMethod-${index}`}
                        value={method}
                        onChange={(e) => {
                          const updatedMethods = [...formData.paymentMethods];
                          updatedMethods[index] = e.target.value;
                          setFormData({
                            ...formData,
                            paymentMethods: updatedMethods,
                          });
                        }}
                        className="bg-transparent outline-none border-none w-full pr-6"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const updatedMethods = formData.paymentMethods.filter(
                            (_, i) => i !== index
                          );
                          setFormData({
                            ...formData,
                            paymentMethods: updatedMethods,
                          });
                        }}
                        className="absolute right-2 text-white hover:text-red-500 text-lg"
                      >
                        ✖
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-80 flex gap-4 justify-end">
              <button className="px-10 py-2 text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700">
                Back
              </button>
              <button className="px-10 py-2 text-white bg-black rounded-xl shadow-md hover:bg-gray-900">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RestaurantManagement;
