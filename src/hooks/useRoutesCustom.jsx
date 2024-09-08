// Trang Routes chứa các phần tử để điều hướng

import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../template/userTemplate/UserTemplate";
import PageNotFound from "../components/PageNotFound/PageNotFound"
import { path } from "../common/path";
import LoginPage from "../pages/LoginPage/LoginPage";
import ListJobPage from "../pages/ListJobPage/ListJobPage";
import { Skeleton } from "antd";
import IndexPage from "../pages/IndexPage/IndexPage";
import ListJobType from "../pages/ListJobType/ListJobType";
import JobDetailPage from "../pages/JobDetailPage/JobDetailPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import UserDetailPage from "../pages/UserDetailPage/UserDetailPage";
import { getLocalStorage } from "../utils/util";
import ContentDetail from "../components/UserDetailComponent/ContentDetail";
import UpdateDetail from "../components/UserDetailComponent/UpdateDetail";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homePage,
      element: <UserTemplate />,
      children: [
        {
          index : true,
          element: <IndexPage />
        },
        {
          path: path.listJob,
          element: <ListJobPage />,
        },
        {
          path: path.jobType,
          element: <ListJobType />
        },
        {
          path:path.jobDetail,
          element:<JobDetailPage />
        },
        {
          path : path.userDetail,
          element: getLocalStorage("user") ? <UserDetailPage /> : <PageNotFound />,
          children: [
            {
              index: true,
              element : <ContentDetail />
            },
            {
              path:path.updateDetail,
              element: <UpdateDetail />
            }
            
          ]
        }
      ],
    },
    {
      path: path.pageNotFound,
      element: <PageNotFound />,
    },
    {
      path: path.signIn,
      element: <LoginPage />,
    },
    {
      path: path.signUp,
      element : <SignUpPage />
    }

  ]);
  return routes;
};

export default useRoutesCustom;