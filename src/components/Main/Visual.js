import React from "react";

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
          src={`/video/MainMovie${Math.floor(Math.random() * 5 + 1)}.mp4`}
          type="video/mp4"
        />
      </video>

      <div className="absolute top-1/2 right-1/2 flex ">
        <p className="text-white text-5xl inline-block font-NM font-bold ">
          Make Your Best Trip Schedule
        </p>
      </div>
    </section>
  );
};
export default Visual;
