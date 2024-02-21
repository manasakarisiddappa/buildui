import CardData from "./CardData";

const Card = () => {
  return (
    <div className="flex">
      <div className="border-2 shadow-sm w-1/3 p-4 rounded-md bg-white mr-3">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <div className="font-semibold">Performace</div>
          <div>
            <span style={{ fontSize: "16px" }} class="material-icons-outlined">
              arrow_forward
            </span>
          </div>
        </div>
        <CardData
          heading="AdSales"
          price="₹19,450"
          percentage="-74.26%"
          sale="₹75,560"
        />
        <CardData
          heading="AdSpend"
          price="₹8,006"
          percentage="-46.93%"
          sale="₹15,080"
        />
        <CardData
          heading="ROAS"
          price="2.43"
          percentage="-51.51%"
          sale="5.01"
        />
        <CardData
          heading="Total Sales"
          price="₹42,450"
          percentage="-62.77%"
          sale="₹1,14,000"
        />
      </div>
      <div className="border-2 shadow-sm w-1/3 p-4 rounded-md bg-white mr-3">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <div className="font-semibold">Efficiency</div>
          <div>
            <span style={{ fontSize: "16px" }} class="material-icons-outlined">
              arrow_forward
            </span>
          </div>
        </div>
        <CardData
          heading="ACOS"
          price="41.17%"
          percentage="-106.22%"
          sale="19.96%"
        />
        <CardData
          heading="CPC"
          price="₹8.837"
          percentage="21.26%"
          sale="₹7.287"
        />
        <CardData
          heading="CVR"
          price="3.53%"
          percentage="-43.76%"
          sale="6.28%"
        />
        <CardData
          heading="TACOS"
          price="18.86%"
          percentage="42.55%"
          sale="13.23%"
        />
      </div>
      <div className="border-2 shadow-sm w-1/3 p-4 rounded-md bg-white">
        <div className="flex justify-between items-center border-b-2 pb-2">
          <div className="font-semibold">Awareness</div>
          <div>
            <span style={{ fontSize: "16px" }} class="material-icons-outlined">
              arrow_forward
            </span>
          </div>
        </div>
        <CardData
          heading="Impressions"
          price="5,59,676"
          percentage="-45.96%"
          sale="10,35,733"
        />
        <CardData
          heading="Clicks"
          price="906"
          percentage="-56.23%"
          sale="2,070"
        />
        <CardData heading="CTR" price="0.16%" percentage="-19%" sale="0.2%" />
        <CardData
          heading="Total Orders"
          price="75"
          percentage="-62.12%"
          sale="198"
        />
      </div>
    </div>
  );
};

export default Card;
