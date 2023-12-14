// Suspense lets you display a fallback until its children have finished loading. So for us it loads a loading percentage that we make in
//the Canvas Loader file which we import felow and then pass the CanvasLoader file as the fallback prop so it loads a percentage until the
//model is fully displayed on the webpage
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
//below imports all the functions we need from react-three/drei for our 3D ball model
import {
  //decal is used along with useTexture for the texture, rotation, scale of the balls
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

//below is the file we created earlier to use with all our 3JS models along with Suspense from react to loading percentages before our 3D model
//renders
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    //special float property from react-three-drei
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* below are some light properties for the 3D balls */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* the texture of the balls which includes the icon image which we stored under decal variable above */}
        <Decal
          position={[0, 0, 1]}
          //the balls icon showed mirrored so add the below property so it shows the correct way
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};
//canvas is always needed to lay our 3D model on top of
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* The suspense helps us load the loading percentage from the CanvasLoader file that we created until the 3D models of the balls show*/}
      <Suspense fallback={<CanvasLoader />}>
        {/* then once the 3D model has loaded, the orbit controls allows us to move the model around with the mouse */}
        <OrbitControls enableZoom={false} />
        {/* renders each individual ball based on the icon  */}
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
//always export the canvas for the 3D model and not the ball itself
export default BallCanvas;
