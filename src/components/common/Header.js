import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../../Layout/Modal";
const Header = () => {
  // 모달 만들기
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setModalVisible(false);
  };
  // 프로필 클릭
  const [isClicked, setIsClicked] = useState(false);
  const handleCircleClick = () => {
    setIsClicked(!isClicked);
  };
  const headerRef = useRef();
  const { pathname } = useLocation();
  const handleScroll = () => {
    if (pathname === "/") {
      if (window.scrollY > 0) {
        headerRef.current.classList.add("bg-main");
      } else {
        headerRef.current.classList.remove("bg-main");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (pathname !== "/") {
      headerRef.current.classList.add("bg-main");
    }
    if (window.scrollY === 0 && pathname === "/") {
      headerRef.current.classList.remove("bg-main");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  return (
    <header
      className="fixed top-0 w-full z-50 text-white transition-all duration-500"
      ref={headerRef}
    >
      <div className="flex items-center justify-between h-20 max-w-[1400px] mx-auto">
        <Link to="/">로고</Link>
        <button onClick={openModal}>Login</button>
        {modalVisible && (
          <Modal
            width={700}
            height={800}
            onClose={closeModal}
            visible={modalVisible}
          >
            <div className="mt-[150px] pt-20">
              <div className="  p-6  max-w-2xl mx-auto">
                <section className=" h-screen">
                  <div className="px-3 mx-auto text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6">
                      <div>
                        <div className="mb-6">
                          <span className="mb-">이메일</span>
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
                          <span className="">비밀번호</span>
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
                            className="inline-block w-full py-3 mb-12  bg-main
                          text-white
                           font-medium text-sm leading-snug uppercase rounded
                           "
                          >
                            로그인
                          </button>
                        </div>
                        <div className="mb-6">
                          <p className="my- text-center">
                            회원이 아니세요?
                            <button onClick={closeModal}>
                              <Link
                                className="ml-2 font-bold text-main"
                                to="/SignUp"
                              >
                                회원가입하기
                              </Link>
                            </button>
                          </p>
                        </div>
                        <div className="">
                          <div className="mb-6 text-center">or</div>
                          <div className="text-center mb-8">
                            SNS 간편 로그인
                          </div>
                          <div className="text-center">
                            <button className="pr-2">카카오톡</button>
                            <button>구글</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Modal>
        )}
        {/* 임시 */}
        <div>
          <div
            className="mb-3 cursor-pointer rounded-3xl  bg-gray-400 text-center w-[50px] h-[50px]"
            onClick={handleCircleClick}
          >
            사진
            {isClicked && (
              <div className="mx-[-68px] my-[30px] text-black bg-white w-[100px] h-[96px]">
                <ul className="text-center">
                  <li className="py-3 hover:bg-gray-200">
                    <Link to="/mypage">마이페이지</Link>
                  </li>
                  <li className="py-3 hover:bg-gray-200">로그아웃</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
