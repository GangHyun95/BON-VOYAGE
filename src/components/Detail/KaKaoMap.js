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

const { kakao } = window;
const KaKaoMap = ({ lat, lng, mapData }) => {
  const [pos, setPos] = useState({
    center: { lat, lng },
    isPanto: false,
    title: "",
    address: "",
    imgPath: "",
  });

  console.log(pos);
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
            <section className="text-white rounded-lg overflow-hidden  whitespace-pre-wrap">
              <div className="bg-main p-2 w-44">
                <h3 className="text-semibold">{pos.title}</h3>
                <span className="text-xs">{pos.address}</span>
              </div>
              <div className="text-xl text-main absolute left-1/2 -translate-x-1/2 bottom-[-22px]">
                <MdOutlineArrowDropDown size={40} />
              </div>
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
