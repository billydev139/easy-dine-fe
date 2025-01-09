import DashboardLayout from "../../../layouts/dashboardLayout";
import OrderSummary from "./orderSummary";
import PopularItems from "./popularItems";
import SeatingArea from "./sittingArea";

const ManualOrderTool=()=>{
return(
    <DashboardLayout>
<<<<<<< HEAD
        <div className="  p-8 text-secondaryBlue">
      <div className="grid grid-cols-2 gap-8">
=======
        <div className=" p-8 text-white">
      <div className="grid lg:grid-cols-2 gap-8">
>>>>>>> e859be440cbd069b847a952e8f43ebd95789b43a
        <div className=" space-y-8">
          <SeatingArea />
          <PopularItems />
        </div>
        <OrderSummary />
      </div>
    </div>
    </DashboardLayout>
)
}
export default ManualOrderTool;