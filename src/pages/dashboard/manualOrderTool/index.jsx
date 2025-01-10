import DashboardLayout from "../../../layouts/dashboardLayout";
import OrderSummary from "./orderSummary";
import PopularItems from "./popularItems";
import SeatingArea from "./sittingArea";

const ManualOrderTool=()=>{
return(
    <DashboardLayout>
        <div className="  p-8 text-secondaryBlue">
      <div className="grid grid-cols-2 gap-8">
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