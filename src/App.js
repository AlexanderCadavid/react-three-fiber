import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cam from "./components/Cam";
import { Suspense } from "react";
import Lights from "./components/Lights";
import { Environment } from "@react-three/drei";
import { Desk } from "./components/Desk";
import { Human } from "./components/Human";
import Bricks from "./components/Bricks";
import { Zombie } from "./components/Zombie"
import { Cat } from "./components/Cat";

function App() {
  return (
    <div className="Container" style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <Cam />
        <Lights />

        <Suspense fallback={null}>
          <Desk />
          <Cat />
          <Environment files = {"./hdr/decor_shop_1k.hdr"} />
        </Suspense>

        <OrbitControls target={ [0, 0, 0] } />
      </Canvas>
    </div>
  );
}

export default App;
