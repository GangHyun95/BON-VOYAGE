import React from "react";
import Calendar from "../components/Calendar";
import Map from "../components/Map";
import Recommendation from "../components/Recommendation";

const Detail = () => {
  return (
    <div className="flex ">
      <Calendar />
      {/* <Map /> */}
      <Recommendation />
    </div>
  );
};

export default Detail;
