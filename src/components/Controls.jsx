import React, { useState } from "react";
import "./Controls.css";

export default function Controls({ video, markerFound, instructions }) {
  const [playing, setPlaying] = useState(false);
  const [upright, setUpright] = useState(true);
  const [portrait, setPortrait] = useState(true);
  const container = document.querySelector("#container");
  const screen = document.querySelector("#screen");
  const orient = document.querySelector("#orient");

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
  const handleOrient = () => {
    orient.classList.toggle("rotated");
    screen.setAttribute("height", portrait ? 2 : 4);
    screen.setAttribute("width", portrait ? 4 : 2);
    setPortrait((prev) => !prev);
  };

  const handleARPosition = () => {
    console.log(screen);
    if (upright) {
      screen.removeAttribute("look-at");
      screen.object3D.position.set(0, 0, 0.2);
      screen.object3D.rotation.set(0, 0, 0);
    } else {
      screen.setAttribute("look-at", {
        src: "#player",
      });
      screen.object3D.position.set(0, 0, -2);
    }

    container.object3D.rotation.x += upright ? -1.5708 : 1.5708;
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
          className="play-button"
          disabled={!markerFound}
          onClick={handleOrient}
        >
          <i id="orient" className="fas fa-mobile"></i>
        </button>
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
