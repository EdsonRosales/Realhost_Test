import { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export const Model = (props) => {

  // Refs
  const groupRef = useRef();

  const { nodes, materials } = useGLTF('src/models/Barn_Testing.glb');

  // States
  const [backPanelSelected, setBackPanelSelected] = useState(false);
  const [frontPanelSelected, setFrontPanelSelected] = useState(false);
  const [leftPanelSelected, setLeftPanelSelected] = useState(false);
  const [rightPanelSelected, setRightPanelSelected] = useState(false);

  // Functions
  const handleChangeBackPanelColor = () => {
    setBackPanelSelected(!backPanelSelected);
  };

  const handleChangeFrontPanelColor = () => {
    setFrontPanelSelected(!frontPanelSelected);
  };

  const handleChangeLeftPanelColor = () => {
    setLeftPanelSelected(!leftPanelSelected);
  };

  const handleChangeRightPanelColor = () => {
    setRightPanelSelected(!rightPanelSelected);
  };

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group scale={[0.00785288, 0.01146826, 0.0096958]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.Siding_LPSmartPanelSiding}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Siding_BoardandBatten}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.Roofing_Shingles_DesertTan}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.Wood_InteriorFloor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.Metal_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials.Metal_Exterior}
        />
      </group>
      <group scale={[0.00785288, 0.01146826, 0.0096958]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials.Wood_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials.Wood_Trim}
        />
        {/* Back panel */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry}
          material={materials.Siding_LPSmartPanelSiding}
          onClick={handleChangeBackPanelColor}
        >
            {
                backPanelSelected &&
                ( <meshPhysicalMaterial color="blue" /> )
            }
        </mesh>
        {/* Right panel */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry}
          material={materials.Siding_LPSmartPanelSiding}
          onClick={handleChangeRightPanelColor}
        >
            {
                rightPanelSelected &&
                ( <meshPhysicalMaterial color="blue" /> )
            }
        </mesh>
        {/* Front panel */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry}
          material={materials.Siding_LPSmartPanelSiding}
          onClick={handleChangeFrontPanelColor}
        >
            {
                frontPanelSelected &&
                ( <meshPhysicalMaterial color="blue" /> )
            }
        </mesh>
        {/* Left panel */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry}
          material={materials.Siding_LPSmartPanelSiding}
          onClick={handleChangeLeftPanelColor}
        >
            {
                leftPanelSelected &&
                ( <meshPhysicalMaterial color="blue" /> )
            }
        </mesh>
      </group>
    </group>
  )
};

useGLTF.preload("src/models/Barn_Testing.glb");