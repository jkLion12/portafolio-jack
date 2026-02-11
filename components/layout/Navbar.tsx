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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      {/* CONTENEDOR */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative flex items-center justify-between
          px-6 py-4 rounded-2xl
          bg-black/50 backdrop-blur-xl
          border border-cyan-400/20
          shadow-[0_0_60px_-15px_rgba(34,211,238,0.5)]
          overflow-hidden
        "
      >
        {/* HUD scan line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

        {/* LOGO */}
        <Link href="/" className="relative group">
          <span className="text-lg font-black tracking-widest text-white">
            JACK<span className="text-cyan-400">.DEV</span>
          </span>

          {/* glitch underline */}
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-300" />

          {/* online status */}
          <span className="absolute -right-3 top-1/2 -translate-y-1/2 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
        </Link>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="
                      absolute inset-0 rounded-xl
                      bg-cyan-400/20 border border-cyan-400/50
                      shadow-[0_0_25px_rgba(34,211,238,0.8)]
                    "
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
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

        {/* MOBILE BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </motion.div>

      {/* ===== MOBILE HUD MENU ===== */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="
              absolute top-full left-0 right-0 mt-3
              rounded-2xl
              bg-black/95 backdrop-blur-xl
              border border-cyan-400/20
              shadow-[0_30px_60px_-15px_rgba(34,211,238,0.4)]
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
                        block px-6 py-5 text-lg font-semibold
                        transition
                        ${
                          isActive
                            ? "text-cyan-400 bg-cyan-400/10"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      ▶ {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* HUD footer */}
            <div className="px-6 py-3 text-xs font-mono text-cyan-400/60 flex justify-between">
              <span>STATUS: ONLINE</span>
              <span>FPS: 144</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
