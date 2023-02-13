import React from "react";
import { GiSouthKorea } from "react-icons/gi";
const Visual = () => {
  return (
    <section className="relative">
      <video
        autoPlay
        muted
        loop
        className="mb-16 w-screen h-screen object-cover"
      >
        <source
          src={`/video/MainMovie${Math.floor(Math.random() * 2 + 1)}.mp4`}
          type="video/mp4"
        />
      </video>
      <div className="absolute top-1/2 right-1/2">
        <p className="text-white text-5xl font-NM font-bold ">
          Make Your Best Trip Schedule
        </p>
      </div>
    </section>
  );
};
export default Visual;
