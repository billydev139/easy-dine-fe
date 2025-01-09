import Images from "../../../assets/images";


const OrderSummary = () => {
  return (
    <div className="bg-white text-white py-5 rounded-lg shadow-md h-max">
        <div className="bg-headingBGColor py-2 px-4 ">
      <h2 className="text-lg font-medium">Orders Summary</h2>
      <p className="text-sm mb-4">Track the Placed Orders</p>
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
      <button className="w-full  mt-4 p-3 bg-secondaryBlue rounded text-sm text-gray-400 cursor-not-allowed">
        Submit Order
      </button>
      </div>
    </div>
  );
};

export default OrderSummary;
