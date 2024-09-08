import { useFormik } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handler } from "tailwind-scrollbar-hide";
import { authService } from "../../service/auth.service";
import { NotificationContext } from "../../../App";
import { setLocalStorage } from "../../utils/util";
import { useDispatch } from "react-redux";
import { getInforUser } from "../../redux/authSlice";
import { path } from "../../common/path";
const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showNotification } = useContext(NotificationContext);
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      id: 0,
      name: "user",
      email: "",
      password: "",
      phone: "",
      birthday: "24/02/2004",
      gender: "true" ? true : false,
      role: "USER",
    },
    onSubmit: (values) => {
      authService
        .signUp(values)
        .then((res) => {
          showNotification("Đăng ký thành công!", "success");
          setTimeout(() => {
            navigate(path.signIn);
          }, 1000);
        })
        .catch((err) => {
          showNotification(
            `Đăng ký thất bại, ${err.response.data.content}!`,
            "error"
          );
        });
      console.log(values);
    },
  });
  // const handlSubmit = (data) => {
  //   authService
  //     .signUp(data)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="w-2/3">
        <img
          src="https://img.lovepik.com/photo/45009/7683.jpg_wh860.jpg"
          className="w-[120%]"
          alt=""
        />
      </div>
      <form
        onSubmit={handleSubmit}
        class="max-w-md mx-auto space-y-10 box-shadow p-10 rounded-xl"
      >
        <h3 className="text-center font-bold text-3xl">
          Get Fiverr Account Now
        </h3>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={handleChange}
            value={values.email}
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={handleChange}
            value={values.password}
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
          >
            Password
          </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            // onChange={handleChange}
            // value={values.password}
            required
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
          >
            Confirm password
          </label>
        </div>
        <div class="space-y-10">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={handleChange}
              value={values.phone}
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
            >
              Phone number
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <form class="max-w-sm mx-auto">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
                value={values.gender}
              >
                <option value="true">Male</option>
                <option value="false">Female</option>
              </select>
            </form>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Account
        </button>
        <h3>
          Already have an account?{" "}
          <Link className="underline text-blue-500">Sign In</Link>
        </h3>
      </form>
    </div>
  );
};

export default SignUpPage;
