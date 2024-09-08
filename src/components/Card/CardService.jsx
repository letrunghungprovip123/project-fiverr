import React from "react";

const CardService = ({ name, img, bg }) => {

  return (
    <div
      className={`flex flex-col lg:gap-3 ${bg} rounded-xl hover:opacity-80 w-[130px] sm:w-[198px] lg:w-[218px] lg:pt-[10px] justify-between min-h-[165px] lg:min-h-[286px]`}
    >
      <h3 className="text-white font-bold text-sm lg:text-lg py-3 lg:pb-3 px-3">
        {name}
      </h3>
      <div className="p-[4px] lg:p-[8px]">
        <img src={img} width="100%" alt="" className="rounded-xl" />
      </div>
    </div>
  );
};

export default CardService;
