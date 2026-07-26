"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Field() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 2200;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.045;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.15;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#d4b98c"
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 bg-ink">
      <Canvas camera={{ position: [0, 0, 9], fov: 55 }}>
        <Field />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
    </div>
  );
}
