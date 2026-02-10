import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0b0f19] text-white">
        <Navbar />
        <CustomCursor />

        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
