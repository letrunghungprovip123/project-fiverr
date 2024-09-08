import React, { useContext, useEffect, useState } from "react";
import { Select } from "antd";
import { Input } from "antd";
import { DatePicker, Space } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getAllSkillApi } from "../../redux/skillSlice";
import { skillService } from "../../service/skill.service";
import { Email } from "@mui/icons-material";
import { getLocalStorage } from "../../utils/util";
import { number } from "yup";
import { nguoiDungService } from "../../service/nguoiDung.service";
import { NotificationContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { path } from "../../common/path";
const UpdateDetail = () => {
  const [skill, setSkill] = useState([]);
  const { showNotification } = useContext(NotificationContext);
  let token = getLocalStorage("user")?.token;
  const navigate = useNavigate();
  useEffect(() => {
    skillService
      .getAllSkill()
      .then((res) => {
        setSkill(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);
  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      email: getLocalStorage("user")?.user.email,
      phone:
        getLocalStorage("user")?.user.phone == "string"
          ? ""
          : getLocalStorage("user")?.user.phone,
      gender: getLocalStorage("user")?.user.gender,
      birthday: "12311",
      skill: [],
      certification: [],
      avatar: {},
    },
    onSubmit: (values) => {
      console.log(values);
      const { avatar, ...formData } = values;
      const dataForm = new FormData();
      dataForm.append("formFile", avatar.file);
      //   console.log(avatar); // Thêm tệp vào FormData
      nguoiDungService
        .uploadAvatar(dataForm, token)
        .then((res) => {
          console.log("anh", res);
        })
        .catch((err) => {
          console.log(err);
        });
      nguoiDungService
        .updateUser(getLocalStorage("user")?.user.id, formData)
        .then((res) => {
          showNotification(
            "Cập nhật thông tin thành công, vui lòng đăng nhập lại",
            "success"
          );
          setTimeout(() => {
            navigate(path.signIn);
          }, 2000);
        })
        .catch((err) => {
          showNotification("Có lỗi xảy ra vui lòng thử lại", "error");
          console.log(err);
        });
    },
  });

  const handleDateChange = (date) => {
    const formattedDate = date ? date.format("DD-MM-YYYY") : ""; // Chuyển đổi thành chuỗi với định dạng mong muốn
    console.log(123);
    setFieldValue("birthday", formattedDate); // Cập nhật giá trị của trường birthday
  };
  return (
    <div>
      <form className="px-7 rounded-lg border" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between border-b py-5">
          <div className="space-y-1">
            <h3 className="font-bold">General Details</h3>
            <p>Update your photo & personal details here.</p>
          </div>
          <div className="space-x-4 flex">
            <div
            onClick={() => {navigate(-1)}}
              className="py-2 px-4 rounded-md border hover:opacity-100 opacity-90"
            >
              Cancel
            </div>

            <button
              type="submit"
              className="py-2 px-4 rounded-md bg-blue-500 text-white hover:opacity-100 opacity-90"
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex items-start gap-5 py-5">
          <div className="w-[60%] py-4 px-3 rounded-lg border bg-[#F9FBFC]">
            <h3 className="text-xl font-bold border-b pb-4">
              Personal information
            </h3>
            <div className="mt-10 space-y-7">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-gray-500"
                >
                  Name
                </label>
                <Input
                  placeholder="Nhap ten"
                  className="py-2"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium text-gray-500"
                >
                  Email
                </label>
                <Input
                  placeholder="Nhap ten"
                  className="py-2"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 font-medium text-gray-500"
                >
                  Phone Number
                </label>
                <Input
                  placeholder="Nhap so dien thoai"
                  className="py-2"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-5">
                <div className="w-1/2">
                  <label
                    htmlFor="phone"
                    className="block mb-1 font-medium text-gray-500"
                  >
                    Birthday
                  </label>
                  <DatePicker
                    format={"DD-MM-YYYY"}
                    className="w-full"
                    id="birthday"
                    name="birthday"
                    onChange={handleDateChange}
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="phone"
                    className="block mb-1 font-medium text-gray-500"
                  >
                    Gender
                  </label>
                  <Select
                    placeholder="Select gender"
                    className="w-full"
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={(value) => {
                      setFieldValue("gender", value);
                    }}
                    options={[
                      { value: true, label: "Male" },
                      { value: false, label: "Female" },
                    ]}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 font-medium text-gray-500"
                >
                  Skill
                </label>
                <Select
                  mode="multiple"
                  style={{
                    width: "100%",
                  }}
                  id="skill"
                  name="skill"
                  onChange={(value) => {
                    setFieldValue("skill", value);
                  }}
                  placeholder="Select Skill"
                  options={skill?.map((item, index) => {
                    return {
                      value: item.tenSkill,
                      label: item.tenSkill,
                    };
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="certification"
                  className="block mb-1 font-medium text-gray-500"
                >
                  Certification
                </label>
                <Select
                  mode="tags"
                  style={{
                    width: "100%",
                  }}
                  placeholder="Tags Mode"
                  id="certification"
                  name="certification"
                  onChange={(value) => {
                    setFieldValue("certification", value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-[40%] py-4 px-3 rounded-lg border bg-[#F9FBFC]">
            <h3 className="text-xl font-bold border-b pb-4">Upload Image</h3>
            <div className="py-5 flex items-center gap-3">
              <div className="rounded-full">
                <img
                  src={getLocalStorage("user")?.user.avatar}
                  alt=""
                  className="w-[70px] h-[70px] object-cover rounded-full"
                />
              </div>
              <div className="space-y-3">
                <h3>Edit your photo</h3>
                <div className="flex gap-5">
                  <h3 className="text-sm text-red-500 cursor-pointer">
                    Delete
                  </h3>
                  <h3 className="text-sm text-blue-500 cursor-pointer">
                    Update
                  </h3>
                </div>
              </div>
            </div>
            <div className="relative border-2 border-dashed border-gray-300 rounded-md p-4 cursor-pointer">
              <input
                type="file"
                name="avatar"
                id="avatar"
                // value={values.avatar}
                onChange={(event) => {
                  showNotification("Upload avatar thành công!", "success");
                  const file = event.target.files[0];
                  if (file) {
                    const urlAvarta = URL.createObjectURL(file);
                    setFieldValue("avatar", {
                      file: event.target.files[0],
                      url: urlAvarta,
                    });
                  } // Lấy tệp đầu tiên từ danh sách tệp // Cập nhật giá trị của trường avatar với đối tượng tệp // Hiển thị đối tượng tệp trong console
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                <p className="text-gray-500 text-sm">
                  Click to upload or drag and drop
                </p>
                <p className="text-gray-500 text-xs">
                  SVG, PNG, JPG or GIF (Max. 800x400px)
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    // <div>
    //   {" "}
    //   <Select
    //     mode="tags"
    //     style={{
    //       width: "100%",
    //     }}
    //     placeholder="Tags Mode"
    //     // onChange={handleChange}
    //     // options={options}
    //   />
    //   <Select
    //     mode="multiple"
    //     allowClear
    //     style={{
    //       width: "100%",
    //     }}
    //     placeholder="Please select"
    //     //   onChange={handleChange}
    //     //   options={options}
    //   />
    // </div>
  );
};

export default UpdateDetail;
