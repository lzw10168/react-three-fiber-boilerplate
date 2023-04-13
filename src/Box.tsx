import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import React from 'react';
export default function Box(props) {
  const ref = useRef<any>();

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  const [hovered, setHover] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    console.log(ref.current.geometry.uuid);
  });
  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={() => setRotate(!rotate)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={e => console.log('click')}
      onContextMenu={e => console.log('context menu')}
      onDoubleClick={e => console.log('double click')}
      onWheel={e => console.log('wheel spins')}
      onPointerUp={e => console.log('up')}
      onPointerEnter={e => console.log('enter')} // see note 1
      onPointerLeave={e => console.log('leave')} // see note 1
      onPointerMove={e => console.log('move')}
      onPointerMissed={() => console.log('missed')}
      onUpdate={self => console.log('props have been updated')}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
