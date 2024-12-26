import  { useState } from "react";
import SelectField from "../../../components/selectField";

const SeatingArea = () => {
  const [selectedTab, setSelectedTab] = useState("Floor 1");

  const tabs = ["Floor 1", "Floor 2", "Floor 3", "See All"];
  const locationOptions = [
    { label: "Table 1", value: "1" },
    { label: "Table 2", value: "2" },
    { label: "Table 3", value: "3" },
    { label: "Table 4", value: "4" },
    { label: "Table 5", value: "5" },

  ];
  return (
    <div className="bg-primaryBlue text-white py-5 rounded-lg shadow-md">
   <div className="bg-headingBGColor py-2 px-4 ">
      <h2 className="text-lg font-medium">Select Seating Area</h2>
      <p className="text-sm mb-4">Track the top-performing menu items</p>
      </div>
      {/* Tabs */}
      <div className="flex space-x-4  p-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative px-3 py-1 font-bold ${
              selectedTab === tab ? "  text-[#1EB564]" : "text-white"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
            {selectedTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1EB564]"></span>
            )}
          </button>
        ))}
      </div>
      
      {/* Content */}
      <div className=" p-4" >
      <SelectField
        label="Location"
        name="location"
        defaultValue="ca"
        options={locationOptions}
      />
      </div>
    </div>
  );
};

export default SeatingArea;
