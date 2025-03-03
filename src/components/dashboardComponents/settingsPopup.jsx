import { useState, useRef, useEffect } from "react";
import Icons from "../../assets/icons";

const SettingsPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={popupRef} className="absolute top-12 right-4 w-60 bg-white shadow-lg rounded-md p-2 z-50">
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold">
          Webpage
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold">
           Restaurant Settings
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold">
          Users
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold">
           Templates / Print
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold">
           Accounting
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor- font-bold">
           Integration
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md cursor-pointer font-bold">
           Subscription
        </li>
      </ul>
    </div>
  );
};

export default SettingsPopup;
