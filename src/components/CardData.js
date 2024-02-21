const CardData = ({ heading, price, percentage, sale }) => {
  return (
    <div className="flex justify-between mt-4 ">
      <div>
        <div className="text-sm">{heading} </div>
        <div className="text-lg font-bold">{price}</div>
        <div className="flex justify-center items-center">
          <span
            style={{ color: "#dc2626", fontSize: "16px" }}
            class="material-icons-outlined"
          >
            arrow_downward
          </span>
          <span style={{ color: "#dc2626" }} className="text-xs">
            {percentage}
          </span>{" "}
          &nbsp;
          <span className="text-xs">vs last 7 days</span> &nbsp;{" "}
          <span className="font-bold text-xs">{sale}</span>
        </div>
      </div>
      <div className="bg-red-200 rounded-full w-10 h-10 flex justify-center items-center">
        <span style={{ color: "#dc2626" }} class="material-icons-outlined">
          trending_down
        </span>
      </div>
    </div>
  );
};

export default CardData;
