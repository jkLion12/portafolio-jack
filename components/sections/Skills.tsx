"use client"

import { motion } from "framer-motion"

const skills = [
  "HTML", "CSS", "JavaScript",
  "React", "Next.js", "Tailwind",
  "Git", "GitHub", "Unity"
]

export default function Skills() {
  return (
    <section className="py-32 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Tech <span className="text-cyan-400">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-black/60 border border-white/10 rounded-xl py-6 hover:border-cyan-400 hover:scale-105 transition"
            >
              <p className="text-white/80">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
