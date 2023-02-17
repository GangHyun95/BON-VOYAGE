import React from "react";
import { useEffect, useRef, useState } from "react";
import MapOverlay from "../style/MapOverlay.css";

const Map = ({ place, latitude, longitude }) => {
  // const path = process.env.PUBLIC_URL;
  const { kakao } = window;
  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = "";
    const mapCenter = new kakao.maps.LatLng(latitude, longitude); // 지도의 중심좌표
    const options = {
      center: mapCenter,
      level: 9,
    };
    const map = new kakao.maps.Map(container.current, options);

    //스카이뷰 전환버튼 추가
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

    // 확대 축소버튼 추가
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, [latitude, longitude]);

  return (
    <div className="flex-1 map-wrap">
      <div
        id="map"
        className="relative w-full h-[calc(100vh-80px)]"
        ref={container}
      >
        <button className="absolute top-16 left-2 z-20 bg-white bg-opacity-40 shadow px-7 py-4 rounded-md">
          일정 추가
        </button>
      </div>
    </div>
  );
};

export default Map;
