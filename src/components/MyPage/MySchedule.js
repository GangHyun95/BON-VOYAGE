import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router";
import MyPageLayOut from "../../Layout/MyPageLayOut";
import instance from "../../api/axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MySchedule = () => {
  const navigate = useNavigate();

  const [schedule, setSchedule] = useState([]);
  const [wishList, setWishList] = useState([]);
  const user = useSelector((state) => state.user);

  const getWishList = async () => {
    await instance
      .get("/api/travel/member/like", {
        params: {
          miseq: user.miSeq,
        },
      })
      .then((res) => setWishList(res.data));
    // .then((res) => setWishList(res.data));
  };
  const GoReview = () => navigate("review");

  const getSchedule = async () => {
    await instance.get("/api/schedule/list").then((res) => {
      setSchedule(res.data);
    });
  };
  useEffect(() => {
    getWishList();
    getSchedule();
  }, []);
  const filtered = getFilteredList(schedule, user);
  const filteredItems = Deleteduplicate(filtered);
  console.log(user);
  console.log(filteredItems);
  return (
    <MyPageLayOut title={"나의 일정"}>
      <section className="border rounded-xl p-9 accent-[#424242] flex-col">
        {/* 일정카드 */}
        {filteredItems.map((item) => (
          <div
            className="py-8 flex items-center gap-6 border-b"
            key={item.ttcSeq}
          >
            <div className="relative w-40 h-40">
              <img
                src="/photo/jeju.jpg"
                alt="d"
                className="w-[150px] h-[150px]"
              />
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
        ))}
      </section>
      {/* 찜목록 */}
      <div className="flex items-center gap-1 text-xl mt-20 mb-8">
        <FiHeart size={24} />
        <h3 className="font-bold">내가 좋아하는 여행지</h3>
      </div>
      {/* 카드리스트 */}
      <div className="grid grid-cols-4 gap-4 mb-16">
        {wishList.map((list) => (
          <section
            className="shadow rounded-lg overflow-hidden flex flex-col"
            key={list.tlSeq}
          >
            <img
              src={list.place.tpImage}
              className="flex-1 max-h-[147px]"
              alt={list.place.tpName}
            />
            <p className="text-end p-2.5 truncate">{list.place.tpName}</p>
          </section>
        ))}
      </div>
    </MyPageLayOut>
  );
};

function getFilteredList(schedule, user, place) {
  return schedule.filter(
    (list) => list.tsEntity.memberEntity.miSeq === user.miSeq
  );
}

function Deleteduplicate(filtered) {
  return filtered.filter((ele, i) => {
    return (
      filtered.findIndex((ele2) => {
        return ele.tsEntity.tsName === ele2.tsEntity.tsName;
      }) === i
    );
  });
}
export default MySchedule;
