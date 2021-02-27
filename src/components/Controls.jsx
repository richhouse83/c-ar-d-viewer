import React, { useState } from "react";
import "./Controls.css";

export default function Controls({ video, markerFound, instructions }) {
  const [playing, setPlaying] = useState(false);

  if (!video) {
    video = document.querySelector("#video");
  }

  const handleClick = () => {
    const endedAction = () => {
      console.log("ended");
      setPlaying(false);
      video.removeEventListener("ended", endedAction);
    };
    if (!video) {
      video = document.querySelector("#video");
    }
    if (playing) {
      video.pause();
      setPlaying(false);
    } else if (markerFound) {
      video.play();
      setPlaying(true);
      video.addEventListener("ended", endedAction);
    }
  };

  return (
    <>
      {instructions && (
        <div className="messages">
          <p className="instructions">{instructions}</p>
        </div>
      )}
      <div className="buttons">
        <button
          onClick={handleClick}
          disabled={!markerFound}
          className="play-button"
        >
          {playing ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
      </div>
    </>
  );
}
