import { useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import AppRoutes from "./routes";

function App() {
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
      <div>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
