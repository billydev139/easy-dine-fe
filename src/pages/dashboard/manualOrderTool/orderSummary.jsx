import { useState } from "react";
import Images from "../../../assets/images";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Icons from "../../../assets/icons";

const OrderSummary = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  // Function to increment the count
  const increment = () => setCount(count + 1);

  // Function to decrement the count
  const decrement = () => setCount(count - 1);
  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-primaryBlue  pb-7 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-[521px] data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div>
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold bg-headingBGColor flex items-center justify-between pr-6 pl-10"
                  ></DialogTitle>
                  <div className="mt-2 pt-10 text-white px-4 gap-4 h-[350px] ">
                    <div className="flex items-center justify-center">
                      <div className="bg-white p-3 rounded-full">
                        <Icons.FaCheck color="#7b68ff" size={25} />
                      </div>
                    </div>

                    <div className="flex items-center justify-center mt-3 pb-4 border-b border-headingSecondaryColor">
                      <h2 className="text-xl text-white font-normal">
                        Table Booked {" "}
                        <span className="text-[#7B68FF]">Successfully</span>
                      </h2>
                    </div>
                    <div className="flex items-center gap-4 justify-center mt-3  py-6  border-b border-headingSecondaryColor">
                      <div className="flex items-center gap-2">
                        <Icons.CiCalendar
                          size={22}
                          className="text-headingSecondaryColor"
                        />
                        <h2 className="text-lg font-normal ">
                          17 December 2022 | 12:15 PM
                        </h2>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icons.HiUsers
                          size={22}
                          className="text-headingSecondaryColor"
                        />
                        <h2 className="text-lg font-normal ">
                          2 Guests
                        </h2>
                      </div>
                    </div>
                    <h2 className="text-base font-normal text-center pt-6">
                    You saved $5 on this Booking
                      </h2>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <div className="bg-primaryBlue text-white py-5 rounded-lg shadow-md h-max">
        <div className="bg-headingBGColor py-2 px-4 ">
          <h2 className="text-lg font-medium">Orders Summary</h2>
          <p className="text-sm mb-4">Track the Placed Orders</p>
        </div>
        <div className="mt-6 mx-3">
          <div className="grid grid-cols-[1fr_2fr]  gap-5 items-center bg-secondaryBlue p-4 rounded-lg border">
            <img
              src={Images.chicken1}
              className="w-[121px] h-[85px] rounded-lg"
            />
            <div>
              <h3 className=" text-white font-medium">
                Chicken curry special with cucumber
              </h3>
              <p className="text-xs text-white ">(456 reviews)</p>
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
            <h2 className="text-lg text-white">Sub Total</h2>
            <h2 className="text-lg text-white">1001$</h2>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h2 className="text-lg text-white">Standard Delivery</h2>
            <h2 className="text-lg text-white">1001$</h2>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h2 className="text-lg text-white">Service Fee</h2>
            <h2 className="text-lg text-white">1001$</h2>
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
