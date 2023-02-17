import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsInfoCircleFill } from "react-icons/bs";
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
    <div className="w-[900px] h-[700px]   ">
      <div className=" w-[900px]  h-[70px] flex text-xl justify-self-stretch bg-main text-white">
        <div className="flex items-center  ">
          <BsInfoCircleFill className="ml-10" />
          <span className=" ml-10"> 회원정보수정 </span>
        </div>
      </div>
      <div className=" w-[900px] h-[630px]  px-[100px] py-12 ">
        <div className="">
          <div className="border h-[150px] flex  bg-slate-400  ">
            <span className="w-[200px]  bg-orange-200 text-end ">
              프로필 사진
            </span>
            <span className="">프로필</span>
          </div>
          <li className="border h-[50px] flex bg-slate-400 ">
            <div className="w-[200px] bg-orange-200 text-end">이름</div>
            <div className="">허강현</div>
          </li>
          <li className="border h-[50px] flex bg-slate-400 ">
            <div className="w-[200px] bg-orange-200 text-end">닉네임</div>
            <div className="">허강현</div>
          </li>{" "}
          <li className="border h-[50px] flex bg-slate-400 ">
            <div className="w-[200px] bg-orange-200 text-end">이름</div>
            <div className="">허강현</div>
          </li>{" "}
          <li className="border h-[50px] flex bg-slate-400 ">
            <div className="w-[200px] bg-orange-200 text-end">비밀번호</div>
            <div className="">허강현</div>
          </li>
          <li className="border h-[50px] flex bg-slate-400 ">
            <div className="w-[200px] bg-orange-200 text-end">전화번호</div>
            <div className="ㅅㄷㅌ">허강현</div>
          </li>
        </div>
        <div className="flex justify-center mt-14 gap-5">
          <button className="w-[100px] h-[50px] bg-main text-white rounded-lg py-2 ">
            수정
          </button>
          <button
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
