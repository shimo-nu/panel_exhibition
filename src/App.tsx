import React from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";

const App: React.FC = () => {
  return (
    <div className="App">
      <Scene>
        {/* カメラ */}
        <Entity camera position="0 1.6 3" look-controls />

        {/* ライト */}
        <Entity light={{ type: "ambient", color: "#ffffff", intensity: 0.5 }} />
        <Entity
          light={{ type: "directional", intensity: 1.0 }}
          position="1 2 0"
        />
        <Entity light={{ type: "point", intensity: 1.5 }} position="0 2 2" />

        {/* PLY モデル */}
        <Entity primitive="a-assets">
          <Entity primitive="a-asset-item" id="hmv" src="/models/hmv_convereted.ply" />
        </Entity>
        <Entity
          plyModel="src: #hmv"
          position="0 1 -3"
          scale="0.5 0.5 0.5"
          material={{ color: "#00ff00", metalness: 0.3, roughness: 0.8 }}
        />

        {/* 地面 */}
        <Entity
          geometry={{ primitive: "plane", width: 10, height: 10 }}
          material={{ color: "#cccccc" }}
          rotation="-90 0 0"
          position="0 0 -4"
        />
      </Scene>
    </div>
  );
};

export default App;