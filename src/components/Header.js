import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-24 h-[80px] bg-main fixed top-0 w-full z-50 text-white ">
      <div>로고</div>
      <ul className="flex gap-6">
        <li>일정 만들기</li>
        <li>이용 방법</li>
        <li className="ml-8">Login</li>
      </ul>
    </header>
  );
};

export default Header;
