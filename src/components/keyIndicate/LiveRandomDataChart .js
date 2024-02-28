import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = ({rate,chartData}) => {
  // Define the rate
//   const rate = 600; // Change this to your desired rate


  const color =  rate<0 ? 'red' : 'green';

  const options = {
    chart: {
      type: 'line',
      height: 64, // Set the height to 64px
      width: 64, // Set the width to 64px
    },
    title: {
      text: null, // Hide the chart title
    },
    xAxis: {
      visible: false, // Hide the x-axis
    },
    yAxis: {
      visible: false, // Hide the y-axis
    },
    legend: {
      enabled: false, // Hide the legend
    },
    credits: {
      enabled: false // Hide the Highcharts logo
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false, // Hide data markers
        },shadow: {
          color: 'rgba(0,0,0,0.3)', // Shadow color
          offsetX: 1, // Horizontal offset
          offsetY: 1, // Vertical offset
          opacity: 0.8, // Shadow opacity
          width: 10 // Shadow width
        }
      },
    },
    series: [{
      data: chartData,
      color: color,
    }],
  };

  return (
    <div style={{ height: '64px', width: '64px' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default LineChart;
