import React, { useEffect, useState } from "react";
import instance from "../api/axios";
import Map from "../components/Detail/Map";
import Recommendation from "../components/Detail/Recommendation";
import TravelCalendar from "../components/Detail/TravelCalendar";

const Detail = () => {
  // 데이터 넣기

  const [MapData, setMapData] = useState([]);
  const fetchDate = async () => {
    try {
      const result = await instance.get("/api/travle/place");
      setMapData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(MapData);

  useEffect(() => {
    fetchDate();
  }, []);
  return (
    <div className="flex pt-20 max-h-screen overflow-hidden">
      <TravelCalendar />
      <Recommendation MapData={MapData} />
      <Map />
    </div>
  );
};

export default Detail;
