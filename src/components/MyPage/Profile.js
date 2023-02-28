import React, { useRef, useState } from "react";
import Modal from "../../Layout/Modal";
import EditProfile from "./EditProfile";
import instance from "../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/userSlice";
import { useNavigate } from "react-router";

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 이미지 미리보기 기능
  // 이미지 업로드 및 미리보기
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef(null);
  const onChangeImg = async (e) => {
    e.preventDefault();

    // 미리보기 기능
    if (e.target.files) {
      // files는 배열에 담긴다.
      // file 이 1개 이므로 e.taret.files[0]
      const uploadFile = e.target.files[0];
      console.log(uploadFile);

      // 이미지를 읽어들이는 바닐라 함수
      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      reader.onloadend = () => {
        // 임시 이미지주소가 만들어진다.
        // useState 입니다.
        setImgFile(reader.result);
      };

      // 서버로 이미지를 임시로 보내고 URL 글자를 받아오는 코드
      // 일반적 방법

      // const formData = new FormData();
      // formData.append("files", uploadFile);
      // await axios({
      //   method: "post",
      //   url: "/api/files/images",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    }
  };

  const user = useSelector((state) => state.user);

  const withdrawel = async () => {
    try {
      if (window.confirm("회원탈퇴하시겠습니까?")) {
        await instance
          .delete("/api/member/delete", {
            params: {
              miseq: user.miSeq,
            },
          })
          .then((res) => {
            if (!res.data.status) {
              alert(res.data.message);
            }
          });
      } else {
        return;
      }
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="w-1/4  pt-52 my-8 border-r">
      <div className="flex flex-col items-center gap-4">
        <div className="flex relative rounded-lg">
          <label
            className=" absolute bottom-1 right-1/2 translate-x-1/2 w-[100px] "
            htmlFor="filebutton"
          >
            <img
              src={imgFile || "/photo/info.png"}
              alt="profile"
              className="h-[100px] w-[100px] rounded-full border"
            />
            <input
              id="filebutton"
              type="file"
              accept="image/*"
              onInput={onChangeImg}
              className="hidden"
              ref={imgRef}
            ></input>
          </label>
        </div>
        <div className="text-center">
          <p className="font-bold">
            {user.miNickname}
            <span className="font-normal">님</span>
          </p>
          <span className="text-sm text-gray-400">개인회원</span>
        </div>
        <button
          className="border px-12 py-3 rounded-2xl mt-8"
          onClick={openModal}
        >
          회원정보수정
        </button>
        <button className="border px-16 py-3 rounded-2xl" onClick={withdrawel}>
          회원탈퇴
        </button>
      </div>
      {modalVisible && (
        <Modal visible={modalVisible} onClose={closeModal}>
          <EditProfile
            onChangeImg={onChangeImg}
            imgFile={imgFile}
            imgRef={imgRef}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </section>
  );
};

export default Profile;
