import React, { useEffect, useState } from "react";
import { MdOutlinePlace, MdStorefront } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import ButtonGroup from "./ButtonGroup";
import RecommendationCard from "./RecommendationCard";
import { CiSearch } from "react-icons/ci";
import Paging from "../common/Paging";

const Recommendation = ({
  mapData,
  setPos,
  startDate,
  endDate,
  place,
  openNotice,
  keyword,
  setKeyword,
}) => {
  const arr = [
    { title: "음식점", icon: <MdStorefront />, tpType: 1 },
    { title: "관광명소", icon: <MdOutlinePlace />, tpType: 2 },
    { title: "숙박시설", icon: <RiHotelLine />, tpType: 3 },
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
  }, [indexOfFirstPost, indexOfLastPost, currentPage, mapData, filter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);
  const setPage = (error) => {
    setCurrentPage(error);
  };

  return (
    <div className="basis-[18.75%] border-l">
      {/* 검색폼 */}
      <div className="m-3 w-10/12 mx-auto">
        <form
          className="relative text-lg text-gray-400"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full h-12 outline-none border rounded-3xl py-4 px-6 mt-5"
          />
          <CiSearch className="text-2xl absolute top-1/2 right-3 translate-y-[-50%] text-main mt-2" />
        </form>
      </div>
      <ButtonGroup filter={filter} arr={arr} setFilter={setFilter} />

      <h2 className="text-center mt-2 mb-6 text-lg font-bold">추천장소</h2>
      <ul>
        {currentPosts.length > 0 &&
          currentPosts.map((recommendation) => (
            <RecommendationCard
              openNotice={openNotice}
              recommendation={recommendation}
              setPos={setPos}
              startDate={startDate}
              endDate={endDate}
              place={place}
              key={recommendation.tpSeq}
            />
          ))}
      </ul>
      {currentPosts.length === 0 ? (
        ""
      ) : (
        <Paging page={currentPage} count={filtered.length} setPage={setPage} />
      )}
    </div>
  );
};

export default Recommendation;
