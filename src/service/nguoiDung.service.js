import { Upload } from "antd";
import { http } from "./config";
export const nguoiDungService = {
    getListUser : () => {
        return http.get("/users");
    },
    deleteUser : (id) => {
        return http.delete(`/users?id=${id}`); 
    },
    createUser: (data) => {
        return http.post(`/users`,data)
    },
    updateUser: (id,data) => {
        return http.put(`/users/${id}`,data)
    },
    uploadAvatar: (data,token) => {
        return http.post("/users/upload-avatar",data,{
            headers: {
                token,
            }
        })
    }
}