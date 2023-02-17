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

const { kakao } = window;
const KaKaoMap = ({ place, lat, lng, setLat, setLng, mapData }) => {
  const [pos, setPos] = useState({
    center: { lat, lng },
    isPanto: false,
  });

  console.log(pos.center);
  console.log(mapData.map((item) => console.log(item)));
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
          {/* 커스텀 오버레이에 표시할 내용입니다 */}
          <div className="bg-white rounded"></div>
        </CustomOverlayMap>
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPLEFT} />
      </Map>
    </>
  );
};

export default KaKaoMap;
