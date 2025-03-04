import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
//import { updateRestaurantDetails } from "../../../redux/slices/restaurantSlice";
import DashboardLayout from "../../../layouts/dashboardLayout";
import InputField from "../../../components/inputField";
import SectionHeading from "../../../components/sectionHeading";
import Icons from "../../../assets/icons";
import Button from "../../../components/button";

const RestaurantManagement = () => {
  const dispatch = useDispatch();
  // const restaurantDetails = useSelector((state) => state.restaurant.details);
  const theme = useSelector((state) => state.theme.theme);

  const [uploadedFile, setUploadedFile] = useState(null);
  // const [formData, setFormData] = useState(restaurantDetails);

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

  // const handleSubmit = () => {
  //   dispatch(updateRestaurantDetails(formData));
  // };

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
              className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-black text-bold">
                Edit
              </button>
              <button 
              onClick={() => setUploadedFile(null)} 
              className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-[#0075FF] text-bold">
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
              <button onClick={() => {}} 
              className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-black text-bold">
                Edit
              </button>
              <button onClick={() => setUploadedFile(null)}
               className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-[#0075FF] text-bold">
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
              <button onClick={() => {}} 
             className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-black text-bold">
                Edit
              </button>
              <button onClick={() => setUploadedFile(null)}
               className="w-32 px-4 py-2 border border-[#7B68FF] text-white font-medium rounded-xl bg-[#0075FF] text-bold">
                Remove
              </button>
            </div>
          </div>
          </div>

          <div className="shadow-md">
            <InputField
              type="text"
              name="name"
              label="Restaurant Name"
              //value={formData.name}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
            <InputField
              type="text"
              name="address"
              label="Address"
              //value={formData.address}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
              
            />
            <InputField
              type="text"
              name="phone"
              label="Phone Number"
              //value={formData.phone}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"            
              />
            <InputField
              type="text"
              name="email"
              label="Email Address"
              //value={formData.email}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
            <InputField
              type="text"
              name="website"
              label="Website"
              //value={formData.website}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
            <InputField
              type="text"
              name="operatingHours"
              label="Operating Hours"
              //value={formData.operatingHours}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
            <InputField
              type="text"
              name="cuisine"
              label="Type of Cuisine"
              //value={formData.cuisine}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
            <InputField
              type="text"
              name="delivery"
              label="Delivery Available"
             //value={formData.delivery}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
            <InputField
              type="text"
              name="managerName"
              label="Manager Name"
              //value={formData.managerName}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
            <InputField
              type="text"
              name="managerContact"
              label="Manager Contact"
              //value={formData.managerContact}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
            <InputField
              type="text"
              name="status"
              label="Status"
              //value={formData.status}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
            <InputField
              type="text"
              name="seatingCapacity"
              label="Seating Capacity"
              //value={formData.seatingCapacity}
              onChange={handleChange}
              borderColor={"#9EC3FF"}
              backgroundcolor="bg-[#EEF5FF]"
              className="w-full border border-[#9EC3FF] rounded-md"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block font-medium mb-2">Upload Logo</label>
          <div
            {...getRootProps()}
            className="border-2 border-dashed p-6 rounded-lg text-center cursor-pointer"
          >
            <input {...getInputProps()} />
            <Icons.IoMdCloudUpload
              size={40}
              className="mx-auto text-gray-400"
            />
            <p className="text-sm">Drag & drop or click to upload</p>
          </div>
          {uploadedFile && (
            <p className="mt-2 text-sm">File: {uploadedFile.name}</p>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <Button 
          //onClick={handleSubmit}
          >Save Changes</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RestaurantManagement;
