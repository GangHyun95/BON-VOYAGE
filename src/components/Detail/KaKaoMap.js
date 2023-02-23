import React from "react";
import { useState } from "react";
import {
  CustomOverlayMap,
  Map,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";
// import MapOverlay from "../style/MapOverlay.css";
import Recommendation from "./Recommendation";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useRef } from "react";
import { useEffect } from "react";

const { kakao } = window;
const KaKaoMap = ({ lat, lng, mapData }) => {
  const [pos, setPos] = useState({
    center: { lat, lng },
    isPanto: false,
    title: "",
    address: "",
    imgPath: "",
  });
  const [temp, setTemp] = useState(0);
  const placeRef = useRef();
  useEffect(() => {
    setTemp(placeRef?.current?.getBoundingClientRect().height / 2);
  }, [pos]);
  // placeRef.current?.classList.add(`translate-y-[${-temp}px]`);
  // console.log(temp);
  return (
    <>
      <Recommendation mapData={mapData} setPos={setPos} />
      <Map // 지도를 표시할 Container
        center={pos.center}
        isPanto={pos.isPanto}
        className="flex-1 h-[calc(100vh-80px)]"
        level={9} // 지도의 확대 레벨
      >
        <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
          // 커스텀 오버레이가 표시될 위치입니다
          position={pos.center}
        >
          {pos.title && (
            <section
              className={`relative bg-main p-2 w-44 rounded-lg text-white whitespace-pre-wrap left-1`}
              style={{
                transform: `translateY(${-temp - 8}px)`,
              }}
              ref={placeRef}
            >
              <img src={pos.imgPath} alt={pos.title} />
              <h3 className="text-semibold mt-2">{pos.title}</h3>
              <span className="text-xs">{pos.address}</span>
              <MdOutlineArrowDropDown
                size={40}
                className="text-main absolute left-1/2 -translate-x-1/2 bottom-[-22px]"
              />
            </section>
          )}
          {/* 커스텀 오버레이에 표시할 내용입니다 */}
        </CustomOverlayMap>
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPLEFT} />
      </Map>
    </>
  );
};

export default KaKaoMap;
