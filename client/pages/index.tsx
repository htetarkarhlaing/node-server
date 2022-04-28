import type { NextPage } from "next";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Earth } from "../components/elements";

const Home: NextPage = () => {
  return (
    <Canvas
      style={{
        flex: 1,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      {/* <Stars /> */}
      <ambientLight intensity={1} />
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
      {/* <spotLight position={[50, 50, 10]} angle={0.3} /> */}
      <Earth />
    </Canvas>
  );
};

export default Home;
