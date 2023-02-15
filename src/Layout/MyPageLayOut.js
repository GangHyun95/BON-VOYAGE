import React from "react";
import { MdOutlineEventNote } from "react-icons/md";

const MyPageLayOut = ({ children, title }) => {
  return (
    <section className="w-3/4 pt-20 px-16">
      {/* 나의 일정 */}
      <div className="flex items-center gap-2 text-xl mb-[30px]">
        <MdOutlineEventNote size={24} />
        <h3 className="font-bold">{title}</h3>
      </div>
      {children}
    </section>
  );
};

export default MyPageLayOut;
