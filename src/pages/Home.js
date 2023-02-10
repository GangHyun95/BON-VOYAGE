import React from "react";
import Footer from "../components/Footer";
import PlaceList from "../components/PlaceList";
import TravelLog from "../components/TravelLog";
import Visual from "../components/Visual";
const Home = () => {
  return (
    <div>
      <Visual />
      <div className="max-w-[1400px] mx-auto px-4">
        <PlaceList />
        <TravelLog />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
