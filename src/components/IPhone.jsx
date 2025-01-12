
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF("/models/scene.glb")
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyes.geometry}
        material={materials.Material_26}
        position={[-20.143, 7.425, -3.299]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.helmet.geometry}
        material={materials.Material_24}
        position={[-20.143, 7.425, -3.299]}
      />
    </group>
  )
}

export default Model;

useGLTF.preload("/models/scene.glb")


