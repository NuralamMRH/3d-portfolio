import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";

// Detect whether the browser supports WebGL. Chrome may return null when
// hardware acceleration is disabled, the GPU is blocklisted, or a privacy
// extension strips canvas/WebGL. Without a context, <Canvas> (three.js
// WebGLRenderer) throws "Cannot read properties of null (reading 'enable')".
const isWebGLSupported = () => {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  // Evaluate WebGL support synchronously on first render so the <Canvas>
  // never mounts when WebGL is unavailable (which would throw during render).
  const [webglSupported] = useState(() => isWebGLSupported());

  return (
    <section
      id="home"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />
      {webglSupported && (
        <figure
          className="absolute inset-0"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut
                  scale={isMobile && 0.23}
                  position={isMobile && [0, -1.5, 0]}
                />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        </figure>
      )}
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
