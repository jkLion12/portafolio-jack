"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Cpu, Zap, Trophy, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechCorp Labs",
    location: "Remote",
    period: "2023 - Present",
    description: "Liderando el desarrollo de aplicaciones web escalables con arquitectura serverless. Implementación de microservicios y optimización de rendimiento.",
    achievements: [
      "Reducción del 40% en tiempo de carga",
      "Migración exitosa a arquitectura cloud",
      "Mentoring de 5 developers junior"
    ],
    stack: ["React", "Next.js", "TypeScript", "AWS", "Node.js"],
    level: "LEGENDARY",
    xp: 9500
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Studio X",
    location: "Lima, PE",
    period: "2021 - 2023",
    description: "Desarrollo de interfaces modernas y responsivas. Creación de design systems y componentes reutilizables para múltiples productos.",
    achievements: [
      "Design system adoptado por 3 equipos",
      "98% de satisfacción en UX testing",
      "Implementación de PWA"
    ],
    stack: ["React", "Tailwind", "Framer Motion", "Figma"],
    level: "EPIC",
    xp: 7200
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "StartupHub",
    location: "Lima, PE",
    period: "2020 - 2021",
    description: "Primeros pasos en desarrollo profesional. Colaboración en proyectos web y mobile, aprendizaje de metodologías ágiles.",
    achievements: [
      "Entrega de 10+ proyectos exitosos",
      "Certificación en React avanzado",
      "Contribución a código open source"
    ],
    stack: ["JavaScript", "HTML", "CSS", "Git"],
    level: "RARE",
    xp: 3800
  }
];

const levelColors = {
  LEGENDARY: "from-yellow-400 to-orange-500",
  EPIC: "from-purple-400 to-pink-500",
  RARE: "from-blue-400 to-cyan-500"
};

export default function Experience() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 blur-[120px] rounded-full" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="inline-block mb-6"
        >
          <div className="relative">
            <Trophy className="w-16 h-16 text-cyan-400 mx-auto" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
            />
          </div>
        </motion.div>

        <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] mb-4">
          &lt; MISSION_LOG.EXE /&gt;
        </p>
        
        <h2 className="text-5xl md:text-6xl font-black mb-4">
          Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Desbloqueada</span>
        </h2>
        
        <p className="text-white/60 max-w-2xl mx-auto font-mono text-sm">
          QUEST HISTORY • ACHIEVEMENTS UNLOCKED • SKILLS MASTERED
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent" />

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
              onMouseEnter={() => setHoveredCard(exp.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Timeline Node */}
              <motion.div
                className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-cyan-400 z-20"
                animate={{
                  boxShadow: hoveredCard === exp.id
                    ? "0 0 30px rgba(0,255,255,0.8)"
                    : "0 0 10px rgba(0,255,255,0.3)",
                  scale: hoveredCard === exp.id ? 1.2 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-cyan-400"
                  animate={{
                    scale: hoveredCard === exp.id ? [1, 1.5, 1] : 1,
                    opacity: hoveredCard === exp.id ? [0.5, 0, 0.5] : 0
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: hoveredCard === exp.id ? Infinity : 0
                  }}
                />
              </motion.div>

              {/* Card Content */}
              <div className={`${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"} md:px-8`}>
                <motion.div
                  className="relative bg-black/80 border-2 border-cyan-400/40 rounded-2xl p-8 backdrop-blur-xl overflow-hidden group"
                  animate={{
                    borderColor: hoveredCard === exp.id ? "rgba(0,255,255,0.8)" : "rgba(0,255,255,0.4)",
                    boxShadow: hoveredCard === exp.id
                      ? "0 0 40px rgba(0,255,255,0.3)"
                      : "0 0 0px rgba(0,255,255,0)"
                  }}
                >
                  {/* Scanline Effect */}
                  <motion.div
                    initial={{ top: 0 }}
                    animate={{ top: hoveredCard === exp.id ? "100%" : "0%" }}
                    transition={{ duration: 2, repeat: hoveredCard === exp.id ? Infinity : 0, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
                  />

                  {/* Corner Decorations */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                  {/* Level Badge */}
                  <div className="absolute top-0 right-0 px-4 py-1 bg-black border-2 border-cyan-400 rounded-bl-xl">
                    <p className={`text-xs font-black bg-gradient-to-r ${levelColors[exp.level as keyof typeof levelColors]} bg-clip-text text-transparent`}>
                      {exp.level}
                    </p>
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-black mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 font-mono text-sm mb-3">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-white/60 font-mono">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6 space-y-2">
                    <p className="text-cyan-400 font-mono text-xs mb-3 tracking-wider">ACHIEVEMENTS:</p>
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-white/60 text-sm">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.stack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-xs font-mono hover:bg-cyan-400/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* XP Bar */}
                  <div className="mt-6 pt-6 border-t border-cyan-400/20">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-mono text-white/40">EXPERIENCE POINTS</p>
                      <p className="text-xs font-black text-cyan-400">{exp.xp} XP</p>
                    </div>
                    <div className="h-2 bg-black/60 rounded-full overflow-hidden border border-cyan-400/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(exp.xp / 10000) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className={`hidden md:block ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`} />
            </motion.div>
          ))}
        </div>

        {/* End Trophy */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative mt-20 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full" />
            <div className="relative bg-black/90 border-2 border-cyan-400 rounded-2xl p-8 backdrop-blur-xl">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <p className="text-white font-black text-xl mb-2">JOURNEY CONTINUES</p>
              <p className="text-white/60 font-mono text-xs tracking-widest">
                READY FOR NEW QUESTS →
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}