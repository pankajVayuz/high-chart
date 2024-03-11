import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Nifty50Chart = () => {

  const generateDataPoints = () => {
    const startTimestamp = Date.UTC(2024, 1, 27, 9, 50); // Timestamp for 9:50 AM
    const endTimestamp = Date.UTC(2024, 1, 27, 16, 0); // Timestamp for 4:00 PM
    const interval = (endTimestamp - startTimestamp) / 49; // Divide the time range into 50 intervals (50 data points)
  
    let currentTimestamp = startTimestamp;
    const dataPoints = [];
  
    for (let i = 0; i < 50; i++) {
      const niftyValue = Math.floor(Math.random() * (20300 - 20160 + 1)) + 20160; // Random Nifty value between 20160 and 20300
      dataPoints.push([currentTimestamp, niftyValue]);
      currentTimestamp += interval; // Increment timestamp by interval
    }
  
    return dataPoints;
  };
  
  
  const niftyData = generateDataPoints();
  
  const generatePCRDataPoints = () => {
    const startTimestamp = Date.UTC(2024, 1, 27, 9, 50); // Timestamp for 9:50 AM
    const endTimestamp = Date.UTC(2024, 1, 27, 16, 0); // Timestamp for 4:00 PM
    const interval = (endTimestamp - startTimestamp) / 49; // Divide the time range into 50 intervals (50 data points)
  
    let currentTimestamp = startTimestamp;
    const dataPoints = [];
  
    for (let i = 0; i < 50; i++) {
      const pcrValue = (Math.random() * (1.3 - 1.02)) + 1.02; // Random PCR value between 1.02 and 1.3
      dataPoints.push([currentTimestamp, pcrValue]);
      currentTimestamp += interval; // Increment timestamp by interval
    }
  
    return dataPoints;
  };

  const pcrData = generatePCRDataPoints();
 

  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Nifty 50 Data and PCR Comparison for a Single Day'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Time'
      }
    },
    yAxis: [{
      title: {
        text: ''
      }
    }, {
      title: {
        text: ''
      },
      opposite: true
    }],
    series: [ {
      name: 'PCR',
      data: pcrData,
      color: 'skyblue',
      yAxis: 0 
    },{
      name: 'Nifty 50',
      data: niftyData,
      color: 'lightpink', 
      yAxis: 1 
    }],
    credits: {
      enabled: false
    }
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Nifty50Chart;
