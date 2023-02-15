import React, { useState } from "react";
import Modal from "../../Layout/Modal";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <section className="w-1/4  py-24 my-8 border-r">
      <div className="flex flex-col items-center gap-4">
        <img
          src="/photo/good.png"
          alt="프로필"
          className="w-24 rounded-[50%] border"
        />
        <div className="text-center">
          <p className="font-bold">
            허강현<span className="font-normal">님</span>
          </p>
          <span className="text-sm text-gray-400">개인회원</span>
        </div>
        <button
          className="border px-12 py-3 rounded-2xl mt-8"
          onClick={openModal}
        >
          회원정보수정
        </button>
        <button className="border px-16 py-3 rounded-2xl">회원탈퇴</button>
      </div>
      {modalVisible && (
        <Modal visible={modalVisible} onClose={closeModal}>
          <EditProfile closeModal={closeModal} />
        </Modal>
      )}
    </section>
  );
};

export default Profile;
