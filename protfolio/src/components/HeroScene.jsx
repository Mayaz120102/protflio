import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

const NODE_COUNT = 6;

// A small "code node" orbiting the core; writes its live position into a
// shared array so the connecting lines can follow it each frame.
const OrbitNode = ({ index, positionsRef, radius, speed, offset, size, color }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    const x = Math.cos(t) * radius;
    const y = Math.sin(t * 0.7) * radius * 0.4;
    const z = Math.sin(t) * radius;
    ref.current.position.set(x, y, z);
    positionsRef.current[index] = ref.current.position;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        wireframe
      />
    </mesh>
  );
};

// Draws a ring of segments connecting each orbiting node to the next one.
const ConnectingLines = ({ positionsRef }) => {
  const lineRef = useRef();
  const positions = useMemo(() => new Float32Array(NODE_COUNT * 2 * 3), []);

  useFrame(() => {
    const pts = positionsRef.current;
    for (let i = 0; i < NODE_COUNT; i++) {
      const a = pts[i];
      const b = pts[(i + 1) % NODE_COUNT];
      if (!a || !b) continue;
      positions[i * 6] = a.x;
      positions[i * 6 + 1] = a.y;
      positions[i * 6 + 2] = a.z;
      positions[i * 6 + 3] = b.x;
      positions[i * 6 + 4] = b.y;
      positions[i * 6 + 5] = b.z;
    }
    if (lineRef.current) {
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={NODE_COUNT * 2}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#5eead4" transparent opacity={0.18} />
    </lineSegments>
  );
};

const Core = ({ mouse }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.15 + mouse.current[0] * delta * 0.4;
    ref.current.rotation.x += delta * 0.05 - mouse.current[1] * delta * 0.4;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.4, 4]} />
      <MeshDistortMaterial
        color="#0d1220"
        emissive="#5eead4"
        emissiveIntensity={0.25}
        roughness={0.15}
        metalness={0.4}
        distort={0.35}
        speed={1.4}
        wireframe
      />
    </mesh>
  );
};

const Scene = () => {
  const { size } = useThree();
  const mouse = useRef([0, 0]);
  const positionsRef = useRef(new Array(NODE_COUNT).fill(null));

  useFrame(({ pointer }) => {
    mouse.current = [pointer.x, pointer.y];
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#a78bfa" />
      <pointLight position={[-4, -2, -3]} intensity={0.8} color="#5eead4" />
      <group scale={size.width < 640 ? 0.7 : 1}>
        <Core mouse={mouse} />
        {Array.from({ length: NODE_COUNT }).map((_, i) => (
          <OrbitNode
            key={i}
            index={i}
            positionsRef={positionsRef}
            radius={2.4 + (i % 2) * 0.5}
            speed={0.35 + i * 0.05}
            offset={(i / NODE_COUNT) * Math.PI * 2}
            size={0.12 + (i % 3) * 0.03}
            color={i % 2 === 0 ? "#5eead4" : "#a78bfa"}
          />
        ))}
        <ConnectingLines positionsRef={positionsRef} />
      </group>
    </>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-5">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
