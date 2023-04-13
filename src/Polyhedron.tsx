import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Polyhedron({ position, polyhedron, ...props }) {
  const ref = useRef<any>(null);
  const [count, setCount] = useState(0);

  console.log(polyhedron);

  useFrame((_, delta) => {
    const mesh = ref.current;
    mesh.rotation.x += delta;
    mesh.rotation.y += 0.5 * delta;
  });

  return (
    <mesh
      {...props}
      position={position}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3);
      }}
      geometry={polyhedron[count]}>
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  );
}
