import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdCardTravel } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router";
import MyPageLayOut from "../../Layout/MyPageLayOut";
import Modal from "../../Layout/Modal";
import PlaceCard from "../Main/PlaceCard";
import instance from "../../api/axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MySchedule = () => {
  const navigate = useNavigate();
  // 모달 만들기
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = (e) => {
    setModalVisible(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setModalVisible(false);
  };
  const [wishList, setWishList] = useState([]);
  const user = useSelector((state) => state.user);
  const [items, setItems] = useState([
    { id: 1, name: "신분증", checked: false },
    { id: 2, name: "신용카드/현금", checked: false },
    { id: 3, name: "핸드폰 충전기", checked: false },
    { id: 4, name: "보조배터리 ", checked: false },
    { id: 5, name: "마스크", checked: false },
    { id: 6, name: "우산", checked: false },
  ]);

  // 체크박스
  const handleItemChecked = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setItems(newItems);
  };
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

  useEffect(() => {
    getWishList();
  }, []);
  console.log(wishList);
  return (
    <MyPageLayOut title={"나의 일정"}>
      <section className="border rounded-xl p-9 accent-[#424242] flex-col">
        <header className="flex items-center justify-between border-b pb-5">
          <div className="flex items-center gap-6">
            <input type="checkbox" className="w-4 h-4" id="all" />
            <label htmlFor="all text-sm">전체선택(1/2)</label>
          </div>
          <button className="bg-[#f3f3f3] rounded-lg py-2 px-3 text-sm ">
            선택삭제
          </button>
        </header>
        {/* 일정카드 */}
        <div className="py-8 flex items-center gap-6 border-b">
          <input type="checkbox" className="w-4 h-4 " />
          <label className="flex">
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
              <p>제주도</p>
            </div>
            <div className="flex-1 flex flex-col relative justify-center gap-2">
              <p className="font-bold">
                여행이름
                <span className="font-normal ml-4 text-sm">
                  신나는 여수여행
                </span>
              </p>
              <p className="font-bold">
                여행일자
                <span className="font-normal ml-4 text-sm">
                  2018.05.01~ 2018.05.03
                </span>
              </p>
              {/* 모달 */}
              <div className="flex gap-3 mt-4 text-xs">
                {/* 체크박스 */}
                <button
                  className="border w-24 py-2.5 rounded-2xl border-[#dadada]"
                  onClick={openModal}
                >
                  여행준비물
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
          </label>
        </div>
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

export default MySchedule;
