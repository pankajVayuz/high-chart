import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import chartRoutes from "../../routes/chartRouts";
import Navbar from "../../components/navbar";
import LazyLoadingHOC from "../../components/hocComponents/LazyLoadingHOC";
import ChartNavbar from "../../components/navbar/ChartNavbar";
import NotFound from "../../page/notFound";

const ChartContainer = () => {
  const Chart1 = LazyLoadingHOC(() => import("../../page/charts/livescoreboard"));


  return (
    <>
      <Navbar />
      <ChartNavbar/>
      <div className="p-4 dark:text-white">
        <div className="min-h-[calc(100vh-130px)] max-w-[77rem] mx-auto">
          <Routes>
            {chartRoutes?.map((el) => {
              return (
                <Route key={el.path} path={el.path} element={<el.element />} />
              );
            })}
            <Route index="charts/scoreboard" element={<Chart1 />} />
            <Route path="*" element={<NotFound/>} />
                   
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ChartContainer;
