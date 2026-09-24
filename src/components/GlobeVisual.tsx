"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import type { Group, Mesh } from "three";

const RADIUS = 1.6;
const NODE_COUNT = 46;
const BLUE = "#3490f3";
const GOLD = "#F4CC6F";
const NAVY = "#2c56dd";

function fibonacciSphere(count: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const offset = 2 / count;
  const increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = i * offset - 1 + offset / 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const phi = i * increment;
    const x = Math.cos(phi) * r;
    const z = Math.sin(phi) * r;
    points.push(new THREE.Vector3(x, y, z).multiplyScalar(radius));
  }
  return points;
}

type Arc = {
  curve: THREE.QuadraticBezierCurve3;
  points: THREE.Vector3[];
  speed: number;
  offset: number;
  color: string;
};

function buildArcs(nodes: THREE.Vector3[], count: number): Arc[] {
  const arcs: Arc[] = [];
  let attempts = 0;
  while (arcs.length < count && attempts < count * 8) {
    attempts++;
    const a = nodes[Math.floor(Math.random() * nodes.length)];
    const b = nodes[Math.floor(Math.random() * nodes.length)];
    if (a === b) continue;
    const angle = a.clone().normalize().angleTo(b.clone().normalize());
    if (angle < 0.6 || angle > 2.6) continue; // skip too-short or near-antipodal hops

    const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(RADIUS * 1.35);
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
    arcs.push({
      curve,
      points: curve.getPoints(48),
      speed: 0.18 + Math.random() * 0.16,
      offset: Math.random(),
      color: Math.random() > 0.55 ? GOLD : BLUE,
    });
  }
  return arcs;
}

function ArcPulse({ arc }: { arc: Arc }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = (state.clock.elapsedTime * arc.speed + arc.offset) % 1;
    const p = arc.curve.getPointAt(t);
    ref.current.position.copy(p);
    const fade = Math.sin(t * Math.PI); // fade in/out along the path
    (ref.current.material as THREE.MeshBasicMaterial).opacity = fade;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color={arc.color} transparent opacity={0} />
    </mesh>
  );
}

function Globe() {
  const groupRef = useRef<Group>(null);
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const nodes = useMemo(() => fibonacciSphere(NODE_COUNT, RADIUS), []);
  const arcs = useMemo(() => buildArcs(nodes, 16), [nodes]);
  const hubs = useMemo(() => nodes.filter((_, i) => i % 4 === 0), [nodes]);

  useFrame((_, delta) => {
    if (!groupRef.current || reduceMotion) return;
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.x = Math.sin(Date.now() * 0.00005) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* soft inner glow */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.97, 32, 32]} />
        <meshBasicMaterial color={NAVY} transparent opacity={0.1} />
      </mesh>

      {/* wireframe shell */}
      <mesh>
        <icosahedronGeometry args={[RADIUS, 3]} />
        <meshBasicMaterial color={BLUE} wireframe transparent opacity={0.28} />
      </mesh>

      {/* node markers */}
      {hubs.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.022, 8, 8]} />
          <meshBasicMaterial color={GOLD} transparent opacity={0.85} />
        </mesh>
      ))}

      {/* connecting arcs */}
      {arcs.map((arc, i) => (
        <group key={i}>
          <Line points={arc.points} color={arc.color} transparent opacity={0.5} lineWidth={1} />
          <ArcPulse arc={arc} />
        </group>
      ))}
    </group>
  );
}

export default function GlobeVisual({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
        style={{ width: "100%", height: "100%" }}
      >
        <Globe />
      </Canvas>
    </div>
  );
}
