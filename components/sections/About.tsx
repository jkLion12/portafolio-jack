"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function About() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* TEXTO */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Sobre <span className="text-cyan-400">mí</span>
          </h2>

          <p className="text-white/70 leading-relaxed mb-6">
            Soy Ingeniero Informático, apasionado por el desarrollo web moderno
            y el mundo gamer 🎮. Me enfoco en crear interfaces limpias,
            interactivas y con buena experiencia de usuario.
          </p>

          <Link
            href="/about"
            className="inline-block text-cyan-400 border border-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Ver más
          </Link>
        </div>

        {/* BLOQUE VISUAL */}
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full" />
          <div className="relative bg-black/60 border border-white/10 rounded-xl p-10 text-center">
            <p className="text-xl font-semibold text-cyan-400">
              Code • Design • Games
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
