import React from "react";
import { useEffect, useRef, useState } from "react";

const { kakao } = window;

const Map = () => {
  // const path = process.env.PUBLIC_URL;
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.3708, 126.5391),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);

    //스카이뷰 전환버튼 추가
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

    // 확대 축소버튼 추가
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <div className="flex-1">
      <div id="map" className="relative w-full h-[calc(100vh-80px)]">
        <button className="absolute top-16 left-2 z-20 bg-white bg-opacity-40 shadow px-7 py-4 rounded-md">
          일정 추가
        </button>
      </div>
    </div>
  );
};

export default Map;
