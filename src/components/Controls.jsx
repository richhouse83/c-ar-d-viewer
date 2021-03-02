import React, { useState } from "react";
import "./Controls.css";

export default function Controls({ video, markerFound, instructions }) {
  const [playing, setPlaying] = useState(false);
  const [upright, setUpright] = useState(true);

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

  const handleARPosition = () => {
    const container = document.querySelector("#container");
    const screen = document.querySelector("#screen");
    console.log(screen);
    if (upright) {
      screen.removeAttribute("look-at");
    } else {
      screen.setAttribute("look-at", {
        src: "#player",
      });
    }
    container.object3D.rotation.x += upright ? -90 : 90;
    setUpright((prev) => !prev);
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
        <button
          onClick={handleARPosition}
          disabled={!markerFound}
          className="play-button"
        >
          {upright ? "Flat" : "Upright"}
        </button>
      </div>
    </>
  );
}
