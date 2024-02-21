const BudgetAndGrowth = () => {
  return (
    <div className="mt-4 border-t-2">
      <div className=" flex mt-5">
        <div className="w-1/3">
          <div className="font-bold py-2 ">Budget Report</div>
          <div className="border-2 rounded-md bg-white">
            <table className="border-collapse table-auto text-sm font-medium w-full">
              <tr className="border-b-2 ">
                <td className="py-4 px-2">Budget utilization(%)</td>
                <td className="py-4 px-2 text-right">Campaign Count</td>
              </tr>
              <tr>
                <td className="py-3 px-2">90-100%</td>
                <td className="py-3 px-2 text-right">2</td>
              </tr>
              <tr>
                <td className="py-3 px-2">80-90%</td>
                <td className="py-3 px-2 text-right">1</td>
              </tr>
              <tr>
                <td className="py-3 px-2">20-80%</td>
                <td className="py-3 px-2 text-right">5</td>
              </tr>
              <tr>
                <td className="py-3 px-2">0-20%</td>
                <td className="py-3 px-2 text-right">1</td>
              </tr>
              <tr className="border-t-2">
                <td></td>
                <td
                  style={{ color: "#c026d3" }}
                  className="py-4 px-2 text-right flex items-center justify-end"
                >
                  View Campaigns&nbsp;
                  <span
                    style={{ fontSize: "14px" }}
                    class="material-icons-outlined"
                  >
                    arrow_forward
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div className="ml-4 w-2/3 ">
          <div className="font-bold py-2">Growth Readiness Report</div>
          <div className="bg-white border-2 rounded-md p-2">
            <div className="mt-3 px-2">
              <span className="text-lg font-bold">20%</span>&nbsp;
              <span className="text-sm font-medium">growth readiness</span>
            </div>
            <div className="flex border-b-2 py-2 mx-2">
              <div
                class="h-4 w-1/3 dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "#1d4ed8" }}
              ></div>
              <div
                class="h-4 w-2/3 dark:ring-1 dark:ring-inset dark:ring-white/10"
                style={{ backgroundColor: "#d1d5db" }}
              ></div>
            </div>
            <div className="text-sm font-medium m-2">
              <div className="flex justify-between py-2">
                <div className="flex items-center">
                  <span
                    style={{ backgroundColor: "#22c55e" }}
                    className="inline-block w-3 h-3 rounded-full mr-2"
                  ></span>
                  <span>Are Sponsored Product Ads running?</span>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="flex justify-between py-2">
                <div className="flex items-center">
                  <span
                    style={{ backgroundColor: "#ef4444" }}
                    className="inline-block w-3 h-3 rounded-full mr-2"
                  ></span>
                  <span>Are Sponsored Brand Ads running?</span>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="flex justify-between py-2">
                <div className="flex items-center">
                  <span
                    style={{ backgroundColor: "#ef4444" }}
                    className="inline-block w-3 h-3 rounded-full mr-2"
                  ></span>
                  <span>Are Sponsored Brand Video Ads running?</span>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="flex justify-between py-2">
                <div className="flex items-center">
                  <span
                    style={{ backgroundColor: "#ef4444" }}
                    className="inline-block w-3 h-3 rounded-full mr-2"
                  ></span>
                  <span>Are Sponsored Display Ads running?</span>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="flex justify-between py-2">
                <div className="flex items-center">
                  <span
                    style={{ backgroundColor: "#ef4444" }}
                    className="inline-block w-3 h-3 rounded-full mr-2"
                  ></span>
                  <span>Do you have an active Store on Amazon</span>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetAndGrowth;
