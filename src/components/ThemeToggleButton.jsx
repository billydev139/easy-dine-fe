import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import Images from "../assets/images";

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state?.theme?.theme);

  // Icons for light and dark mode
  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  // Function to toggle theme
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  // // Apply theme and background to the document
  // useEffect(() => {
  //   const rootElement = document.documentElement;

  //   if (theme === "dark") {
  //     rootElement.classList.add("dark");
  //     rootElement.style.backgroundImage = "";
  //   } else {
  //     rootElement.classList.remove("dark");
  //     rootElement.style.backgroundImage = "url('/src/assets/images/cloud.png')";
  //     rootElement.style.backgroundSize = "cover";
  //     rootElement.style.backgroundRepeat = "no-repeat";
  //     rootElement.style.backgroundPosition = "center";
  //   }
  // }, [theme]);

  return (
    <button
      className={`w-12 h-6 rounded-full relative ${
        theme === "dark" ? "bg-gray-700" : "bg-[#b4e8fa]"
      } flex items-center transition duration-300 focus:outline-none shadow`}
      onClick={handleToggle}
    >
     
        <img
          className="absolute w-full h-full object-cover inset-0 rounded-3xl"
          src={theme === "dark"? Images.nightCloud : Images.cloud}
          alt="Clouds"
        />
      
      <div
        className={`w-6 h-6 relative rounded-full transition duration-500 transform p-1 text-white z-10 ${
          theme === "dark"
            ? "bg-gray-700 translate-x-6"
            : "bg-yellow-500 -translate-x-1"
        }`}
      >
        {theme === "dark" ? darkIcon : lightIcon}
      </div>
    </button>
  );
};

export default ThemeToggleButton;
