import React, { useState, useEffect } from 'react';
import api from '../../service/api';

const ManagementTable = ({ columnMapping, fetchData }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData(currentPage, searchTerm).then(response => {
      setItems(response.items || []);
      setTotalPages(response.totalPages || 1);
    });
  }, [currentPage, searchTerm, fetchData]);

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData(currentPage, searchTerm);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '300px'
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Tìm
          </button>
        </div>
      </div>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '20px'
        }}
      >
        <thead>
          <tr>
            {Object.values(columnMapping).map((header, index) => (
              <th
                key={index}
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #ddd',
                  backgroundColor: '#f4f4f4',
                  textAlign: 'left'
                }}
              >
                {header}
              </th>
            ))}
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f4f4f4' }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(columnMapping).map((col, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #ddd'
                  }}
                >
                  {col === 'HinhAnh' ? (
                    <img src={item[col]} alt="Avatar" width="50" />
                  ) : (
                    item[col]
                  )}
                </td>
              ))}
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <button style={{ marginRight: '10px' }}>Xem thông tin chi tiết</button>
                <button style={{ marginRight: '10px' }}>Sửa</button>
                <button>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: '5px 10px',
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            cursor: 'pointer'
          }}
        >
          prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              padding: '5px 10px',
              border: '1px solid #ddd',
              backgroundColor: currentPage === i + 1 ? '#007bff' : '#fff',
              color: currentPage === i + 1 ? '#fff' : '#000',
              cursor: 'pointer'
            }}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: '5px 10px',
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            cursor: 'pointer'
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default ManagementTable;
