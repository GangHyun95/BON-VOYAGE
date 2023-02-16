import React from "react";
import { useEffect, useRef, useState } from "react";
import MapOverlay from "../style/MapOverlay.css"
const { kakao } = window;

const Map = () => {


// 데이터 넣기 


  // const path = process.env.PUBLIC_URL;
  useEffect(() => {
    const container = document.getElementById("map");
    const mapCenter = new kakao.maps.LatLng(33.5563, 126.7958); // 지도의 중심좌표
    const options = {
      center: mapCenter,
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);




// 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});




// 커스텀 오버레이에 표시할 내용입니다
// HTML 문자열 또는 Dom Element 입니다
var content = '<div class="overlay_info">';
content += '    <a href="https://place.map.kakao.com/17600274" target="_blank"><strong>월정리 해수욕장</strong></a>';
content += '    <div class="desc">';
content += '        <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/place_thumb.png" alt="">';
content += '        <span class="address">제주특별자치도 제주시 구좌읍 월정리 33-3</span>';
content += '    </div>';
content += '</div>';
// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(33.55635, 126.795841);

// 커스텀 오버레이를 생성합니다
var mapCustomOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
    xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
    yAnchor: 1.1 // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
});
// 커스텀 오버레이를 지도에 표시합니다
mapCustomOverlay.setMap(map);

var rvContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
var rv = new kakao.maps.Roadview(rvContainer); //로드뷰 객체
var rvClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

//지도의 중심좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
rvClient.getNearestPanoId(mapCenter, 50, function(panoId) {
    rv.setPanoId(panoId, mapCenter); //panoId와 중심좌표를 통해 로드뷰 실행
});
kakao.maps.event.addListener(rv, 'init', function() {

  // 커스텀 오버레이를 생성합니다
  var rvCustomOverlay = new kakao.maps.CustomOverlay({
      position: position,
      content: content,
      xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에 위치합니다. 기본값은 0.5 입니다
      yAnchor: 0.5 // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에 위치합니다. 기본값은 0.5 입니다
  });

  //rvCustomOverlay.setAltitude(2); //커스텀 오버레이의 고도값을 설정합니다.(로드뷰 화면 중앙이 0입니다)
  rvCustomOverlay.setMap(rv);

  var projection = rv.getProjection(); // viewpoint(화면좌표)값을 추출할 수 있는 projection 객체를 가져옵니다.
  
  // 커스텀오버레이의 position과 altitude값을 통해 viewpoint값(화면좌표)를 추출합니다.
  var viewpoint = projection.viewpointFromCoords(rvCustomOverlay.getPosition(), rvCustomOverlay.getAltitude());

  rv.setViewpoint(viewpoint); //커스텀 오버레이를 로드뷰의 가운데에 오도록 로드뷰의 시점을 변화 시킵니다.
});

    //스카이뷰 전환버튼 추가
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

    // 확대 축소버튼 추가
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <div className="flex-1 map-wrap">
      <div id="map" className="relative w-full h-[calc(100vh-80px)]">
        <button className="absolute top-16 left-2 z-20 bg-white bg-opacity-40 shadow px-7 py-4 rounded-md">
          일정 추가
        </button>
      </div>
      <div id="roadview" className="w-[100%], h-[300px]"></div> 
      {/* <!-- 로드뷰를 표시할 div 입니다 --> */}
    

    </div>
  );
};

export default Map;
