// Suspense lets you display a fallback until its children have finished loading. So for us it loads a loading percentage that we make in
//the Canvas Loader file which we import felow and then pass the CanvasLoader file as the fallback prop so it loads a percentage until the
//model is fully displayed on the webpage
import React, { Suspense, useEffect, useState } from "react";
//lets you create an empty canvas to place items on. Each 3D 3JS model needs to be placed on a canvas to be rendered
import { Canvas } from "@react-three/fiber";
//lets you draw on the canvas and specifically the useGLTF allows us to import the 3D model
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

//below is the file we created earlier to use with all our 3JS models along with Suspense from react to loading percentages before our 3D model
//renders
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  //importing the model to the variable. COmputer model located in the file in quotes
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    // mesh is used for 3JS elements instead of a div
    <mesh>
      {/* creates the light for the model */}
      <hemisphereLight intensity={0.15} groundColor="black" />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* glare on the monitor */}
      <pointLight intensity={1} />
      {/*  pass the object which in this case we saved under computer.scene*/}
      <primitive
        object={computer.scene}
        // scale of computer 3D model, position of it on the screen and its rotation property. Smaller if its on mobile vs on bigger screen
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
//creating the canvas to load our 3JS model onto. Canvas is always needed to load our 3D model onto
const ComputersCanvas = () => {
  //sets state to false for isMobile
  const [isMobile, setIsMobile] = useState(false);

  //useEffect with the [] will only run after initial mount which means only run once after the first render
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query which is the screen size
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query so everytime there is change to screensize the callback is called
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      // camera helps us define where we are looking at the model from. numbers are x, y and z axis and fov is how wide our field of view is
      camera={{ position: [20, 3, 5], fov: 25 }}
      // found that this value needs to be there for the model to show
      gl={{ preserveDrawingBuffer: true }}
    >
      {/*suspense not from 3JS but its from react and allows us to add a loader while model is loading so loader for us in in CanvasLoader file*/}
      <Suspense fallback={<CanvasLoader />}>
        {/* then once the 3D model has loaded, the orbit controls allows us to move the model around with the mouse */}
        <OrbitControls
          // allows to not zoom in on model
          enableZoom={false}
          //allows us to keep a certain angle that the model can rotate by the user
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* passing in isMObile which is basically telling us if its a small mobile screen or a big screen and then use this info
        to render the computer model with different size for mobile and different size for bigger screens */}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

//always export the canvas for the 3D model and not the computer 3D model itself
export default ComputersCanvas;
