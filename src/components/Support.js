const Support = () => {
  return (
    <div className="mt-2 border-t-2  mt-6">
      <div className="font-bold py-2 ">Get Started with Support</div>
      <div className="flex gap-3 border-b-2 pb-6">
        <div
          style={{ color: "white", backgroundColor: "#a855f7" }}
          className=" w-1/3 p-2 rounded-lg"
        >
          <div className="font-bold text-lg p-4">
            Learn How to use GrowZ <br />
            AutoPilot efficiently.
          </div>
          <div className="flex items-center border-2 max-w-28 m-4 p-2 rounded-lg">
            Take Me &nbsp;
            <span style={{ fontSize: "16px" }} class="material-icons-outlined">
              arrow_forward
            </span>
          </div>
        </div>
        <div
          style={{ color: "white", backgroundColor: "#fbbf24" }}
          className=" w-1/3 p-2 rounded-lg"
        >
          <div className="font-bold text-lg p-4">
            Learn How to Monitor <br />
            AutoPilot Campaigns.
          </div>
          <div className="flex items-center border-2 max-w-28 m-4 p-2 rounded-lg">
            Take Me &nbsp;
            <span style={{ fontSize: "16px" }} class="material-icons-outlined">
              arrow_forward
            </span>
          </div>
        </div>
        <div
          style={{ color: "black", backgroundColor: "white" }}
          className=" w-1/3 p-2 rounded-lg"
        >
          <div className=" p-4">
            <p className="font-bold text-lg">SellerGeni Connect</p>
            <p className="text-sm">
              Join our growing community of users, experts and support
              executives.
            </p>
          </div>
          <div
            style={{ color: "white", backgroundColor: "blue" }}
            className="flex items-center border-2 max-w-52 m-3 p-2 rounded-lg"
          >
            Go To Support Forum &nbsp;
            <span style={{ fontSize: "16px" }} class="material-icons-outlined">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
