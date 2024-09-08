import { http } from "./config";
export const thueCongViec = {
  thueCongViec: (data, token) => {
    return http.post(`/thue-cong-viec`, data, {
      headers: {
        token,
      },
    });
  },
  layDanhSachDaThue: (token) => {
    return http.get(`/thue-cong-viec/lay-danh-sach-da-thue`, {
      headers: {
        token,
      },
    });
  },
  xoaCongViecDaThue: (data, token) => {
    return http.delete(`/thue-cong-viec/${data}`, {
      headers: {
        token,
      },
    });
  },
};
