import { useState } from "react";

const Scene = () => {

const [active,setActive] = useState(false);


  const clickHandler = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <>
      <mesh onDoubleClick={clickHandler} position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color= {active ? "pink" :"orange"} />
      </mesh>

      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scene;
