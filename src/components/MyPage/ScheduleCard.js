import React from "react";
import { useNavigate } from "react-router";

const ScheduleCard = ({ item }) => {
  const navigate = useNavigate();
  const GoReview = () => navigate("review");

  return (
    <div className="py-8 flex items-center gap-6 border-b">
      <div className="relative w-40 h-40">
        <img src="/photo/jeju.jpg" alt="d" className="w-[150px] h-[150px]" />
        <span className="w-12 h-8 bg-main text-white absolute top-0 leading-8 text-center text-xs tracking-wide">
          D-5
        </span>
      </div>
      <div className=" px-12 flex flex-col justify-center items-center">
        <p className="font-Mont font-bold text-2xl">YEOSU</p>
        <p>{item.tsEntity.tsName}</p>
      </div>
      <div className="flex-1 flex flex-col relative justify-center gap-2">
        {/* <p className="font-bold">
      여행이름
      <span className="font-normal ml-4 text-sm">
        신나는 여수여행
      </span>
    </p> */}
        <p className="font-bold">
          여행일자
          <span className="font-normal ml-4 text-sm">
            {item.tsEntity.tsStartDate} ~ {item.tsEntity.tsEndDate}
          </span>
        </p>
        {/* 모달 */}
        <div className="flex gap-3 mt-4 text-xs">
          {/* 체크박스 */}
          <button className="border w-24 py-2.5 rounded-2xl border-[#dadada]">
            일정확인
          </button>

          <button className="border w-24 py-2.5 rounded-2xl border-[#dadada]">
            일정수정
          </button>
          <button
            className="border w-24 py-2.5 rounded-2xl border-[#dadada]"
            onClick={GoReview}
          >
            리뷰 작성하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
