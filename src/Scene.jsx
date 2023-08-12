import { useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";

import Car from "./components/Car";

function Scene({ initScene, lightRef, carLights }) {
  useEffect(() => {
    console.log(lightRef);
    if (lightRef.current) {
      initScene();
    }
  }, [lightRef, initScene]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 50, 500]} fov={40} />
      <spotLight
        ref={lightRef}
        position={[500, 100, 500]}
        args={[0xffffff, 0]}
      />

      <Car clearGlassMaterial={carLights} />
    </>
  );
}

export default Scene;
