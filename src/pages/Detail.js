import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import instance from "../api/axios";
import Map from "../components/Detail/Map";
import Recommendation from "../components/Detail/Recommendation";
import TravelCalendar from "../components/Detail/TravelCalendar";

const Detail = () => {
  const {
    state: { place },
  } = useLocation();
  const [latitude, setLatitude] = useState(place.latitude);
  const [longitude, setLongitude] = useState(place.longitude);
  // 데이터 넣기
  const [mapData, setMapData] = useState([]);
  const fetchDate = async () => {
    try {
      const result = await instance.get("/api/travle/place");
      setMapData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(place);
  useEffect(() => {
    fetchDate();
  }, []);

  console.log(latitude, longitude);
  return (
    <div className="flex pt-20 max-h-screen overflow-hidden">
      <TravelCalendar place={place} />
      <Recommendation
        mapData={mapData}
        latitude={latitude}
        setLatitude={setLatitude}
        longitude={longitude}
        setLongitude={setLongitude}
      />
      <Map place={place} latitude={latitude} longitude={longitude} />
    </div>
  );
};

export default Detail;
