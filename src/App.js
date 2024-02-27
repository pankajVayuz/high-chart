

import LineChart from './components/LineChart';
import ColumnChart from './components/ColumnChart';
import SolarEmploymentChart from './components/SolarEmploymentChart ';
import DonutChart from './components/DonutChart';
import StockChartComponent from './components/StockChartComponent ';
import IntradayStockChart from './components/IntradayStockChart ';
import MaxPainChart from './components/MaxPainChart ';



function App() {

  
  return (
   <>
    <h1 className="text-red-500 text-center text-3xl mt-4">Dashboard</h1>
    <div className='flex flex-col gep-4'>
  <ColumnChart/>
  <LineChart/>
  <SolarEmploymentChart />
  <DonutChart
  availableMargin={11000000}
  marginUsed={110000}
  withdrawal={10920000}
/>
  {/* <StockChartComponent/> */}
  {/* <IntradayStockChart/> */}
  {/* <MaxPainChart/> */}
  

</div>
   </>
  );
}

export default App;
