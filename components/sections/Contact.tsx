"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Contact() {
  return (
    <section className="py-32 text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          ¿Tienes un <span className="text-cyan-400">proyecto</span>?
        </h2>

        <p className="text-white/70 mb-8">
          Hablemos y construyamos algo increíble 🚀
        </p>

        <Link
          href="/contact"
          className="inline-block bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Contáctame
        </Link>
      </motion.div>
    </section>
  )
}
