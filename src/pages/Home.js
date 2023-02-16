import React, { useEffect, useState } from "react";
import instance from "../api/axios";
import Footer from "../components/common/Footer";
import PlaceList from "../components/Main/PlaceList";
import TravelLog from "../components/Main/TravelLog";
import Visual from "../components/Main/Visual";
const Home = () => {
  const [placeData, setPlaceData] = useState([]);
  const fetchDate = async () => {
    try {
      const result = await instance.get("/api/zone/allcate");
      setPlaceData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(placeData);

  useEffect(() => {
    fetchDate();
  }, []);
  return (
    <>
      <Visual />
      <div className="max-w-[1400px] mx-auto px-4">
        <PlaceList placeData={placeData} />
        <TravelLog />
      </div>
      <Footer />
    </>
  );
};
export default Home;
