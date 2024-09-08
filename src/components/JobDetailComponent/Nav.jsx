import React from "react";

const Nav = ({ jobDetail }) => {
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0">
      <div className="block space-y-10 lg:space-y-0 lg:flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentFill"
            className="mb-1"
          >
            <path d="M12.773 14.5H3.227a.692.692 0 0 1-.482-.194.652.652 0 0 1-.2-.468V7.884H.5l7.041-6.212a.694.694 0 0 1 .918 0L15.5 7.884h-2.046v5.954a.652.652 0 0 1-.2.468.692.692 0 0 1-.481.194Zm-4.091-1.323h3.409V6.664L8 3.056 3.91 6.664v6.513h3.408v-3.97h1.364v3.97Z"></path>
          </svg>
          <p>/ {jobDetail?.tenLoaiCongViec} /</p>
          <p>{jobDetail?.tenNhomChiTietLoai} /</p>
          <p>{jobDetail?.tenChiTietLoai}</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#B5B6BA] opacity-30"
          >
            <path
              d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z"
              fill="current"
            ></path>
          </svg>
          <p className="py-2 px-5 border rounded-lg">5,495</p>
          <div className="py-3 px-5 border rounded-lg hover:bg-gray-100">
            <svg
              width="16"
              height="16"
              viewBox="0 0 14 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentFill"
            >
              <path d="M11 10c-.707 0-1.356.244-1.868.653L5.929 8.651a3.017 3.017 0 0 0 0-1.302l3.203-2.002a3 3 0 1 0-1.06-1.696L4.867 5.653a3 3 0 1 0 0 4.694l3.203 2.002A3 3 0 1 0 11 10Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
