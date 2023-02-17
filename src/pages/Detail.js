import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import instance from "../api/axios";
import KaKaoMap from "../components/Detail/KaKaoMap";
import TravelCalendar from "../components/Detail/TravelCalendar";

const Detail = () => {
  const {
    state: { place },
  } = useLocation();
  const [lat, setLat] = useState(place.latitude);
  const [lng, setLng] = useState(place.longitude);
  // 데이터 넣기
  const [mapData, setMapData] = useState([]);
  const fetchDate = async () => {
    try {
      const result = await instance.get("/api/travle/place");
      setMapData(result.data.list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDate();
  }, []);

  console.log(mapData);
  return (
    <div className="flex pt-20 max-h-screen overflow-hidden">
      <TravelCalendar place={place} />
      <KaKaoMap
        place={place}
        lat={lat}
        lng={lng}
        mapData={mapData}
        setLat={setLat}
        setLng={setLng}
      />
    </div>
  );
};

export default Detail;
