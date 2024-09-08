// Header cho tất cả layout
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../icon/LogoIcon";
import { path } from "../../common/path";
import { useSelector } from "react-redux";
import { Avatar, Dropdown } from "antd";
import UserIcon from "../icon/UserIcon";
import LogOutIcon from "../icon/LogOutIcon";
import WrapperSuggestJob from "../Wrapper/WrapperSuggestJob";
import FormSearchProduct from "../Form/FormSearchProduct";
import Modal from "../Modal/Modal";

const items = [
  {
    label: (
      <Link to={path.userDetail} className="flex gap-2 items-center">
        <UserIcon color="black" />
        Thông tin cá nhân
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link
        to={"/"}
        className="flex gap-2 items-center"
        onClick={() => {
          localStorage.removeItem("user");
        }}
      >
        <LogOutIcon />
        Đăng xuất
      </Link>
    ),
    key: "1",
  },
];

const UserHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { inforUser } = useSelector((state) => state.authSlice);
  const inforUser2 = localStorage.getItem("user");
  const items2 = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];
  const checkUserLogin = () => {
    return inforUser2 ? (
      <>
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <div className="p-3 rounded-full hover:bg-gray-100">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path d="M3.494 6.818a6.506 6.506 0 0 1 13.012 0v2.006c0 .504.2.988.557 1.345l1.492 1.492a3.869 3.869 0 0 1 1.133 2.735 2.11 2.11 0 0 1-2.11 2.11H2.422a2.11 2.11 0 0 1-2.11-2.11c0-1.026.408-2.01 1.134-2.735l1.491-1.492c.357-.357.557-.84.557-1.345V6.818Zm-1.307 7.578c0 .13.106.235.235.235h15.156c.13 0 .235-.105.235-.235 0-.529-.21-1.036-.584-1.41l-1.492-1.491a3.778 3.778 0 0 1-1.106-2.671V6.818a4.63 4.63 0 1 0-9.262 0v2.006a3.778 3.778 0 0 1-1.106 2.671L2.77 12.987c-.373.373-.583.88-.583 1.41Zm4.49 4.354c0-.517.419-.937.937-.937h4.772a.938.938 0 0 1 0 1.875H7.614a.937.937 0 0 1-.938-.938Z"></path>
              </svg>
            </div>
            <div className="p-3 rounded-full hover:bg-gray-100">
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M.838 4.647a.75.75 0 0 1 1.015-.309L9 8.15l7.147-3.812a.75.75 0 0 1 .706 1.324l-7.5 4a.75.75 0 0 1-.706 0l-7.5-4a.75.75 0 0 1-.309-1.015Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 2.25a.25.25 0 0 0-.25.25v11c0 .138.112.25.25.25h13a.25.25 0 0 0 .25-.25v-11a.25.25 0 0 0-.25-.25h-13ZM.75 2.5c0-.966.784-1.75 1.75-1.75h13c.966 0 1.75.784 1.75 1.75v11a1.75 1.75 0 0 1-1.75 1.75h-13A1.75 1.75 0 0 1 .75 13.5v-11Z"
                ></path>
              </svg>
            </div>
            <div className="p-3 rounded-full hover:bg-gray-100">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.325 2.00937C12.5188 0.490623 9.72813 0.718748 8 2.47812C6.27188 0.718748 3.48125 0.487498 1.675 2.00937C-0.674996 3.9875 -0.331246 7.2125 1.34375 8.92187L6.825 14.5062C7.1375 14.825 7.55625 15.0031 8 15.0031C8.44688 15.0031 8.8625 14.8281 9.175 14.5094L14.6563 8.925C16.3281 7.21562 16.6781 3.99062 14.325 2.00937ZM13.5875 7.86875L8.10625 13.4531C8.03125 13.5281 7.96875 13.5281 7.89375 13.4531L2.4125 7.86875C1.27188 6.70625 1.04063 4.50625 2.64063 3.15937C3.85625 2.1375 5.73125 2.29062 6.90625 3.4875L8 4.60312L9.09375 3.4875C10.275 2.28437 12.15 2.1375 13.3594 3.15625C14.9563 4.50312 14.7188 6.71562 13.5875 7.86875Z"></path>
              </svg>
            </div>
          </div>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            overlayStyle={{ zIndex: 99999 }}
          >
            <div className="relative">
              {inforUser.user.avatar == "" ? (
                <Avatar className="text-2xl cursor-pointer hover:bg-orange-500 duration-500 w-[40px] h-[40px]">
                  {inforUser.user.name.charAt(0)}
                </Avatar>
              ) : (
                <img
                  src={inforUser.user.avatar}
                  alt=""
                  className="rounded-full w-[50px] h-[50px] object-cover"
                />
              )}
              <div className="w-[8px] h-[8px] rounded-full bg-[#1dbf73] absolute bottom-[2px] right-[2px] border border-[#eee]"></div>
            </div>
          </Dropdown>
        </div>
      </>
    ) : (
      <>
        <div className="flex header_navigate gap-10 xl:gap-6 font-semibold text-lg justify-end items-center">
          <h3 className="hidden xl:flex items-center gap-1 hover:bg-gray-100 rounded-md py-[7px] px-4">
            Fiverr Pro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-4"
            >
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </h3>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown1"
            className="hidden lg:flex  items-center gap-1 hover:bg-gray-100 rounded-md py-[7px] px-4"
            type="button"
          >
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-4"
            >
              <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </button>
          <div
            id="dropdown1"
            className="z-9999 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700 sm:w-[350px] sm:h-[450px] box-shadow"
          >
            <ul
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  class="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Discover
                  <p className="text-[14px] opacity-70 font-normal">
                    Inspring project made on Fiverr
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Community
                  <p className="text-[14px] opacity-70 font-normal">
                    Inspring project made on Fiverr
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Guides
                  <p className="text-[14px] opacity-70 font-normal">
                    Inspring project made on Fiverr
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Postcard
                  <p className="text-[14px] opacity-70 font-normal">
                    Inspring project made on Fiverr
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Learn
                  <p className="text-[14px] opacity-70 font-normal">
                    Inspring project made on Fiverr
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Blog
                  <p className="text-[14px] opacity-70 font-normal">
                    Inspring project made on Fiverr
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Logo Maker
                  <p className="text-[14px] opacity-70 font-normal">
                    Inspring project made on Fiverr
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="gap-2 items-center hover-green hidden lg:inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="size-4"
            >
              <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
            </svg>
            English
          </div>
          <h3 className="hidden 2xl:flex hover-green pr-2">Become a Seller</h3>
          <Link
            to={path.signIn}
            className=" rounded-md hover:text-green-500 duration-300 pr-2"
          >
            Sign In
          </Link>
          <Link
            to={path.signUp}
            className="py-[5px] px-5 text-green-500 border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white"
          >
            Join
          </Link>
        </div>
      </>
    );
  };
  return (
    <header className="px-5 py-4 xl:px-0 border-b sticky top-0 bg-[#fff] z-[99]">
      <div className="container">
        <div className="header_content flex items-center justify-between space-x-5 min-w-full">
          <div className="header_logo flex items-center gap-4 lg:gap-8">
            <div className="lg:hidden text-2xl relative flex items-end justify-center">
              <button onClick={openModal} className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={23}
                  height={19}
                  viewBox="0 0 23 19"
                >
                  <rect y={16} width={23} height={3} rx="1.5" fill="#555" />
                  <rect width={23} height={3} rx="1.5" fill="#555" />
                  <rect y={8} width={23} height={3} rx="1.5" fill="#555" />
                </svg>
              </button>
              <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div>
              <Link to={path.homePage}>
                <LogoIcon />
              </Link>
            </div>
            <div className="hidden lg:flex">
              <WrapperSuggestJob>
                <FormSearchProduct />
              </WrapperSuggestJob>
            </div>
          </div>
          <div className="flex header_navigate gap-3 lg:gap-6 font-semibold text-lg justify-end items-center">
            {checkUserLogin()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
