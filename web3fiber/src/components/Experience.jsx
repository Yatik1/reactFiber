import { Environment, OrbitControls, Text } from "@react-three/drei";
import { Camping } from "./Camping";
import { degToRad } from "three/src/math/MathUtils";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Text 
         font={"font/Poppins-Black.ttf"}
         position-x = {-1.3}
         position-y={-0.5}
         position-z={1}
         lineHeight={0.8}
         textAlign="center"
         rotation-y={degToRad(30)}
         anchorY={"bottom"}
        >

         MY LITTLE{"\n"}CAMPING
         <meshBasicMaterial color='white' />
      </Text>
      <group rotation-y={degToRad(-25)} position-x={3}>
        <Camping scale={0.6} />
      </group>
      <Environment preset="sunset" />
    </>
  );
};