import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper React components
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
// Import Swiper styles
import "swiper/css";
const TravelLog = () => {
  return (
    <div className="p-11 my-7">
      <p className="text-center my-6 font-semibold text-2xl">
        여행기<br></br>{" "}
        <span className="font-semibold opacity-70 text-xs">TravelLog</span>
      </p>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={100}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <e className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-5xl text-center">
            영월 봄에 가볼 만한 곳 <br /> 모아 모아
          </e>
          <img className="" src="/photo/travellog1.jpg" alt="트레블로그"></img>
        </SwiperSlide>
        <SwiperSlide>
          <e className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-5xl text-center">
            강릉 아르떼뮤지엄
            <br /> 1박2일
          </e>
          <img
            className=""
            src="/photo/travellog2.jpg"
            alt="트레블로그"
          ></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <e className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-5xl text-center">
            남원 가볼 만한 곳
          </e>
          <img className="" src="/photo/travellog3.jpg" alt="트레블로그"></img>
        </SwiperSlide>
        <SwiperSlide>
          <e className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-5xl text-center">
            홍천&춘천 여행을 위한
            <br /> 애견동반 리조트
          </e>
          <img
            className=""
            src="/photo/travellog4.jpg"
            alt="트레블로그"
          ></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src="/photo/travellog5.jpg" alt="트레블로그"></img>{" "}
        </SwiperSlide>
        <BsChevronLeft className=" bg-white text-white text-[30px] rounded-lg bg-opacity-20 absolute z-20 top-[50%]" />{" "}
        <BsChevronRight className=" bg-white text-white text-[30px] rounded-lg bg-opacity-20 absolute right-0 z-20 top-[50%]  " />
      </Swiper>
    </div>
  );
};
export default TravelLog;
