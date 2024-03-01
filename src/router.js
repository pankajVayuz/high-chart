import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ChartContainer from "./container/chartContainer";
import { routes } from "./routes";
import GridContainer from "./container/gridContainer";
import NotFound from "./page/notFound";
import UserContainer from "./container/usersContainer";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((i) => {
          return <Route key={i.path} path={i.path} element={<i.element />} />;
        })}
        <Route path={"/charts/*"} element={<ChartContainer />} />
        <Route path={"/grids/*"} element={<GridContainer/>} />
        <Route path={"/users/*"} element={<UserContainer/>} />
        <Route path={"*"} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterConfig;
