"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Gamepad2, Zap, Cpu, Rocket } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-black/70 border-t border-cyan-400/20 mt-32 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-3">

        {/* BRAND / PLAYER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-extrabold tracking-widest text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
            JACK<span className="text-white">.dev</span>
          </h2>

          <p className="text-sm text-white/70 mt-3 max-w-xs leading-relaxed">
            Desarrollador en formación ⚙️ <br />
            Gamer de corazón 🎮 <br />
            Creando experiencias web con estética <span className="text-cyan-400">cyberpunk</span>.
          </p>

          {/* STATUS */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            STATUS: ONLINE
          </div>
        </motion.div>

        {/* NAV / HUB */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
            <Gamepad2 size={16} className="text-cyan-400" />
            HUB DE NAVEGACIÓN
          </h3>

          <ul className="space-y-3 text-sm text-white/70">
            {[
              ["Inicio", "/"],
              ["Sobre mí", "/about"],
              ["Proyectos", "/projects"],
              ["Contacto", "/contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="relative hover:text-cyan-400 transition group"
                >
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 text-cyan-400 transition">
                    ▶
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* SOCIAL / GUILD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-white mb-5 flex items-center gap-2">
            <Zap size={16} className="text-cyan-400" />
            GUILD / SOCIAL
          </h3>

          <div className="flex gap-4">
            <a className="p-3 rounded-xl bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/40 transition group">
              <Github className="text-white/70 group-hover:text-cyan-400" />
            </a>

            <a className="p-3 rounded-xl bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/40 transition group">
              <Linkedin className="text-white/70 group-hover:text-cyan-400" />
            </a>

            <a className="p-3 rounded-xl bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/40 transition group">
              <Rocket className="text-white/70 group-hover:text-cyan-400" />
            </a>
          </div>

          {/* MINI STATS */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-white/60">
            <div className="flex items-center gap-1">
              <Cpu size={14} className="text-cyan-400" /> Frontend
            </div>
            <div className="flex items-center gap-1">
              <Zap size={14} className="text-cyan-400" /> Gamer
            </div>
            <div className="flex items-center gap-1">
              <Rocket size={14} className="text-cyan-400" /> Builder
            </div>
          </div>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative border-t border-cyan-400/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Jack Huamani — Powered by caffeine ☕ y código 💻
      </div>
    </footer>
  )
}
