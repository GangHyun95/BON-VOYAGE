import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Modal from "../../Layout/Modal";

const Header = () => {
  const [profile, setProfile] = useState();
  // 화면이동
  const navigate = useNavigate();
  // 카카오 로그인
  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image, account_email", //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
      success: function (response) {
        console.log(response); // 로그인 성공하면 받아오는 데이터
        window.Kakao.API.request({
          // 사용자 정보 가져오기
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            setProfile(kakao_account.profile);
            console.log("사용자 정보", kakao_account);
            // 사용자 정보를 받은 경우
            // localStorage 저장 또는 redux 저장
            setModalVisible(false);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };
  // 카카오 로그 아웃
  const kakaoLogOut = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    window.Kakao.Auth.logout(function (response) {
      alert(response + " logout");
      // window.location.href='/'
    });
  };
  // 카카오 회원 탈퇴
  const memberOut = () => {
    window.Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response) {
        console.log(response);
        setProfile();
        //callback(); //연결끊기(탈퇴)성공시 서버에서 처리할 함수
        // window.location.href='/'
      },
      fail: function (error) {
        console.log("탈퇴 미완료");
        console.log(error);
      },
    });
  };
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
      <nav className="flex items-center justify-between h-20 max-w-[1400px] mx-auto">
        <Link to="/">로고</Link>
        <div className="flex items-center gap-4">
          <button onClick={openModal}>Login</button>

          {/* 임시 */}
          <div
            className="mb-3 cursor-pointer rounded-3xl  bg-gray-400 text-center w-[50px] h-[50px]"
            onClick={handleCircleClick}
          >
            <div className="overflow-hidden rounded-full">
              {profile && (
                <img src={profile?.profile_image_url} alt="profile" />
              )}
            </div>
            {isClicked && (
              <div className="mx-[-68px] my-[30px] text-black bg-white w-[100px] h-[96px]">
                <ul className="text-center">
                  <li className="py-3 hover:bg-gray-200">
                    <Link to="/mypage">마이페이지</Link>
                  </li>
                  <li className="py-3 hover:bg-gray-200" onClick={memberOut}>
                    로그아웃
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>{" "}
        {modalVisible && (
          <Modal
            width={700}
            height={800}
            onClose={closeModal}
            visible={modalVisible}
          >
            <section className="mt-24 flex flex-col justify-center items-center text-black">
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
                  <Link
                    className="ml-2 font-bold text-main"
                    to="/signUp"
                    onClick={closeModal}
                  >
                    회원가입하기
                  </Link>
                </p>
                <p className="text-gray-500">or</p>
                <p className="text-gray-500">SNS 간편 로그인</p>
                <div className="flex justify-center mt-4">
                  <button onClick={kakaoLogin}>
                    {" "}
                    <img
                      className="h-20 w-20 mr-8"
                      src="/photo/kakaoicon.png"
                      alt="카카오톡"
                    />
                  </button>
                  <img
                    className="h-20 w-20"
                    src="/photo/googleicon.png"
                    alt="구글"
                  />
                </div>
              </div>
            </section>
          </Modal>
        )}
      </nav>
    </header>
  );
};
export default Header;
