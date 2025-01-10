import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const SectionHeading=({heading,para})=>{
  const theme = useSelector((state) => state?.theme?.theme);
    return(
        <div className={`p-5 ${theme === 'dark' ? ' text-white ' : ' text-primaryBlue '}`}>
        <h2 className=" text-lg font-semibold">{heading}</h2>
        <p className=" text-sm">{para}</p>
      </div>
    )
}
export default SectionHeading;