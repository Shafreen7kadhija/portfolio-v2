"use client";

import { useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -300,
    y: -300,
  });

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      <div
        className="pointer-events-none absolute w-[450px] h-[450px] rounded-full bg-blue-400/20 blur-[120px] transition-all duration-300"
        style={{
          left: position.x - 225,
          top: position.y - 225,
        }}
      />
    </div>
  );
}