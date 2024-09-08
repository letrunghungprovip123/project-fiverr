import React from 'react';
import AdminTopBar from '../../components/AdminTopBar/AdminTopBar';
import AdminSideBar from '../../components/AdminSideBar/Sidebar';
import ManagementTable from '../../components/ManagementTable'; // Reusable table component
import api from '../../service/api';

const UserManagePage = () => {
  // Column mapping for user management
  const columnMapping = {
    id: 'Mã Người Dùng',
    username: 'Tên Tài Khoản',
    email: 'Email',
    phone: 'Số Điện Thoại',
    birthday: 'Ngày Sinh',
    gender: 'Giới Tính',
    role: 'Vai Trò',
    groupCode: 'Mã Nhóm',
    skill: 'Kỹ Năng',
    certification: 'Chứng Chỉ',
  };

  // Fetch user data function
  const fetchUsers = async (currentPage, searchTerm) => {
    const response = await api.get('/users/phan-trang-tim-kiem', {
      params: { pageIndex: currentPage, pageSize: 10, keyword: searchTerm },
    });
    return response.data;
  };

  return (
    <div className="admin-page">
      {/* Top Bar */}
      <AdminTopBar />

      <div className="admin-content" style={{ display: 'flex' }}>
        {/* Sidebar */}
        <AdminSideBar />

        {/* Main content */}
        <div className="content" style={{ flex: 1, padding: '20px' }}>
          <h2>Quản lý người dùng</h2>
          <ManagementTable columnMapping={columnMapping} fetchData={fetchUsers} />
        </div>
      </div>
    </div>
  );
};

export default UserManagePage;
