import React, { useEffect, useState, useRef } from "react";
import { path } from "../../common/path";
import { useNavigate, Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { congViecService } from "../../service/congViec.service";
import useDebounce from "../../hooks/useDebounce";
const FormSearchProduct = ({ setOpenDropDown, handleGetValueChildren }) => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    if (!valueSearch) {
      setOpenDropDown(false);
    }
    handleGetValueChildren(valueSearch);
  }, [valueSearch]);
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`${path.listJob}?tenCongViec=${valueSearch}`);
  };
  const handleChange = (event) => {
    setValueSearch(event.target.value);
    congViecService
      .layCongViecTheoTen(event.target.value)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    if (!event.target.value) {
      setOpenDropDown(false);
    }
  };
  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className=" lg:inline-flex"
      >
        <div className="flex pl-5 w-[350px] xl:w-[500px] 2xl:w-[600px] bg-white rounded-lg border border-gray-300 py-1">
          <input
            onChange={handleChange}
            className="flex-1 outline-none"
            type="text"
            placeholder="Nhập tên công việc cần tìm kiếm"
          />
          <button
            className="py-1 px-2 mr-1 bg-[#003912] text-lg rounded-md text-white"
            type="submit"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default FormSearchProduct;
