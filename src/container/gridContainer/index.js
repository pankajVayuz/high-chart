import React from "react";
import { Route, Routes} from "react-router-dom";
import Navbar from "../../components/navbar";
import gridRoutes from "../../routes/gridRouts";
import GridNavbar from "../../components/navbar/GridNavar";
import LazyLoadingHOC from "../../components/hocComponents/LazyLoadingHOC";
import NotFound from "../../page/notFound";

const GridContainer = () => {
    const Grid1 = LazyLoadingHOC(() => import("../../page/grids/grid1"));

  return (
    <>
      <Navbar />
      <GridNavbar/>
      <div className="p-4 dark:text-white">
        <div className="min-h-[calc(100vh-130px)] max-w-[77rem] mx-auto">
          <Routes>
            {gridRoutes?.map((el) => {
              return (
                <Route key={el.path} path={el.path} element={<el.element />} />
              );
            })}
            <Route index="grids/grid1" element={<Grid1 />} />
            <Route path="*" element={<NotFound/>} />

          
          
          </Routes>
        </div>
      </div>
    </>
  );
};

export default GridContainer;
