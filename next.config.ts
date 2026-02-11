import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/nombre-portafolio-jack" : "",

  images: {
    unoptimized: true, // Necesario para exportación estática en GitHub Pages
  },
};

export default nextConfig;
