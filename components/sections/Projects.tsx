"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Sistema Web",
    desc: "Aplicación web moderna con React y Next.js"
  },
  {
    title: "App Móvil",
    desc: "Aplicación híbrida con enfoque UX"
  },
  {
    title: "Videojuego Educativo",
    desc: "Gamificación y aprendizaje interactivo"
  }
]

export default function Projects() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Proyectos <span className="text-cyan-400">Destacados</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/60 border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              {p.title}
            </h3>
            <p className="text-white/70 text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
