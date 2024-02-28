import axios from "axios";

import Card from "./Card";
import { useEffect, useState } from "react";
let dummyData =[
  {
    date: '28/2/2024',
    indexValue: '497.70',
    changeRate: '3.53',
    chartData: [
      6964.7735402458475,
      4949.7563433412315,
      5762.368885312623,
      5977.565591240348,
      640.0479137717952,
      2899.030164469274,
      3283.7582299150768
    ]
  },
  {
    date: '27/2/2024',
    indexValue: '816.14',
    changeRate: '-4.66',
    chartData: [
      153.79148892966876,
      7897.957654735588,
      2786.84444042175,
      9227.167821095416,
      2837.711441199784,
      2166.6462155750187,
      7972.8266027976515
    ]
  },
  {
    date: '26/2/2024',
    indexValue: '233.02',
    changeRate: '0.74',
    chartData: [
      6182.362168093702,
      7209.776855529788,
      2288.682592375981,
      7762.691102674486,
      3614.1760678434175,
      815.2515389309544,
      6271.144043744074
    ]
  },
  {
    date: '25/2/2024',
    indexValue: '389.67',
    changeRate: '0.57',
    chartData: [
      3422.3711435754776,
      3111.9782238939074,
      9514.062310211613,
      3500.634309465136,
      3728.483865856085,
      6325.025144116127,
      6166.769728436563
    ]
  },
  {
    date: '24/2/2024',
    indexValue: '865.08',
    changeRate: '-1.52',
    chartData: [
      1217.0719475336434,
      4583.966601851186,
      8515.723573252131,
      2019.7804129085762,
      2134.586419292446,
      3368.8978254126755,
      5315.060506321072
    ]
  },
  {
    date: '23/2/2024',
    indexValue: '845.66',
    changeRate: '0.09',
    chartData: [
      5660.194254531781,
      3131.4499385898253,
      8690.08674628001,
      6166.769357001996,
      5954.104493232559,
      4101.969509810295,
      2349.809172041428
    ]
  },
  {
    date: '22/2/2024',
    indexValue: '854.82',
    changeRate: '-3.99',
    chartData: [
      9687.034700856691,
      8684.110249921143,
      8407.402031997937,
      2032.950210299327,
      3067.4441797446607,
      5214.200019655915,
      231.47440547425015
    ]
  }
]

const KeyIndices = () => {
  const [data, setData] = useState(dummyData);

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

  setInterval(function(){
    const newData = generateDummyData();
    
    // nifty50Data.push(newData);
    setData(newData);
    console.log("New data generated:", newData);
}, 5000);


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
