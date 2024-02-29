import React from 'react'
import { GiBull } from "react-icons/gi";
import { GiPolarBear } from "react-icons/gi";
import LiveRandomDataChart from './LiveRandomDataChart ';

const Card = ({title,indexValue,changeRate,chartData}) => {

  
  return (
   <>
  <div className='flex justify-between items-center'>
  <div className='flex flex-col gap-4 p-2 '>
  <span className='font-semibold'>{title}</span>
   {changeRate<0?<div className={changeRate <0?'w-28 h-8 p-2 bg-red-100 rounded-md flex items-center gap-2':'w-28 h-8 p-2 bg-blue-100 rounded-md flex items-center gap-2'}><GiPolarBear className='text-red-700 font-bold' /><span className='font-bold text-red-700'>BEARISH</span></div>:<div className='w-28 h-8 p-2 bg-blue-100 rounded-md flex items-center gap-2'><GiBull className='text-green-700 font-bold' /><span className='font-bold text-green-700'>BULLISH</span></div>}
  </div>
  <div> <LiveRandomDataChart rate={changeRate} chartData={chartData}/> </div>
  <div className='flex flex-col gap-4 p-2'>
   <span className='font-semibold'>{indexValue}</span>
   <span className={changeRate <0? 'font-semibold text-red-600':'font-semibold text-green-600'}>{changeRate<0?"":"+"} {changeRate}</span>

  </div>

  </div>
  <hr />

   </>
  )
}

export default Card