import React from "react";
import Map from "../components/Map";
import Recommendation from "../components/Recommendation";
import TravelCalendar from "../components/TravelCalendar";

const Detail = () => {
  return (
    <div className="flex pt-[80px]">
      <TravelCalendar />
      <Recommendation />
      <Map />
    </div>
  );
};

export default Detail;
