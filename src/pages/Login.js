import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="pt-20">
            <div className=" mt-[140px] mx-auto">
                <section className=" h-screen">
                    <div className="px-3 mx-auto text-gray-800">
                        <div
                            className="flex flex-col justify-center 
                        items-center  g-6">
                            <div className="mb-[50px] text-[25px] font-semibold">지금 //프로젝트명//과 <br/>여행을 시작하세요!</div>
                            <div>
                                <div className="mb-6">
                                    <span className="text-gray-600">이메일</span>
                                    <input
                                        type="email"
                                        className="form-control block w-[450px] px-1 py-2 text-base font-normal text-gray-700 bg-white 
                      bg-clip-padding border-b-[1px]  border-gray-300  transition ease-in-out m-0 
                      focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none"
                                        id=""
                                        placeholder="abc@gmail.com"
                                        value=""
                                    />
                                </div>
                                <div className="mb-6">
                                    <span className="text-gray-600">비밀번호</span>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-1 py-2 text-base font-normal text-gray-700 bg-white 
                     bg-clip-padding border-b-[1px]  border-gray-300  transition ease-in-out m-0 
                     focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none"
                                        id=""
                                        placeholder="영문,숫자,특수문자"
                                        value=""
                                    />
                                </div>
                                <div className="text-center relative ">
                                    <button
                                        className="inline-block w-full h-[60px] py-3 mb-12  bg-main
                      text-white
                       font-medium text-lg leading-snug uppercase rounded 
                       "
                                    >
                                        로그인
                                    </button>
                                </div>

                                <div className="mb-6">
                                    <p className="my- text-center text-gray-500">
                                        회원이 아니세요?
                                        <Link className="ml-2 font-bold text-main" to="/SignUp">
                                            회원가입하기
                                        </Link>
                                    </p>
                                </div>
                                <div className="">
                                    <div className="mb-6 text-center text-gray-500">or</div>
                                    <div className="text-center mb-8 text-gray-500">
                                        SNS 간편 로그인
                                    </div>
                                    <div className="flex justify-center mt-[30px] ">
                                        <img
                                            className="h-20 w-20 mr-[30px]"
                                            src="/photo/kakaoicon.png"
                                            alt="카카오톡"
                                        />
                                        <img
                                            className="h-20 w-20"
                                            src="/photo/googleicon.png"
                                            alt="구글"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
