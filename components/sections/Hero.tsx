// Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import ParticlesBackground from "../ui/ParticlesBackground";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    "Jack",
    "Desarrollador Web",
    "Full Stack Dev",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 5000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <ParticlesBackground />

      <div className="absolute inset-0  from-black via-zinc-900/80 to-black z-0" />

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <div className="mb-4">
            <span className="text-cyan-400 text-sm font-mono tracking-wider">
              &gt; WELCOME_TO_MY_PORTFOLIO
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hola, soy{" "}
            <span className="text-cyan-400 inline-flex items-baseline">
              {text}
              <span className="animate-pulse text-cyan-400 ml-1">|</span>
            </span>{" "}
            👋
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-zinc-300"
          >
            Desarrollador Web enfocado en experiencias modernas, animadas y bien{" "}
            <span className="text-cyan-400 font-semibold">bravas</span> 🚀
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <motion.a
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="group relative px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl overflow-hidden transition-all"
            >
              <span className="relative z-10">Descargar CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="relative px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400/10 transition-all group overflow-hidden"
            >
              <span className="relative z-10">Contáctame</span>
              <div className="absolute inset-0 bg-cyan-400/5 translate-y-full group-hover:translate-y-0 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Status bar estilo terminal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center gap-4 text-sm font-mono"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-zinc-400">DISPONIBLE</span>
            </div>
            <div className="text-zinc-600">|</div>
            <div className="text-zinc-400">
              LOCATION: <span className="text-cyan-400">REMOTE</span>
            </div>
          </motion.div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative group"
          >
            {/* Borde animado */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition-all duration-300 animate-pulse" />

            <div className="relative">
              <div className="absolute -top-8 right-6 font-mono text-xs tracking-widest text-cyan-400 opacity-80">
                SELECTED
              </div>

  {/* Contenedor imagen */}
  <div className="relative z-10">
    <Image
      src="./img/hero.png"
      alt="Player Avatar"
      width={420}
      height={420}
      className="rounded-2xl"
    />
  </div>
    {/* Mini HUD stats */}
  <div className="absolute z-20 -bottom-6 left-1/2 -translate-x-1/2
    flex gap-4 bg-black/80 backdrop-blur-md
    border border-cyan-400/30 rounded-xl
    px-4 py-2 text-xs font-mono text-white
    shadow-[0_0_20px_rgba(34,211,238,0.35)]
  ">
    <span>⚡ FRONTEND 90</span>
    <span>🧠 BACKEND 75</span>
    <span>🎨 UI/UX 85</span>
  </div>


              {/* HUD PLAYER INFO */}
              <div className="absolute top-4 left-4 z-30 bg-black/60 backdrop-blur-md border border-cyan-400/30 rounded-lg px-3 py-2 font-mono text-xs text-cyan-400">
                <p>PLAYER 01</p>
                <p>LEVEL 99</p>
                <p className="text-green-400">STATUS: READY</p>
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-20" />
            </div>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
