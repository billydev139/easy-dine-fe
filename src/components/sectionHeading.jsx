/* eslint-disable react/prop-types */
const SectionHeading=({heading,para})=>{

    return(
        <div className="p-5">
        <h2 className="text-white text-lg font-semibold">{heading}</h2>
        <p className="text-white text-sm">{para}</p>
      </div>
    )
}
export default SectionHeading;