const BrandStore = () => {
  return (
    <div>
      <div className="font-bold py-2 mt-2">
        Are you making best use of Brand Store?
      </div>
      <div className="bg-white border-2 rounded-md p-2 text-sm font-medium">
        <div className="flex justify-between py-2">
          <div className="flex items-center">
            <span
              style={{ backgroundColor: "#ef4444" }}
              className="inline-block w-3 h-3 rounded-full mr-2"
            ></span>
            <span>
              {" "}
              Is 'Brand Store' Live-to allow entire brand portfolio discovery?
            </span>
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
            <span>
              {" "}
              Is 'Brand Store' Linked to SB Advertising to drive traffic
            </span>
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
            <span> Is 'Brand Store' carrying 3 pages to engage customers</span>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStore;
