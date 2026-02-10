"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const clickEffect = () => {
      setClick(true);
      setTimeout(() => setClick(false), 450);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", clickEffect);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", clickEffect);
    };
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 40 40"
          className="animate-spin-slow"
        >
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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#fff]" />
        </div>
      </div>

      {/* 💥 Efecto click */}
      {click && (
        <div
          className="click-ring"
          style={{
            left: position.x,
            top: position.y,
          }}
        />
      )}
    </>
  );
}
