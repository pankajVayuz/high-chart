import LineChart from "./components/LineChart";
import ColumnChart from "./components/ColumnChart";
import SolarEmploymentChart from "./components/SolarEmploymentChart ";
import DonutChart from "./components/DonutChart";
import KeyIndices from "./components/keyIndicate/KeyIndices";

function App() {
  return (
    <>
      <h1 className="text-red-500 text-center text-3xl mt-4">Dashboard</h1>
      <div className="flex flex-col gep-4 mb-8">
        <KeyIndices />
        <ColumnChart />
        <LineChart />
        <SolarEmploymentChart />
        <DonutChart
          availableMargin={11000000}
          marginUsed={80000}
          withdrawal={10920000}
        />
      </div>
    </>
  );
}

export default App;
