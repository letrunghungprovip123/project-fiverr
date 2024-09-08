import { http } from "./config";
import { getLocalStorage } from "../utils/util";
export const binhLuanService = {
  layBinhLuanTheoCongViec: (data) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${data}`);
  },
  themBinhLuan: (data,token) => {
    return http.post(`/binh-luan`,data,{
        headers:{
            token
        }
    })
  }
};