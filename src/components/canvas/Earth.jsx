// Suspense lets you display a fallback until its children have finished loading. So for us it loads a loading percentage that we make in
//the Canvas Loader file which we import felow and then pass the CanvasLoader file as the fallback prop so it loads a percentage until the
//model is fully displayed on the webpage
import React, { Suspense } from "react";
//lets you create an empty canvas to place items on. Each 3D 3JS model needs to be placed on a canvas to be rendered
import { Canvas } from "@react-three/fiber";
//lets you draw on the canvas and specifically the useGLTF allows us to import the 3D model
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

//below is the file we created earlier to use with all our 3JS models along with Suspense from react to loading percentages before our 3D model
//renders
import CanvasLoader from "../Loader";

const Earth = () => {
  //importing the model to the variable. Earth model located in the path in quote below
  const earth = useGLTF("./planet/scene.gltf");

  return (
    //*  pass the object which in this case we saved under earth.scene. rotation-y ensures we can rotate the model horizontally
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};
//creating the canvas to load our 3JS model onto. Canvas is always needed to load our 3D model onto
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      // found that this value needs to be there for the model to show
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/*suspense not from 3JS but its from react and allows us to add a loader while model is loading so loader for us in in CanvasLoader file*/}
      <Suspense fallback={<CanvasLoader />}>
        {/* then once the 3D model has loaded, the orbit controls allows us to move the model around with the mouse */}
        <OrbitControls
          // allows the model which in this case is the earth to rotate automatically
          autoRotate
          // allows to not zoom in on model
          enableZoom={false}
          //allows us to keep a certain angle that the model can rotate by the user
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
