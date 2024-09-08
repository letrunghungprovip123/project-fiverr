import React from "react";

const Banner = ({ jobType }) => {
  const scrollRef = React.useRef(null);
  const bannerImg = {
    1: `bg-[url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626459703/G_D-%20Desktop%20banner.png')]`,
    2: `bg-[url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/0426b6ab656cedb4697336a530541d50-1688626333573/Digital%20Marketing-%20Desktop%20banner.png')]`,
    3: `bg-[url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/6de5a002b40043ab739b6382daf94e37-1688626851418/W_T-%20Desktop%20banner.png')]`,
    4: `bg-[url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/c5be9e1ff7a9c16910688aa6b7b5ffee-1688626700100/V_A-%20Desktop%20banner.png')]`,
    5: `bg-[url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/509f310d48d17eafe768a87f78d10af8-1688626492933/M_A-%20Desktop%20banner.png')]`,
  };
  const miniInfor = {
    2: [
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278710/SEO_2x.png`,
        desc: `Seo`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278701/Social%20Media%20Marketing_2x.png`,
        desc: `Social Media Marketing `,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278703/Video%20Marketing_2x.png`,
        desc: `Video Marketing`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278707/E-Commerce%20Marketing_2x.png`,
        desc: `E-Commerce Marketing`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278716/SEM_2x.png`,
        desc: `SEM`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278711/Email%20Marketing_2x.png`,
        desc: `Email Marketing`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278721/Music%20Promotion_2x.png`,
        desc: `Music Promotion`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/db18b6c9ba3af4778a5796b9e94137d7-1626177278720/Social%20Media%20Advertising_2x.png`,
        desc: `Paid Social Media`,
      },
    ],
    3: [
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285644/Articles%20_%20Blog%20Posts.png`,
        desc: `Articles & Blog Posts`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285630/Translation.png`,
        desc: `Translation`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285651/Ghostwriting.png`,
        desc: `Ghostwriting`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285643/Proofreading%20_%20Editing.png`,
        desc: `Proofreading & Editing`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285646/Resume%20Writing.png`,
        desc: `Resume Writing`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285650/Website%20Content.png`,
        desc: `Website Content`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285639/Product%20Descriptions.png`,
        desc: `Product Descriptions`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285629/Scriptwriting.png`,
        desc: `Scriptwriting`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285638/Book%20Editing.png`,
        desc: `Book Editing`,
      },
    ],
    4: [
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670390/Video%20Editing.png`,
        desc: `Video Editing`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670370/Short%20Video%20Ads.png`,
        desc: `Video Ads & Commercials`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/4e99f7989f6e3ea9fc115fc017051455-1630332866288/Whiteboard%20_%20Animated%20Explainers.png`,
        desc: `Animated Explainers`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670382/Character%20Animation.png`,
        desc: `Character Animation`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/9d0390ca87e4f946f4b4126d5cd15332-1653292063612/Social%20Media%20Videos%20icon%29.png`,
        desc: `Social Media Videos`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/fa31de2cd7a541ba5fd2020e391b844f-1682323856747/ai%20atrists.png`,
        desc: `AI Music Videos`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670372/Logo%20Animation.png`,
        desc: `Logo Animation`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670391/Visual%20Effects.png`,
        desc: `Visual Effects`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/89ab9ac515a075a49a33b72518218e69-1630332670388/3D%20Product%20Animation.png`,
        desc: `3D Product Animation`,
      },
    ],
    5: [
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323563/Voice%20Over_2x.png`,
        desc: `Voice Over`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323574/Producers_Composers_2x.png`,
        desc: `Music Producers`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323569/Singers_Vocalists_2x.png`,
        desc: `Singers & Vocalists`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323569/Mixing_Mastering_2x.png`,
        desc: `Mixing & Mastering`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323556/Session%20Musicians_2x.png`,
        desc: `Session Musicians`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323560/Songwriters_2x.png`,
        desc: `Songwriters`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323553/Podcast%20Editing_2x.png`,
        desc: `Podcast Production`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323551/Beats%20%28Beat%20Making%29_2x.png`,
        desc: `Beat Making`,
      },
      {
        img: `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/849e7cac6e16783b5dc3ab006b128c00-1626181323558/Sound%20Design_2x.png`,
        desc: `Sound Design`,
      },
    ],
  };
  const scroll = (direction) => {
    if (scrollRef.current) {
      // Lấy kích thước của phần tử chứa và số lượng phần tử muốn cuộn qua
      const itemWidth = scrollRef.current.firstChild.offsetWidth;
      const itemsToScroll = 5; // Số lượng phần tử muốn cuộn qua mỗi lần
      const scrollAmount = itemWidth * itemsToScroll; // Khoảng cách cuộn

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0">
      <div
        className={`${
          bannerImg[jobType?.id]
        } h-[170px] md:h-[200px] lg:h-[250px] w-full bg-cover bg-center rounded-xl flex flex-col items-center justify-center `}
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
          {jobType?.tenLoaiCongViec}
        </h3>
        <p className="lg:text-xl font-medium text-white mt-3">
          Designs to make you stand out.
        </p>
        <button className="items-center hidden md:flex py-3 gap-2 text-white px-4 border border-white rounded-[4px] mt-5 hover:bg-white hover:text-black">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentFill"
            className="text-white w-[14px] h-[14px] hover:text-black"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"
              fill="currentColor"
            ></path>
          </svg>{" "}
          How Fiverr Works
        </button>
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold mt-14">
        Most popular in {jobType?.tenLoaiCongViec}
      </h3>
      <div className="relative">
        <div
          ref={scrollRef}
          className="overflow-scroll mt-5 py-1 px-1 scrollbar-hide"
        >
          <div className="flex gap-4 w-[2460px]">
            {jobType?.id !== 1 ? (
              miniInfor[jobType?.id]?.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden"
                >
                  <img src={item.img} alt="" className="w-[48px] h-[48px]" />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[15px] font-semibold">{item.desc}</h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold">
                      Minimalist Logo Design
                    </h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101633/Illustration_2x.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold">IIIustration</h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/55b9d6349057bb9fe177ea57e2d92f30-1670570507381/Web%20Design.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold">
                      Website Design
                    </h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold">
                      Architecture & Interior Design
                    </h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ace985608fce227eb6477959645d09ed-1680446271839/ai%20atrists.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold">AI Artists</h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold">Editing</h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold">
                      T-Shirts & Merchandise
                    </h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5987755afeb2d9ea01871fdee90a9a05-1670570470543/Product%20_%20industrial%20design.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold">
                      Industrial & Product Design
                    </h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl hover:text-green-500 overflow-hidden">
                  <img
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101621/Social%20Media%20Design_2x.png"
                    alt=""
                    className="w-[48px] h-[48px]"
                  />
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-semibold">
                      Social Media Design
                    </h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
          <button
            className="absolute top-[-70px] right-[30px] translate-y-5 translate-x-[-25px] transform  py-2 px-3 rounded-full box-shadow z-50 bg-[#FFFFFF]"
            onClick={() => scroll("left")}
          >
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.2279 0.690653L7.84662 1.30934C7.99306 1.45578 7.99306 1.69322 7.84662 1.83968L2.19978 7.5L7.84662 13.1603C7.99306 13.3067 7.99306 13.5442 7.84662 13.6907L7.2279 14.3094C7.08147 14.4558 6.84403 14.4558 6.69756 14.3094L0.153374 7.76518C0.00693607 7.61875 0.00693607 7.38131 0.153374 7.23484L6.69756 0.690653C6.84403 0.544184 7.08147 0.544184 7.2279 0.690653Z"></path>
            </svg>
          </button>
          <button
            className="absolute top-[-70px] right-[40px] translate-y-5 translate-x-[25px] py-2 px-3 rounded-full box-shadow z-50 bg-[#FFFFFF]"
            onClick={() => scroll("right")}
          >
            <svg
              width="8"
              height="16"
              viewBox="0 0 8 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
