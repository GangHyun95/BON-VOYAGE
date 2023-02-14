import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="mt-40 flex flex-col justify-center items-center">
      <h3 className="mb-12 text-[25px] font-semibold text-center">
        지금 //프로젝트명//과 <br />
        여행을 시작하세요!
      </h3>
      {/* 로그인 form */}
      <form className="flex flex-col gap-2 w-full max-w-md">
        <span className="text-gray-600">이메일</span>
        <input
          type="email"
          className="block px-1 py-2 text-gray-700 border-b border-gray-300"
          placeholder="abc@gmail.com"
          value=""
        />
        <span className="text-gray-600">비밀번호</span>
        <input
          type="text"
          className="block px-1 py-2 text-gray-700 border-b border-gray-300"
          placeholder="영문,숫자,특수문자"
          value=""
        />
        <button className="py-4 mb-12 bg-main text-white text-lg rounded mt-6">
          로그인
        </button>
      </form>
      {/* 회원가입 */}
      <div className="flex flex-col gap-2 items-center">
        <p className="text-center text-gray-500">
          회원이 아니세요?
          <Link className="ml-2 font-bold text-main" to="/signUp">
            회원가입하기
          </Link>
        </p>
        <p className="text-gray-500">or</p>
        <p className="text-gray-500">SNS 간편 로그인</p>
        <div className="flex justify-center mt-4">
          <img
            className="h-20 w-20 mr-8"
            src="/photo/kakaoicon.png"
            alt="카카오톡"
          />
          <img className="h-20 w-20" src="/photo/googleicon.png" alt="구글" />
        </div>
      </div>
    </section>
  );
};

export default Login;
