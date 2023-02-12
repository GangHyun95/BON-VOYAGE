import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";
import { RiRestaurant2Line } from "react-icons/ri";
import { MdOutlineLocalHotel } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

const Recommendation = () => {
  return (
    <div className="w-[360px] border-l">
      {/* 검색폼 */}

      <form className="relative text-xl text-[#999]">
        <input
          type="text"
          className="w-full h-11 my-4 outline-none border rounded-3xl p-4"
        />
        <CiSearch className="absolute top-2/4 right-3 translate-y-[-50%] text-main" />
      </form>
      <div className="flex items-center justify-center">
        <div className="inline-flex" role="group">
          <button
            type="button"
            className="
            flex
        rounded-l
        px-6
        
        py-2
        border-2 border-blue-600
        text-blue-600
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
          >
            음식점
            <RiRestaurant2Line className=" my-auto" />
          </button>
          <button
            type="button"
            className="
        px-6
        py-2
        flex
        border-t-2 border-b-2 border-blue-600
        text-blue-600
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
        ease-in-out
      "
          >
            관광명소 <MdOutlinePlace className=" my-auto" />
          </button>
          <button
            type="button"
            className="
        rounded-r
        px-6
        flex
        py-2
        border-2 border-blue-600
        text-blue-600
        font-medium
        text-xs
        leading-tight
        uppercase
        hover:bg-black hover:bg-opacity-5
        focus:outline-none focus:ring-0
        transition
        duration-150
      
        ease-in-out
      "
          >
            숙박시설 <MdOutlineLocalHotel className=" my-auto " />
          </button>
        </div>
      </div>
      <h2 className="text-center my-2">추천장소</h2>
      <ul>
        <li className="flex justify-center m-5">
          <div className="flex h-[130px] flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img
              className=" w-20 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="/photo/jeju.jpg"
              alt="이미지"
            />
            <div className="relative p-6 flex flex-col justify-start">
              <p className="text-gray-900 text-sm font-medium mb-2">
                감천문화마을{" "}
              </p>
              <AiOutlinePlus className="absolute right-2 bottom-3" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Recommendation;
