import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const headerRef = useRef();
  const { pathname } = useLocation();

  console.log(pathname);
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
  return (
    <header
      className="fixed top-0 w-full  z-50 text-white transition-all duration-500"
      ref={headerRef}
    >
      <div className="flex items-center justify-between h-[80px] max-w-[1368px] mx-auto">
        <Link to="/">로고</Link>
        <ul className="flex gap-6">
          <li>일정 만들기</li>
          <li>이용 방법</li>
          <Link to="/login" className="ml-8">
            Login
          </Link>
        </ul>
      </div>
    </header>
  );
};
export default Header;
