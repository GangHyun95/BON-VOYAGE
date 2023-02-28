import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import instance from "../../api/axios";
import { useSelector } from "react-redux";
const RecommendationCard = ({
  openNotice,
  recommendation,
  setPos,
  startDate,
  endDate,
  place,
}) => {
  const user = useSelector((state) => state.user);
  const heart = useRef(null);

  const [heartState, setHeartState] = useState(false);
  const [wishList, setWishList] = useState([]);
  const likeHandler = async (seq) => {
    console.log(wishList);
    setHeartState(true);
    if (!user.miSeq) {
      return alert("로그인 후 이용가능합니다.");
    }
    await instance.put(`/api/travel/like?tpseq=${seq}&miseq=${user.miSeq}`);
  };

  const handleDelete = async (seq) => {
    console.log(wishList);
    setHeartState(false);
    instance.delete(`/api/travel/like/cancel?tpseq=${seq}&miseq=${user.miSeq}`);
  };
  const getWishList = async () => {
    await instance
      .get("/api/travel/member/like", {
        params: {
          miseq: user.miSeq,
        },
      })
      .then((res) => setWishList(res.data.map((item) => item.place.tpSeq)));
    // .then((res) => setWishList(res.data));
  };

  const addSchedule = async (tpSeq) => {
    console.log(tpSeq);
    let body = {
      tsStartDate: startDate,
      tsEndDate: endDate,
      tsName: place.name,
      miSeq: user.miSeq,
      tpSeq: tpSeq,
    };
    await instance.put("/api/schedule/basic", body).then((res) => {
      if (res.status) {
        openNotice();
      }
    });
  };
  useEffect(() => {
    if (user.miSeq) {
      getWishList();
    }
  }, [user]);

  useEffect(() => {
    wishList.map((item) => {
      
      
        setHeartState(true);
      
    });
    return () => {
      setHeartState(false);
    };
  }, [wishList]);

  return (
    <>
      <li
        className="flex w-11/12 mx-auto my-3 shadow-lg rounded-lg h-[130px]"
        onClick={() =>
          setPos({
            center: {
              lat: recommendation.tpLatitude,
              lng: recommendation.tpIongitude,
            },
            isPanto: true,
            title: recommendation.tpName,
            address: recommendation.tpAdress,
            imgPath: recommendation.tpImage,
          })
        }
      >
        <img
          className="w-20 md:h-auto object-cover md:w-36 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={recommendation?.tpImage}
          alt="이미지"
        />
        <div className="relative p-6 flex flex-col flex-1">
          <p className="text-gray-900 text-sm font-medium mb-2">
            {recommendation?.tpName}
          </p>
          <p className="text-xs text-gray-400">{recommendation?.tpAdress}</p>
          {heartState && user.miSeq ? (
            <button
              ref={heart}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(recommendation.tpSeq);
              }}
              className="absolute right-8 bottom-2 text-red-500"
            >
              <BsSuitHeartFill />
            </button>
          ) : (
            <button
              ref={heart}
              onClick={(e) => {
                e.stopPropagation();
                likeHandler(recommendation.tpSeq);
              }}
              className="absolute right-8 bottom-2"
            >
              <BsSuitHeartFill />
            </button>
          )}
          <button>
            <AiOutlinePlus
              onClick={(e) => {
                e.stopPropagation();
                if (startDate && endDate) {
                  addSchedule(recommendation.tpSeq);
                } else {
                  return alert("날짜를 지정해주세요");
                }
              }}
              className="absolute right-2 bottom-2"
            />
          </button>
        </div>
      </li>
    </>
  );
};
export default RecommendationCard;
