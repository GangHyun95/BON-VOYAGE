import React from "react";

const Visual = () => {
  return (
    <>
      <video autoPlay muted loop className="w-full h-full mx-auto mb-16">
        <source src="/vedio/MainMovie2.mp4" type="video/mp4" />
      </video>
    </>
  );
};

export default Visual;
