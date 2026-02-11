"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const links = [
  { name: "Inicio", href: "inicio" },
  { name: "Sobre mí", href: "about" },
  { name: "Experiencia", href: "experience" },
  { name: "Habilidades", href: "skills" },
  { name: "Proyectos", href: "projects" },
  { name: "Contacto", href: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [socialOpen, setSocialOpen] = useState(false);

  // Bloquear scroll cuando mobile está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Scroll Spy
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
    setSocialOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
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
            overflow-visible
          "
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

          {/* LOGO */}
          <button
            onClick={() => handleScroll("inicio")}
            className="text-lg font-black tracking-widest text-white"
          >
            JACK<span className="text-cyan-400">.DEV</span>
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-2 relative">
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
                    />
                  )}

                  <button
                    onClick={() => handleScroll(link.href)}
                    className="relative z-10 px-4 py-2 text-sm text-white/70 hover:text-white transition"
                  >
                    {link.name}
                  </button>
                </li>
              );
            })}

            {/* SOCIAL DESKTOP */}
            <li className="relative">
              <button
                onClick={() => setSocialOpen(!socialOpen)}
                className="px-4 py-2 text-sm text-purple-400 hover:text-white transition"
              >
                Social
              </button>

              <AnimatePresence>
                {socialOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 15, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="
                      absolute right-0 mt-3 w-44
                      bg-black/95 backdrop-blur-xl
                      border border-purple-500/30
                      rounded-xl p-4
                      shadow-[0_0_30px_rgba(168,85,247,0.5)]
                    "
                  >
                    <a
                      href="https://github.com/jkLion12"
                      target="_blank"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition group"
                    >
                      <Github className="text-purple-400 group-hover:scale-110 transition" />
                      <span className="text-white/80 group-hover:text-white">
                        GitHub
                      </span>
                    </a>

                    <a
                      href="https://linkedin.com/in/TU_USUARIO"
                      target="_blank"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition group"
                    >
                      <Linkedin className="text-cyan-400 group-hover:scale-110 transition" />
                      <span className="text-white/80 group-hover:text-white">
                        LinkedIn
                      </span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* MOBILE BTN */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </motion.div>
      </nav>

      {/* MOBILE MENU FULLSCREEN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-40
              bg-black/95 backdrop-blur-2xl
              flex flex-col items-center justify-center
              gap-8 text-xl
            "
          >
            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.href)}
                  className={`
                    relative px-6 py-3 rounded-xl transition
                    ${
                      isActive
                        ? "text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {link.name}
                </button>
              );
            })}

            {/* SOCIAL MOBILE */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/jkLion12"
                target="_blank"
                className="text-purple-400 hover:scale-110 transition"
              >
                <Github size={28} />
              </a>

              <a
                href="https://linkedin.com/in/TU_USUARIO"
                target="_blank"
                className="text-cyan-400 hover:scale-110 transition"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
