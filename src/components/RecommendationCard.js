import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbAlertCircle } from "react-icons/tb";
import { AiOutlineCheck } from "react-icons/ai";
import Modal from "../Layout/Modal";

const RecommendationCard = ({
  modalVisible,
  openNotice,
  openModal,
  closeModal,
  Visible,
}) => {
  return (
    <div>
      {" "}
      <li className="flex justify-center m-5">
        <div className="flex h-[130px] flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            className=" w-20 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/photo/jeju.jpg"
            alt="이미지"
          />
          <div className="relative p-6 flex flex-col justify-start">
            <p className="text-gray-900 text-sm font-medium mb-2">
              감천문화마을{" "}
            </p>
            <p className="text-xs text-gray-400">Gamcheon Culture Village</p>
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
      {Visible && (
        <Modal visible={Visible} width={300} height={70}>
          <div className="bg-white text-center m-6 flex">
            <div>
              <AiOutlineCheck />
            </div>
            <p>선택 목록에 추가되었습니다.</p>
          </div>
        </Modal>
      )}{" "}
    </div>
  );
};

export default RecommendationCard;
