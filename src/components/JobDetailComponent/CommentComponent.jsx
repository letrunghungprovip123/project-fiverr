import React, { useEffect, useState, useContext } from "react";
import { getLocalStorage } from "../../utils/util";
import { useFormik } from "formik";
import { binhLuanService } from "../../service/binhLuan.service";
import { useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { NotificationContext } from "../../../App";
const CommentComponent = ({ jobDetail, setComment, comment }) => {
  const [initialValues, setInitialValues] = useState(null);
  const maCV = jobDetail?.congViec?.id;
  const { showNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (maCV) {
      setInitialValues({
        id: 0,
        maCongViec: maCV,
        maNguoiBinhLuan: getLocalStorage("user")?.user.id || "",
        ngayBinhLuan: new Date().toISOString().split("T")[0],
        noiDung: "",
        saoBinhLuan: 5,
      });
    }
  }, [maCV]);

  const formik = useFormik({
    initialValues: initialValues || {
      id: 0,
      maCongViec: "",
      maNguoiBinhLuan: "",
      ngayBinhLuan: "",
      noiDung: "",
      saoBinhLuan: 5,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      if (getLocalStorage("user")) {
        binhLuanService
          .themBinhLuan(values, getLocalStorage("user").token)
          .then((res) => {
            const cmt = {...res.data.content,avatar : getLocalStorage("user")?.user.avatar}
            setComment((comment) => [...comment, cmt]);
            showNotification("Bạn thêm comment thành công!", "success");
          })
          .catch((err) => {
            showNotification(
              "Comment không thành công vui lòng thử lại!",
              "error"
            );
            console.log(err);
          });
      } else {
        navigate(path.signIn);
      }
    },
  });

  if (!initialValues) return <div>Loading...</div>;

  return (
    <div className="">
      <form className="mt-10" onSubmit={formik.handleSubmit}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="noiDung" className="sr-only">
              Your comment
            </label>
            <textarea
              id="noiDung"
              rows={4}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-none"
              placeholder="Write a comment..."
              required
              name="noiDung"
              onChange={formik.handleChange}
              value={formik.values.noiDung}
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
            <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
              {/* Các nút bấm khác */}
            </div>
          </div>
        </div>
      </form>
      <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
        Remember, contributions to this topic should follow our{" "}
        <a href="" className="text-blue-600 dark:text-blue-500 hover:underline">
          Community Guidelines
        </a>
        .
      </p>
    </div>
  );
};

export default CommentComponent;
