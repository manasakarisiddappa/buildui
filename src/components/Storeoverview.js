import Tooltip from "@mui/material/Tooltip";

const Storeoverview = () => {
  return (
    <div className="p-3 ml-4 w-1/4 flex flex-col justify-center items-start">
      <div className="font-semibold text-xs">Store overview</div>
      <div className="text-xs mt-4">Total Order</div>
      <div className="flex items-center">
        <span className="text-lg font-bold">75</span> &nbsp;
        <span
          style={{ color: "#dc2626", fontSize: "18px" }}
          class="material-icons-outlined"
        >
          arrow_downward
        </span>
        <span style={{ color: "#dc2626" }} className="text-xs font-bold">
          -62.12%
        </span>
      </div>
      <div className="text-xs mt-2">Avg Order Value</div>
      <div>
        <span className="text-lg font-bold">₹566</span> &nbsp;
        <span
          style={{ color: "#166534", fontSize: "16px" }}
          class="material-icons-outlined"
        >
          arrow_upward
        </span>
        <span style={{ color: "#166534" }}>1.01%</span>
      </div>
      <div className="text-xs mt-2">Total number of products</div>
      <div
        style={{ color: "#c026d3" }}
        className="text-lg font-bold flex items-center"
      >
        28&nbsp;
        <span style={{ fontSize: "16px" }} class="material-icons-outlined">
          north_east
        </span>
      </div>
      <div className="text-xs mt-2">Total number of Campaigns</div>
      <div
        style={{ color: "#c026d3" }}
        className="text-lg font-bold flex items-center"
      >
        4&nbsp;
        <span style={{ fontSize: "16px" }} class="material-icons-outlined">
          north_east
        </span>
      </div>
      <div className="border-2 p-2 mt-2 rounded-md w-full">
        <div className="font-semibold text-xs">Account Health Rating </div>
        <div className="flex mt-6 border-b-2 pb-2">
          <div
            class="h-3 w-10 dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-1/3"
            style={{ backgroundColor: "#b91c1c" }}
          ></div>
          <div
            class="h-3 w-10 dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-1/3"
            style={{ backgroundColor: "#facc15" }}
          ></div>
          <div
            class="h-3 w-10 dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-1/3"
            style={{ backgroundColor: "#4d7c0f" }}
          ></div>
        </div>
        <div
          className="text-xs flex items-center mt-2 justify-end font-semibold"
          style={{ color: "#c026d3" }}
        >
          View Report&nbsp;
          <span style={{ fontSize: "14px" }} class="material-icons-outlined">
            arrow_forward
          </span>
        </div>
      </div>
    </div>
  );
};

export default Storeoverview;
