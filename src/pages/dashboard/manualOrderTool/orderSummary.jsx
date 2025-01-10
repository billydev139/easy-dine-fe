import { useState } from "react";
import Images from "../../../assets/images";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Icons from "../../../assets/icons";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  // Function to increment the count
  const increment = () => setCount(count + 1);

  // Function to decrement the count
  const decrement = () => setCount(count - 1);
  const theme = useSelector((state) => state?.theme?.theme);
  return (
    <>
    <div className={`${theme === 'dark' ? '!bg-primaryBlue text-white ' : '!bg-white text-primaryBlue '} py-5 rounded-lg shadow-md h-max`}>
        <div className="py-2 px-4 ">
          <h2 className="text-lg font-medium">Orders Summary</h2>
          <p className="text-sm mb-4">Track the Placed Orders</p>
        </div>
        <div className="mt-6 mx-3">
          <div className="grid grid-cols-[1fr_2fr]  gap-5 items-center  p-4 rounded-lg border">
            <img
              src={Images.chicken1}
              className="w-[121px] h-[85px] rounded-lg"
            />
            <div>
              <h3 className="  font-medium">
                Chicken curry special with cucumber
              </h3>
              <p className="text-xs  ">(456 reviews)</p>
              <div className="flex items-center justify-between">
                <h2 className="text-base text-[#7e79a1] font-medium">500$</h2>
                <div className="flex bg-white rounded-lg w-28 justify-center py-1 mt-2 items-center gap-3">
                  <button onClick={decrement} className="text-2xl text-black">
                    -
                  </button>
                  <h2 className="text-black text-xl border px-2 rounded-lg">
                    {count}
                  </h2>
                  <button onClick={increment} className=" text-2xl text-black">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-10">
            <h2 className="text-lg ">Sub Total</h2>
            <h2 className="text-lg ">1001$</h2>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h2 className="text-lg ">Standard Delivery</h2>
            <h2 className="text-lg text-white">1001$</h2>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h2 className="text-lg ">Service Fee</h2>
            <h2 className="text-lg ">1001$</h2>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8 text-gray-400 ">
          <img src={Images.empty} alt="empty" className="w-28 h-28" />
          <p>You haven&apos;t added anything to your cart!</p>
        </div>
        <div className="flex justify-between items-center mt-4 mx-4">
          <span>Total</span>
          <span>0$</span>
        </div>
        <div className="p-4">
          <button
            onClick={() => setOpen(true)}
            className="w-full  mt-4 p-3 bg-secondaryBlue rounded text-sm text-gray-400"
          >
            Submit Order
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
