import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = ({ availableMargin, marginUsed, withdrawal }) => {
  useEffect(() => {
    // Calculate percentage of available margin
    const percentage = ((marginUsed / availableMargin) * 100).toFixed(2);

    // Initialize Highcharts
    Highcharts.chart('donut-chart', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Margin Overview'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          innerSize: '80%',
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: 'Share',
        data: [
          { name: 'Available Margin', y: availableMargin },
          { name: 'Margin Used', y: marginUsed },
          { name: 'Withdrawal', y: parseFloat(percentage), color: 'red' } // Set withdrawal percentage as data point and color it red
        ]
      }]
    });
  }, [availableMargin, marginUsed, withdrawal]);

  return (
    <div id="donut-chart">
      <HighchartsReact highcharts={Highcharts} />
    </div>
  );
};

export default DonutChart;
