import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import styled from "styled-components";
const TravelLog = () => {
  return (
    <div className="my-12">
      <p className="text-center my-6 font-semibold text-2xl">
        여행기<br></br>
        <span className="font-semibold opacity-70 text-xs">TravelLog</span>
      </p>
      <SwiperContainer
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={40}
        slidesPerView={2}
      >
        <SwiperSlide>
          {" "}
          <button
            onClick={() =>
              window.open(
                ["https://blog.naver.com/myrocdo/222649105105"],
                "_blank"
              )
            }
          >
            <p className="right-3 left-3 text-white font-semibold leading-tight absolute top-20 text-3xl text-center font-NM">
              {" "}
              영월 봄에 가볼 만한 곳 <br /> 모아 모아{" "}
            </p>
            <img className="" src="/photo/travellog1.jpg" alt="영월"></img>{" "}
          </button>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <button
            onClick={() =>
              window.open(
                ["https://blog.naver.com/myrocdo/222605603933"],
                "_blank"
              )
            }
          >
            <p className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-3xl text-center font-NM">
              강릉 아르떼뮤지엄 <br /> 1박2일
            </p>
            <img className="" src="/photo/travellog2.jpg" alt="강릉"></img>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <button
            onClick={() =>
              window.open(
                ["https://blog.naver.com/minhae9191/222491332798"],
                "_blank"
              )
            }
          >
            <p className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-3xl text-center font-NM">
              남원 가볼 만한 곳
            </p>
            <img className="" src="/photo/travellog3.jpg" alt="남원"></img>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={() =>
              window.open(
                ["https://blog.naver.com/myrocdo/222577580618"],
                "_blank"
              )
            }
          >
            <p className="right-3 left-3 text-white font-semibold  leading-tight absolute top-20 text-3xl text-center font-NM">
              홍천&춘천 여행을 위한
              <br /> 애견동반 리조트
            </p>
            <img className="" src="/photo/travellog4.jpg" alt="홍천"></img>
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button
            onClick={() =>
              window.open(
                ["https://blog.naver.com/myrocdo/222571294557"],
                "_blank"
              )
            }
          >
            {" "}
            <img src="/photo/travellog5.jpg" alt="경주"></img>
          </button>
        </SwiperSlide>
      </SwiperContainer>
    </div>
  );
};

const SwiperContainer = styled(Swiper)`
  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-prev::after {
    color: #fff;
    font-size: 30px;
  }
  .swiper-button-next {
    right: 10px;
  }
  .swiper-button-next::after {
    color: #fff;
    font-size: 30px;
  }
`;
export default TravelLog;
