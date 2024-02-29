import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = ({ rate, chartData }) => {
  const color = rate < 0 ? 'red' : 'green';

  const options = {
    chart: {
      type: 'line',
      height: 70,
      width: 100,
    },
    title: {
      text: null,
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
        shadow: {
          color: 'rgba(0,0,0,0.3)',
          offsetX: 1,
          offsetY: 1,
          opacity: 0.8,
          width: 10,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '8px',
        padding: '2px',
      },
      backgroundColor: 'rgba(255, 255, 255, 0)',
      width: 36, // Adjust tooltip width as needed
      height: 36, // Adjust tooltip height as needed
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
