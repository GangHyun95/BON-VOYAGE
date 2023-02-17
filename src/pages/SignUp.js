import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const handleIdChange = (event) => {
        setId(event.target.value);
    }; 
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handlePasswordVerifyChange = (event) => {
        setPasswordVerify(event.target.value);
    };
    const handleNameChange = (event) => {
      setName(event.target.value);
  };
  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
};
const handleNumberChange = (event) => {
  setNumber(event.target.value);
};



    const handleEmailChange = (event) => {
      setEmail(event.target.value);
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== passwordVerify) {
            alert("비밀번호 확인이 일치하지않습니다.");
            return;
        }
        alert(`이메일: ${email}\비밀번호: ${password} 회원가입 되었습니다. 로그인해주세요.`);
    };
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const handleCheckboxChange2 = (event) => {
        setIsChecked2(event.target.checked);
    };
    const handleCheckboxChange3 = (event) => {
        setIsChecked3(event.target.checked);
    };
    return (
        <div className="relative m-[200px] flex items-center flex-col ">
            <h1 className=" my-[50px] text-xl">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label className="block text-xs font-bold text-slate-600">아이디</label>
                <input
                    type="text"
                    value={id}
                    onChange={handleIdChange}
                    placeholder="아이디 입력(6-18글자)"
                    maxLength={18}
                    className="bg-gray-100 px-[20px] text-xs w-[450px] py-3 my-3 rounded-lg relative"
                />
                <button className="absolute  right-20 top-40 rounded-md 
                bg-[#4C7EFF] text-white p-2 text-xs">중복확인</button>
                <br />
                <label className="block text-xs font-bold text-slate-600">비밀번호 </label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-gray-100 text-xs px-[20px] w-[450px] py-3 my-3 rounded-lg"
                    placeholder="비밀번호(문자, 숫자, 특수문자 포함 5~16자)"
                    maxLength={16}
                />
                <br />
                <label className="block text-xs font-bold text-slate-600">비밀번호 확인 </label>
                <input
                    className="bg-gray-100 text-xs text-left px-[20px] w-[450px] py-3 my-3 rounded-lg"
                    type="password"
                    value={passwordVerify}
                    onChange={handlePasswordVerifyChange}
                    placeholder="비밀번호 재입력"
                    maxLength={16}
                />
                <br />
                <label className="block text-xs font-bold text-slate-600">이름</label>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="이름 입력"
                    className="bg-gray-100 px-[20px] text-xs w-[450px] py-3 my-3 rounded-lg"
                />
                <br />
                <label className="block text-xs font-bold text-slate-600">닉네임</label>
                <input
                    type="text"
                    value={nickname}
                    onChange={handleNicknameChange}
                    placeholder="닉네임 입력"
                    className="bg-gray-100 px-[20px] text-xs w-[450px] py-3 my-3 rounded-lg"
                    maxLength={16}
                />
                <br />
                <label className="block text-xs font-bold text-slate-600">전화번호</label>
                <input
                    type="text"
                    value={number}
                    onChange={handleNumberChange}
                    placeholder="휴대폰 번호 입력(‘-’ 제외 11자리 입력)"
                    className="bg-gray-100 px-[20px] text-xs w-[450px] py-3 my-3 rounded-lg"
                    maxLength={11}
                />
                <br />
                <label className="block text-xs font-bold text-slate-600">이메일 </label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="영문,숫자,특수문자"
                    className="bg-gray-100 px-[20px] text-xs w-[450px] py-3 my-3 rounded-lg"
                    maxLength={30}
                />
                <br />
                <div className="flex justify-center space-x-5 font-bold">
                    <button
                        type="submit"
                        className="bg-main block rounded-lg w-[150px] my-4 text-white py-3"
                    >
                        회원가입
                    </button>
                    <button
                        type="button"
                        className="bg-gray-500 rounded-lg w-[150px] my-4 text-white py-3"
                        onClick={(e) => navigate(-1)}
                    >
                        뒤로가기
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
