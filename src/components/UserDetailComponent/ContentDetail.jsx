import React, { useEffect, useState } from "react";
import { thueCongViec } from "../../service/thueCongViec.service";
import { getLocalStorage } from "../../utils/util";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
const ContentDetail = () => {
  const [danhSachCV, setDanhSachCV] = useState([]);
  console.log(danhSachCV);
  const handleDeleteJob = (id) => {
    thueCongViec
      .xoaCongViecDaThue(id, getLocalStorage("user")?.token)
      .then((res) => {
        thueCongViec
          .layDanhSachDaThue(getLocalStorage("user")?.token)
          .then((res) => {
            setDanhSachCV(res.data.content);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    thueCongViec
      .layDanhSachDaThue(getLocalStorage("user")?.token)
      .then((res) => {
        setDanhSachCV(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <p>
        Home <span className="mx-2 opacity-50"> / </span> My Profile
      </p>
      <p className="mt-10 text-3xl font-bold">
        Hi 👋 Let’s help freelancers get to know you
      </p>
      <p className="mt-3 text-lg opacity-60">
        Get the most out of Fiverr by sharing a bit more about yourself and how
        you prefer to work with freelancers.
      </p>
      <div className="py-6 px-5 border mt-5 flex items-center justify-between">
        <p>It seems that you don't have any active Gigs. Get selling</p>
        <button className="py-2 px-5 rounded-lg bg-green-500 text-white hover:opacity-80">
          Create a New Gigs
        </button>
      </div>
      <div>
        {danhSachCV?.map((item, index) => {
          return (
            <div
              to={`${path.jobDetail}?MaCongViec=${item.congViec.id}`}
              className="block md:flex gap-5 mt-10 border rounded-lg "
            >
              <div className="w-full md:w-[45%] lg:w-[35%]  flex justify-center items-center">
                <img
                  src={item.congViec.hinhAnh}
                  className="rounded-lg h-full w-full object-cover"
                  alt=""
                />
              </div>
              <div className="w-full mt-5 md:mt-0 md:w-[70%] py-3 px-4 space-y-4">
                <div className="font-bold text-lg">
                  {item.congViec.tenCongViec}
                </div>
                <div>
                  {item.congViec.moTa.slice(0, 200)}{" "}
                  <span className="font-bold text-xl">......</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="space-x-1">
                      {Array.from(
                        { length: item.congViec.saoCongViec },
                        (_, i) => (
                          <span key={i} className="font-bold">
                            <i class="fa-solid fa-star"></i>
                          </span>
                        )
                      )}
                      <span className="font-bold">
                        {item.congViec.saoCongViec}
                      </span>
                    </span>
                    <span className="text-gray-400">
                      ({item.congViec.danhGia})
                    </span>
                  </div>
                  <div className="flex justify-end items-center gap-3">
                    <button className="hover:bg-green-500 py-2 px-5 rounded-xl text-white bg-green-400">
                      Thanh Toán
                    </button>
                    <button
                      onClick={() => {
                        handleDeleteJob(item.id);
                      }}
                      className="hover:bg-red-500 py-2 px-5 rounded-xl text-white bg-red-400"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentDetail;
