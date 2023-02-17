import React, { useEffect, useState } from "react";
import instance from "../api/axios";
import Footer from "../components/common/Footer";
import PlaceList from "../components/Main/PlaceList";
import TravelLog from "../components/Main/TravelLog";
import Visual from "../components/Main/Visual";
const Home = () => {
  const [sortText, setSortText] = useState("추천 순");
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
  //
  const assending = () => {
    placeList.sort(function (a, b) {
      // 한글 오름차순
      return a?.child?.name < b?.child?.name
        ? -1
        : a?.child?.name > b?.child?.name
        ? 1
        : 0;
    });
    setSortText("오름차순");
  };

  const descending = () => {
    placeList.sort(function (a, b) {
      // 한글 내림차순
      return a?.child?.name > b?.child?.name
        ? -1
        : a?.child?.name < b?.child?.name
        ? 1
        : 0;
    });
    setSortText("내림차순");
  };
  return (
    <>
      <Visual />
      <div className="max-w-[1400px] mx-auto px-4">
        <PlaceList
          placeList={placeList}
          setPlaceList={setPlaceList}
          sortText={sortText}
          setSortText={setSortText}
          assending={assending}
          descending={descending}
        />
        <TravelLog />
      </div>
      <Footer />
    </>
  );
};
export default Home;
