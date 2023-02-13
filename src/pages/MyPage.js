import React from "react";
import { MdOutlineEventNote } from "react-icons/md";

const MyPage = () => {
  return (
    <section className="max-w-7xl mx-auto flex rounded-lg shadow mt-24">
      <section className="basis-1/4  py-24 my-8 border-r">
        <div className="flex flex-col items-center gap-4">
          <img
            src="/photo/good.png"
            alt="프로필"
            className="w-24 rounded-[50%] border"
          />
          <div className="text-center">
            <p className="font-bold">
              허강현<span className="font-normal">님</span>
            </p>
            <span className="text-sm text-gray-400">개인회원</span>
          </div>
          <button className="border px-12 py-3 rounded-2xl mt-8">
            회원정보수정
          </button>
          <button className="border px-16 py-3 rounded-2xl">회원탈퇴</button>
        </div>
      </section>
      <section className="basis-3/4 pt-20 pl-12 pr-20">
        <div className="flex items-center gap-2 text-xl mb-[30px]">
          <MdOutlineEventNote size={24} />
          <h3 className="font-bold">나의 일정</h3>
        </div>
        <div className="flex border p-6 rounded-xl">
          <div className="relative w-40 h-40">
            <img src="/photo/jeju.jpg" alt="d" className="w-full h-full" />
            <div className="w-12 h-8 bg-main text-white absolute top-0 leading-8 text-center text-xs tracking-wide">
              D-5
            </div>
          </div>
          <div className="w-52 flex flex-col justify-center items-center">
            <p className="font-Mont font-bold text-2xl">YEOSU</p>
            <p>여수</p>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2">
            <p className="font-bold">
              여행이름
              <span className="font-normal ml-4 text-sm">신나는 여수여행</span>
            </p>
            <p className="font-bold">
              여행일자
              <span className="font-normal ml-4 text-sm">
                2023.02.19~2023.02.21
              </span>
            </p>
            <div className="mt-4 text-xs">
              <button className="border px-4 py-2 mr-8 rounded-xl">
                내 일정보기
              </button>
              <button className="border px-6 py-2 mr-8 rounded-xl">
                일정수정
              </button>
              <button className="border px-6 py-2 rounded-xl">일정삭제</button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MyPage;
