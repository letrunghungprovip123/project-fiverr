import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
const Explore = ({ jobType }) => {
  return (
    <div className="container py-10 px-5 sm:px-5 xl:px-0">
      <h3 className="text-2xl font-bold">Explore {jobType?.tenLoaiCongViec}</h3>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-20">
        {jobType?.dsNhomChiTietLoai.map((item, index) => {
          return (
            <div>
              <img
                src={
                  item.hinhAnh == ""
                    ? `https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649968/Logo%20_%20Brand%20Identity.png`
                    : item.hinhAnh
                }
                alt=""
                className="w-full rounded-lg max-h-[210px] object-cover"
              />
              <h3 className="mt-4 font-semibold text-xl">{item.tenNhom}</h3>
              <div className="mt-1 xl:mt-3 text-gray-400 text-lg flex flex-col">
                {item.dsChiTietLoai.map((item, index) => {
                  return (
                    <>
                      <Link
                        to={`${path.listJob}?maChiTietLoai=${item.id}`}
                        className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg"
                      >
                        {item.tenChiTiet}
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649988/Art%20_%20Illustration.png"
            alt=""
            className="w-full rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-xl">Art & Illustration</h3>
          <div className="mt-4  text-gray-400 text-lg">
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              IIIlustration
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              AI Artists
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              AI Avatar Design{" "}
              <span className="px-2 py-1 text-[12px] border-[#FF7BCA] text-[#FF7BCA] border rounded-3xl font-medium">
                NEW
              </span>
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Children's Book IIIlustration
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Portrait & Caricatures
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Cartoon & Comic
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Pattern Design
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Tattoo Design
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Storyboards
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              NFT Art
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649984/Architecture%20_%20Building%E2%80%A8Design.png"
            alt=""
            className="w-full rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-xl">
            Architecture & Building Design
          </h3>
          <div className="mt-4 space-y-4 text-gray-400 text-lg">
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Architecture & Interior Design
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Landspace Design
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Buidling Engineering
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Building Information Modeling
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649981/Fashion%20_%20Merchandise.png"
            alt=""
            className="w-full rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-xl">Fashion & Merchandise</h3>
          <div className="mt-4 space-y-4 text-gray-400 text-lg">
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              T-Shirt & Merchandise
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Fashion Design
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Jewelry Design
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649974/Miscellaneous.png"
            alt=""
            className="w-full rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-xl">Miscellaneous</h3>
          <div className="mt-4 space-y-4 text-gray-400 text-lg">
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Design Advice
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Other
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649982/Visual%20Design.png"
            alt=""
            className="w-full rounded-lg"
          />
          <h3 className="mt-4 font-semibold text-xl">Visual Design</h3>
          <div className="mt-4 space-y-4 text-gray-400 text-lg">
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Image Editing
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              AI Image Editing{" "}
              <span className="px-2 py-1 text-[12px] border-[#FF7BCA] text-[#FF7BCA] border rounded-3xl font-medium">
                NEW
              </span>
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Presentation Desgin
            </p>
            <p className="py-2 px-3 translate-x-[-12px] hover:bg-gray-100 rounded-lg">
              Infographic Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;