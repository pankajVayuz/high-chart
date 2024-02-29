import LazyLoadingHOC from "../../components/hocComponents/LazyLoadingHOC";

const Chart1 = LazyLoadingHOC(() => import("../../page/charts/keyIndicate/KeyIndices"));
const Chart2 = LazyLoadingHOC(() => import("../../page/charts/columnChart"));
const Chart3 = LazyLoadingHOC(() => import("../../page/charts/maxPainChart"));
const Chart4 = LazyLoadingHOC(() => import("../../page/charts/donutChart"));
const Chart5 = LazyLoadingHOC(() => import("../../page/charts/intradayStockChart"));
const Chart6 = LazyLoadingHOC(() => import("../../page/charts/lineChart"));
const Chart7 = LazyLoadingHOC(() => import("../../page/charts/stockChart"));
const Chart8 = LazyLoadingHOC(() => import("../../page/charts/solarEmploymentChart"));

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

 ,
];

export default chartRoutes;
