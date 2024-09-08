import React from "react";

const Seeking = () => {
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0">
      <div>
        <div className="block space-y-20 lg:space-y-0 lg:flex justify-between items-center border rounded-lg pl-10 py-10 2xl:py-0">
          <div>
            <h3 className="text-4xl font-bold">
              Seeking a{" "}
              <span className="font-thin font">full suite of services?</span>
            </h3>
            <p className="mt-3 text-lg">
              Find a comprehensive graphic and design agency to handle it all.
            </p>
            <div className="flex flex-col lg:flex-row gap-3 mt-5 items-center">
              <p className="py-2 px-4 rounded-full text-[#782020] bg-[#FFEDED] text-sm font-medium">
                Visual Identity & Branding
              </p>
              <p className="py-2 px-4 rounded-full text-[#782020] bg-[#FFEDED] text-sm font-medium">
                Web & App Design
              </p>
              <p className="py-2 px-4 rounded-full text-[#782020] bg-[#FFEDED] text-sm font-medium">
                Marketing & Advertising
              </p>
              <p className="py-2 text-sm font-bold text-[#782020]">& more</p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <button className="lg:ml-0 mt-6 py-2 px-4 rounded-lg text-white font-semibold bg-black">
                Browse agencles
              </button>
            </div>
          </div>
          <div className="w-[2/3] lg:w-1/2">
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/da1594ab63ac10603bc01158360e0038-1723034424480/Graphic_Design_2x.png"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seeking;
