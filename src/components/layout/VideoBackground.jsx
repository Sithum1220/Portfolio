import React from "react";

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="object-cover fixed top-0 left-0 w-full h-full opacity-30 -z-10"
    >
      <source src="public/assets/images/backgroud.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
