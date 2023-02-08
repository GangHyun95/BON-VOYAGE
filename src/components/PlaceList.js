import React, { useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
const PlaceList = () => {
  const cateRef = useRef();
  useEffect(() => {}, []);
  return (
    <section className="text-center">
      <b className="text-3xl font-bold ">어디로 여행을 떠나시나요?</b>
      <p className="text-[#999] text-sm my-5">
        여행지를 검색하거나 목록에서 직접 선택해주세요.
      </p>
      {/* 검색폼 */}
      <div className="w-[600px] mx-auto mb-8">
        <form className="relative text-2xl text-[#999]">
          <input
            type="text"
            className="w-full h-16 outline-none border rounded-3xl p-4"
          />
          <CiSearch className="absolute top-2/4 right-3 translate-y-[-50%] text-main" />
        </form>
        {/* 카테 */}
        <ul className="flex justify-center mt-4 text-sm" ref={cateRef}>
          <li className="bg-main text-white px-6 py-3">전체</li>
          <li className="px-6 py-3">서울/경기</li>
          <li className="px-6 py-3">강원</li>
          <li className="px-6 py-3">충청</li>
          <li className="px-6 py-3">전라</li>
          <li className="px-6 py-3">경상</li>
          <li className="px-6 py-3">제주</li>
        </ul>
      </div>
      {/* select */}
      <div>
        <div className="flex justify-end">
          <div className="ml-30">
            <select
              className="form-select
        w-full
        mr-1
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-600 focus:bg-white focus:border-gray-400 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="0">추천순</option>
              <option value="1">오름차순</option>
              <option value="2">내림차순</option>
            </select>
          </div>
        </div>
      </div>
      {/* 카드 */}
      <div className="grid grid-cols-4 gap-20">
        <div className="shadow rounded overflow-hidden">
          <div className="overflow-hidden">
            <img
              src="/photo/jeju.jpg"
              alt="임시"
              className="hover:scale-[115%] transition-transform duration-200 ease-in-out"
            />
          </div>
          <div className="p-6 text-start">
            <b className="text-2xl">JEJU</b>
            <br />
            <p className="text-sm my-2">대한민국 제주도</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceList;
