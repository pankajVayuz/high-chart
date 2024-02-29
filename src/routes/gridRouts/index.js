import LazyLoadingHOC from "../../components/hocComponents/LazyLoadingHOC";

const grid1 = LazyLoadingHOC(() => import("../../page/grids/grid1"));
const grid2 = LazyLoadingHOC(() => import("../../page/grids/grid2"));
const grid3 = LazyLoadingHOC(() => import("../../page/grids/grid3"));
const grid4 = LazyLoadingHOC(() => import("../../page/grids/grid4"));
const grid5 = LazyLoadingHOC(() => import("../../page/grids/grid5"));
const grid6 = LazyLoadingHOC(() => import("../../page/grids/grid6"));
const grid7 = LazyLoadingHOC(() => import("../../page/grids/grid7"));
const grid8 = LazyLoadingHOC(() => import("../../page/grids/grid8"));

const gridRoutes = [
  {
    path: "/grid1",
    element: grid1,
  },
  {
    path: "/grid2",
    element: grid2,
  },
  {
    path: "/grid3",
    element: grid3,
  },
  {
    path: "/grid4",
    element: grid4,
  },
  {
    path: "/grid5",
    element: grid5,
  },
  {
    path: "/grid6",
    element: grid6,
  },
  {
    path: "/grid7",
    element: grid7,
  },
  {
    path: "/grid8",
    element: grid8,
  },

 ,
];

export default gridRoutes;
