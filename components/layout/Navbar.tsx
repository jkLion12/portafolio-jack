"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Sobre mí", href: "/about" },
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 🔒 bloquear scroll cuando menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* CONTENEDOR NAV */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative flex items-center justify-between
          px-6 py-4 rounded-2xl
          bg-black/40 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_40px_-10px_rgba(34,211,238,0.3)]
        "
      >
        {/* GLOW */}
        <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-2xl -z-10" />

        {/* LOGO */}
        <Link href="/" className="relative group">
          <span className="text-lg font-bold tracking-widest text-white">
            JACK<span className="text-cyan-400">.DEV</span>
          </span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full" />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="
                      absolute inset-0 rounded-xl
                      bg-cyan-400/20 border border-cyan-400/40
                      shadow-[0_0_20px_rgba(34,211,238,0.6)]
                    "
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                <Link
                  href={link.href}
                  className="
                    relative z-10 px-4 py-2 text-sm
                    text-white/70 hover:text-white
                    transition
                  "
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </motion.div>

      {/* ===== MOBILE MENU (DISEÑO CORREGIDO) ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-full left-0 right-0 mt-3
              rounded-2xl
              bg-black/90 backdrop-blur-xl
              border border-white/10
              shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]
              overflow-hidden
              md:hidden
            "
          >
            <ul className="flex flex-col divide-y divide-white/10">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`
                        block px-6 py-4 text-lg font-medium
                        transition
                        ${
                          isActive
                            ? "text-cyan-400 bg-cyan-400/10"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
