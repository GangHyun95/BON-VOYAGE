import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-transparent z-50 text-white border-b">
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
