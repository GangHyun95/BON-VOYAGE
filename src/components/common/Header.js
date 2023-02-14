import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
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
        <Link to="/login">Login</Link>
        {/* 임시 */}
       <Link to="/mypage">mypage</Link>
       <div>
      <div
     
        className="mb-3 cursor-pointer rounded-3xl  bg-gray-400 text-center w-[50px] h-[50px]"
        onClick={handleCircleClick}
      >
        사진
        {isClicked && (
        <div className="m-6 text-black bg-white w-[100px] h-[100px]">
          <ul className="text-center">
            <li className="py-3 hover:bg-gray-200"><Link to="/mypage">마이페이지</Link></li>
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
