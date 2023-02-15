import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
const EditProfile = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordVerifyChange = (event) => {
    setPasswordVerify(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordVerify) {
      alert("비밀번호 확인이 일치하지않습니다.");
      return;
    }
    alert(
      `이메일: ${email}\비밀번호: ${password} 회원가입 되었습니다. 로그인해주세요.`
    );
  };

  return (
    <div className="p-16 flex items-center flex-col ">
      <h1 className="relative w-full text-xl mb-6 text-center">
        회원정보수정
        <GrClose
          className="absolute top-1/2 -translate-y-1/2 right-0"
          onClick={closeModal}
        />
      </h1>

      <form className="flex flex-col">
        <label className="block text-xs">이메일</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="bg-gray-100 px-[20px] text-xs w-[450px] py-3 my-3 rounded-lg"
        />
        <label className="block text-xs">이름</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="bg-gray-100 px-[20px] text-xs w-[450px] py-3 my-3 rounded-lg"
        />
        <label className="block text-xs">비밀번호 </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="bg-gray-100 text-xs px-[20px] w-[450px] py-3 my-3 rounded-lg"
          placeholder="비밀번호(문자, 숫자, 특수문자 포함 10~20자)"
        />
        <label className="block text-xs">비밀번호 확인 </label>
        <input
          className="bg-gray-100 text-xs text-left px-[20px] w-[450px] py-3 my-3 rounded-lg"
          type="password"
          value={passwordVerify}
          onChange={handlePasswordVerifyChange}
          placeholder="비밀번호 재입력"
        />
        <button className="w-full bg-main text-white rounded-lg py-2 my-3">
          수정
        </button>
        <button
          className="bg-gray-500 text-white py-2 rounded-lg"
          type="button"
        >
          취소
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
