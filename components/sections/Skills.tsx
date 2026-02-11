"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
  SiTailwindcss, SiGit, SiGithub, SiAngular, SiIonic,
  SiNodedotjs, SiNestjs, SiUnity, SiAndroidstudio, SiBlender,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import { useEffect } from "react";

/* ================= DATA ================= */
const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", level: 95 },
  { name: "CSS", icon: SiCss3, color: "#1572B6", level: 90 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 92 },
  { name: "React", icon: SiReact, color: "#61DAFB", level: 90 },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 88 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", level: 90 },
  { name: "Git", icon: SiGit, color: "#F05032", level: 85 },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", level: 85 },
  { name: "Angular", icon: SiAngular, color: "#DD0031", level: 80 },
  { name: "IONIC", icon: SiIonic, color: "#3880FF", level: 82 },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 78 },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E", level: 75 },
  { name: "Unity", icon: SiUnity, color: "#ffffff", level: 70 },
  { name: "Java", icon: FaJava, color: "#f89820", level: 75 },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84", level: 72 },
  { name: "Blender", icon: SiBlender, color: "#F5792A", level: 68 },
];

/* ================= UTILS ================= */
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/* ================= FX ================= */
function BinaryRain({ color }: { color: string }) {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "-100%" }}
          animate={{ y: "120%" }}
          transition={{
            duration: 1.8 + Math.random(),
            delay: i * 0.15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 text-[10px] font-mono font-bold opacity-40"
          style={{
            left: `${10 + i * 14}%`,
            color,
            textShadow: `0 0 8px ${color}`,
          }}
        >
          {Array.from({ length: 18 }).map((_, j) => (
            <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}

/* ================= MAIN ================= */
export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Fondo HUD */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 text-xs font-mono tracking-[0.4em] mb-4">
            &lt; SKILL_TREE /&gt;
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 perspective-1000">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const active = hovered === i;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.15, rotateX: 10, rotateY: -10 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="relative group"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition"
                  style={{ backgroundColor: skill.color }}
                />

                {/* Card */}
                <div className="relative bg-black/75 border border-cyan-400/20 rounded-2xl p-6 flex flex-col items-center gap-4 overflow-hidden backdrop-blur-xl">

                  {active && <BinaryRain color={skill.color} />}

                  <Icon
                    size={48}
                    style={{ color: skill.color }}
                    className="relative z-10"
                  />

                  <p className="font-mono text-sm tracking-widest relative z-10">
                    {skill.name}
                  </p>

                  {/* Barra XP */}
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative z-10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                      className="h-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, cyan)`,
                      }}
                    />
                  </div>

                  <p className="text-xs font-mono text-white/50">
                    LVL {skill.level}
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
