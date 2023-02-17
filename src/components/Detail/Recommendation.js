import React, { useState } from "react";
import { MdOutlinePlace, MdStorefront } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import ButtonGroup from "./ButtonGroup";
import RecommendationCard from "./RecommendationCard";
import { CiSearch } from "react-icons/ci";

const Recommendation = ({ mapData, setLat, setLng, pos, setPos, place }) => {
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
    { title: "음식점", icon: <MdStorefront />, tpType: 3 },
    { title: "관광명소", icon: <MdOutlinePlace />, tpType: 1 },
    { title: "숙박시설", icon: <RiHotelLine />, tpType: 2 },
  ];
  const [filter, setFilter] = useState(arr[0]);

  const filtered = getFilteredItems(mapData, filter);

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
      <ButtonGroup filter={filter} arr={arr} setFilter={setFilter} />

      <h2 className="text-center my-2">추천장소</h2>
      <ul>
        {filtered.map((recommendation) => (
          <RecommendationCard
            openNotice={openNotice}
            modalVisible={modalVisible}
            openModal={openModal}
            closeModal={closeModal}
            visible={visible}
            recommendation={recommendation}
            setLat={setLat}
            setLng={setLng}
            setPos={setPos}
            place={place}
            key={recommendation.tlSeq}
          />
        ))}
      </ul>
    </div>
  );
};

function getFilteredItems(mapData, filter) {
  return mapData.filter((place) => place.tpType === filter.tpType);
}
export default Recommendation;
