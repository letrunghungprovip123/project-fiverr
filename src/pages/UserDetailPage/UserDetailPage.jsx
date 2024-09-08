import React from "react";
import InforDetail from "../../components/UserDetailComponent/InforDetail";
import ContentDetail from "../../components/UserDetailComponent/ContentDetail";
import { Outlet } from "react-router-dom";
import UserNav from "../../components/UserNav/UserNav";
const UserDetailPage = () => {
  return (
    <>
    <UserNav/>
      <div className="container py-10 px-5 sm:px-3 lg:px-5 overflow-scroll scrollbar-hide">
        <div className="block xl:flex gap-10">
          <div className=" lg:mx-5 w-full xl:w-[30%] py-5 px-10 box-shadow">
            <InforDetail />
          </div>
          <div className="mt-10 xl:mt-0 w-full xl:w-[70%] h-[300px] pl-0 xl:pl-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
