import React from "react";
import { getLocalStorage } from "../../utils/util";
import { Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
const InforDetail = () => {
  const user = getLocalStorage("user");
  return (
    <div className="">
      <div className="relative flex justify-center flex-col items-center gap-2 border-b py-7">
        {user.user.avatar == "" ? (
          <Avatar className="text-5xl cursor-pointer hover:bg-orange-500 duration-500 w-[120px] h-[120px]">
            {user.user.name.charAt(0)}
          </Avatar>
        ) : (
          <img
            src={user.user.avatar}
            alt={user.user.avatar}
            className="rounded-full w-[120px] h-[120px] object-cover"
          />
        )}
        <p className="font-semibold mt-2 text-xl">{user.user.name}</p>
        <Link to={path.updateDetail} className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="size-5"
          >
            {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
          </svg>
          <p className="mt-5 text-sm opacity-70 hover:text-blue-500 underline">Cập nhật thông tin cá nhân</p>
        </Link> 
        <p className="absolute right-[40px] top-[20px] px-3 rounded-full border border-green-500 font-semibold text-green-500">
          online
        </p>
      </div>
      <div className="py-7 space-y-3 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="size-3 mb-1"
            >
              {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <p className="opacity-70">From</p>
          </div>
          <p className="opacity-70">Viet Nam</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-3 mb-1"
            >
              {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>

            <p className="opacity-70">Member Since</p>
          </div>
          <p className="opacity-70">May 2021</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://img.icons8.com/?size=50&id=1615&format=png"
              alt=""
              className="w-[14px]"
            />
            <p className="opacity-70">Birthday</p>
          </div>
          <p className="opacity-70">{user.user.birthday}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>

            <p className="opacity-70">phone</p>
          </div>
          <p className="opacity-70">{user.user.phone}</p>
        </div>
      </div>

      <div className="hidden lg:block py-7 border-b space-y-5">
        <div className="flex items-center justify-between">
          <p className="font-bold">Description</p>
          <p className="    cursor-pointer hover:underline text-blue-500">
            Edit description
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          pariatur fuga blanditiis, laboriosam voluptates quisquam provident
          sapiente ex in facilis aut enim culpa magni temporibus, asperiores
          repudiandae autem velit voluptatibus?
        </p>
      </div>
      <div className="py-7 border-b space-y-5">
        <div className="flex items-center justify-between">
          <p className="font-bold">Languages</p>
          <p className="    cursor-pointer hover:underline text-blue-500">
            Add new
          </p>
        </div>
        <div className="space-y-2">
          <p>
            English <span className="opacity-40">- Basic</span>
          </p>
          <p>Japanese</p>
          <p>Chinese</p>
          <p>Germeny</p>
        </div>
      </div>
      <div className="py-7 border-b space-y-5">
        <div className="flex items-center justify-between">
          <p className="font-bold">Linked Account</p>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-4 mb-[2px]"
            >
              {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
            <a
              className="underline text-blue-400 hover:text-blue-600"
              target="blank"
              href="https://www.facebook.com/?locale=vi_VN"
            >
              https://www.facebook.com/?locale=vi_VN
            </a>
          </li>

          <li className="flex items-center gap-2">
            <svg
              className="size-4 mb-[2px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>

            <a
              className="underline text-blue-400 hover:text-blue-600"
              target="blank"
              href="https://www.facebook.com/?locale=vi_VN"
            >
              https://www.instagram.com/
            </a>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="size-4 mb-[2px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>

            <a
              className="underline text-blue-400 hover:text-blue-600"
              target="blank"
              href="https://www.facebook.com/?locale=vi_VN"
            >
              https://www.youtube.com/
            </a>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="size-4 mb-[2px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
            </svg>

            <a
              className="underline text-blue-400 hover:text-blue-600"
              target="blank"
              href="https://www.facebook.com/?locale=vi_VN"
            >
              https://www.tiktok.com/foryou?lang=vi-VN
            </a>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="size-4 mb-[2px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              {/*!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>

            <a
              className="underline text-blue-400 hover:text-blue-600"
              target="blank"
              href="https://github.com/letrunghungprovip123"
            >
              https://github.com/letrunghungprovip123
            </a>
          </li>
        </ul>
      </div>
      
      <div className="py-7 border-b space-y-5">
        <div className="flex items-center justify-between">
          <p className="font-bold">Skills</p>
          <p className="    cursor-pointer hover:underline text-blue-500">
            Add new
          </p>
        </div>
        <div className="space-y-2">
          <p>
            React <span className="opacity-40">- Basic</span>
          </p>
          {user.user.skill?.map((item,index) => {
            return <p>{item}</p>
          })}
        </div>
      </div>
      <div className="py-7 border-b space-y-5">
        <div className="flex items-center justify-between">
          <p className="font-bold">Education</p>
          <p className="    cursor-pointer hover:underline text-blue-500">
            Add new
          </p>
        </div>
        <div className="space-y-2">
          <p>Studied Engineering Software in TDTU</p>
          <p>Graduated from Ton Duc Thang University</p>
        </div>
      </div>
      <div className="py-7 border-b space-y-5">
        <div className="flex items-center justify-between">
          <p className="font-bold">Certification</p>
          <p className="    cursor-pointer hover:underline text-blue-500">
            Add new
          </p>
        </div>
        <div className="space-y-2">
          <p>
            AWS <span className="opacity-40">- Basic</span>
          </p>
          {user.user.certification?.map((item,index) => {
            return <p>{item}</p>
          })}
        </div>
      </div>
    </div>
  );
};

export default InforDetail;
