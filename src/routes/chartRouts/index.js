import LazyLoadingHOC from "../../components/hocComponents/LazyLoadingHOC";

const Chart1 = LazyLoadingHOC(() => import("../../page/charts/chart1/KeyIndices"));
const Chart2 = LazyLoadingHOC(() => import("../../page/charts/chart2"));
const Chart3 = LazyLoadingHOC(() => import("../../page/charts/chart3"));
const Chart4 = LazyLoadingHOC(() => import("../../page/charts/chart4"));
const Chart5 = LazyLoadingHOC(() => import("../../page/charts/chart5"));
const Chart6 = LazyLoadingHOC(() => import("../../page/charts/chart6"));
const Chart7 = LazyLoadingHOC(() => import("../../page/charts/chart7"));
const Chart8 = LazyLoadingHOC(() => import("../../page/charts/chart8"));
const Chart9 = LazyLoadingHOC(() => import("../../page/charts/livescoreboard"));

const chartRoutes = [
  {
    path: "/chart1",
    element: Chart1,
  },
  {
    path: "/chart2",
    element: Chart2,
  },
  {
    path: "/chart3",
    element: Chart3,
  },
  {
    path: "/chart4",
    element: Chart4,
  },
  {
    path: "/chart5",
    element: Chart5,
  },
  {
    path: "/chart6",
    element: Chart6,
  },
  {
    path: "/chart7",
    element: Chart7,
  },
  {
    path: "/chart8",
    element: Chart8,
  },
  {
    path: "/scoreboard",
    element: Chart9,
  },

 ,
];

export default chartRoutes;
