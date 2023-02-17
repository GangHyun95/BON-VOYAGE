import React from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { TbAlertCircle } from "react-icons/tb";
import Modal from "../../Layout/Modal";

const RecommendationCard = ({
  modalVisible,
  openNotice,
  openModal,
  closeModal,
  visible,
  recommendation,
  setLatitude,
  setLongitude,
}) => {
  const posSetting = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <>
      <li
        className="flex justify-center m-3"
        onClick={() =>
          posSetting(recommendation.tpIongitude, recommendation.tpLatitude)
        }
      >
        <div className="flex h-[130px] flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className="w-20 md:h-auto object-cover md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={recommendation?.tpImage}
            alt="이미지"
          />
          <div className="relative p-6 flex flex-col justify-start">
            <p className="text-gray-900 text-sm font-medium mb-2">
              {recommendation?.tpName}
            </p>
            <p className="text-xs text-gray-400">{recommendation?.tpAdress}</p>
            <button className="absolute right-8 bottom-3">
              <TbAlertCircle onClick={openModal} />
            </button>
            {modalVisible && (
              <Modal
                visible={modalVisible}
                onClose={closeModal}
                width={1000}
                height={400}
              >
                <div>
                  <div>
                    {" "}
                    <h2 className="text-2xl">동문 재래시장</h2>
                  </div>
                  <div className="bg-white  ">
                    <p>영업시간</p>
                    <p>홈페이지</p>
                    <p>주소</p>
                    <p>전화</p>
                  </div>
                </div>
              </Modal>
            )}
            <button>
              <AiOutlinePlus
                onClick={openNotice}
                className="absolute right-2 bottom-3"
              />
            </button>
          </div>
        </div>
      </li>
      {visible && (
        <Modal visible={visible}>
          <div className="flex flex-col items-center justify-center p-12">
            <div className="border text-2xl p-1 bg-black text-white rounded mb-4">
              <AiOutlineCheck />
            </div>
            <p className="text-xl">선택 목록에 추가되었습니다.</p>
          </div>
        </Modal>
      )}
    </>
  );
};
export default RecommendationCard;
