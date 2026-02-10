"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiAngular,
  SiIonic,
  SiNodedotjs,
  SiNestjs,
  SiUnity,
  SiAndroidstudio,
  SiBlender,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "IONIC", icon: SiIonic, color: "#3880FF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
  { name: "Unity", icon: SiUnity, color: "#ffffff" },
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "Blender", icon: SiBlender, color: "#F5792A" },
];

// Componente de código binario DENTRO del card
function BinaryRain({ color }: { color: string }) {
  const streams = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.3,
    duration: 1.5 + Math.random() * 0.5,
  }));
  
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      <div className="flex justify-around h-full px-2">
        {streams.map((stream) => (
          <motion.div
            key={stream.id}
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: 150, 
              opacity: [0, 0.6, 0.5, 0.3, 0] 
            }}
            transition={{
              duration: stream.duration,
              delay: stream.delay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex flex-col text-[10px] font-mono font-bold"
            style={{ 
              color,
              filter: `drop-shadow(0 0 4px ${color})`,
              opacity: 0.4,
            }}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <motion.span
                key={i}
                animate={{
                  opacity: [0.8, 0.5, 0.8],
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.03,
                  repeat: Infinity,
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* fondo glow */}
      <div className="absolute inset-0 " />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Tech <span className="text-cyan-400">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.12,
                  rotateX: 8,
                  rotateY: -8,
                }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group perspective"
              >
                {/* glow */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{ backgroundColor: skill.color }}
                />

                {/* card */}
                <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 transition-all duration-300 group-hover:border-cyan-400 overflow-hidden">
                  
                  {/* Código binario cayendo DENTRO */}
                  {isHovered && <BinaryRain color={skill.color} />}
                  
                  <Icon
                    size={48}
                    style={{ color: skill.color }}
                    className="drop-shadow-[0_0_12px_rgba(0,255,255,0.6)] relative z-10"
                  />
                  <p className="text-white/90 font-medium tracking-wide relative z-10">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}