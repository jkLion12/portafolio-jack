"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-black/60 border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-cyan-400">
            JACK<span className="text-white">.dev</span>
          </h2>
          <p className="text-sm text-white/60 mt-2 max-w-xs">
            Desarrollador en formación, gamer de corazón 🎮  
            creando experiencias web modernas.
          </p>
        </motion.div>

        {/* LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-white mb-4">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm text-white/60">
            <li><Link href="/" className="hover:text-cyan-400 transition">Inicio</Link></li>
            <li><Link href="/about" className="hover:text-cyan-400 transition">Sobre mí</Link></li>
            <li><Link href="/projects" className="hover:text-cyan-400 transition">Proyectos</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition">Contacto</Link></li>
          </ul>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-semibold text-white mb-4">
            Sígueme
          </h3>

          <div className="flex gap-4 text-white/60">
            <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
            <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-cyan-400 transition">Discord</a>
          </div>
        </motion.div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Jack Huamani — Todos los derechos reservados
      </div>
    </footer>
  )
}
