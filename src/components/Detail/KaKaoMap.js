import React from "react";
import { useState } from "react";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";
// import MapOverlay from "../style/MapOverlay.css";
import Recommendation from "./Recommendation";
import { FaMapPin } from "react-icons/fa";

const { kakao } = window;
const KaKaoMap = ({ place, lat, lng, setLat, setLng, mapData }) => {
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
      <Recommendation
        place={place}
        mapData={mapData}
        lat={lat}
        setLat={setLat}
        lng={lng}
        setLng={setLng}
        pos={pos}
        setPos={setPos}
      />
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
          {" "}
          {pos.title && (
            <section className="text-white rounded-lg flex justify-center items-center overflow-hidden w-[304px] whitespace-pre-wrap border">
              <img src={pos.imgPath} alt={pos.title} className="w-32 h-32" />
              <div className="bg-main p-3 w-44 h-32">
                <h3 className="text-semibold text-lg">{pos.title}</h3>
                <span className="text-sm">{pos.address}</span>
              </div>
              <div className="text-xl text-main absolute left-1/2 -translate-x-1/2 bottom-[-20px]">
                <FaMapPin />
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
