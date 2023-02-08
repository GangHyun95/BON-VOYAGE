import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
const TravelLog = () => {
  return (
    <div className="p-11 my-7">
      <Swiper
        spaceBetween={100}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <h3 className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-5xl text-center">
            영월 봄에 가볼 만한 곳 <br /> 모아 모아
          </h3>
          <img className="" src="/photo/travellog1.jpg" alt="트레블로그"></img>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-5xl text-center">
            강릉 아르떼뮤지엄
            <br /> 1박2일
          </h3>
          <img
            className=""
            src="/photo/travellog2.jpg"
            alt="트레블로그"
          ></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-5xl text-center">
            남원 가볼 만한 곳
          </h3>
          <img className="" src="/photo/travellog3.jpg" alt="트레블로그"></img>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-5xl text-center">
            홍천&춘천 여행을 위한
            <br /> 애견동반 리조트
          </h3>
          <img
            className=""
            src="/photo/travellog4.jpg"
            alt="트레블로그"
          ></img>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src="/photo/travellog5.jpg" alt="트레블로그"></img>{" "}
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default TravelLog;
