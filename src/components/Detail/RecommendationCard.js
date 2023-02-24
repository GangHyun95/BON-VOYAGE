import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { TbAlertCircle } from "react-icons/tb";
import Modal from "../../Layout/Modal";
import { BsSuitHeartFill } from "react-icons/bs";
import instance from "../../api/axios";
import { useSelector } from "react-redux";
const RecommendationCard = ({ openNotice, recommendation, setPos }) => {
  const user = useSelector((state) => state.user);
  const heart = useRef(null);

  const [wishList, setWishList] = useState([]);
  const likeHandler = async (seq) => {
    try {
      await instance
        .put(`/api/travel/like?tpseq=${seq}&miseq=${user.miSeq}`)
        .then((res) => {
          if (res.data.status) {
          } else {
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getWishList = async () => {
    await instance
      .get("/api/travel/member/like", {
        params: {
          miseq: user.miSeq,
        },
      })
      .then((res) => setWishList(res.data.map((item) => item.place.tpSeq)));
  };

  useEffect(() => {
    getWishList();
    wishList.map((item) => {
      if (recommendation?.tpSeq === item) {
        heart.current.classList.add("text-red-500");
      }
    });
  }, [wishList]);
  // console.log(heart);
  console.log(wishList.map((item) => item));

  console.log(wishList);
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
          <button
            ref={heart}
            onClick={(e) => {
              e.stopPropagation();
              likeHandler(recommendation.tpSeq);
            }}
            className="absolute right-8 bottom-3"
          >
            {" "}
            <BsSuitHeartFill />
          </button>
          <button>
            <AiOutlinePlus
              onClick={openNotice}
              className="absolute right-2 bottom-3"
            />
          </button>
        </div>
      </li>
    </>
  );
};
export default RecommendationCard;
