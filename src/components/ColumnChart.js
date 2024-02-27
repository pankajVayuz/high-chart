import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart = () => {
  const x =[19800,19900,20000,20100,20200,20300,20400,20500,20600,20700,20800,20900];
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Call and Put chart'
    },
    xAxis: {
      categories: x
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      column: {
        borderRadius: '10%'
      }
    },
    series: [{
      name: 'Total Call Of Change',
      color: 'blue', // Set color to blue
      data: [-20000,-100000,-300000,-100000,-900000,3000000,2000000,3000000,4000000,4600040,6023095,4509830]
    }, {
      name: 'Total Put Of Change',
      color: 'pink', // Set color to pink
      data: [500000,400000,1000000,200000,100000,4000350,-1000000,-2000000,2030000,5000000,3490850,2367094]
    }]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ColumnChart;
