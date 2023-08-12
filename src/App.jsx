import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";

import Scene from "./Scene";
import "./App.css";

const App = () => {
  let animationState = 1; // 0 reset, 1 off, 2 playing

  const headerRef = useRef(null);
  const lightRef = useRef(null);
  const carLights = new THREE.MeshStandardMaterial({
    color: 0xffffff, // base color of the material
    emissive: 0xffffff, // set the emissive color to make the material glow
    emissiveIntensity: 0,
  });

  async function animate() {
    if (animationState === 0) {
      animationState = 2; // play animation

      await new Promise((resolve) => setTimeout(resolve, 1000));
      carLights.emissiveIntensity = 1;
      await new Promise((resolve) => setTimeout(resolve, 50));
      carLights.emissiveIntensity = 0;
      await new Promise((resolve) => setTimeout(resolve, 50));
      carLights.emissiveIntensity = 1;
      await new Promise((resolve) => setTimeout(resolve, 100));
      carLights.emissiveIntensity = 0;
      await new Promise((resolve) => setTimeout(resolve, 100));
      carLights.emissiveIntensity = 1;
      await new Promise((resolve) => setTimeout(resolve, 100));
      carLights.emissiveIntensity = 0;
      await new Promise((resolve) => setTimeout(resolve, 100));
      carLights.emissiveIntensity = 1;
      await new Promise((resolve) => setTimeout(resolve, 500));
      carLights.emissiveIntensity = 0;
      await new Promise((resolve) => setTimeout(resolve, 50));
      carLights.emissiveIntensity = 1;
      await new Promise((resolve) => setTimeout(resolve, 100));
      for (let i = 0; i < 10; i++) {
        lightRef.current.intensity += 0.1;
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
      for (let i = 0; i < 60; i++) {
        lightRef.current.position.x -= 10;
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
      await new Promise((resolve) => setTimeout(resolve, 600));
      for (let i = 0; i < 10; i++) {
        lightRef.current.intensity -= 0.1;
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
      await new Promise((resolve) => setTimeout(resolve, 800));
      for (let i = 0; i < 10; i++) {
        carLights.emissiveIntensity -= 0.1;
        await new Promise((resolve) => setTimeout(resolve, 10));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      headerRef.current.style.opacity = 1;

      // rotate bar vertically
      /* new TWEEN.Tween(barRef.current.rotation)
        .to({ x: 0 }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start()
        .onComplete(async () => {
          // slide title
          titleRef.current.style.opacity = 1;
          titleRef.current.style.top = "-185px";

          await new Promise((resolve) => setTimeout(resolve, 1000));

          // show text
          textRef.current.style.opacity = 1;

          await new Promise((resolve) => setTimeout(resolve, 1000));

          // turn bar towards camera
          new TWEEN.Tween(barRef.current.rotation)
            .to({ x: Math.PI / 4 }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

          // adjust bar position
          new TWEEN.Tween(barRef.current.position)
            .to({ y: -5 }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

          animationState = 1; // end animation
        }); */
    }
  }

  function initScene() {
    // only initialize if animation is off
    if (animationState === 1) {
      // hide text
      headerRef.current.style.opacity = 0;

      // set car lights intensity
      carLights.emissiveIntensity = 0;

      // set spotlight position
      lightRef.current.position.set(500, 100, 500);

      animationState = 0; // reset animation
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", animate);

    // update the tween function
    function animateFrame(time) {
      requestAnimationFrame(animateFrame);
      TWEEN.update(time);
    }
    requestAnimationFrame(animateFrame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerRef, lightRef, carLights]);

  return (
    <div id="app-section">
      <div id="app-section__scene">
        <Canvas>
          <Suspense fallback={null}>
            <Scene
              initScene={initScene}
              lightRef={lightRef}
              carLights={carLights}
            />
          </Suspense>
        </Canvas>
      </div>
      <div ref={headerRef} id="app-section__header">
        DODGE
      </div>
    </div>
  );
};

export default App;
