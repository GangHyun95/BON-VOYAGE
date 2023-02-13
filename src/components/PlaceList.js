import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router";
import Modal from "../Layout/Modal";
import CateList from "./CateList";
import SearchForm from "./SearchForm";
import { BsHeart } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

const filters = ["전체", "서울/경기", "강원", "충청", "전라", "경상", "제주"];

const PlaceList = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(filters[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalVisible(false);
  };

  return (
    <section className="text-center">
      <p className="text-3xl font-bold font-Mont">어디로 여행을 떠나시나요?</p>
      <p className="text-gray-400 text-sm mt-4 mb-6">
        여행지를 검색하거나 목록에서 직접 선택해주세요.
      </p>
      {/* 검색폼 */}
      <div className="w-[600px] mx-auto mb-8">
        <SearchForm />
        <CateList
          filters={filters}
          filter={filter}
          onFilterChange={setFilter}
        />
      </div>
      {/* select */}
      <div>
        <div className="flex justify-end">
          <div className="ml-30">
            <select className="px-3 py-1.5 text-gray-700 border border-gray-300 rounded outline-none">
              <option value="0">추천순</option>
              <option value="1">오름차순</option>
              <option value="2">내림차순</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-16 mt-4">
        {/* 카드 */}
        <div className="shadow rounded overflow-hidden" onClick={openModal}>
          <div className="overflow-hidden">
            <img
              src="/photo/jeju.jpg"
              alt="임시"
              className="hover:scale-[115%] transition-transform duration-200 ease-in-out"
            />
          </div>
          <div className="p-6 text-start">
            <p className="text-2xl font-Mont font-bold">JEJU</p>
            <p className="text-sm my-2">대한민국 제주도</p>
          </div>
          {modalVisible && (
            <Modal visible={modalVisible} onClose={closeModal} width={1200}>
              <div className="flex items-center p-12 gap-12">
                <GrClose
                  className="absolute top-12 right-12 text-2xl cursor-pointer"
                  onClick={closeModal}
                />
                <section className="relative basis-1/3 overflow-hidden rounded">
                  <img src="/photo/jeju.jpg" alt="ㅇㅇ" className="w-full" />
                  <FiHeart className="absolute top-4 left-4 text-2xl text-white" />
                </section>
                <section className="basis-2/3 flex flex-col gap-12 items-start text-start">
                  <h2 className="font-Mont">
                    <p className="text-4xl font-bold pb-2">JEJU</p>
                    <span>제주도</span>
                  </h2>
                  <p>
                    섬 전체가 하나의 거대한 관광자원인 제주도. 에메랄드빛 물빛이
                    인상적인 협재 해수욕장은 제주 대표 여행지며, 파도가 넘보는
                    주상절리와 바다 위 산책로인 용머리 해안은 제주에서만 볼 수
                    있는 천혜의 자연경관으로 손꼽힌다. 드라마 촬영지로 알려진
                    섭지코스는 꾸준한 사랑을 받고 있으며 한라봉과 흑돼지, 은갈치
                    등은 제주를 대표하는 음식이다.
                  </p>
                  <button
                    className="bg-main text-white justify-self-end py-3 px-7 rounded"
                    onClick={() => {
                      navigate("/detail");
                    }}
                  >
                    일정 만들기
                  </button>
                </section>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlaceList;
