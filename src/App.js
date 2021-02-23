import "./App.css";

function App() {
  return (
    <a-scene>
      <a-assets>
        <video
          id="video"
          crossorigin="anonymous"
          loop="false"
          preload="auto"
          src="https://c-ar-d-video-storage.s3.us-east-2.amazonaws.com/willvid.mp4"
          playsinline
        ></video>
      </a-assets>
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
          gltf-model="url(./balloon-cluster/scene.gltf)"
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
      <a-entity environment="preset: default; dressingAmount: 500"></a-entity>
      <a-video
        id="screen"
        src="#video"
        position="0 1 0"
        width="3"
        height="2"
        foo
      ></a-video>
      <a-camera id="player" position="0 1.6 10" wasd-controls="fly: true;">
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>
  );
}

export default App;
