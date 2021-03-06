import { useRef, useEffect, useState } from 'react';
import Controls from './components/Controls.jsx';
import './App.css';

function App() {
  const initial = 'Hold Camera over Hiro Marker to Start!';
  const [markerFound, setMarkerFound] = useState(false);
  const [instructions, setInstructions] = useState(initial);
  const videoRef = useRef(null);
  const searchParams = new URLSearchParams(window.location.search);
  const videoId = searchParams.get('video');
  const message = searchParams.get('message') || 'Happy Birthday!';

  const toggleMarkerFound = () => {
    setMarkerFound((prev) => !prev);
    setInstructions((prev) => {
      if (prev) return '';
      return initial;
    });
  };

  useEffect(() => {
    const aCanvas = document.querySelector('.a-canvas');
    const hiro = document.querySelector('#hiro');
    const scene = hiro.sceneEl;
    scene.addEventListener('markerFound', toggleMarkerFound);
    scene.addEventListener('markerLost', toggleMarkerFound);
    aCanvas.classList.remove('a-canvas');
    aCanvas.classList.add('override');

    return function cleanup() {
      scene.removeEventListener('markerFound', toggleMarkerFound);
      scene.removeEventListener('markerLost', toggleMarkerFound);
    };
  }, []);

  return (
    <>
      <Controls
        videoRef={videoRef.current}
        markerFound={markerFound}
        instructions={instructions}
      />
      <a-scene
        vr-mode-ui={false}
        arjs="trackingMethod: best;"
        id="aframebox"
        renderer="logarithmicDepthBuffer: true;"
      >
        <a-assets>
          <video
            id="video"
            crossOrigin="anonymous"
            loop={false}
            preload="auto"
            src={`https://card-euwest-convert.s3-eu-west-1.amazonaws.com/${videoId}`}
            playsInline
            ref={videoRef}
          />
        </a-assets>
        <a-marker id="hiro" smooth="true" smoothCount="10" preset="hiro">
          <a-entity id="container" position="0 0 0">
            <a-video
              id="screen"
              src="#video"
              look-at="src: #player"
              position="0 0 -2"
              height="4"
              width="2"
              rotation="0 0 0"
            ></a-video>
            <a-text
              value={message}
              position="-0.8 3.5 1"
              look-at="src: #player"
            ></a-text>
            <a-entity
              id="balloonClust"
              gltf-model="url(https://richhouse83.github.io/c-ar-d-viewer/balloon-cluster/scene.gltf)"
              crossOrigin="anonymous"
              scale="0.2 0.2 0.2"
              position="0 3.2 -1"
              animation__bob="property: object3D.position.y; to: 3.2; dir: alternate; dur: 1500; loop: true"
              animation__spin="property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 5000"
              animation__wobble="property: rotation; from: -7 0 6; to: 6 0 -6; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1400"
            />
            <a-entity
              id="balloon3"
              gltf-model="url(https://richhouse83.github.io/c-ar-d-viewer/balloon/scene.gltf)"
              scale="0.1 0.1 0.1"
              position="-1.2 3.1 -2"
              animation__bob="property: object3D.position.y; to: 4; dir: alternate; dur: 3000; loop: true"
              animation__spin="property: rotation; to: 0 360 0; easing: easeInOutQuad; loop: true; dur: 4500"
              animation__wobble="property: rotation; from: -8 0 9; to: 10 0 -8; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1200"
            />
            <a-entity
              id="balloon1"
              gltf-model="url(https://richhouse83.github.io/c-ar-d-viewer/balloon/scene.gltf)"
              scale="0.1 0.1 0.1"
              position="1 3 -2"
              animation="property: object3D.position.y; to: 3.2; dir: alternate; dur: 2000; loop: true"
              animation__spin="property: rotation; to: 0 360 0; easing: linear; loop: true; dur: 6800"
              animation__wobble="property: rotation; from: -9 0 9; to: 8 0 -10; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1320"
            />

            <a-entity
              id="cake"
              gltf-model="url(https://richhouse83.github.io/c-ar-d-viewer/cake/scene.gltf)"
              scale="0.009 0.009 0.009"
              position="-2 0 -1"
              animation__spin="property: rotation; to: 0 360 0; easing: easeInOutQuad; loop: true; dur: 4500"
              animation__wobble="property: rotation; from: -8 0 9; to: 10 0 -8; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1200"
            ></a-entity>

            <a-entity
              id="gift_box"
              gltf-model="url(https://raw.githubusercontent.com/richhouse83/c-ar-d-viewer/master/public/gift_box/scene.gltf)"
              scale="0.5 0.5 0.5"
              position="1.8 0.8 -1"
              animation__spin="property: rotation; to: 0 360 0; easing: easeInOutQuad; loop: true; dur: 4500"
              animation__wobble="property: rotation; from: -8 0 9; to: 10 0 -8; dir: alternate; easing: easeInOutQuad; elasticity: 800; loop: true; dur: 1200"
            ></a-entity>
          </a-entity>
        </a-marker>
        <a-entity id="player" camera position="0 0.3 2" />
      </a-scene>
    </>
  );
}

export default App;
