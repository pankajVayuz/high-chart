import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const MaxPainChart = () => {

  const sequenceArray = [];
for (let i = 16050; i <= 18250; i += 100) {
  sequenceArray.push(i);
}
console.log(sequenceArray);

  // Sample data for demonstration
  // const strikePrices = ['36000', '36100', '36200', '36300', '36400', '36500','36600','36700','36800','36900','40000'];
  const strikePrices = sequenceArray
  const putPainData = [6000000, 5500000, 5000000, 4500000, 4000000, 3500000,3000000,2500000,2000000,1500000,1000000,90000,80000,70000,60000,50000,40000,30000,20000,19000,18000,17000,16000,170000];
  const callPainData = [16000, 17000, 18000, 19000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000, 5500000, 6000000]



  // Format data for dual y-axis
  const dualAxisData = strikePrices.map((strikePrice, index) => ({
    x: index,
    y0: putPainData[index],
    y1: callPainData[index]
  }));

  // Options for the chart
  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Max Pain Chart for Bank Nifty'
    },
    xAxis: {
      categories: strikePrices,
      title: {
        text: ''
      }
    },
    yAxis: [{
      title: {
        text: 'Volume'
      }
    }, {
      opposite: true,
      title: {
        text: 'Volume'
      }
    }],
    series: [{
      name: 'Call Pain',
      data: dualAxisData.map(data => data.y1),
      color: 'red',
      yAxis: 1 // Displayed on the opposite side
    }, {
      name: 'Put Pain',
      data: dualAxisData.map(data => data.y0),
      color: 'green'
    }],
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
    credits: {
      enabled: false
    },
    annotations: [{
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 2,
          y: putPainData[2] + callPainData[2],
          yAxis: putPainData[2] + 5000
        },
        text: 'Max Pain Strike Price: 36200'
      }, {
        point: {
          xAxis: 0,
          yAxis: 1,
          x: 4,
          y: callPainData[4],
        },
        text: '40000 Call (OTM)'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 0,
          y: putPainData[0],
        },
        text: '32800 Put (OTM)'
      }]
    }]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default MaxPainChart;
