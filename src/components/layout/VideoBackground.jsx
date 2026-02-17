import React from "react";

const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="fixed left-0 top-0 w-full h-full object-cover -z-10 opacity-30"
    >
      <source src="/assets/videos/backgroud.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
