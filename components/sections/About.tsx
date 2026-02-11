"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGamepad, FaCode, FaPaintBrush } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.06),transparent_65%)]" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* ================= TEXTO ================= */}
        <div>
          <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] mb-4">
            &lt; PLAYER_PROFILE /&gt;
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Sobre <span className="text-cyan-400">mí</span>
          </h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Soy <span className="text-cyan-400 font-semibold">Ingeniero Informático</span>,
            apasionado por el desarrollo web moderno, las interfaces interactivas
            y el mundo gamer 🎮. Me gusta construir experiencias que no solo
            funcionen bien, sino que se sientan <b>épicas</b> al usarlas.
          </p>

          <p className="text-white/60 leading-relaxed mb-8">
            Combino <span className="text-cyan-400">código</span>,{" "}
            <span className="text-cyan-400">diseño</span> y{" "}
            <span className="text-cyan-400">creatividad</span> para crear
            productos digitales con identidad propia.
          </p>

          {/* Stats tipo juego */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { label: "CODE", value: "90%" },
              { label: "DESIGN", value: "80%" },
              { label: "CREATIVITY", value: "95%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-cyan-400/30 rounded-lg p-4 text-center bg-black/40"
              >
                <p className="text-xs font-mono text-cyan-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-xl font-black">{stat.value}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-block font-mono tracking-widest text-cyan-400 border-2 border-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-400/10 transition-all"
          >
            VIEW FULL PROFILE →
          </Link>
        </div>

        {/* ================= BLOQUE VISUAL ================= */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full" />

          {/* Card HUD */}
          <div className="relative bg-black/70 border border-cyan-400/40 rounded-2xl p-10 backdrop-blur-xl overflow-hidden">

            {/* Scanline */}
            <motion.div
              initial={{ top: 0 }}
              animate={{ top: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
            />

            {/* Esquinas gamer */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

            <p className="text-center text-cyan-400 font-black text-xl mb-6 tracking-wide">
              SKILL SET
            </p>

            <div className="space-y-4">
              {[
                { icon: <FaCode />, text: "Frontend & Backend Development" },
                { icon: <FaPaintBrush />, text: "UI / UX Design" },
                { icon: <FaGamepad />, text: "Game & Interactive Logic" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border border-cyan-400/20 rounded-lg px-4 py-3 bg-black/40"
                >
                  <span className="text-cyan-400 text-lg">{item.icon}</span>
                  <p className="text-white/70 font-mono text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer tipo HUD */}
            <p className="mt-8 text-center text-xs font-mono text-white/40 tracking-widest">
              STATUS: ONLINE • READY TO BUILD 🚀
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
