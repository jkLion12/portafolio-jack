"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useEffect } from "react";

const projects = [
  {
    title: "Sistema Web Quipu",
    desc: "Aplicación web moderna con React, Next.js y autenticación por token.",
    image: "/img/projects/quipu.png",
    tech: ["Next.js", "React", "Tailwind", "JWT"],
    demo: "#",
    code: "#",
    featured: true,
  },
  {
    title: "App Móvil Fitness",
    desc: "Aplicación híbrida desarrollada con Ionic y enfoque UX/UI.",
    image: "/img/projects/quipu.png",
    tech: ["IONIC", "Angular", "Firebase"],
    demo: "#",
    code: "#",
    featured: false,
  },
  {
    title: "Videojuego Educativo",
    desc: "Videojuego educativo con gamificación y aprendizaje interactivo.",
    image: "/img/projects/quipu.png",
    tech: ["Unity", "C#", "Blender"],
    demo: "#",
    code: "#",
    featured: false,
  },
  {
    title: "Dashboard Analytics",
    desc: "Panel de control en tiempo real con Next.js y Chart.js",
    image: "/img/projects/quipu.png",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    demo: "#",
    code: "#",
    featured: false,
  },
  {
    title: "Kinder Cloud",
    desc: "Panel de control en tiempo real con Next.js y Chart.js",
    image: "/img/projects/quipu.png",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    demo: "#",
    code: "#",
    featured: false,
  },
];

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

// Componente de partículas flotantes
function FloatingParticles() {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => {
        const x = Math.random() * 100 + "%";
        const y = Math.random() * 100 + "%";
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 2;

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ x, y, opacity: 0 }}
            animate={{ y: ["0%", "-100%"], opacity: [0, 1, 0] }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}


// Componente de código binario
function BinaryRain({ color }: { color: string }) {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100 }}
          animate={{ y: "100%" }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
          className="absolute text-xs font-mono font-bold"
          style={{
            left: `${10 + i * 12}%`,
            color,
            textShadow: `0 0 10px ${color}`,
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}


// Card de proyecto con efecto 3D
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative ${
        project.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Glow exterior */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />

      {/* Card principal */}
      <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-black via-zinc-900 to-black backdrop-blur-xl group-hover:border-cyan-400/50 transition-all duration-500">
        
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-30 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700"
          />
          
          {/* Grid overlay cyberpunk */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Código binario */}
        {isHovered && <BinaryRain color="#00ffff" />}

        {/* Scanline effect */}
        {isHovered && (
          <motion.div
            initial={{ top: 0 }}
            animate={{ top: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
          />
        )}

        {/* Contenido */}
        <div className="relative h-full p-8 flex flex-col justify-end z-10">
          
          {/* Badge featured */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-bold text-black flex items-center gap-2 shadow-lg shadow-cyan-500/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              DESTACADO
            </motion.div>
          )}

          {/* Número del proyecto */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute top-6 left-6 text-6xl font-black text-cyan-400/10 leading-none"
          >
            0{index + 1}
          </motion.div>

          {/* Tags de tecnología */}
          <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-mono font-bold bg-cyan-400/10 border border-cyan-400/50 rounded-lg text-cyan-300 backdrop-blur-sm shadow-lg shadow-cyan-500/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Título con efecto glitch */}
          <h3 className="text-3xl font-black text-white mb-3 tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
            {project.title}
          </h3>

          {/* Descripción */}
          <p className="text-zinc-300 text-sm mb-6 line-clamp-2 leading-relaxed">
            {project.desc}
          </p>

          {/* Botones de acción */}
          <div className="flex gap-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-black font-bold text-sm shadow-lg shadow-cyan-500/30 transition-all"
            >
              <FaExternalLinkAlt /> Ver Demo
            </motion.a>
            <motion.a
              href={project.code}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 border-2 border-cyan-400/50 rounded-xl text-cyan-400 font-bold text-sm backdrop-blur-sm hover:bg-cyan-400/10 transition-all"
            >
              <FaGithub /> Código
            </motion.a>
          </div>
        </div>

        {/* Esquinas animadas estilo gamer */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Línea de progreso inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 origin-left"
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <FloatingParticles />
      
      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header animado */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-cyan-400 text-sm font-mono tracking-[0.3em] mb-4 px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5"
          >
            &lt; PORTFOLIO /&gt;
          </motion.span>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            PROYECTOS
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
          />
        </motion.div>

        {/* Grid de proyectos (Bento style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="https://github.com/jkLion12"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl text-black font-black text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all"
          >
            <FaCode size={24} />
            VER TODOS LOS PROYECTOS
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}