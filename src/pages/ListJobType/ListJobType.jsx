import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserNav from "../../components/UserNav/UserNav";
import { congViecService } from "../../service/congViec.service";
import Banner from "../../components/ListJobTypeComponent/Banner";
import Popular from "../../components/ListJobTypeComponent/Popular";
import Seeking from "../../components/ListJobTypeComponent/Seeking";
import Explore from "../../components/ListJobTypeComponent/Explore";
import { useLocation } from "react-router-dom";
import Guides from "../../components/ListJobTypeComponent/Guides";
import Interested from "../../components/ListJobTypeComponent/Interested";
const ListJobType = () => {
  const [seachParam, setSearchParam] = useSearchParams();
  const [jobType, setJobType] = useState([]);
  // console.log(seachParam.get("MaLoaiCongViec"))
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    let maLoaiCV = seachParam.get("MaLoaiCongViec");
    congViecService
      .layCongViecTheoMaLoaiCongViec(maLoaiCV)
      .then((res) => {
        console.log("yes");
        console.log(res);
        setJobType(res.data.content);
      })
      .catch((err) => {
        console.log("no");
        console.log(err);
      });
  }, [seachParam.get("MaLoaiCongViec")]);
  return (
    <div>
      <UserNav />
      <Banner jobType={jobType[0]} />
      {/* <Popular /> */}
      <Seeking />
      <Explore jobType={jobType[0]} />
      <Guides jobType={jobType[0]} />
      <Interested jobType={jobType[0]} />
    </div>
  );
};

export default ListJobType;
