import React from "react";
import Map from "../components/Map";
import Recommendation from "../components/Recommendation";
import TravelCalendar from "../components/TravelCalendar";

const Detail = () => {
  return (
    <div className="flex ">
      <TravelCalendar />
      <Map />
      <Recommendation />
    </div>
  );
};

export default Detail;
