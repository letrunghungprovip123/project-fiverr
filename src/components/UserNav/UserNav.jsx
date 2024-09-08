// Thanh nav menu loại công việc dưới header dùng cho tất cả trang
// trừ trang đăng nhập đăng kí index

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { Link } from "react-router-dom";
const UserNav = () => {
  const { listJobApi } = useSelector((state) => state.congViecSlice);
  const navigate = useNavigate();
  return (
    <div className="border-b h-[47px] px-5 sm:px-3 lg:px-0">
      <div className="container flex justify-between items-center gap-5">
        {listJobApi?.slice(0,5).map((item, index) => {
          console.log(item)
          return (
            <>
              <div class="relative inline-flex text-left dropdown">
                <Link
                  to={`${path.jobType}?MaLoaiCongViec=${item.id}`}
                  className="text-[#747897] text-sm xl:text-lg font-medium hover:border-b-2 hover:border-green-500 h-full py-2"
                >
                  {item.tenLoaiCongViec}
                </Link>
                <div class="dropdown-menu origin-top-right absolute top-[47px] w-[400px] p-5 bg-white border border-gray-300 rounded-lg shadow-lg z-[999]">
                  <div class="py-1">
                    <div className="flex gap-10 items-start">
                      {item.dsNhomChiTietLoai.map((item, index) => {
                        return (
                          <div>
                            <h3 className="font-semibold mb-2">
                              {item.tenNhom}
                            </h3>
                            {item.dsChiTietLoai.map((item, index) => {
                              return (
                                <p
                                  className="py-1 text-gray-700 hover:bg-gray-100"
                                  onClick={() => {
                                    navigate(
                                      `${path.listJob}?maChiTietLoai=${item.id}`
                                    );
                                  }}
                                >
                                  {item.tenChiTiet}
                                </p>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <h3 className="text-[#747897] text-sm xl:text-lg hidden sm:block font-medium py-2 hover:border-b-2 hover:border-green-500 h-full">
          Business
        </h3>
        <h3 className="text-[#747897] text-sm xl:text-lg hidden sm:block  font-medium py-2 hover:border-b-2 hover:border-green-500 h-full">
          Consulting
        </h3>
      </div>
    </div>
  );
};

export default UserNav;
