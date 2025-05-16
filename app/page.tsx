"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFCE8] flex flex-col">
      {/* Navbar */}
      <header className="bg-[#004AAD] text-white w-full py-3 px-6 flex justify-between items-center shadow-md relative">
        <div className="flex items-center gap-2">
          <Image src="/logorplens.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg hidden sm:inline">RPL PHOTOBOOTH</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          <Link className="bg-gradient-to-r from-cyan-400 to-teal-400 px-3 py-1 rounded text-white" href="/">Home</Link>
          <Link href="/layout">Layout</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl focus:outline-none">
            ☰
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#004AAD] flex flex-col items-center py-3 gap-3 md:hidden z-50 shadow-md">
            <Link href="/" className="text-white hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/layout" className="text-white hover:underline" onClick={() => setMenuOpen(false)}>Layout</Link>
            <Link href="/about" className="text-white hover:underline" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="text-white hover:underline" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center px-4 sm:px-10 py-10 gap-6 text-center">
        <div className="relative flex flex-col items-center">
          <div className="text-4xl sm:text-5xl font-bold">
            <span className="bg-pink-500 text-white px-3 py-1 inline-block transform -rotate-6 mb-2">RPL</span>{" "}
            <span className="inline-block border-4 border-pink-500 px-4 py-1 text-pink-600">PHOTOBOOTH</span>
          </div>
          <p className="text-base sm:text-lg mt-4 text-black">
            Photobooth online dengan filter almamater & filter favorit lainnya. <br />
            Gratis & bisa langsung diunduh!
          </p>
        </div>

        <button className="bg-[#1E40AF] text-white font-semibold py-2 px-6 rounded hover:bg-blue-800 transition mt-2">
          Ambil Foto 📸
        </button>

        <Image src="/img-frame.png" alt="Dekorasi" width={150} height={150} />
      </main>

      {/* Galeri */}
      <section className="bg-[#AAC3D9] w-full py-8 px-4 sm:px-10 flex flex-col items-center gap-6">
        <h2 className="text-lg sm:text-xl font-semibold">Cek hasil nya yuk!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Image src="/hasil1.jpg" alt="hasil 1" width={200} height={200} className="rounded" />
          <Image src="/hasil2.jpg" alt="hasil 2" width={150} height={220} className="rounded" />
          <Image src="/hasil3.jpg" alt="hasil 3" width={200} height={220} className="rounded" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#004AAD] w-full text-white py-6 px-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-4 sm:gap-0">
        <div className="flex gap-3 items-center text-xl">
          <a href="#"><img src="/ig.png" alt="IG" width={24} height={24} /></a>
          <a href="#"><img src="/tiktok.png" alt="TikTok" width={24} height={24} /></a>
        </div>
        <p className="text-center">Created by RPL PHOTOBOOTH. 2025</p>
        <p>📧 rplphotobooth2025@gmail.com</p>
      </footer>
    </div>
  );
}
