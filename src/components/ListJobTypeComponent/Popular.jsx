import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    icon: "/api/placeholder/100/100",
    title: "Minimalist Logo Design",
  },
  {
    icon: "/api/placeholder/100/100",
    title: "Illustration",
  },
  {
    icon: "/api/placeholder/100/100",
    title: "Website Design",
  },
  {
    icon: "/api/placeholder/100/100",
    title: "Architecture & Interior Design",
  },
  {
    icon: "/api/placeholder/100/100",
    title: "AI Artists",
  },
];

const Popular = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev === 0 ? 1 : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="container">
      <div className="relative flex gap-4 rounded-lg overflow-hidden py-10">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl">
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
              alt=""
              className="w-[48px] h-[48px]"
            /> 
            <div className="flex items-center gap-2">
              <h3 className="text-[16px] font-semibold">Minimalist Logo Design</h3>
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
          <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl">
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
          <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl">
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/55b9d6349057bb9fe177ea57e2d92f30-1670570507381/Web%20Design.png"
              alt=""
              className="w-[48px] h-[48px]"
            /> 
            <div className="flex items-center gap-3">
              <h3 className="text-[16px] font-semibold">Website Design</h3>
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
          <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl">
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
              alt=""
              className="w-[48px] h-[48px]"
            /> 
            <div className="flex items-center gap-3">
              <h3 className="text-[16px] font-semibold">Architecture & Interior Design</h3>
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
          <div className="flex gap-3 items-center p-[14px] box-shadow rounded-xl">
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
        </div>
        <button
          onClick={() => handleClick("left")}
          className="absolute right-[60px] top-5 -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-200"
        >
            <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => handleClick("right")}
          className="absolute right-4 top-5 -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Popular;
