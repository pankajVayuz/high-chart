import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const IntradayStockChart = () => {
  const [chartOptions, setChartOptions] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchDataAndCreateChart = async () => {
      try {
        // Load the dataset
        const data = await fetch(
          'https://www.highcharts.com/samples/data/new-intraday.json'
        ).then(response => response.json());

        // Create the chart options
        const options = {
          title: {
            text: 'AAPL stock price by minute'
          },
          rangeSelector: {
            buttons: [
              {
                type: 'hour',
                count: 1,
                text: '1h'
              },
              {
                type: 'day',
                count: 1,
                text: '1D'
              },
              {
                type: 'all',
                count: 1,
                text: 'All'
              }
            ],
            selected: 1,
            inputEnabled: false
          },
          series: [
            {
              name: 'AAPL',
              type: 'candlestick',
              data: data,
              tooltip: {
                valueDecimals: 2
              }
            }
          ]
        };

        setChartOptions(options);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataAndCreateChart();
  }, []);

  return (
    <div>
      {chartOptions && (
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{ ref: chartRef }}
        />
      )}
    </div>
  );
};

export default IntradayStockChart;
