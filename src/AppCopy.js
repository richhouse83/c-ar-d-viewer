import { useRef, useEffect } from "react";
import Controls from "./components/Controls";
import "./App.css";

function App() {
  console.log("update to v9");
  const videoRef = useRef(null);
  const searchParams = new URLSearchParams(window.location.search);
  const video_id = searchParams.get("video");

  useEffect(() => {
    const aCanvas = document.querySelector(".a-canvas");
    aCanvas.classList.remove("a-canvas");
    aCanvas.classList.add("override");
  }, []);

  return (
    <>
      <Controls videoRef={videoRef.current} />
      <a-scene
        vr-mode-ui={false}
        embed
        arjs="trackingMethod: best;"
        id="aframebox"
      >
        <a-assets>
          <video
            id="video"
            crossOrigin="anonymous"
            loop={false}
            preload="auto"
            src={`https://card-euwest-convert.s3-eu-west-1.amazonaws.com/${video_id}`}
            playsInline
            ref={videoRef}
          ></video>
        </a-assets>
        <a-marker preset="hiro">
          <a-entity
            id="balloon-container"
            animation__spin="property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 24000"
          >
            <a-entity
              id="balloon1"
              gltf-model="url(./balloon/scene.gltf)"
              scale="0.1 0.1 0.1"
              position="1 3 -2"
              animation="property: object3D.position.y; to: 3.2; dir: alternate; dur: 2000; loop: true"
              animation__spin="property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 6800"
              animation__wobble="property: rotation; from: -9 0 9; to: 8 0 -10; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1320"
            ></a-entity>
            <a-entity
              id="balloonClust"
              gltf-model="./balloon-cluster/scene.gltf"
              scale="0.2 0.2 0.2"
              position="-4 3.5 -1"
              animation__bob="property: object3D.position.y; to: 3.2; dir: alternate; dur: 1500; loop: true"
              animation__spin="property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 5000"
              animation__wobble="property: rotation; from: -7 0 6; to: 6 0 -6; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1400"
            ></a-entity>
            <a-entity
              id="balloon3"
              gltf-model="url(./balloon/scene.gltf)"
              scale="0.1 0.1 0.1"
              position="2 3.2 3"
              animation__bob="property: object3D.position.y; to: 4; dir: alternate; dur: 3000; loop: true"
              animation__spin="property: rotation; to: 0 360 0; easing: easeInOutQuad; loop: true; dur: 4500"
              animation__wobble="property: rotation; from: -8 0 9; to: 10 0 -8; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1200"
            ></a-entity>
          </a-entity>
          <a-video
            id="screen"
            src="#video"
            look-at="src: #player"
            position="0 1 -3"
            height="2"
            width="4"
            rotation="0 0 0"
          ></a-video>
        </a-marker>
        <a-entity id="player" camera position="0 0 -3"></a-entity>
      </a-scene>
    </>
  );
}

export default App;
