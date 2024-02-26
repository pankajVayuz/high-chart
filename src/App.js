

import LineChart from './components/LineChart';
import ColumnChart from './components/ColumnChart';
import SolarEmploymentChart from './components/SolarEmploymentChart ';
import TimelineChart from './components/TimelineChart ';
import StockChartComponent from './components/StockChartComponent ';
import IntradayStockChart from './components/IntradayStockChart ';
import MaxPainChart from './components/MaxPainChart ';



function App() {

  
  return (
   <>
    <h1 className="text-red-500 text-center text-3xl mt-4">Dashboard</h1>
    <div className='flex flex-col gep-4'>
  <LineChart/>
  <SolarEmploymentChart />
  <ColumnChart/>
  <TimelineChart/>
  <StockChartComponent/>
  <IntradayStockChart/>
  <MaxPainChart/>
  

</div>
   </>
  );
}

export default App;
