"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Inicio", href: "inicio" },
  { name: "Sobre mí", href: "about" },
  { name: "Habilidades", href: "skills" },
  { name: "Proyectos", href: "projects" },
  { name: "Contacto", href: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Detectar sección visible al hacer scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
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
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

        {/* LOGO */}
        <button
          onClick={() => handleScroll("inicio")}
          className="relative group"
        >
          <span className="text-lg font-black tracking-widest text-white">
            JACK<span className="text-cyan-400">.DEV</span>
          </span>
        </button>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((link) => {
            const isActive = active === link.href;

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
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                <button
                  onClick={() => handleScroll(link.href)}
                  className="
                    relative z-10 px-4 py-2 text-sm
                    text-white/70 hover:text-white
                    transition
                  "
                >
                  {link.name}
                </button>
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
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
                const isActive = active === link.href;

                return (
                  <li key={link.name} className="relative">
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-mobile"
                        className="absolute inset-0 bg-cyan-400/10"
                      />
                    )}

                    <button
                      onClick={() => handleScroll(link.href)}
                      className={`
                        relative z-10 w-full text-left px-6 py-5 text-lg font-semibold
                        transition
                        ${
                          isActive
                            ? "text-cyan-400"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      ▶ {link.name}
                    </button>
                  </li>
                );
              })}
            </ul>

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
