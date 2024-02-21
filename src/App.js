import "./App.css";
import BrandStore from "./components/BrandStore";
import BudgetAndGrowth from "./components/BudgetAndGrowth";
import Card from "./components/Card";
import Graphsection from "./components/Graphsection";
import OrderSummary from "./components/OrderSummary";
import Support from "./components/Support";
function App() {
  return (
    <div className="App">
      <Card />
      <Graphsection />
      <BudgetAndGrowth />
      <BrandStore />
      <OrderSummary />
      <Support />
    </div>
  );
}

export default App;
