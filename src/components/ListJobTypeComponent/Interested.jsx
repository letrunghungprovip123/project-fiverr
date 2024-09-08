import React from "react";

const Interested = ({ jobType }) => {
  return (
    <div className="container py-10 px-5 sm:px-3 lg:px-0">
      <h3 className="mt-5 text-xl lg:text-2xl font-bold text-center">
        You might be interested in {jobType?.tenLoaiCongViec}
      </h3>
      <div className="mt-10 space-y-5">
        <div className="flex flex-col lg:flex-row gap-1 2xl:gap-3 items-center justify-center">
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Background Removal
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Background Removal
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Book Cover Design
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Minimalist Logo Design
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Twitch Overlay Design
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            3D Modeling & Rendering
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Midjourney Artists
          </p>
        </div>
        <div className="hidden lg:flex gap-1 2xl:gap-3 items-center justify-center">
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline hidden 2xl:block">
            Children Illustrations
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Watercolor Logo Design
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            3D Rendering & Modeling
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Pattern Making & Fashion
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Character Design
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Custom Emotes & Badges
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            2D Drawings & Floor Plans
          </p>
        </div>
        <div className="hidden lg:flex gap-3 items-center justify-center">
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Rapid Prototyping
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Pixel Art Illustration
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            3D Logo Design
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Label Design
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Technical Drawing
          </p>
          <p className="px-4 py-2 rounded-full font-bold  bg-[#EFEFF0] text-sm hover:underline">
            Portraits Retouching
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interested;
