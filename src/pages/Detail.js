import React, { useEffect } from "react";
import Map from "../components/Map";
import Recommendation from "../components/Recommendation";
import TravelCalendar from "../components/TravelCalendar";

const Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex pt-[80px]">
      <TravelCalendar />
      <Recommendation />
      <Map />
    </div>
  );
};

export default Detail;
