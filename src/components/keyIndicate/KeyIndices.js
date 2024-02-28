import axios from "axios";

import Card from "./Card";
import { useEffect, useState } from "react";

const KeyIndices = () => {
  const [data, setData] = useState();

  const generateDummyData = () => {
    const currentDate = new Date();
    const dummyData = [];

    for (let i = 0; i < 7; i++) {
      const chartData = [];
      for (let j = 0; j < 7; j++) {
        chartData.push(Math.random() * 10000);
      }

      dummyData.push({
        date: currentDate.toLocaleDateString(),
        indexValue: (Math.random() * 1000).toFixed(2),
        changeRate: (Math.random() * 10 - 5).toFixed(2), // Generating a random change rate between -5 to 5
        chartData: chartData,
      });

      currentDate.setDate(currentDate.getDate() - 1); // Moving to the previous day
    }

    return dummyData;
  };

  const nifty50Data = generateDummyData();

  useEffect(() => {
    if (nifty50Data) {
      setData(nifty50Data);
    }
  }, []);

  console.log("nifty 50 data", data);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full md:w-1/2  p-2">
          <hr />
          <div className="flex justify-between p-2">
            <span className="text-gray-500 font-semibold text-gray-400">KEY INDICES</span>
            <span className="text-gray-500 font-semibold text-gray-400">PRICE</span>
          </div>
          <hr />

          {data &&
            data.map((value) => (
              <Card
                indexValue={value.indexValue}
                changeRate={value.changeRate}
                chartData={value.chartData}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default KeyIndices;
