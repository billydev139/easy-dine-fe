/* eslint-disable react/prop-types */
const SectionHeading=({heading,para})=>{

    return(
        <div className="p-5">
        <h2 className="text-primaryBlue text-lg font-semibold">{heading}</h2>
        <p className="text-primaryBlue text-sm">{para}</p>
      </div>
    )
}
export default SectionHeading;