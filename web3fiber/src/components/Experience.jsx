import { OrbitControls, Text } from "@react-three/drei";

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
         textAlign="center">
         MY LITTLE{"\n"}CAMPING
         <meshBasicMaterial color='white' />
      </Text>
    </>
  );
};