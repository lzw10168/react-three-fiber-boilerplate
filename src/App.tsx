import { Canvas } from '@react-three/fiber';
import Box from './Box';
import * as THREE from 'three';
import Polyhedron from './Polyhedron';
import React, { useMemo } from 'react';
import { Stats } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { OrbitControls, PointerLockControls } from '@react-three/drei';
import { useControls } from 'leva';

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398)
  ];
  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: 'lime' }
    };
  }, []);

  const pA = useControls('Polyhedron A', options);
  const pB = useControls('Polyhedron B', options);
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <Polyhedron
        position={[-0.75, -0.75, 0]}
        rotation={[pA.x, pA.y, pA.z]}
        visible={pA.visible}
        color={pA.color}
        polyhedron={polyhedron}
      />
      <Polyhedron
        position={[0.75, -0.75, 0]}
        rotation={[pB.x, pB.y, pB.z]}
        visible={pB.visible}
        color={pB.color}
        polyhedron={polyhedron}
      />
      <OrbitControls />
      {/* <PointerLockControls selector="#button" /> */}
      {/* <Stats /> */}
      <Perf position="top-left" />
      <axesHelper args={[5]} />
      <gridHelper args={[20, 20, 0xff0000, 'teal']} />
    </Canvas>
  );
}
