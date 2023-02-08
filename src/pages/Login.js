import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return <div>
     <div className=" block p-6 rounded-lg shadow-lg bg-white max-w-2xl mx-auto">
        <section className=" h-screen">
          <div className="px-3 mx-auto text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6">
              <div>
              
                <form >
                  {/* <!-- Id input --> */}
                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="아이디"
                      value="id"
                   
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="비밀번호"
                      value="{pwd}"
                    
                    />
                  </div>

                  <div className="flex justify-around items-center mb-6">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-gray-600 checked:border-gray-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                       
                      />
                      <label
                        className="form-check-label inline-block text-gray-800"
                        htmlFor="exampleCheck2"
                      >
                        아이디 기억하기
                      </label>
                    </div>
                  </div>

                  <div className="text-center relative ">
                    <button
                     
                      className="inline-block w-full py-3 mb-12  bg-main
                      text-white
                       font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      로그인
                    </button>
                    {/* <p className="text-sm font-semibold  mt-2 pt-1 mb-0">
                    아직 계정이 없으신가요?
                    <Link
                      to="/signup"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                     회원가입 go!
                    </Link>
                  </p> */}
                  </div>

                  <div className=" border-t-2">
                    <p className="my-11 text-center">
                      SNS 계정으로 간편하게 로그인 하세요.
                    </p>
                    <button
                      type="button"
                      className="inline-block w-full py-3 my-3 bg-white text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      구글 아이디로 로그인
                    </button>
                    <button
                      type="button"
                      className="inline-block w-full py-3 bg-yellow-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      카카오 아이디로 로그인
                    </button>
                  </div>
                  <div className="devide-y-1 my-10 text-center">
                    {" "}
                    <Link to="/signup">회원가입</Link> |{" "}
                    <Link to="/idpwfind">아이디/비밀번호 찿기</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
  </div>;
};

export default Login;
