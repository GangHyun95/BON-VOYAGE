import React from "react";
import Footer from "../components/Footer";
import PlaceList from "../components/PlaceList";
import TravelLog from "../components/TravelLog";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto">
        <PlaceList />
        <TravelLog />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
