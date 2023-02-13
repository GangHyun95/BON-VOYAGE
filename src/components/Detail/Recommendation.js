import React, { useState } from "react";
import { MdOutlinePlace, MdStorefront } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import ButtonGroup from "./ButtonGroup";
import RecommendationCard from "./RecommendationCard";
import { CiSearch } from "react-icons/ci";

const Recommendation = () => {
  const [visible, setVisible] = useState(false);
  const openNotice = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };
  // 모달 만들기
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalVisible(false);
  };
  const arr = [
    { title: "음식점", icon: <MdStorefront /> },
    { title: "관광명소", icon: <MdOutlinePlace /> },
    { title: "숙박시설", icon: <RiHotelLine /> },
  ];
  const [filters, setFilter] = useState(arr[0].title);
  return (
    <div className="w-[360px] border-l">
      {/* 검색폼 */}
      <div className="m-3">
        <form className="relative text-lg text-gray-400">
          <input
            type="text"
            className="w-full h-12 outline-none border rounded-3xl py-4 px-6"
          />
          <CiSearch className="text-2xl absolute top-1/2 right-3 translate-y-[-50%] text-main" />
        </form>
      </div>
      <ButtonGroup filters={filters} arr={arr} setFilter={setFilter} />

      <h2 className="text-center my-2">추천장소</h2>
      <ul>
        <RecommendationCard
          openNotice={openNotice}
          modalVisible={modalVisible}
          openModal={openModal}
          closeModal={closeModal}
          visible={visible}
        />
      </ul>
    </div>
  );
};

export default Recommendation;
