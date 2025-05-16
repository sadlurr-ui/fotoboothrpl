'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
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
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/layout" className="hover:underline">Layout</Link>
          <Link href="/about" className="bg-gradient-to-r from-cyan-400 to-teal-400 px-3 py-1 rounded text-white">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl focus:outline-none">
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#004AAD] flex flex-col items-center py-3 gap-3 md:hidden z-50 shadow-md">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-white hover:underline">Home</Link>
            <Link href="/layout" onClick={() => setMenuOpen(false)} className="text-white hover:underline">Layout</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white underline font-bold">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-white hover:underline">Contact</Link>
          </div>
        )}
      </header>

      {/* About Content */}
      <main className="flex-1 px-4 sm:px-10 py-12 text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#004AAD]">Tentang RPL LENS</h1>
        <p className="text-base sm:text-lg max-w-2xl text-gray-700 leading-relaxed">
          <strong>RPL Lens</strong> adalah aplikasi photobooth online yang dikembangkan oleh mahasiswa Rekayasa Perangkat Lunak (RPL). Aplikasi ini hadir sebagai solusi kreatif untuk mengambil foto dengan berbagai filter menarik seperti almamater sekolah, bingkai acara, dan efek kekinian lainnya.
        </p>
        <p className="text-base sm:text-lg max-w-2xl text-gray-700 leading-relaxed">
          Tujuan utama dari RPL Lens adalah memberikan pengalaman photobooth yang mudah, cepat, dan bisa diakses siapa saja tanpa harus menginstal aplikasi tambahan. Semua fitur bisa diakses langsung dari browser, dan hasil fotonya bisa langsung diunduh secara gratis.
        </p>
      </main>

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
