"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 from-black via-zinc-900 to-black">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hola, soy <span className="text-cyan-400">Jack</span> 👋
          </h1>

          <p className="mt-6 text-lg text-zinc-300">
            Desarrollador Web enfocado en experiencias modernas,
            animadas y bien <span className="text-cyan-400">bravas</span> 🚀
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-xl"
            >
              Ver proyectos
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl"
            >
              Contáctame
            </motion.a>
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
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Image
              src="/img/hero.png"   // 👈 aquí pones la imagen que generamos
              alt="Developer illustration"
              width={420}
              height={420}
              className="rounded-2xl drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
