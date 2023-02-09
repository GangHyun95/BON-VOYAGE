import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router";
import Modal from "../Layout/Modal";

const PlaceList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const navigate = useNavigate();
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
        <ul className="flex justify-center mt-4 text-sm">
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
      <div className="grid grid-cols-4 gap-16 mt-4">
        {/* 카드 */}
        <div className="shadow-xl rounded overflow-hidden" onClick={openModal}>
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
        {modalVisible && (
          <Modal
            visible={modalVisible}
            onClose={closeModal}
            width={1400}
            height={500}
          >
            <div className="flex items-center p-12 gap-12">
              <GrClose
                className="absolute top-12 right-12 text-2xl cursor-pointer"
                onClick={closeModal}
              />
              <section className="overflow-hidden rounded">
                <img src="/photo/jeju.jpg" alt="ㅇㅇ" className="w-full" />
              </section>
              <section className="max-w-[800px] flex flex-col gap-12 items-start text-start">
                <h2>
                  <b className="text-4xl font-bold">JEJU</b>
                  <br />
                  <b>제주도</b>
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
    </section>
  );
};

export default PlaceList;
