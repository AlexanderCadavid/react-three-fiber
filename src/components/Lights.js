import React from "react";

const Lights = () => {
  return (
    <>
      <directionalLight
        position={[10, 10, 10]}
        color={"white"}
        intensity={1.5}
        target-position={[10, 10, 10]}
      />

      {/* <pointLight position={[2, 1, 1]} color={"red"} intensity={2.5} /> */}
      <ambientLight color={"#ffffff"} intensity={0.2} />
    </>
  );
};

export default Lights;
