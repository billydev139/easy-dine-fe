import { useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import AppRoutes from "./routes";
import AnimatedCursor from "react-animated-cursor";

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
    <AnimatedCursor
innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'white'
  }}
  outerStyle={{
    border: '3px solid white'
  }}
    />
      <div>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
