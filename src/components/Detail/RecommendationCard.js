import React from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { TbAlertCircle } from "react-icons/tb";
import Modal from "../../Layout/Modal";

const RecommendationCard = ({ openNotice, recommendation, setPos }) => {
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
          <button className="absolute right-8 bottom-3"></button>
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
