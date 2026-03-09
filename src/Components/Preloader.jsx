import React, { useRef, useEffect } from "react";
import "./Preloader.css";

const Preloader = ({ fadeOut }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const setStartTime = () => {
        video.currentTime = 5;
      };
      video.addEventListener("loadeddata", setStartTime);
      return () => {
        video.removeEventListener("loadeddata", setStartTime);
      };
    }
  }, []);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      {/* Background Video */}
      <video
        ref={videoRef}
        className="preloader-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://vz-347babc2-229.b-cdn.net/3d76d99b-4f63-42bd-8478-d1d460f2e10d/play_480p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay Loader */}
      <div className="preloader-overlay">
      </div>
    </div>
  );
};

export default Preloader;
