import React, { useEffect, useState } from "react";
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

  const [heartState, setHeartState] = useState(false);
  const [wishList, setWishList] = useState([]);
  const [schedule, setSchedule] = useState([]);

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

  const getSchedule = async () => {
    await instance
      .get(`/api/schedule/member/list?miseq=${user.miSeq}`)
      .then((res) => setSchedule(res.data));
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
      getSchedule();
    }
  }, [user]);

  useEffect(() => {
    wishList.map((item) => {
      if (recommendation?.tpSeq === item) {
        setHeartState(true);
      }
      return () => {
        setHeartState(false);
      };
    });
  }, [wishList]);

  return (
    <>
      <li
        className="flex w-10/12 mx-auto my-6 border border-gray-200 rounded-lg h-28"
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
          className="w-20 md:h-auto object-cover md:w-28 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={recommendation?.tpImage}
          alt="이미지"
        />
        <div className="relative p-4 flex flex-col flex-1">
          <p className="text-gray-700 text-[13px] font-bold mb-2 line-clamp-2 ">
            {recommendation?.tpName}
          </p>
          <p className=" text-gray-400 text-[11px]">
            {recommendation?.tpAdress}
          </p>
          {heartState && user.miSeq ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(recommendation.tpSeq);
              }}
              className="absolute right-10 bottom-3 text-red-500 text-xs"
            >
              <BsSuitHeartFill />
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                likeHandler(recommendation.tpSeq);
              }}
              className="absolute right-10 bottom-3 text-xs"
            >
              <BsSuitHeartFill />
            </button>
          )}
          <button>
            <AiOutlinePlus
              onClick={(e) => {
                e.stopPropagation();
                if (startDate && endDate) {
                  {
                    if (!user.miSeq) {
                      return alert("로그인 후 이용 가능합니다.");
                    }
                  }
                  addSchedule(recommendation.tpSeq);
                } else {
                  return alert("날짜를 지정해 주세요.");
                }
              }}
              className="absolute right-4 bottom-3 text-xs"
            />
          </button>
        </div>
      </li>
    </>
  );
};
export default RecommendationCard;
