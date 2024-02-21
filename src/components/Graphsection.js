import Storeoverview from "./Storeoverview";
import BasicTabs from "./Tabs";

const Graphsection = () => {
  return (
    <div className=" flex bg-white mt-8 shadow-sm rounded-md justify-between border-2">
      <BasicTabs />
      <Storeoverview />
    </div>
  );
};

export default Graphsection;
