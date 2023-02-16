import React, { useEffect, useState } from "react";
import instance from "../api/axios";
import Footer from "../components/common/Footer";
import PlaceList from "../components/Main/PlaceList";
import TravelLog from "../components/Main/TravelLog";
import Visual from "../components/Main/Visual";
const Home = () => {
  const [placeList, setPlaceList] = useState([]);
  const fetchDate = async () => {
    try {
      const result = await instance.get("/api/zone/allcate");
      setPlaceList(result.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <>
      <Visual />
      <div className="max-w-[1400px] mx-auto px-4">
        <PlaceList placeList={placeList} setPlaceList={setPlaceList} />
        <TravelLog />
      </div>
      <Footer />
    </>
  );
};
export default Home;
