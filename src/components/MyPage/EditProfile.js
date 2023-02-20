import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { BsInfoCircleFill } from "react-icons/bs";
const EditProfile = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

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
    setName('');
    setNickname('');
    setEmail('');
    setPassword('');
    setPhone('');
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
          <div>
     <div className="flex"> <label htmlFor="name" >이름</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />
</div>
 <div className="flex"><label htmlFor="nickname" className="block">닉네임</label>
      <input type="text" id="nickname" value={nickname} onChange={handleNicknameChange} />
 </div> 
<div className="flex"><label htmlFor="email">이메일</label>
      <input type="email" id="email" value={email} onChange={handleEmailChange} />
 </div> 
      <div className="flex"> <label htmlFor="password">비밀번호</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />
  </div>
      <div className="flex"> <label htmlFor="phone">전화번호</label>
      <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
 </div>
     
      
 
    
    </div>
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
