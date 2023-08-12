import { Html } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Title = ({ position, children }) => {
  const annotationRef = useRef();
  const annotationDivRef = useRef();

  //<group ref={annotationRef} position={position} rotation={[0, 0, 0]}>
  return (
    <Html>
      <div ref={annotationDivRef} className="annotation">
        DODGE
      </div>
    </Html>
  );
  //</group>
};

export default Title;
