import Card from "./Card";
import { useEffect, useState } from "react";
import Chance from "chance";

const KeyIndices = () => {
  const [data, setData] = useState([]);

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  

  

  // Function to generate dummy data
  const generateDummyData = () => {
    const currentDate = new Date();
    const chance = new Chance();
    const dummyData = [];

    for (let i = 0; i < 20; i++) {
      const chartData = [];
      for (let j = 0; j < 8; j++) {
        chartData.push(Math.random() * 10000);
      }

      dummyData.push({
        date: currentDate.toLocaleDateString(),
        indexValue: (Math.random() * 1000).toFixed(2),
        changeRate: (Math.random() * 10 - 5).toFixed(2), // Generating a random change rate between -5 to 5
        chartData: chartData,
        title: chance.word(), // Generating a random title using Chance library
      });

      currentDate.setDate(currentDate.getDate() - 1); // Moving to the previous day
    }

    // Sort the generated data based on indexValue
    dummyData.sort((a, b) => parseFloat(b.indexValue) - parseFloat(a.indexValue));

    return dummyData;
  };

  useEffect(() => {
    const intervalID = setInterval(function () {
      const newData = generateDummyData();
      setData(newData);
    }, 3000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full md:w-1/2  p-2">
          <hr />
          <div className="flex justify-between p-2">
            <span className="text-gray-500 font-semibold text-gray-400">
              KEY INDICES
            </span>
            <span className="text-gray-500 font-semibold text-gray-400">
              PRICE
            </span>
          </div>
          <hr />

          {data &&
            data.map((value, index) => (
              <Card
                key={index}
                indexValue={value.indexValue}
                changeRate={value.changeRate}
                chartData={value.chartData}
                title={capitalize(value.title)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default KeyIndices;
