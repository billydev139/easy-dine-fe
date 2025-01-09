import { useState } from "react";
import SearchBar from "../../../components/searchBar";
import Images from "../../../assets/images";
import { Rating } from "react-simple-star-rating";
import Icons from "../../../assets/icons";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import InputField from "../../../components/inputField";

const PopularItems = () => {
  const [perPage, setPerPage] = useState(10);
  const items = [
    {
      name: "Chicken curry special with cucumber",
      category: "Pasta",
      image: "https://via.placeholder.com/64",
      price: "$12.99",
      reviews: "4.5 stars",
    },
    {
      name: "Classic Cheeseburger",
      category: "Burgers",
      image: "https://via.placeholder.com/64",
      price: "$10.99",
      reviews: "4.7 stars",
    },
    {
      name: "Chicken Caesar Wrap",
      category: "Wraps",
      image: "https://via.placeholder.com/64",
      price: "$8.99",
      reviews: "4.3 stars",
    },
    {
      name: "Chicken curry special with cucumber",
      category: "Popular",
      image: "https://via.placeholder.com/64",
      price: "$11.99",
      reviews: "4.8 stars",
    },
    {
      name: "Beef Burrito",
      category: "Wraps",
      image: "https://via.placeholder.com/64",
      price: "$9.99",
      reviews: "4.6 stars",
    },
    {
      name: "Fettuccine Alfredo",
      category: "Pasta",
      image: "https://via.placeholder.com/64",
      price: "$13.99",
      reviews: "4.4 stars",
    },
    {
      name: "Bacon Cheeseburger",
      category: "Burgers",
      image: "https://via.placeholder.com/64",
      price: "$11.49",
      reviews: "4.5 stars",
    },
    {
      name: "Garlic Bread",
      category: "Popular",
      image: "https://via.placeholder.com/64",
      price: "$4.99",
      reviews: "4.9 stars",
    },
  ];
  const [selectedTab, setSelectedTab] = useState("Popular");
  // Filter items based on the active tab (category)
  const filteredItems = items.filter((item) => item.category === selectedTab);
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => setCount(count + 1);

  // Function to decrement the count
  const decrement = () => setCount(count - 1);
  return (
    <div className="bg-white text-white py-5 rounded-lg shadow-md">
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
<<<<<<< HEAD
              className="relative transform overflow-hidden rounded-lg bg-white  pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-[80%]   data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
=======
              className="relative transform overflow-hidden rounded-lg bg-primaryBlue  pb-7 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-[62%] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
>>>>>>> e859be440cbd069b847a952e8f43ebd95789b43a
            >
              <div>
                <div>
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold bg-headingBGColor flex items-center justify-between pr-6 pl-10"
                  >
                    <div className=" py-2 px-4 text-white text-xl ">
                      <h2 className="text-lg ">Place an Order</h2>
                      <p className="text-sm font-medium mb-4">
                        Lorem ipsum dolor sit amet,consecteture
                      </p>
                    </div>
                    <div>
                      <Icons.FaRegTimesCircle
                        onClick={() => setOpen(false)}
                        color="white"
                        size={27}
                      />
                    </div>
                  </DialogTitle>
                  <div className="mt-2 grid grid-cols-2 text-white px-4 gap-4 h-[593px] ">
                    <div
                      className="flex items-center justify-center"
                      // style={{
                      //   backgroundImage: `url(${Images.chicken1})`,
                      //   backgroundSize: "cover",
                      //   backgroundPosition: "center",
                      //   backgroundRepeat: "no-repeat",
                      // }}
                    >
                      <img
                        src={Images.chicken1}
                        className="w-[514p] h-[593px]"
                      />
                    </div>
                    <div>
                      <p className="text-5xl font-semibold leading-[52px]">
                        {" "}
                        Chicken curry special with cucumber
                      </p>
                      <p className="#7E79A1">500$</p>
                      <p className="text-lg">
                        Savor the rich and creamy taste of our Chicken Curry
                        Special! Tender pieces of chicken are slow-cooked in a
                        fragrant blend of traditional spices and a velvety curry
                        sauce.{" "}
                      </p>
                      <div className="mt-8 self-end">
                        <InputField
                          type="textarea"
                          label={"Special Instructions (Optional)"}
                          placeholder="Type your comments......"
                          placeholderColor={"placeholder:text-primaryGray"}
                          backgroundcolor={"bg-[#7B68FF1A]"}
                          className="w-full p-2 ps-7 border-dashed hover:border-[#C4C0E1] rounded-md text-sm text-white"
                        />
                      </div>
                      <div className="flex bg-white rounded-lg w-28 justify-center py-1 mt-2 items-center gap-3">
                        <button
                          onClick={decrement}
                          className="text-2xl text-black"
                        >
                          -
                        </button>
                        <h2 className="text-black text-xl border px-2 rounded-lg">
                          {count}
                        </h2>
                        <button
                          onClick={increment}
                          className=" text-2xl text-black"
                        >
                          +
                        </button>
                      </div>
                      <div className="mt-10 ">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="flex w-full justify-center items-end rounded bg-white px-3 py-3 text-sm font-semibold text-black  "
                        >
                          Add to Order {"  "} 100$
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <div className="grid grid-cols-2 justify-between items-center bg-headingBGColor py-2 px-4 mb-4">
        <div className=" ">
          <h2 className="text-lg font-medium">Popular Items</h2>
          <p className="text-sm mb-4">Track the top-performing menu items</p>
        </div>

        <SearchBar placeholder={"Search Menu Items..."} />
      </div>
      {/* <div className="flex space-x-4 mb-4">
        {["Popular", "Pasta", "Burgers", "Wraps"].map((category) => (
          <button
            key={category}
            className="px-3 py-1 bg-purple-700 rounded-lg text-sm hover:bg-purple-600"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-purple-800 p-4 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-md mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.price}</p>
              <p className="text-sm text-gray-400">{item.reviews}</p>
            </div>
            <button className="bg-purple-700 p-2 rounded-lg text-sm hover:bg-purple-600">
              +
            </button>
          </div>
        ))}
      </div> */}
      <div>
        {/* Tabs for categories */}
        <div className="flex space-x-4  p-4">
          {["Popular", "Pasta", "Burgers", "Wraps"].map((tab) => (
            <button
              key={tab}
              className={`relative px-3 py-1 font-bold ${
                selectedTab === tab ? "  text-[#1EB564]" : "text-secondaryBlue"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
              {selectedTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1EB564]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Grid for items in the selected category */}
        <div className="grid grid-cols-1 gap-4 p-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setOpen(true)}
              className="flex items-center bg-secondaryBlue p-4 rounded-lg border"
            >
              <div className="flex-1">
                <h3 className=" text-white font-medium">{item.name}</h3>
                <p className="text-base text-gray-400">{item.price}</p>
                <div className="flex  items-center justify-between pr-4">
                  <Rating
                    onClick={handleRating}
                    size={16}
                    /* Available Props */
                  />
                  <p className="text-xs text-white ">(456 reviews)</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={Images.chicken}
                  alt={item.name}
                  className="w-28 h-20 rounded-md "
                />
                <button className="absolute  bottom-0 right-0 text-black bg-white  py-0.5 px-2 rounded  hover:bg-white hover:text-white ">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Handle case when no items exist for the active category */}
        {filteredItems.length === 0 && (
          <p className="text-gray-500 text-center mt-4">
            No items available in this category.
          </p>
        )}
      </div>
      <div className="flex justify-center items-center gap-4 py-8 mr-4 text-sm">
        <div className="text-white text-sm">
          Results Per Page:
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="ml-2 bg-inherit border border-gray-600 text-gray-300 py-1 px-2 rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>

        <div className="text-white ">
          Showing 1-{perPage} of {items.length}
        </div>
        <div className="flex gap-2 ">
          <Icons.MdKeyboardArrowLeft size={25} />
          <Icons.MdKeyboardArrowRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
