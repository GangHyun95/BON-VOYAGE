import React from "react";
import Footer from "../components/common/Footer";
import PlaceList from "../components/Main/PlaceList";
import TravelLog from "../components/Main/TravelLog";
import Visual from "../components/Main/Visual";
const Home = () => {
  return (
    <>
      <Visual />
      <div className="max-w-[1400px] mx-auto px-4">
        <PlaceList />
        <TravelLog />
      </div>
      <Footer />
    </>
  );
};
export default Home;
