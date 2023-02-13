import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
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
      </div>
    </header>
  );
};
export default Header;
