import React from "react";
import { GiSouthKorea } from "react-icons/gi";
const Visual = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="relative mx-auto mb-16 w-screen h-screen object-cover"
      >
        <source src="/video/MainMovie2.mp4" type="video/mp4" />
      </video>
      <div className="absolute justify-between fll top-[50%] flex right-[50%]">
        <b className=" text-white text-5xl ">Make Your Best Trip Schedule</b>
      </div>
    </>
  );
};
export default Visual;
