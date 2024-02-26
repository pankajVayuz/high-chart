import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MaxPainChart = () => {
  const [maxPainData, setMaxPainData] = useState([]);

  useEffect(() => {
    // Dummy Nifty-50 options data including put and call options
    const dummyOptionsData = [
      { expiry: '2024-02-29', maxPainPut: 14000, maxPainCall: 15500, putData: [13500, 13800, 14000, 14200], callData: [15200, 15500, 15800, 16000] },
      { expiry: '2024-03-31', maxPainPut: 14500, maxPainCall: 16000, putData: [14000, 14200, 14500, 14800], callData: [15700, 16000, 16300, 16500] },
      { expiry: '2024-04-30', maxPainPut: 15000, maxPainCall: 15500, putData: [14500, 14800, 15000, 15200], callData: [15200, 15500, 15800, 16000] },
      { expiry: '2024-05-31', maxPainPut: 14800, maxPainCall: 15800, putData: [14300, 14600, 14800, 15000], callData: [15500, 15800, 16100, 16300] },
      { expiry: '2024-06-30', maxPainPut: 14750, maxPainCall: 15750, putData: [14200, 14500, 14750, 15000], callData: [15300, 15750, 16000, 16200] },
    ];

    setMaxPainData(dummyOptionsData);
  }, []);

  // Highcharts configuration object for column chart
  const options = {
    title: {
      text: 'Nifty-50 Max Pain Chart',
    },
    xAxis: {
      type: 'category',
      title: {
        text: 'Expiry Dates',
      },
    },
    yAxis: {
      title: {
        text: 'Max Pain Value',
      },
    },
    series: [
      {
        name: 'Max Pain (Put)',
        type: 'column', // Use column chart type
        data: maxPainData.map((item) => [item.expiry, item.maxPainPut]),
      },
      {
        name: 'Max Pain (Call)',
        type: 'column', // Use column chart type
        data: maxPainData.map((item) => [item.expiry, item.maxPainCall]),
      },
      {
        name: 'Put Options Data',
        type: 'line', // Use line chart type
        data: maxPainData[0].putData, // Example data for the first expiry
      },
      {
        name: 'Call Options Data',
        type: 'line', // Use line chart type
        data: maxPainData[0].callData, // Example data for the first expiry
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default MaxPainChart;
