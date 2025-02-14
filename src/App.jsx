import { useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import AppRoutes from "./routes";

function App() {
  console.log("14 feb debug");
  const theme = useSelector((state) => state?.theme?.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>

      <div className="bg-primaryBlack">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
