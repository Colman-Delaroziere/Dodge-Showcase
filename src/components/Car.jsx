import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function Car({ clearGlassMaterial }) {
  const modelRef = useRef();

  const gltf = useLoader(
    GLTFLoader,
    "/models/dodge_challenger_demon/scene.gltf"
  );

  const carPaint = new THREE.MeshStandardMaterial({
    color: 0x808080,
    metalness: 0.9,
    roughness: 0.5,
  });

  const tireMaterial = new THREE.MeshStandardMaterial({
    color: 0x222222, // dark grey color for the tire
    metalness: 0, // set metalness to 0 for a non-metallic appearance
    roughness: 0.9, // set roughness to a high value to simulate the rough surface of a tire
  });

  const blackMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x000000, // set the color to black
    metalness: 0.1, // set metalness to a low value to achieve a non-metallic appearance
    roughness: 0.9, // set roughness to a high value to create a rough, matt surface
  });

  const wheelRimMaterial = new THREE.MeshStandardMaterial({
    color: 0x808080, // set the color to a dark grey or black
    metalness: 0.9, // set metalness to a high value to achieve a metallic appearance
    roughness: 0.1, // set roughness to a low value to create a smooth, shiny surface
  });

  const brakeDiskMaterial = new THREE.MeshStandardMaterial({
    color: 0x808080, // set the color to a dark grey or black
    metalness: 0.9, // set metalness to a high value to achieve a metallic appearance
    roughness: 0.1, // set roughness to a low value to create a smooth, shiny surface
  });

  return (
    <group ref={modelRef} rotation={[Math.PI, 0, 0]}>
      <mesh
        geometry={gltf.nodes.desirefxme_001_carpaint_0.geometry}
        material={carPaint}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_002_windowglass_0.geometry}
        material={gltf.nodes.desirefxme_002_windowglass_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_003_black_0.geometry}
        material={gltf.nodes.desirefxme_003_black_0.material}
      />
      <mesh /* front light inside */
        geometry={gltf.nodes.desirefxme_004_clearglass_0.geometry}
        material={clearGlassMaterial}
      />
      <mesh /* font light border */
        geometry={gltf.nodes.desirefxme_005_chrome_0.geometry}
        material={gltf.nodes.desirefxme_005_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_006_chrome_0.geometry}
        material={gltf.nodes.desirefxme_006_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_007_clearglass_0.geometry}
        material={clearGlassMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_008_clearglass_0.geometry}
        material={clearGlassMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_009_windowglass_0.geometry}
        material={gltf.nodes.desirefxme_009_windowglass_0.material}
      />
      <mesh /* side window frame */
        geometry={gltf.nodes.desirefxme_010_black_0.geometry}
        material={blackMaterial}
      />
      <mesh /* side window */
        geometry={gltf.nodes.desirefxme_011_windowglass_0.geometry}
        material={gltf.nodes.desirefxme_011_windowglass_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_012_black_0.geometry}
        material={gltf.nodes.desirefxme_012_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_013_chrome_0.geometry}
        material={gltf.nodes.desirefxme_013_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_014_mirror_0.geometry}
        material={gltf.nodes.desirefxme_014_mirror_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_015_black_0.geometry}
        material={gltf.nodes.desirefxme_015_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_016_black_0.geometry}
        material={gltf.nodes.desirefxme_016_black_0.material}
      />
      <mesh /* front left wheel rim */
        geometry={gltf.nodes.desirefxme_017_rim_second_0.geometry}
        material={wheelRimMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_018_chrome_0.geometry}
        material={gltf.nodes.desirefxme_018_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_019_black_0.geometry}
        material={gltf.nodes.desirefxme_019_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_020_carpaint_0.geometry}
        material={carPaint}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_021_black_0.geometry}
        material={gltf.nodes.desirefxme_021_black_0.material}
      />
      <mesh /* back bottom lights */
        geometry={gltf.nodes.desirefxme_022_redglass_0.geometry}
        material={gltf.nodes.desirefxme_022_redglass_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_023_chrome_0.geometry}
        material={gltf.nodes.desirefxme_023_chrome_0.material}
      />
      <mesh /* back side lights */
        geometry={gltf.nodes.desirefxme_024_redglass_0.geometry}
        material={gltf.nodes.desirefxme_024_redglass_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_025_chrome_0.geometry}
        material={gltf.nodes.desirefxme_025_chrome_0.material}
      />
      <mesh /* front grill */
        geometry={gltf.nodes.desirefxme_026_black_0.geometry}
        material={gltf.nodes.desirefxme_026_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_027_black_0.geometry}
        material={gltf.nodes.desirefxme_027_black_0.material}
      />
      <mesh /* front side orange lights */
        geometry={gltf.nodes.desirefxme_028_orangeglass_0.geometry}
        material={gltf.nodes.desirefxme_028_orangeglass_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_029_chrome_0.geometry}
        material={gltf.nodes.desirefxme_029_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_030_lightglass_0.geometry}
        material={gltf.nodes.desirefxme_030_lightglass_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_031_chrome_0.geometry}
        material={gltf.nodes.desirefxme_031_chrome_0.material}
      />
      <mesh /* front light solid border */
        geometry={gltf.nodes.desirefxme_032_black_0.geometry}
        material={gltf.nodes.desirefxme_032_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_033_black_0.geometry}
        material={gltf.nodes.desirefxme_033_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_034_black_0.geometry}
        material={gltf.nodes.desirefxme_034_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_035_black_0.geometry}
        material={gltf.nodes.desirefxme_035_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_036_black_0.geometry}
        material={gltf.nodes.desirefxme_036_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_037_black_0.geometry}
        material={gltf.nodes.desirefxme_037_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_038_black_0.geometry}
        material={gltf.nodes.desirefxme_038_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_039_carpaint_second_0.geometry}
        material={carPaint}
      />
      <mesh /* back lights */
        geometry={gltf.nodes.desirefxme_040_chrome_0.geometry}
        material={gltf.nodes.desirefxme_040_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_041_black_0.geometry}
        material={gltf.nodes.desirefxme_041_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_042_chrome_0.geometry}
        material={gltf.nodes.desirefxme_042_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_043_clearglass_0.geometry}
        material={clearGlassMaterial}
      />
      <mesh /* back light red border */
        geometry={gltf.nodes.desirefxme_044_redglass_0.geometry}
        material={gltf.nodes.desirefxme_044_redglass_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_045_clearglass_0.geometry}
        material={clearGlassMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_046_chrome_0.geometry}
        material={gltf.nodes.desirefxme_046_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_047_black_0.geometry}
        material={gltf.nodes.desirefxme_047_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_048_mattemetal_0.geometry}
        material={gltf.nodes.desirefxme_048_mattemetal_0.material}
      />
      <mesh /* car underside */
        geometry={gltf.nodes.desirefxme_049_black_0.geometry}
        material={gltf.nodes.desirefxme_049_black_0.material}
      />
      <mesh /* side logo */
        geometry={gltf.nodes.desirefxme_050_black_0.geometry}
        material={gltf.nodes.desirefxme_050_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_051_black_0.geometry}
        material={gltf.nodes.desirefxme_051_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_052_chrome_0.geometry}
        material={gltf.nodes.desirefxme_052_chrome_0.material}
      />
      <mesh /* tire */
        geometry={gltf.nodes.desirefxme_053_tire_0.geometry}
        material={tireMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_054_interior_0.geometry}
        material={gltf.nodes.desirefxme_054_interior_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_055_carpaint_0.geometry}
        material={carPaint}
      />
      <mesh /* chairs */
        geometry={gltf.nodes.desirefxme_056_interior_0.geometry}
        material={gltf.nodes.desirefxme_056_interior_0.material}
      />
      <mesh /* steering wheel */
        geometry={gltf.nodes.desirefxme_057_interior_0.geometry}
        material={gltf.nodes.desirefxme_057_interior_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_058_black_0.geometry}
        material={gltf.nodes.desirefxme_058_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_059_chrome_0.geometry}
        material={gltf.nodes.desirefxme_059_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_060_chrome_0.geometry}
        material={gltf.nodes.desirefxme_060_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_061_rim_second_0.geometry}
        material={wheelRimMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_062_tire_0.geometry}
        material={tireMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_063_tire_0.geometry}
        material={tireMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_064_rim_second_0.geometry}
        material={wheelRimMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_065_chrome_0.geometry}
        material={gltf.nodes.desirefxme_065_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_066_chrome_0.geometry}
        material={gltf.nodes.desirefxme_066_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_067_interior_0.geometry}
        material={gltf.nodes.desirefxme_067_interior_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_068_brakedisk_0.geometry}
        material={brakeDiskMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_069_red_0.geometry}
        material={gltf.nodes.desirefxme_069_red_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_070_red_0.geometry}
        material={gltf.nodes.desirefxme_070_red_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_071_brakedisk_0.geometry}
        material={brakeDiskMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_072_red_0.geometry}
        material={gltf.nodes.desirefxme_072_red_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_073_brakedisk_0.geometry}
        material={brakeDiskMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_074_interior_0.geometry}
        material={gltf.nodes.desirefxme_074_interior_0.material}
      />
      {/* <mesh
          geometry={gltf.nodes.desirefxme_075_tire_0.geometry}
          material={tireMaterial}
        /> */}
      <mesh
        geometry={gltf.nodes.desirefxme_076_red_0.geometry}
        material={gltf.nodes.desirefxme_076_red_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_077_chrome_0.geometry}
        material={gltf.nodes.desirefxme_077_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_078_brakedisk_0.geometry}
        material={brakeDiskMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_079_chrome_0.geometry}
        material={gltf.nodes.desirefxme_079_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_080_rim_second_0.geometry}
        material={wheelRimMaterial}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_081_carpaint_0.geometry}
        material={carPaint}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_082_black_0.geometry}
        material={gltf.nodes.desirefxme_082_black_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_083_chrome_0.geometry}
        material={gltf.nodes.desirefxme_083_chrome_0.material}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_084_carpaint_0.geometry}
        material={carPaint}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_085_carpaint_0.geometry}
        material={carPaint}
      />
      <mesh
        geometry={gltf.nodes.desirefxme_086_carpaint_0.geometry}
        material={carPaint}
      />
      {/* 
        <mesh
          geometry={gltf.nodes.desirefxme_087_LicPlate_black_0.geometry}
          material={gltf.nodes.desirefxme_087_LicPlate_black_0.material}
        />
        <mesh
          geometry={gltf.nodes.desirefxme_087_LicPlate_blue_0.geometry}
          material={gltf.nodes.desirefxme_087_LicPlate_blue_0.material}
        />
        <mesh
          geometry={gltf.nodes.desirefxme_087_LicPlate_white_0.geometry}
          material={gltf.nodes.desirefxme_087_LicPlate_white_0.material}
        />
        <mesh
          geometry={gltf.nodes.desirefxme_087_LicPlate_yellow_0.geometry}
          material={gltf.nodes.desirefxme_087_LicPlate_yellow_0.material}
        />
        <mesh
          geometry={gltf.nodes.desirefxme_088_LicPlate_black_0.geometry}
          material={gltf.nodes.desirefxme_088_LicPlate_black_0.material}
        />
        <mesh
          geometry={gltf.nodes.desirefxme_088_LicPlate_blue_0.geometry}
          material={gltf.nodes.desirefxme_088_LicPlate_blue_0.material}
        />
        <mesh
          geometry={gltf.nodes.desirefxme_088_LicPlate_white_0.geometry}
          material={gltf.nodes.desirefxme_088_LicPlate_white_0.material}
        />
        <mesh
          geometry={gltf.nodes.desirefxme_088_LicPlate_yellow_0.geometry}
          material={gltf.nodes.desirefxme_088_LicPlate_yellow_0.material}
        /> */}
    </group>
  );
}

export default Car;
