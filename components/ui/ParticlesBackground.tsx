// ParticlesBackground.tsx
"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
            onHover: {
              enable: true,
              mode: ["grab", "bubble"],
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 140,
              links: {
                // opacity: 1, // Más visible
                color: "#00ffff", // Cyan más brillante
              },
            },
            bubble: {
              distance: 200,
              size: 10, // Más grande
              duration: 2,
              // opacity: 1, // Opacidad máxima
            },
          },
        },
        particles: {
          color: {
            value: ["#00ffff", "#ff00ff", "#00ddff"], // Colores neón más brillantes
          },
          links: {
            color: "#00ddff",
            distance: 150,
            enable: true,
            // opacity: 0.6, // Más visible (antes 0.3)
            width: 1.5, // Más grueso
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          // opacity: {
          //   value: 0.8, // MÁS VISIBLE (antes 0.5)
          //   random: true,
          //   animation: {
          //     enable: true,
          //     speed: 1,
          //     minimumValue: 0.4, // Mínimo más alto (antes 0.1)
          //   },
          // },
          shape: {
            type: ["circle", "triangle"],
          },
          size: {
            value: { min: 2, max: 4 }, // Más grandes (antes 1-3)
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 1,
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}