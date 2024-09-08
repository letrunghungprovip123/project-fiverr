import React from "react";
import CardService from "../Card/CardService";
const Service = () => {
  const scrollRef = React.useRef(null);

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

  const itemCard = [
    {
      name: "Web Development",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png",
      bg: "bg-[#00732E]",
    },
    {
      name: "Logo Desin",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png",
      bg: "bg-[#FF7640]",
    },
    {
      name: "SEO",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png",
      bg: "bg-[#003912]",
    },
    {
      name: "Architecture",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png",
      bg: "bg-[#633341]",
    },
    {
      name: "Social Media",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png",
      bg: "bg-[#687200]",
    },
    {
      name: "Voice Over",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
      bg: "bg-[#421300]",
    },
    {
      name: "Sofware Dev",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/software-development.png",
      bg: "bg-[#254200]",
    },
    {
      name: "Data Science",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156495/data-science.png",
      bg: "bg-[#8F2900]",
    },
    {
      name: "Product Photo",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156481/product-photography.png",
      bg: "bg-[#687200]",
    },
    {
      name: "E-commerce",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156474/e-commerce.png",
      bg: "bg-[#00732E]",
    },
    {
      name: "Video Editing",
      img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/video-editing.png",
      bg: "bg-[#BE5272]",
    },
  ];
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0 relative">
      <h3 className="mb-10 text-5xl">Popular service</h3>
      <div
        ref={scrollRef}
        className="flex overflow-scroll gap-10 xl:gap-5 scrollbar-hide w-full"
      >
        {itemCard.map((item, index) => {
          return (
            <>
              <div className="flex justify-center items-center">
                <CardService name={item.name} img={item.img} bg={item.bg} />
              </div>
            </>
          );
        })}
        <button
          className="absolute top-1/2 translate-y-5 translate-x-[-25px] transform  py-4 px-5 rounded-full box-shadow z-50 bg-[#FFFFFF]"
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
          className="absolute top-1/2 translate-y-5 translate-x-[5px] md:translate-x-[15px] lg:translate-x-[25px] right-0 py-4 px-5 rounded-full box-shadow z-50 bg-[#FFFFFF]"
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
  );
};

export default Service;
