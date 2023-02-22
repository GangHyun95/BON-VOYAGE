import React, { useCallback, useEffect, useState } from "react";
import { MdOutlinePlace, MdStorefront } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import ButtonGroup from "./ButtonGroup";
import RecommendationCard from "./RecommendationCard";
import { CiSearch } from "react-icons/ci";
import Paging from "../common/Paging";

const Recommendation = ({ mapData, setPos }) => {
  const [visible, setVisible] = useState(false);
  const openNotice = (e) => {
    e.stopPropagation();
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
  // 버튼 타입 필터 정의
  function getFilteredItems(mapData, filter) {
    return mapData.filter((place) => place.tpType === filter.tpType);
  }
  // 버튼 타입 필터 호출
  const filtered = getFilteredItems(mapData, filter);

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
  const [postPerPage] = useState(5); // 한 페이지에 보여질 아이템 수
  const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
  const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
  const [currentPosts, setCurrentPosts] = useState([]); // 현재 페이지에서 보여지는 아이템들

  useEffect(() => {
    setIndexOfLastPost(currentPage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(filtered.slice(indexOfFirstPost, indexOfLastPost));
  }, [indexOfFirstPost, indexOfLastPost, currentPage, mapData]);
  const setPage = (error) => {
    setCurrentPage(error);
  };

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
        {currentPosts.length > 0 &&
          currentPosts.map((recommendation) => (
            <RecommendationCard
              openNotice={openNotice}
              modalVisible={modalVisible}
              openModal={openModal}
              closeModal={closeModal}
              visible={visible}
              recommendation={recommendation}
              setPos={setPos}
              key={recommendation.tlSeq}
            />
          ))}
      </ul>
      <Paging page={currentPage} count={filtered.length} setPage={setPage} />
    </div>
  );
};

export default Recommendation;
