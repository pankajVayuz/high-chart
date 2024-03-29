import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutChart = () => {


 
 const availableMargin=11000000
 const  marginUsed= 80000
 const  withdrawal=10920000

  useEffect(() => {
    // Calculate percentage of available margin
    const percentage = ((marginUsed / availableMargin) * 100).toFixed(2);

    Highcharts.chart("donut-chart", {
      chart: {
        type: "pie",
      },
      title: {
        text: "Margin Overview",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      plotOptions: {
        pie: {
          innerSize: "80%",
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          name: "Share",
          data: [
            { name: "Available Margin", y: availableMargin },
            { name: "Margin Used", y: marginUsed },
            { name: "Withdrawal", y: parseFloat(percentage) }, // Include withdrawal percentage as data point
            { name: "Withdrawal Value", y: withdrawal, color: "red" }, // Include withdrawal value as data point and color it red
          ],
        },
      ],
    });
  }, [availableMargin, marginUsed, withdrawal]);

  return (
    <div id="donut-chart">
      <HighchartsReact highcharts={Highcharts} />
    </div>
  );
};

export default DonutChart;
