import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AdvancedDashboard = () => {
  // Sample large data for different charts
  const lineChartData = [{ name: 'Jan', y: 100 }, { name: 'Feb', y: 200 }, { name: 'Mar', y: 300 }];
  const barChartData = [{ name: 'A', y: 100 }, { name: 'B', y: 200 }, { name: 'C', y: 300 }];
  const pieChartData = [{ name: 'Category A', y: 100 }, { name: 'Category B', y: 200 }, { name: 'Category C', y: 300 }];

  // Initial layout for the widgets
  const [layout, setLayout] = useState([
    { i: 'lineChart', x: 0, y: 0, w: 6, h: 4 },
    { i: 'barChart', x: 6, y: 0, w: 6, h: 4 },
    { i: 'pieChart', x: 0, y: 4, w: 6, h: 4 },
  ]);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Advanced Dashboard</h2>
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={200} width={1200} onLayoutChange={handleLayoutChange}>
        {/* Line Chart Widget */}
        <div key="lineChart" className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Line Chart</h3>
          <HighchartsReact highcharts={Highcharts} options={{ series: [{ data: lineChartData }] }} />
        </div>
        
        {/* Bar Chart Widget */}
        <div key="barChart" className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Bar Chart</h3>
          <HighchartsReact highcharts={Highcharts} options={{ series: [{ data: barChartData }] }} />
        </div>
        
        {/* Pie Chart Widget */}
        <div key="pieChart" className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Pie Chart</h3>
          <HighchartsReact highcharts={Highcharts} options={{ series: [{ data: pieChartData }] }} />
        </div>
      </GridLayout>
    </div>
  );
};

export default AdvancedDashboard;
