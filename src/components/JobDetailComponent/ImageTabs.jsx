import React, { useState } from 'react';

const ImageTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const images = [
    'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/a86b63428e054f95015ad12a69db1c31-1647340031/61c82f6a3bf79e00930a9051.png',
    'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/d84aac510da0561e8cd9c079cef10861-1650693490/61c3a05e85b68536eca4c950.png',
    'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/155c2b93000cea768bf7c3c4d6cd95ae-1650700040/61c58c6185b68536eca4c988.png'
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex border-b border-gray-200">
        {images.map((_, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-sm font-medium border-b-2 ${
              activeTab === index
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => handleTabClick(index)}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <img
          src={images[activeTab]}
          alt={`Tab ${activeTab + 1}`}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageTabs;
