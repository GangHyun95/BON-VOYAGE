import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router";
import { BsSuitHeartFill } from "react-icons/bs";
import Modal from "../../Layout/Modal";

const PlaceCard = ({ type }) => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalVisible(false);
  };
  // 하트 누르면 빨간색
  const [HeartClicked, setHeartClicked] = useState(false);
  const handleClick = () => {
    setHeartClicked(!HeartClicked);
  };

  const isWishList = type === "wishList";

  return (
    <div className="shadow rounded overflow-hidden" onClick={openModal}>
      <div className="overflow-hidden">
        <img
          src="/photo/jeju.jpg"
          alt="임시"
          className="hover:scale-[115%] transition-transform duration-200 ease-in-out"
        />
      </div>
      <div className={isWishList ? "text-end px-2 py-1" : "text-start p-6"}>
        <p
          className={isWishList ? "font-Mont" : "font-Mont text-2xl font-bold"}
        >
          JEJU
        </p>
        <p className={isWishList ? "font-bold" : "text-sm my-2"}>제주도</p>
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
              <BsSuitHeartFill
                onClick={handleClick}
                className={`absolute top-4 left-4 text-2xl ${
                  HeartClicked ? "text-red-500" : "text-white"
                }`}
              />
            </section>
            <section className="basis-2/3 flex flex-col gap-12 items-start text-start">
              <h2 className="font-Mont">
                <p className="text-4xl font-bold pb-2">JEJU</p>
                <span>제주도</span>
              </h2>
              <p className="text-justify">
                섬 전체가 하나의 거대한 관광자원인 제주도. 에메랄드빛 물빛이
                인상적인 협재 해수욕장은 제주 대표 여행지며, 파도가 넘보는
                주상절리와 바다 위 산책로인 용머리 해안은 제주에서만 볼 수 있는
                천혜의 자연경관으로 손꼽힌다. 드라마 촬영지로 알려진 섭지코스는
                꾸준한 사랑을 받고 있으며 한라봉과 흑돼지, 은갈치 등은 제주를
                대표하는 음식이다.
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
  );
};

export default PlaceCard;
