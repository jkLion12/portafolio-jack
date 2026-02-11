"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-32 px-6 flex justify-center relative overflow-hidden">
      {/* Glow fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-2xl"
      >
        {/* Marco HUD */}
        <div className="relative border border-cyan-400/40 rounded-2xl bg-black/70 backdrop-blur-xl p-10 overflow-hidden">

          {/* Scanline */}
          <motion.div
            initial={{ top: 0 }}
            animate={{ top: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
          />

          {/* Esquinas gamer */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400" />

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-cyan-400 text-xs font-mono tracking-[0.3em] mb-3">
              &lt; CONTACT_INTERFACE /&gt;
            </p>

            <h2 className="text-3xl md:text-4xl font-black">
              ¿Tienes un <span className="text-cyan-400">proyecto</span>?
            </h2>

            <p className="text-white/60 mt-3 text-sm">
              Inicia comunicación con el sistema 🚀
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6 relative z-10">
            {/* Input */}
            {[
              { label: "PLAYER_NAME", type: "text", placeholder: "Tu nombre" },
              { label: "EMAIL_ADDRESS", type: "email", placeholder: "correo@email.com" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-xs font-mono text-cyan-400 mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 bg-black border border-cyan-400/30 rounded-lg text-white font-mono outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition"
                />
              </div>
            ))}

            {/* Textarea */}
            <div>
              <label className="block text-xs font-mono text-cyan-400 mb-2">
                MESSAGE_DATA
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe tu misión..."
                className="w-full px-4 py-3 bg-black border border-cyan-400/30 rounded-lg text-white font-mono outline-none resize-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition"
              />
            </div>

            {/* Botón */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="relative w-full py-4 mt-4 font-mono font-bold tracking-widest text-cyan-400 border-2 border-cyan-400 rounded-xl overflow-hidden group"
            >
              <span className="relative z-10">
                ▶ TRANSMIT MESSAGE
              </span>

              {/* Glow animado */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </motion.button>
          </form>
        </div>

        {/* Link */}
        <div className="text-center mt-6">
          <Link
            href="/contact"
            className="text-cyan-400/70 hover:text-cyan-400 text-xs font-mono tracking-widest"
          >
            OPEN FULL CONTACT PAGE →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
