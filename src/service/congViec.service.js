import { http } from "./config";

export const congViecService = {
    layCongViecTheoTen : (data) => {
        return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`);
    },
    layMenuLoaiCongViec : () => {
        return http.get("/cong-viec/lay-menu-loai-cong-viec")
    },
    layCongViecTheoMaChiTietLoai: (data) => {
        return http.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${data}`)
    },
    layCongViecTheoMaLoaiCongViec: (data) => {
        return http.get(`/cong-viec/lay-chi-tiet-loai-cong-viec/${data}`)
    },
    layCongViecTheoMaCongViec: (data) => {
        return http.get(`/cong-viec/lay-cong-viec-chi-tiet/${data}`)
    }
}