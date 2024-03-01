import React from "react";
import { Route, Routes} from "react-router-dom";
import Navbar from "../../components/navbar";
import gridRoutes from "../../routes/gridRouts";
import GridNavbar from "../../components/navbar/GridNavar";
import LazyLoadingHOC from "../../components/hocComponents/LazyLoadingHOC";
import NotFound from "../../page/notFound";
import usersRoutes from "../../routes/userRouts";

const UserContainer = () => {
    const userList = LazyLoadingHOC(() => import("../../page/users/index"));

  return (
    <>
      <Navbar />
      <GridNavbar/>
      <div className="p-4 dark:text-white">
        <div className="min-h-[calc(100vh-130px)] max-w-[77rem] mx-auto">
          <Routes>
            {usersRoutes?.map((el) => {
              return (
                <Route key={el.path} path={el.path} element={<el.element />} />
              );
            })}
            <Route index="users/userlist" element={<userList />} />
            <Route path="*" element={<NotFound/>} />

          
          
          </Routes>
        </div>
      </div>
    </>
  );
};

export default UserContainer;
