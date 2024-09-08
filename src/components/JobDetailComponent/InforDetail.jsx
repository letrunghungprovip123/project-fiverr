import React, { useContext, useEffect, useState } from "react";
import { Tabs } from "antd";
import ImageTabs from "./ImageTabs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { binhLuanService } from "../../service/binhLuan.service";
import CommentComponent from "./CommentComponent";
import { thueCongViec } from "../../service/thueCongViec.service";
import { getLocalStorage } from "../../utils/util";
import { useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { NotificationContext } from "../../../App";
import { Avatar, Dropdown } from "antd";
const InforDetail = ({ jobDetail }) => {
  const [i, setI] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  const { showNotification } = useContext(NotificationContext);
  const img = [
    jobDetail?.congViec.hinhAnh,
    `https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/95160836/original/c76e3bafcd31d8e9af171307c93ff18a36685208/diseno-logotipo-con-calidad-profesional.png`,
    `https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/95160836/original/a3779f3f16bc8efd31a36483538b19b9b3740ecb/diseno-logotipo-con-calidad-profesional.png`,
    `https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/95160836/original/53efb5f642ad798d05e9f1727965e0417e74810e/diseno-logotipo-con-calidad-profesional.png`,
    `https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230427/DESIGN%20A%20CREATIVE%20MINIMAL%20LOGO-418_fzoaps.jpg`,
    `https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/8bea816fb6266ddbeaa0fd53f22f5245-1724513026/ACELERADORA%20FITNESS.5-01/diseno-logotipo-con-calidad-profesional.png`,
    `https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/b8105c4a4200210795aa92a08b3df645-1725144377/VIO%20CAKE.2-01/diseno-logotipo-con-calidad-profesional.png`,
    `https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/115633468/original/2f1b8dbc9f572114546848a8e37ce75fd1f80bfa/design-a-modern-wordpress-business-website-or-blog.jpg`,
  ];

  const data = {
    id: 0,
    maCongViec: jobDetail?.congViec.id,
    maNguoiThue: getLocalStorage("user")?.user.id || "",
    ngayThue: new Date(),
    hoanThanh: false,
  };
  const handleHired = (data) => {
    if (getLocalStorage("user")?.token) {
      thueCongViec
        .thueCongViec(data, getLocalStorage("user").token)
        .then((res) => {
          showNotification("Bạn đã thêm công việc thành công", "success");
        })
        .catch((err) => {
          showNotification("Có lỗi xảy ra vui lòng thử lại", "error");
          console.log(err);
        });
    } else {
      navigate(path.signIn);
    }
  };
  const a = jobDetail?.congViec.moTaNgan
    .split("\n")
    .filter((item) => item !== "\r");
  const b = jobDetail?.congViec.moTa
    .split("\n")
    .filter((item) => item !== "\r");
  useEffect(() => {
    binhLuanService
      .layBinhLuanTheoCongViec(jobDetail?.congViec.id)
      .then((res) => {
        setComment(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [jobDetail]);
  // useEffect(() => {
  //   thueCongViec
  //     .thueCongViec(data, getLocalStorage("user").token)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // Nội dung cho từng tab
  const getTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div>
            <h3 className="text-2xl font-bold">
              US${jobDetail?.congViec.giaTien}
            </h3>
            <div className="flex gap-2 items-center font-medium">
              <p>
                Save up to 20% with{" "}
                <span className="text-[#026A5D]">Subscribe to Save</span>
              </p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.66669 6.2222C6.66669 5.99407 6.74244 5.63209 6.94361 5.35269C7.11215 5.11861 7.40085 4.88886 8.00003 4.88886C8.73426 4.88886 9.11567 5.27671 9.24475 5.66556C9.38071 6.07511 9.26479 6.53293 8.84029 6.81593C8.13871 7.28365 7.62193 7.73677 7.34968 8.37204C7.10944 8.93259 7.11027 9.54684 7.11105 10.1244L7.11114 10.2222H8.88892C8.88892 9.49449 8.90421 9.25784 8.98371 9.07235C9.04479 8.92984 9.19468 8.71629 9.82643 8.29513C10.9709 7.53217 11.2994 6.21221 10.932 5.10547C10.5577 3.97803 9.48801 3.11108 8.00003 3.11108C6.82143 3.11108 5.99902 3.62208 5.50089 4.31392C5.03539 4.96045 4.88892 5.70958 4.88892 6.2222H6.66669ZM8.88886 12.8889V11.1111H7.11108V12.8889H8.88886Z"
                ></path>
              </svg>
            </div>
            <p className="mt-5 font-medium">
              <span className="font-bold">
                Starter Pack - Quality guaranteed{" "}
              </span>
              1 HQ logo concept + High Res JPG & PNG + 5 Revisions
            </p>
            <div className="flex gap-6 mt-5 items-center">
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                  <path d="M9 4H7v5h5V7H9V4z"></path>
                </svg>
                <p className="text-sm font-bold">2-day delivery</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                  <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                </svg>
                <p className="text-sm font-bold">5 Revisions</p>
              </div>
            </div>
            <div className="mt-10 space-y-5">
              {a?.map((item, index) => {
                return (
                  <div className="flex gap-5 items-center">
                    <div>
                      <svg
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentFill"
                        className="w-[16px] h-[16px]"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                    </div>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                handleHired(data);
              }}
              className="py-2 px-5 bg-black text-white w-full mt-10 rounded-lg font-medium hover:opacity-60"
            >
              Continute
            </button>
            <div className="mt-5 text-center">
              <h3>Compare packages</h3>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-bold">
              US${jobDetail?.congViec.giaTien * 5}
            </h3>
            <div className="flex gap-2 items-center font-medium">
              <p>
                Save up to 15% with{" "}
                <span className="text-[#026A5D]">Subscribe to Save</span>
              </p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.66669 6.2222C6.66669 5.99407 6.74244 5.63209 6.94361 5.35269C7.11215 5.11861 7.40085 4.88886 8.00003 4.88886C8.73426 4.88886 9.11567 5.27671 9.24475 5.66556C9.38071 6.07511 9.26479 6.53293 8.84029 6.81593C8.13871 7.28365 7.62193 7.73677 7.34968 8.37204C7.10944 8.93259 7.11027 9.54684 7.11105 10.1244L7.11114 10.2222H8.88892C8.88892 9.49449 8.90421 9.25784 8.98371 9.07235C9.04479 8.92984 9.19468 8.71629 9.82643 8.29513C10.9709 7.53217 11.2994 6.21221 10.932 5.10547C10.5577 3.97803 9.48801 3.11108 8.00003 3.11108C6.82143 3.11108 5.99902 3.62208 5.50089 4.31392C5.03539 4.96045 4.88892 5.70958 4.88892 6.2222H6.66669ZM8.88886 12.8889V11.1111H7.11108V12.8889H8.88886Z"
                ></path>
              </svg>
            </div>
            <p className="mt-5 font-medium">
              <span className="font-bold">
                Starter Pack - Quality guaranteed{" "}
              </span>
              1 HQ logo concept + High Res JPG & PNG + 5 Revisions
            </p>
            <div className="flex gap-6 mt-5 items-center">
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                  <path d="M9 4H7v5h5V7H9V4z"></path>
                </svg>
                <p className="text-sm font-bold">2-day delivery</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                  <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                </svg>
                <p className="text-sm font-bold">5 Revisions</p>
              </div>
            </div>
            <div className="mt-10 space-y-5">
              {a?.slice(2).map((item, index) => {
                return (
                  <div className="flex gap-5 items-center">
                    <div>
                      <svg
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentFill"
                        className="w-[16px] h-[16px]"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                    </div>
                    <p>{item}</p>
                  </div>
                );
              })}
              <div className="flex gap-5 items-center">
                <div>
                  <svg
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                    className="w-[16px] h-[16px]"
                  >
                    <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                  </svg>
                </div>
                <p>1 concept included</p>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <svg
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                    className="w-[16px] h-[16px]"
                  >
                    <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                  </svg>
                </div>
                <p>Logo transparency</p>
              </div>
            </div>
            <button
              onClick={() => {
                handleHired(data);
              }}
              className="py-2 px-5 bg-black text-white w-full mt-10 rounded-lg font-medium hover:opacity-60"
            >
              Continute
            </button>
            <div className="mt-5 text-center">
              <h3>Compare packages</h3>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold">
              US${jobDetail?.congViec.giaTien * 10}
            </h3>
            <div className="flex gap-2 items-center font-medium">
              <p>
                Save up to 5% with{" "}
                <span className="text-[#026A5D]">Subscribe to Save</span>
              </p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.66669 6.2222C6.66669 5.99407 6.74244 5.63209 6.94361 5.35269C7.11215 5.11861 7.40085 4.88886 8.00003 4.88886C8.73426 4.88886 9.11567 5.27671 9.24475 5.66556C9.38071 6.07511 9.26479 6.53293 8.84029 6.81593C8.13871 7.28365 7.62193 7.73677 7.34968 8.37204C7.10944 8.93259 7.11027 9.54684 7.11105 10.1244L7.11114 10.2222H8.88892C8.88892 9.49449 8.90421 9.25784 8.98371 9.07235C9.04479 8.92984 9.19468 8.71629 9.82643 8.29513C10.9709 7.53217 11.2994 6.21221 10.932 5.10547C10.5577 3.97803 9.48801 3.11108 8.00003 3.11108C6.82143 3.11108 5.99902 3.62208 5.50089 4.31392C5.03539 4.96045 4.88892 5.70958 4.88892 6.2222H6.66669ZM8.88886 12.8889V11.1111H7.11108V12.8889H8.88886Z"
                ></path>
              </svg>
            </div>
            <p className="mt-5 font-medium">
              <span className="font-bold">
                Starter Pack - Quality guaranteed{" "}
              </span>
              1 HQ logo concept + High Res JPG & PNG + 5 Revisions
            </p>
            <div className="flex gap-6 mt-5 items-center">
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                  <path d="M9 4H7v5h5V7H9V4z"></path>
                </svg>
                <p className="text-sm font-bold">2-day delivery</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                  <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                </svg>
                <p className="text-sm font-bold">5 Revisions</p>
              </div>
            </div>
            <div className="mt-10 space-y-5">
              {a?.slice(2).map((item, index) => {
                return (
                  <div className="flex gap-5 items-center">
                    <div>
                      <svg
                        viewBox="0 0 11 9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentFill"
                        className="w-[16px] h-[16px]"
                      >
                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                      </svg>
                    </div>
                    <p>{item}</p>
                  </div>
                );
              })}
              <div className="flex gap-5 items-center">
                <div>
                  <svg
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                    className="w-[16px] h-[16px]"
                  >
                    <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                  </svg>
                </div>
                <p>1 concept included</p>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <svg
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                    className="w-[16px] h-[16px]"
                  >
                    <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                  </svg>
                </div>
                <p>Logo transparency</p>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <svg
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                    className="w-[16px] h-[16px]"
                  >
                    <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                  </svg>
                </div>
                <p>Include 3D mockup</p>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <svg
                    viewBox="0 0 11 9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill"
                    className="w-[16px] h-[16px]"
                  >
                    <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                  </svg>
                </div>
                <p>Include social media kit</p>
              </div>
            </div>
            <button
              onClick={() => {
                handleHired(data);
              }}
              className="py-2 px-5 bg-black text-white w-full mt-10 rounded-lg font-medium hover:opacity-60"
            >
              Continute
            </button>
            <div className="mt-5 text-center">
              <h3>Compare packages</h3>
            </div>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div className="container w-full">
      <div className="block lg:flex gap-20 justify-between">
        <div className="w-full xl:w-2/3">
          <h3 className="text-3xl font-bold">
            {jobDetail?.congViec.tenCongViec}
          </h3>
          <div className="flex gap-5 mt-4 border-b pb-5">
            <img
              src={jobDetail?.avatar}
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <div className="">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold ">{jobDetail?.tenNguoiTao}</h3>
                <div className="h-5 w-[1px] bg-gray-300 "></div>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex gap-1 items-center pr-2">
                  <div className="flex gap-1 items-center">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                      ></path>
                    </svg>
                    <p className="mt-1 font-bold text-lg">
                      {jobDetail?.congViec.saoCongViec}
                    </p>
                  </div>
                  <p className="text-lg mt-1 opacity-50">
                    (
                    <span className="underline">
                      {jobDetail?.congViec.danhGia})
                    </span>
                  </p>
                </div>
                <div className="h-5 w-[1px] bg-gray-300 "></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-1 px-2 rounded-md bg-[#FFE0B3] translate-x-[-15px] translate-y-[3px]">
                <h3 className="text-sm font-bold">Top Rated</h3>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                    width="10"
                    height="10"
                    fill="currentColor"
                  >
                    <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                    width="10"
                    height="10"
                    fill="currentColor"
                  >
                    <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                    width="10"
                    height="10"
                    fill="currentColor"
                  >
                    <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-sm opacity-60">5 orders in queue</p>
            </div>
          </div>
          <div className="flex py-5 gap-5">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold">Among my clients</h3>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentFill"
                className="opacity-40"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.667 6.222c0-.228.075-.59.277-.87C7.112 5.12 7.4 4.89 8 4.89c.734 0 1.116.388 1.245.777.136.41.02.867-.405 1.15-.701.468-1.218.92-1.49 1.556-.24.56-.24 1.175-.239 1.752v.098H8.89c0-.728.015-.964.095-1.15.06-.142.21-.356.842-.777a2.751 2.751 0 0 0 1.106-3.19C10.558 3.978 9.488 3.111 8 3.111c-1.179 0-2.001.511-2.5 1.203a3.37 3.37 0 0 0-.611 1.908h1.778Zm2.222 6.667V11.11H7.11v1.778H8.89Z"
                ></path>
              </svg>
            </div>
            <div className="h-[28px] max-w-[28px] min-w-[28px] flex gap-2 items-center">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/155c2b93000cea768bf7c3c4d6cd95ae-1650700040/61c58c6185b68536eca4c988.png"
                className="border"
                alt=""
              />
              <p className="opacity-80 text-sm pr-3 py-1 border-r">Polifresh</p>
            </div>
            <div className="ml-20 h-[28px] max-w-[28px] min-w-[28px] flex gap-2 items-center">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/d84aac510da0561e8cd9c079cef10861-1650693490/61c3a05e85b68536eca4c950.png"
                className="border"
                alt=""
              />
              <p className="opacity-80 text-sm pr-3 py-1 border-r">
                Everglades
              </p>
            </div>
            <div className="ml-[90px] h-[28px] max-w-[28px] min-w-[28px] flex gap-2 items-center">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/a86b63428e054f95015ad12a69db1c31-1647340031/61c82f6a3bf79e00930a9051.png"
                className="border"
                alt=""
              />
              <p className="opacity-80 text-sm pr-3 py-1 border-r">AbFab</p>
            </div>
          </div>
          <div>
            <div className="">
              <div className="overflow-hidden">
                <img
                  src={img[i]}
                  className="w-full max-h-[525px] object-cover hover:scale-105 duration-300 transition ease-in-out"
                  alt=""
                />
              </div>
              <div className="mt-3 flex gap-2 overflow-scroll scrollbar-hide">
                {img.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      onClick={() => {
                        setActiveIndex(index);
                        setI(index);
                      }}
                      className={`${
                        activeIndex === index ? "" : "opacity-30"
                      } max-w-[100px] xl:h-[65px]`}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-10">
          <button
              onClick={() => {
                handleHired(data);
              }}
              className="block xl:hidden  w-1/2  sm:w-[20%] py-2 px-5 bg-black text-white mt-10 rounded-lg font-medium hover:opacity-60"
            >
              Continute
            </button>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <h3 className="text-xl font-semibold">
              What people loved about this freelancer
            </h3>
            <p className="text-lg font-semibold hover:underline">
              See all reviews
            </p>
          </div>
          <div className="mt-10 space-y-10 border-b-2 pb-10">
            <p className="text-xl font-bold">About this gig</p>
            <p className="text-lg font-bold">
              WHY IS A MINIMALIST LOGO YOUR BEST CHOICE?
            </p>
            <p className="leading-7">
              <span className="text-lg font-bold">
                WE ALL WANT OUR BRAND TO BE REMEMBERED -
              </span>{" "}
              For a business /company brand to be successful it needs to have a
              flat, clean, easy-to-remember, unique, adaptable, and timeless
              logo.{" "}
              <span className="font-bold italic">
                {" "}
                But this can only be done effectively by a professional{" "}
              </span>
              .
            </p>
            <div>
              <p className="text-lg font-bold">Best Thing I Can Do:</p>
              <div className="">
                <ul className="mt-2 space-y-2">
                  {b?.map((item, index) => {
                    return <li className="list-disc translate-x-10">{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold">
                {" "}
                WHY IS MY SERVICE YOUR BEST INVESTMENT?
              </p>
              <div className="">
                <ul className="mt-2 space-y-2">
                  <li className="list-disc translate-x-10">
                    <span className="bg-[#FFECD1] font-bold inline-block italic">
                      I have created + 2000 successful brand identities on
                      Fiverr.
                    </span>
                  </li>
                  <li className="list-disc translate-x-10">
                    <span className="bg-[#FFECD1] font-bold inline-block italic">
                      All the files and resources to use your design as you
                      wish.
                    </span>
                  </li>
                  <li className="list-disc translate-x-10">
                    <span className="bg-[#FFECD1] font-bold inline-block italic">
                      Expert & trustworthy advice at any time.
                    </span>
                  </li>
                  <li className="list-disc translate-x-10">
                    <span className="bg-[#FFECD1] font-bold inline-block italic">
                      Copyrights document on all my packages.
                    </span>
                  </li>
                  <li className="list-disc translate-x-10">
                    <span className="bg-[#FFECD1] font-bold inline-block italic">
                      100% custom and unique designs.
                    </span>
                  </li>
                  <li className="list-disc translate-x-10">
                    <span className="bg-[#FFECD1] font-bold inline-block italic">
                      My work DOESN'T END UNTIL you are 100% SATISFIED with the
                      design.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="font-bold text-xl border-b pb-10">
              Get the best experience! - ORDER NOW!!!
            </p>
            <div className="mt-5 flex items-center justify-between w-1/2 ">
              <div>
                <p className="opacity-60">Logo style</p>
                <p>Minimalist</p>
              </div>
              <div>
                <p className="opacity-60">File format</p>
                <p>AI, JPG, PDF, PNG, PSD, EPS, SVG</p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-bold text-xl">
                Get to know about {jobDetail?.tenNguoiTao}
              </h3>
              <div className="flex gap-5 items-center mt-5">
                <div className="w-[96px] h-[96px] relative">
                  <img
                    src={jobDetail?.avatar}
                    className="w-full rounded-full"
                    alt=""
                  />
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 14 14"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="absolute top-[60px] right-0 bg-[#2E25AD] rounded-full p-1"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.203.432a1.891 1.891 0 0 0-2.406 0l-1.113.912a1.904 1.904 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.978 1.978 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.908 1.908 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.908 1.908 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a1.983 1.983 0 0 1-.194-.863l.006-1.456a1.947 1.947 0 0 0-1.5-1.915L10.1 1.728a1.904 1.904 0 0 1-.784-.384L8.203.432Zm2.184 5.883a.742.742 0 0 0 0-1.036.71.71 0 0 0-1.018 0L6.565 8.135 5.095 6.73a.71.71 0 0 0-1.018.032.742.742 0 0 0 .032 1.036L6.088 9.69a.71.71 0 0 0 1.001-.016l3.297-3.359Z"
                    ></path>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">
                    {jobDetail?.tenNguoiTao}
                  </h3>
                  <p className="opacity-60">
                    Full time {jobDetail?.tenLoaiCongViec}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1 items-center pr-2">
                      <div className="flex gap-1 items-center">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                          ></path>
                        </svg>
                        <p className="mt-1 font-bold text-lg">
                          {jobDetail?.congViec.saoCongViec}
                        </p>
                      </div>
                      <p className="text-lg mt-1 opacity-50">
                        (
                        <span className="underline">
                          {jobDetail?.congViec.danhGia})
                        </span>
                      </p>
                    </div>
                    <div className="bg-gray-500 w-[1px] h-[20px] opacity-60"></div>
                    <div className="flex items-center gap-1 px-2 rounded-md bg-[#FFE0B3]">
                      <h3 className="text-sm font-bold">Top Rated</h3>
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 10 10"
                          width="10"
                          height="10"
                          fill="currentColor"
                        >
                          <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 10 10"
                          width="10"
                          height="10"
                          fill="currentColor"
                        >
                          <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 10 10"
                          width="10"
                          height="10"
                          fill="currentColor"
                        >
                          <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-5 py-2 px-5 rounded-md border border-black font-semibold hover:bg-black hover:text-white duration-100 ease-in-out">
                Contact Me
              </button>
              <div className="mt-10">
                <h3 className="text-xl font-bold">FAQ</h3>
                <div className="mt-5">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>
                        <span className="font-bold text-lg">
                          Why choose Creeddesigners?
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <span className="font-medium">
                          We love to discuss new projects and plan them with
                          you, and we always bring years of knowledge and
                          experience with us. Each project is a unique
                          experience in itself and brings personal and
                          professional progress not only to you, but also to us.
                          We offer a unique logo design.
                        </span>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>
                        <span className="font-bold text-lg">
                          What information do I need to get started?
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <span className="font-medium">
                          We love to discuss new projects and plan them with
                          you, and we always bring years of knowledge and
                          experience with us. Each project is a unique
                          experience in itself and brings personal and
                          professional progress not only to you, but also to us.
                          We offer a unique logo design.
                        </span>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>{" "}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>
                        <span className="font-bold text-lg">
                          What is Social Media Kit include?
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <span className="font-medium">
                          We love to discuss new projects and plan them with
                          you, and we always bring years of knowledge and
                          experience with us. Each project is a unique
                          experience in itself and brings personal and
                          professional progress not only to you, but also to us.
                          We offer a unique logo design.
                        </span>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>{" "}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>
                        <span className="font-bold text-lg">
                          Profile picture and banner for facebook, twitter or
                          any other social media platform.
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <span className="font-medium">
                          We love to discuss new projects and plan them with
                          you, and we always bring years of knowledge and
                          experience with us. Each project is a unique
                          experience in itself and brings personal and
                          professional progress not only to you, but also to us.
                          We offer a unique logo design.
                        </span>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>{" "}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>
                        <span className="font-bold text-lg">
                          What is Stationery Designs include?
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <span className="font-medium">
                          We love to discuss new projects and plan them with
                          you, and we always bring years of knowledge and
                          experience with us. Each project is a unique
                          experience in itself and brings personal and
                          professional progress not only to you, but also to us.
                          We offer a unique logo design.
                        </span>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>{" "}
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography>
                        <span className="font-bold text-lg">
                          What if I am not satisfied with the design?
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <span className="font-medium">
                          We love to discuss new projects and plan them with
                          you, and we always bring years of knowledge and
                          experience with us. Each project is a unique
                          experience in itself and brings personal and
                          professional progress not only to you, but also to us.
                          We offer a unique logo design.
                        </span>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
              <div className="mt-20">
                <h3 className="font-bold text-xl">Reviews</h3>
                <div className="flex items-center justify-between">
                  <p className="mt-5 font-bold">731 reviews for this Gig </p>
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                      ></path>
                    </svg>
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                      ></path>
                    </svg>
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                      ></path>
                    </svg>
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                      ></path>
                    </svg>
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                      ></path>
                    </svg>
                    <p className="font-bold mt-1">4.9</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-1/2">
                    <div className="flex items-center gap-3 mt-3">
                      <h3 className="font-bold">5 Start</h3>
                      <div className="w-[50%] bg-gray-200 rounded-full h-[8px] dark:bg-gray-700">
                        <div
                          className="bg-black h-[8px] rounded-full"
                          style={{ width: "90%" }}
                        />
                      </div>
                      <p className="opacity-60">(672)</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <h3 className="font-bold">4 Start</h3>
                      <div className="w-[50%] bg-gray-200 rounded-full h-[8px] dark:bg-gray-700">
                        <div
                          className="bg-black h-[8px] rounded-full"
                          style={{ width: "8%" }}
                        />
                      </div>
                      <p className="opacity-60">(45)</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <h3 className="font-bold">3 Start</h3>
                      <div className="w-[50%] bg-gray-200 rounded-full h-[8px] dark:bg-gray-700">
                        <div
                          className="bg-black h-[8px] rounded-full"
                          style={{ width: "1%" }}
                        />
                      </div>
                      <p className="opacity-60">(6)</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <h3 className="font-bold">2 Start</h3>
                      <div className="w-[50%] bg-gray-200 rounded-full h-[8px] dark:bg-gray-700">
                        <div
                          className="bg-black h-[8px] rounded-full"
                          style={{ width: "0.5%" }}
                        />
                      </div>
                      <p className="opacity-60">(1)</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <h3 className="font-bold">1 Start</h3>
                      <div className="w-[50%] bg-gray-200 rounded-full h-[8px] dark:bg-gray-700">
                        <div
                          className="bg-black h-[8px] rounded-full"
                          style={{ width: "3%" }}
                        />
                      </div>
                      <p className="opacity-60">(7)</p>
                    </div>
                  </div>
                  <div className="w-1/2 mt-3">
                    <h3 className="font-bold">Rating Breakdown</h3>
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="opacity-60">Seller communication level</p>
                        <div className="flex items-center gap-2">
                          <svg
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                            ></path>
                          </svg>
                          <p className="font-bold mt-1">4.9</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="opacity-60">Service as described</p>
                        <div className="flex items-center gap-2">
                          <svg
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                            ></path>
                          </svg>
                          <p className="font-bold mt-1">4.9</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="opacity-60">Recommend to a friend</p>
                        <div className="flex items-center gap-2">
                          <svg
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                            ></path>
                          </svg>
                          <p className="font-bold mt-1">4.9</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-start">
              <form class="w-1/2">
                <div>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg bg-gray-50 "
                      placeholder="Search Review"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <h3 className="mt-5">
              Sort By <span className="font-bold">Most relevant</span>
            </h3>
            <div className="mt-10">
              <div className="border p-5 rounded-xl">
                <div className="flex items-center gap-5 border-b pb-5">
                  <div className="w-[60px] h-[60px]">
                    <img
                      src={jobDetail?.avatar}
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">
                      {jobDetail?.tenNguoiTao}
                    </h3>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                        className="w-[16px] h-[16px]"
                        alt=""
                      />
                      <p className="text-sm opacity-50">United Kingdom</p>
                    </div>
                  </div>
                </div>
                <div className="py-5 border-b">
                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <p className="font-bold mt-1">5</p>
                    </div>
                    <p className="text-sm opacity-40 mt-1">2 months ago</p>
                  </div>
                  <p className="mt-3">
                    Great experience. Do not be cheap and go to someone else,
                    your quality will be compromised. Daniela is top quality and
                    when she creates a timeline she sticks to it with constant
                    updates along the way. Overall very happy
                  </p>
                  <div className="mt-3 flex items-center gap-10">
                    <div>
                      <h3 className="font-bold">US$100-US$200</h3>
                      <p className="text-sm opacity-50">Price</p>
                    </div>
                    <div className="w-[1px] bg-black opacity-10 h-[30px]"></div>
                    <div>
                      <h3 className="font-bold">3 days</h3>
                      <p className="text-sm opacity-50">Duration</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex items-start  gap-3">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/f1491de8cc779b07d9cbd98fa2c6de84-1647559036135/18868a73-79c0-460f-aaa8-487ef2579a89.jpg"
                      className="w-[40px] h-[40px] rounded-full translate-y-[-10px]"
                      alt=""
                    />
                    <div>
                      <p className="font-bold text-sm">Seller's Response</p>
                      <p className="mt-5">
                        It was a real pleasure working with you Bernardo!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <p className="font-bold">Helpful?</p>
                <div className="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path>
                  </svg>
                  <p>Yes</p>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path>
                  </svg>
                  <p>No</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="border p-5 rounded-xl">
                <div className="flex items-center gap-5 border-b pb-5">
                  <div className="w-[60px] h-[60px]">
                    <img
                      src={jobDetail?.avatar}
                      className="rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">
                      {jobDetail?.tenNguoiTao}
                    </h3>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                        className="w-[16px] h-[16px]"
                        alt=""
                      />
                      <p className="text-sm opacity-50">United Kingdom</p>
                    </div>
                  </div>
                </div>
                <div className="py-5 border-b">
                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                        ></path>
                      </svg>
                      <p className="font-bold mt-1">5</p>
                    </div>
                    <p className="text-sm opacity-40 mt-1">2 months ago</p>
                  </div>
                  <p className="mt-3">
                    Great experience. Do not be cheap and go to someone else,
                    your quality will be compromised. Daniela is top quality and
                    when she creates a timeline she sticks to it with constant
                    updates along the way. Overall very happy
                  </p>
                  <div className="mt-3 flex items-center gap-10">
                    <div>
                      <h3 className="font-bold">US$100-US$200</h3>
                      <p className="text-sm opacity-50">Price</p>
                    </div>
                    <div className="w-[1px] bg-black opacity-10 h-[30px]"></div>
                    <div>
                      <h3 className="font-bold">3 days</h3>
                      <p className="text-sm opacity-50">Duration</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex items-start gap-3">
                    <img
                      src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/f1491de8cc779b07d9cbd98fa2c6de84-1647559036135/18868a73-79c0-460f-aaa8-487ef2579a89.jpg"
                      className="w-[40px] h-[40px] rounded-full translate-y-[-10px]"
                      alt=""
                    />
                    <div>
                      <p className="font-bold text-sm">Seller's Response</p>
                      <p className="mt-5">
                        It was a real pleasure working with you Bernardo!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <p className="font-bold">Helpful?</p>
                <div className="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path>
                  </svg>
                  <p>Yes</p>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path>
                  </svg>
                  <p>No</p>
                </div>
              </div>
            </div>
            {comment?.map((item, index) => {
              console.log(item)
              return (
                <div className="mt-10">
                  <div className="border p-5 rounded-xl">
                    <div className="flex items-center gap-5 border-b pb-5">
                      <div className="w-[60px] h-[60px]">
                        {item.avatar == "" ? (
                          <Avatar className="cursor-pointer w-full h-full text-xl">
                            {item.tenNguoiBinhLuan.charAt(0)}
                          </Avatar>
                        ) : (
                          <img
                            src={item.avatar}
                            className="rounded-full w-[70px] h-[60px] object-cover"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">
                          {item.tenNguoiBinhLuan == null
                            ? getLocalStorage("user")?.user.name
                            : item.tenNguoiBinhLuan}
                        </h3>
                        <div className="flex items-center gap-2">
                          <img
                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                            className="w-[16px] h-[16px]"
                            alt=""
                          />
                          <p className="text-sm opacity-50">United Kingdom</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-5 border-b">
                      <div className="flex items-center gap-10">
                        <div className="flex items-center gap-1">
                          {Array.from(
                            { length: item.saoBinhLuan },
                            (_, index) => (
                              <span key={index}>
                                {" "}
                                <svg
                                  width="16"
                                  height="15"
                                  viewBox="0 0 16 15"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"
                                  ></path>
                                </svg>
                              </span> // Hiển thị biểu tượng sao, có thể thay đổi theo nhu cầu
                            )
                          )}
                          <p className="font-bold mt-1">{item.saoBinhLuan}</p>
                        </div>
                        <p className="text-sm opacity-40 mt-1">2 months ago</p>
                      </div>
                      <p className="mt-3">{item.noiDung}</p>
                      <div className="mt-3 flex items-center gap-10">
                        <div>
                          <h3 className="font-bold">US$100-US$200</h3>
                          <p className="text-sm opacity-50">Price</p>
                        </div>
                        <div className="w-[1px] bg-black opacity-10 h-[30px]"></div>
                        <div>
                          <h3 className="font-bold">3 days</h3>
                          <p className="text-sm opacity-50">Duration</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className="flex items-start gap-3">
                        <img
                          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/f1491de8cc779b07d9cbd98fa2c6de84-1647559036135/18868a73-79c0-460f-aaa8-487ef2579a89.jpg"
                          className="w-[40px] h-[40px] rounded-full translate-y-[-10px]"
                          alt=""
                        />
                        <div>
                          <p className="font-bold text-sm">Seller's Response</p>
                          <p className="mt-5">
                            It was a real pleasure working with you{" "}
                            {item.tenNguoiBinhLuan}!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-5">
                    <p className="font-bold">Helpful?</p>
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.89 14.75H1C0.59 14.75 0.25 14.41 0.25 14V8C0.25 7.59 0.59 7.25 1 7.25H3.46L6.05 0.72C6.16 0.43 6.44 0.25 6.75 0.25H7.67C8.59 0.25 9.34 0.98 9.34 1.87V5.45H13.17C14 5.45 14.78 5.84 15.27 6.48C15.73 7.1 15.87 7.87 15.66 8.6L14.39 12.93C14.08 13.99 13.06 14.74 11.9 14.74L11.89 14.75ZM4.75 13.25H11.89C12.38 13.25 12.81 12.95 12.94 12.52L14.21 8.19C14.32 7.81 14.16 7.52 14.06 7.39C13.85 7.12 13.53 6.96 13.16 6.96H8.58C8.17 6.96 7.83 6.62 7.83 6.21V1.87C7.83 1.81 7.76 1.75 7.66 1.75H7.25L4.74 8.08V13.25H4.75ZM1.75 13.25H3.25V8.75H1.75V13.25V13.25Z"></path>
                      </svg>
                      <p>Yes</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.25533 14.75H8.33533C7.41533 14.75 6.66533 14.03 6.66533 13.13L6.66533 9.55H2.83533C2.00533 9.55 1.22533 9.16 0.735326 8.52C0.275326 7.9 0.135326 7.13 0.345326 6.4L1.62533 2.06C1.93533 1 2.95533 0.25 4.11533 0.25L15.0053 0.25C15.4153 0.25 15.7553 0.59 15.7553 1V7C15.7553 7.41 15.4153 7.75 15.0053 7.75H12.5453L9.95533 14.28C9.84533 14.57 9.56533 14.75 9.25533 14.75ZM4.11533 1.75C3.62533 1.75 3.19533 2.05 3.06533 2.48L1.79533 6.81C1.68533 7.19 1.84533 7.48 1.94533 7.61C2.15533 7.88 2.47533 8.04 2.84533 8.04H7.42533C7.83533 8.04 8.17533 8.38 8.17533 8.79L8.17533 13.12C8.17533 13.17 8.24533 13.24 8.34533 13.24H8.75533L11.2653 6.91V1.75L4.11533 1.75ZM12.7553 6.25H14.2553V1.75L12.7553 1.75V6.25Z"></path>
                      </svg>
                      <p>No</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <CommentComponent
            jobDetail={jobDetail}
            setComment={setComment}
            comment={comment}
          />
        </div>
        <div className="hidden xl:block w-1/2">
          <div className="w-full max-w-md mx-auto mt-10 border">
            {/* Tab Navigation */}
            <div className="flex border-b">
              <button
                className={`py-4 px-7 text-lg font-bold w-[33%] border-r  ${
                  activeTab === 0
                    ? "border-b-2 border-b-black text-black"
                    : "text-gray-500 bg-gray-100"
                }`}
                onClick={() => setActiveTab(0)}
              >
                Basic
              </button>
              <button
                className={`py-4 px-7 text-lg font-bold w-[33%] border-r ${
                  activeTab === 1
                    ? "border-b-2 border-b-black text-black"
                    : "text-gray-500 bg-gray-100"
                }`}
                onClick={() => setActiveTab(1)}
              >
                Standard
              </button>
              <button
                className={`py-4 px-7 text-lg font-bold w-[34%] ${
                  activeTab === 2
                    ? "border-b-2 border-b-black text-black"
                    : "text-gray-500 bg-gray-100"
                }`}
                onClick={() => setActiveTab(2)}
              >
                Premium
              </button>
            </div>
            {/* Tab Content */}
            <div className="py-7 px-6">{getTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforDetail;
