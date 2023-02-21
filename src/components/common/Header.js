import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "../../Layout/Modal";
import Login from "./Login";

const Header = () => {
  // 화면이동
  const navigate = useNavigate();

  // user redux
  const user = useSelector((state) => state.user);
  console.log(user);
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
          {user.miSeq ? "" : <button onClick={openModal}>Login</button>}
          {/* 닉네임 */}
          {user.miNickname}
          {user.miSeq && (
            <div
              className="cursor-pointer rounded-3xl  bg-gray-400 text-center w-[50px] h-[50px]"
              onClick={handleCircleClick}
            >
              {isClicked && (
                <div className="mx-[-68px] my-[30px] text-black bg-white w-[100px] h-[96px]">
                  <ul className="text-center">
                    <li
                      className="py-3 hover:bg-gray-200"
                      onClick={() => navigate("/mypage")}
                    >
                      마이페이지
                    </li>
                    <li className="py-3 hover:bg-gray-200">로그아웃</li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        {modalVisible && (
          <Modal
            width={700}
            height={800}
            onClose={closeModal}
            visible={modalVisible}
          >
            <Login closeModal={closeModal} setModalVisible={setModalVisible} />
          </Modal>
        )}
      </nav>
    </header>
  );
};
export default Header;
