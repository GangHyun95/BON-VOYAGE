import React from "react";
import { useNavigate } from "react-router";
import { AiOutlineClose } from "react-icons/ai";
import instance from "../../api/axios";

const ScheduleCard = ({ list, placeList, setCount }) => {
  const navigate = useNavigate();
  const GoReview = () => navigate("review");

  const place = getFilteredItems(placeList, list);
  const deletePlace = async () => {
    await instance.delete(`/api/schedule/delete?tsseq=${list.tsSeq}`);
  };

  console.log(getDDay(list.tsStartDate));
  return (
    <div className="relative py-8 flex items-center gap-6 border-b">
      <AiOutlineClose
        className="absolute right-0 top-5 text-2xl cursor-pointer"
        onClick={() => {
          setCount((prev) => prev + 1);
          deletePlace();
        }}
      />
      <div className="relative w-40 h-40">
        <img
          src={`http://192.168.0.112:8888/api/images/download/local?imgname=${place?.child.image.iiFileName}`}
          alt="d"
          className="w-[150px] h-[150px]"
        />
        <span className="w-12 h-8 bg-main text-white absolute top-0 leading-8 text-center text-xs tracking-wide">
          D-{getDDay(list.tsStartDate)}
        </span>
      </div>
      <div className=" px-12 flex flex-col basis-4/12 justify-center items-center">
        <p className="font-Mont font-bold text-2xl">{place?.child.engname}</p>
        <p>{list.tsName}</p>
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
            {list.tsStartDate} ~ {list.tsEndDate}
          </span>
        </p>
        {/* 모달 */}
        <div className="flex gap-3 mt-4 text-xs">
          {/* 체크박스 */}
          <button
            className="border w-24 py-2.5 rounded-2xl border-[#dadada]"
            onClick={() => {
              navigate(`/detail/${place.child.seq}`, {
                state: { place: place.child },
              });
            }}
          >
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

const getFilteredItems = (placeList, item) => {
  return placeList.find((list) => list.child.name === item.tsName);
};

const getDDay = (startDate) => {
  const now = new Date();
  const dday = new Date(startDate);
  const gap = dday.getTime() - now.getTime();
  return Math.ceil(gap / (1000 * 60 * 60 * 24));
};

export default ScheduleCard;
