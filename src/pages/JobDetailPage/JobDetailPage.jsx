import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { congViecService } from "../../service/congViec.service";
import UserNav from "../../components/UserNav/UserNav";
import Nav from "../../components/JobDetailComponent/Nav";
import InforDetail from "../../components/JobDetailComponent/InforDetail";
const JobDetailPage = () => {
  const [jobDetail, setJobDetail] = useState([]);
  const [seachParam, setSearchParam] = useSearchParams();
  const { pathname } = useLocation();
  useEffect(() => {
    let maCongViec = seachParam.get("MaCongViec");
    congViecService
      .layCongViecTheoMaCongViec(maCongViec)
      .then((res) => {
        setJobDetail(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [seachParam.get("MaCongViec")]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <UserNav />
      <Nav jobDetail={jobDetail[0]} />
      <InforDetail jobDetail={jobDetail[0]} />
    </>
  );
};

export default JobDetailPage;
