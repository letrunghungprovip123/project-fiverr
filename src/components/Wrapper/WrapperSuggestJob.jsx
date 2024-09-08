import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "antd";
import useDebounce from "../../hooks/useDebounce";
import { congViecService } from "../../service/congViec.service";
import { Link } from "react-router-dom";
import { path } from "../../common/path";

const WrapperSuggestJob = ({ children }) => {
  const [items, setItems] = useState([]);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 500);
  const dropdownRef = useRef(null); // Tham chiếu đến dropdown

  const handleGetValueChildren = (valueChildren) => {
    setValue(valueChildren);
  };

  const clonedChildren = React.cloneElement(children, {
    setItems,
    setOpenDropDown,
    handleGetValueChildren,
  });

  useEffect(() => {
    if (value) {
      congViecService
        .layCongViecTheoTen(value)
        .then((res) => {
          let items2 = res.data.content.slice(0, 4).map((item, index) => {
            return {
              key: index.toString(),
              label: (
                <Link
                  to={`${path.jobDetail}?MaCongViec=${item.congViec.id}`}
                  className="flex items-center space-x-4"
                >
                  <img src={item.congViec.hinhAnh} className="h-24" alt="" />
                  <div>
                    <h4>{item.congViec.tenCongViec}</h4>
                    <p>{item.congViec.giaTien}</p>
                  </div>
                </Link>
              ),
            };
          });
          setOpenDropDown(true);
          setItems(items2);
        })
        .catch((err) => {
          console.log(err);
          setOpenDropDown(false);
        });
    }
  }, [debounceValue]);



  return (
    <div ref={dropdownRef}>
      <Dropdown
        menu={{
          items,
        }}
        open={openDropDown}
      >
        {clonedChildren}
      </Dropdown>
    </div>
  );
};

export default WrapperSuggestJob;
