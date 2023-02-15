import React, { useEffect } from "react";
import Map from "../components/Detail/Map";
import Recommendation from "../components/Detail/Recommendation";
import TravelCalendar from "../components/Detail/TravelCalendar";

const Detail = () => {
  return (
    <div className="flex pt-20 max-h-screen overflow-hidden">
      <TravelCalendar />
      <Recommendation />
      <Map />
    </div>
  );
};

export default Detail;
