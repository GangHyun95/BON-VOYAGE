import React, { useState, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { BsInfoCircleFill } from "react-icons/bs";
const EditProfile = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSave = () => {
    // Save the user's data to a database or API
  };

  const handleUpdate = () => {
    // Update the user's data in a database or API
  };

  const handleDelete = () => {
    // Delete the user's data from a database or API
  };

  const handleReset = () => {
    setName("");
    setNickname("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
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
  return (
    <div className="w-[900px]    ">
      <div className=" w-[900px]  h-[70px] flex text-xl justify-self-stretch bg-main text-white">
        <div className="flex items-center  ">
          <BsInfoCircleFill className="ml-10" />
          <span className=" ml-10"> 회원정보수정 </span>
        </div>
      </div>
      <div className=" w-[900px]  px-[100px] py-12  ">
        <div className="">
          <div className="border h-[150px] flex  ">
            <span className="">프로필 사진</span>{" "}
            <div className="flex relative rounded-lg">
              <label
                className=" absolute bottom-1 right-1/2 translate-x-1/2 w-[100px] "
                forhtml="filebutton"
              >
                {" "}
                <img
                  src={imgFile || "/photo/good.png"}
                  alt="<FcOldTimeCamera/>"
                  className="h-[100px] w-[100px] rounded-[50%] border"
                />
                <input
                  id="filebutton"
                  multiple="multiple"
                  type="file"
                  accept="image/*"
                  onInput={onChangeImg}
                  className="hidden"
                  ref={imgRef}
                ></input>
              </label>
            </div>
          </div>
          <div>
            <div className="flex py-6">
              {" "}
              <label  className="" htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="flex py-6">
              <label htmlFor="nickname" className="block">
                닉네임
              </label>
              <input
                type="text"
                id="nickname"
                value={nickname}
                onChange={handleNicknameChange}
              />
            </div>
            <div className="flex py-6">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex py-6">
              {" "}
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex py-6">
              {" "}
              <label htmlFor="phone">전화번호</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-14 gap-5">
          <button className="w-[100px] h-[50px] bg-main text-white rounded-lg py-2 ">
            수정
          </button>
          <button
          onClick={closeModal}
            className="w-[100px] h-[50px] bg-gray-500 text-white py-2 rounded-lg"
            type="button"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
