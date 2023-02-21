import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import CateList from "./CateList";
import SearchForm from "./SearchForm";
import PlaceCard from "./PlaceCard";

const filters = ["전체", "서울/경기", "강원", "충청", "전라", "경상", "제주"];

const PlaceList = ({
  placeList,
  sortText,
  setSortText,
  assending,
  descending,
  keyword,
  setKeyword,
}) => {
  const [filter, setFilter] = useState(filters[0]);

  const [isClicked, setIsClicked] = useState(false);

  const handleListClick = () => {
    setIsClicked(!isClicked);
  };

  const filtered = getFilteredItems(placeList, filter);

  return (
    <section className="text-center">
      <p className="text-3xl font-bold font-Mont">어디로 여행을 떠나시나요?</p>
      <p className="text-gray-400 text-sm mt-4 mb-6">
        여행지를 검색하거나 목록에서 직접 선택해주세요.
      </p>
      {/* 검색폼 */}
      <div className="max-w-[600px] mx-auto mb-8">
        <SearchForm keyword={keyword} setKeyword={setKeyword} />
        <CateList
          filters={filters}
          filter={filter}
          onFilterChange={setFilter}
        />
      </div>
      {/* select */}
      <div className="flex flex-col items-end text-sm mb-8">
        <div
          className="flex items-center justify-center  cursor-pointer relative"
          onClick={handleListClick}
        >
          <button>{sortText}</button>
          <MdArrowDropDown className="text-2xl" />
          {isClicked && (
            <ul
              className="shadow-lg absolute top-8 right-2 text-start w-52 p-6 text-gray-400 bg-white z-10 "
              onClick={(e) => e.stopPropagation()}
            >
              <li
                className="py-1.5 hover:text-gray-500 z-10"
                onClick={() => setSortText("추천순")}
              >
                추천순
              </li>
              <li className="py-1.5 hover:text-gray-500" onClick={assending}>
                오름차순
              </li>
              <li className="py-1.5 hover:text-gray-500" onClick={descending}>
                내림차순
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16 mt-4">
        {/* 카드 */}
        {filtered.map((place) => (
          <PlaceCard key={place.seq} place={place} />
        ))}
      </div>
    </section>
  );
};

function getFilteredItems(placeList, filter) {
  if (filter === "전체") {
    return placeList;
  }

  return placeList.filter((place) => place.parent.name === filter);
}
export default PlaceList;
