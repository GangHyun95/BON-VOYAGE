import React from 'react'




const Visual = () => {
  return (
    <>
   <video 
   onPlaying={true}
   autoplay={true}
playsInline={true}
muted={true}
loop={true}>
<source  src="/vedio/MainMovie2.mp4" type="video/mp4"/>
</video>
    </>
  )
}

export default Visual