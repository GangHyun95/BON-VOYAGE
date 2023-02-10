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
        <source
          src={`/video/MainMovie${Math.floor(Math.random() * 2 + 1)}.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="absolute justify-between fll top-[50%] flex right-[50%]">
        <p className=" text-white text-5xl Nm ">Make Your Best Trip Schedule</p>
      </div>
    </>
  );
};
export default Visual;
