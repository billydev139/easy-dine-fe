/* eslint-disable react/prop-types */
const SearchBar=({placeholder})=>{
    return(
        <div className="flex justify-between items-center   px-4">
        <form className="w-full">
          <div className="relative">
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="primaryBlue"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="primaryBlue"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full px-4 py-2 pe-10 text-sm  text-primaryBlue outline-none rounded-lg bg-white placeholder:text-primaryBlue border-primaryBlue border "
              placeholder={placeholder || "Search here ..."}
              required
            />
          </div>
          {/* <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-white sr-only "
          >
            Search
          </label> */}
        </form>

       
      </div>
    )
}
export default SearchBar;