const OrderSummary = () => {
  return (
    <div className="mt-4">
      <div className="font-bold py-2">Order Summary</div>
      <div className="bg-white border-2 rounded-md py-2 px-2">
        <div className="flex p-3 justify-between text-sm font-semibold">
          <div className="flex">
            <div className="flex items-center border-2 px-1 py-2 rounded-md border-gray-400 mr-3">
              <span
                style={{ color: "#a8a29e" }}
                class="material-icons-outlined"
              >
                search
              </span>
              <input type="text" placeholder="Search Products" />
            </div>
            <div className="flex items-center border-2 rounded-md border-gray-400 px-1 py-2">
              <span class="material-icons-outlined">filter_list</span>
              <span>Filter</span>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center border-2 rounded-md border-gray-400 px-1 py-2 mr-3">
              <span class="material-icons-outlined">view_column</span>
              <span>Columns</span>
            </div>
            <div className="flex items-center border-2 rounded-md border-gray-400 px-1 py-2">
              <span class="material-icons-outlined">calendar_today</span>
              <span>10 Feb 24 to 16 Feb 24</span>
            </div>
          </div>
        </div>
        <table className="border-collapse table-auto text-sm font-medium ">
          <tr style={{ color: "#9ca3af" }} className="">
            <td className="py-4 px-2 border-2 w-1/4">Product</td>
            <td className="py-4 px-2 border-2 w-1/4">Asin/SKU</td>
            <td className="py-4 px-2 border-2 w-40 flex items-center">
              Sales(₹) &nbsp;
              <span
                style={{ color: "black", fontSize: "16px" }}
                class="material-icons-outlined"
              >
                arrow_downward
              </span>
            </td>
            <td className="py-4 px-2 border-2 w-40">Sales (%)</td>
            <td className="py-4 px-2 border-2 w-40">AdSpend (₹)</td>
            <td className="py-4 px-2 border-2 w-40">AdSpend (%)</td>
            <td className="py-4 px-2 border-2 w-40">ACOS (%)</td>
          </tr>
          <tr className="border-b-2">
            <td>
              Cadlec Crystal 1.5 Liters Electric kettle | Stainless Steel |
              Automatic
            </td>
            <td className="py-6 px-2 border-r-2">BOCR7JC2VQ / Crystal 115</td>
            <td className="py-6 px-2">11,251</td>
            <td className="py-6 px-2">57.85%</td>
            <td className="py-6 px-2">3,567.18</td>
            <td className="py-6 px-2">44.64%</td>
            <td className="py-6 px-2">31.71</td>
          </tr>
          <tr className="border-b-2">
            <td className="py-6 px-2">
              Cadlec Crystal 1.8 Liters Electric kettle | Stainless Steel Body |
            </td>
            <td className="py-6 px-2 border-r-2">BOCK8MTV6M / AquaHeat 018</td>
            <td className="py-6 px-2">8,197</td>
            <td className="py-6 px-2">42.15%</td>
            <td className="py-6 px-2">4,422.97</td>
            <td className="py-6 px-2">55.36%</td>
            <td className="py-6 px-2">53.96</td>
          </tr>
        </table>
        <div className="flex justify-end items-center mt-2 text-sm">
          <span>Go to page:</span>
          <span className="border-2 px-2 py-1 rounded-md border-gray-400 mr-2">
            1
          </span>
          <span className="border-2 px-2 py-1  rounded-md border-gray-400 mr-2">
            Show 8
          </span>
          <span>Page 1 of 1</span>
          <div className="border-2 px-2 py-1  rounded-md border-gray-400 mr-2 ml-2">
            <span style={{ fontSize: "16px" }} class="material-icons-outlined">
              chevron_left
            </span>
          </div>
          <div className="border-2 px-2 py-1  rounded-md border-gray-400 mr-2">
            <span style={{ fontSize: "16px" }} class="material-icons-outlined">
              chevron_right
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
