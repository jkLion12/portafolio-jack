// UltraCursor.tsx
"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName === "A" || target.tagName === "BUTTON"
      );
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      {/* Hexágono rotatorio */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-200"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        {/* Hexágono exterior */}
        <svg width="40" height="40" viewBox="0 0 40 40" className="animate-spin-slow">
          <polygon
            points="20,2 35,11 35,29 20,38 5,29 5,11"
            fill="none"
            stroke="#00ffff"
            strokeWidth="2"
            className="drop-shadow-[0_0_8px_#00ffff]"
          />
          <polygon
            points="20,8 30,14 30,26 20,32 10,26 10,14"
            fill="none"
            stroke="#ff00ff"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
        
        {/* Punto central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]" />
      </div>

      {/* Anillo exterior con delay */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-16 h-16 border border-cyan-400/20 rounded-full animate-ping" 
             style={{ animationDuration: "2s" }} />
      </div>
    </>
  );
}