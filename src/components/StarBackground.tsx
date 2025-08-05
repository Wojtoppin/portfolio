
import React, { useEffect, useRef, useState } from "react";

const STAR_COUNTS = [100, 100, 100];
const STAR_SIZES = [1, 2, 3];
const STAR_SPEEDS = [1, 0.6, 0.4];
const STAR_COLORS = ["#ffffff", "#00bfff", "#4682b4"];
const WIDTH = 2000;
const HEIGHT = 2000;

function randomStars(
  count: number,
  size: number,
  speed: number,
  color: string
): Array<{
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}> {
  return Array.from({ length: count }, () => ({
    x: Math.random() * WIDTH,
    y: Math.random() * HEIGHT,
    vx: 0,
    vy: speed + Math.random() * speed,
    size,
    color,
  }));
}

const allStars = [
  ...randomStars(STAR_COUNTS[0], STAR_SIZES[0], STAR_SPEEDS[0], STAR_COLORS[0]),
  ...randomStars(STAR_COUNTS[1], STAR_SIZES[1], STAR_SPEEDS[1], STAR_COLORS[1]),
  ...randomStars(STAR_COUNTS[2], STAR_SIZES[2], STAR_SPEEDS[2], STAR_COLORS[2]),
];

const StarBackground: React.FC = () => {
  const starsRef = useRef(allStars.map(star => ({ ...star })));
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: WIDTH / 2, y: HEIGHT / 2, inside: false });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      let rect = containerRef.current?.getBoundingClientRect();
      if (rect &&
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom
      ) {
        mouse.current.x = ((e.clientX - rect.left) / rect.width) * WIDTH;
        mouse.current.y = ((e.clientY - rect.top) / rect.height) * HEIGHT;
        mouse.current.inside = true;
      } else {
        mouse.current.inside = false;
      }
    };
    const handleMouseLeave = () => {
      mouse.current.inside = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  // Dummy state to force re-render
  const [, setTick] = useState(0);
  useEffect(() => {
    let running = true;
    function animate() {
      const stars = starsRef.current;
      for (let star of stars) {
        // Repulsion from mouse (only if inside)
        if (mouse.current.inside) {
          const dx = star.x - mouse.current.x;
          const dy = star.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            // Repulsion force (stronger)
            const force = (120 - dist) / 120 * 4; // doubled multiplier
            star.vx += (dx / dist) * force * 0.5; // increased from 0.2
            star.vy += (dy / dist) * force * 0.5;
          }
        }
        // Gravity (downward)
        star.vy += 0.01 * star.size;
        // Damping
        star.vx *= 0.96;
        star.vy *= 0.96;
        // Move
        star.x += star.vx;
        star.y += star.vy;
        // Respawn at random position at top if out of bounds
        if (star.y > HEIGHT) {
          star.x = Math.random() * WIDTH;
          star.y = 0;
          star.vx = 0;
          star.vy = star.size * 0.1 + Math.random() * star.size * 0.5;
        }
        if (star.x < 0 || star.x > WIDTH) {
          star.x = Math.random() * WIDTH;
          star.y = 0;
          star.vx = 0;
          star.vy = star.size * 0.1 + Math.random() * star.size * 0.5;
        }
      }
      setTick(tick => tick + 1); // force re-render
      if (running) animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {starsRef.current.map((star, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(star.x / WIDTH) * 100}vw`,
            top: `${(star.y / HEIGHT) * 100}vh`,
            width: star.size,
            height: star.size,
            background: star.color,
            borderRadius: 0,
            opacity: 1,
            boxShadow: "none",
            transition: "none",
          }}
        />
      ))}
      {/* Shining sphere at cursor */}
      
    </div>
  );
};

export default StarBackground;
