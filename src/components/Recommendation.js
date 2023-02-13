import React, { useState } from "react";

import { MdOutlinePlace } from "react-icons/md";
import { RiRestaurant2Line } from "react-icons/ri";
import { MdOutlineLocalHotel } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import SearchForm from "./SearchForm";
import ButtonGroup from "./ButtonGroup";

const Recommendation = () => {
  const [Visible, setVisible] = useState(false);
  const openNotice = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };
  const arr = [
    { title: "음식점", icon: <RiRestaurant2Line /> },
    { title: "관광명소", icon: <MdOutlinePlace /> },
    { title: "숙박시설", icon: <MdOutlineLocalHotel /> },
  ];
  const [filters, setFilter] = useState(arr[0].title);
  return (
    <div className="w-[360px] border-l">
      {/* 검색폼 */}

      <div className="m-3">
        {" "}
        <SearchForm />
      </div>
      <div className="flex items-center justify-center">
        <ButtonGroup filters={filters} arr={arr} setFilter={setFilter} />
      </div>

      <h2 className="text-center my-2">추천장소</h2>
      <ul>
        <li className="flex justify-center m-5">
          <div className="flex h-[130px] flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-20 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="/photo/jeju.jpg"
              alt="이미지"
            />
            <div className="relative p-6 flex flex-col justify-start">
              <p className="text-gray-900 text-sm font-medium mb-2">
                감천문화마을{" "}
              </p>

              <button>
                <AiOutlinePlus
                  onClick={openNotice}
                  className="absolute right-2 bottom-3"
                />
              </button>

            </div>
          </div>
        </li>
        {Visible && (
          <div className="max-w-[360px] text-center my-auto h-[50px] bg-blue-200">
            <p>선택 목록에 추가되었습니다.</p>
          </div>
        )}{" "}
      </ul>
    </div>
  );
};

export default Recommendation;
