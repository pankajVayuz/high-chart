import LazyLoadingHOC from "../../components/hocComponents/LazyLoadingHOC";

const userList = LazyLoadingHOC(() => import("../../page/users"));


const usersRoutes = [
  {
    path: "/userslist",
    element: userList,
  }
  
];

export default usersRoutes;
