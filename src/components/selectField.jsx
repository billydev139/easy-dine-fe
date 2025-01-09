/* eslint-disable react/prop-types */
import Icons from "../assets/icons";

const SelectField = ({ label, options, defaultValue, name }) => {
  return (
    <div>
      {/* Dynamic Label */}
      {/* {label ? (
        <label
          htmlFor={name}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
      ) : null} */}
      <div className="mt-2 grid grid-cols-1">
        {/* Dynamic Select Field */}
        <select
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="col-start-1 row-start-1 text-sm w-full border border-white appearance-none rounded-md  py-3  pl-3 pr-8  text-primaryGrey   "
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron Icon */}
        <Icons.TiArrowSortedDown
          size={20}
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
        />
      </div>
    </div>
  );
};

export default SelectField;
