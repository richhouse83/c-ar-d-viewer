import React, { useState } from "react";
import "./Controls.css";

export default function Controls({ video }) {
  const [playing, setPlaying] = useState(false);
  const handleClick = () => {
    const endedAction = () => {
      console.log("ended");
      setPlaying(false);
      video.removeEventListener("ended", endedAction);
    };
    if (!video) {
      video = document.querySelector("#video");
    }
    console.log(video);
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
      video.addEventListener("ended", endedAction);
    }
  };
  return (
    <div className="buttons">
      <button onClick={handleClick} className="play-button">
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
