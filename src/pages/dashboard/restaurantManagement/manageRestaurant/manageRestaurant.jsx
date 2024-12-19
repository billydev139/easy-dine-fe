import  { useState } from "react";
import DashboardLayout from "../../../../layouts/dashboardLayout";
import Icons from "../../../../assets/icons";

const ManageRestaurants = () => {
    const [data2] = useState([
        {
          contact: "7025556960",
          manageraddress: "6080 Steubenville Pike",
          website: "freesourcecodes.com",
          seating: "112 People",
        },
        {
          contact: "7025556960",
          manageraddress: "An den Wulzen 7",
          website: "gmel.com",
          seating: "112 People",
        },
        {
          contact: "7025556960",
          manageraddress: "Red Stiletto Restaurant",
          website: "codes.com",
          seating: "112 People",
        },
        {
          contact: "7025556960",
          manageraddress: "1663 Small Street",
          website: "gamil.com",
          seating: "112 People",
        },
        {
          contact: "7025556960",
          manageraddress: "4512 Hamilton Drive",
          website: "fmieaes.com",
          seating: "112 People",
        },
        {
          contact: "7025556960",
          manageraddress: "1058 Buffalo Creek Road",
          website: "fremmail.com",
          seating: "112 People",
        },
        {
          contact: "7025556960",
          manageraddress: "1831 Flint Street",
          website: "email.com",
          seating: "112 People",
        },
        {
          contact: "7025556960",
          manageraddress: "2560 Primrose Lane",
          website: "meailscodes.com",
          seating: "112 People",
        },
        {
          contact: "7025556960",
          manageraddress: "1720 Diane Street",
          website: "freesourcecodes.com",
          seating: "112 People",
        },
        {
          contact: "7025556960",
          manageraddress: "2164 Southside Lane",
          website: "freesourcecodes.com",
          seating: "112 People",
        },
      ]);
  const [data] = useState([
    { name: "Red Stiletto Restaurant", address: "6080 Steubenville Pike", email: "tgnzl@freesourcecodes.com", status: "Active", manager: "Mr John" },
    { name: "The Nouveau Table", address: "An den Wulzen 7", email: "tgnzl@gmel.com", status: "Active", manager: "Mr Smith" },
    { name: "Red Stiletto Restaurant", address: "Red Stiletto Restaurant", email: "iendnx@codes.com", status: "Active", manager: "Mr Johnson" },
    { name: "The Nouveau Table", address: "1663 Small Street", email: "poensu@gamil.com", status: "Active", manager: "Mr John" },
    { name: "The Winstonian", address: "4512 Hamilton Drive", email: "sdafafa@fmieaes.com", status: "Active", manager: "Mr Johnson" },
    { name: "Fauna Kitchen", address: "1058 Buffalo Creek Road", email: "tgnzl@fremmail.com", status: "Not Active", manager: "Mr Johnson" },
    { name: "The Nouveau Table", address: "1831 Flint Street", email: "opeio@email.com", status: "Not Active", manager: "Mr Johnson" },
    { name: "Duke's Table", address: "2560 Primrose Lane", email: "tgnzl@meailscodes.com", status: "Active", manager: "Mr Johnson" },
    { name: "Alpine-Style Cuisine", address: "1720 Diane Street", email: "tgnzl@freesourcecodes.com", status: "Active", manager: "Mr Johnson" },
    { name: "The Nouveau Table", address: "2164 Southside Lane", email: "tgnzl@freesourcecodes.com", status: "Active", manager: "Mr Johnson" },
  ],...data2);
  console.log("🚀 ~ ManageRestaurants ~ data:", data)
  const combinedData = data.map((item, index) => ({
      ...item,
      ...data2[index],
    }));
    console.log("🚀 ~ combinedData ~ combinedData:", combinedData)
  const [perPage, setPerPage] = useState(10);

  return (
    <DashboardLayout>
    <div className="bg-primaryBlue  text-white">
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full my-8 text-sm text-left border bg-primaryBlue border-gray-700   ">
        <thead className="bg-[#150F43] font-semibold text-gray-300 ">
          <tr>
            <th className="px-4 py-2">Restaurant Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Manager Name</th>
            <th className="px-4 py-2">Manager Contact</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Website</th>
              <th className="px-4 py-2">Seating</th>
              <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {combinedData.slice(0, perPage).map((row, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.address}</td>
              <td className="px-4 py-2">{row.email}</td>
              <td
                className={`px-4 py-2 ${
                  row.status === "Active" ? "text-green-500" : "text-red-500"
                }`}
              >
                {row.status}
              </td>
              <td className="px-4 py-2">{row.manager}</td>
              <td className="px-4 py-2">{row.contact}</td>
                <td className="px-4 py-2">{row.address}</td>
                <td className="px-4 py-2">{row.website}</td>
                <td className="px-4 py-2">{row.seating}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="text-green-500 hover:text-green-700">
                    <Icons.FaRegEdit/>
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                  <Icons.RiDeleteBin6Line/>
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="flex justify-end items-center gap-4 py-8">
        <div className="text-gray-400">
          Results Per Page:
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="ml-2 bg-gray-700 border border-gray-600 text-gray-300 py-1 px-2 rounded"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>

        <div className="text-gray-400">
          Showing 1-{perPage} of {data.length}
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
};

export default ManageRestaurants;
