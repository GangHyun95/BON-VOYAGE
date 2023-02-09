import React from "react";
import TravelCalendar from "../components/TravelCalendar";
import Map from "../components/Map";
import Recommendation from "../components/Recommendation";

const Detail = () => {
  return (
    <div className="flex ">
      <TravelCalendar />
      {/* <Map /> */}
      <Recommendation />
    </div>
  );
};

export default Detail;
