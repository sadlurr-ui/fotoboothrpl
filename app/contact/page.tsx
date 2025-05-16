'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFCE8] flex flex-col">
      {/* Navbar */}
      <header className="bg-[#004AAD] text-white w-full py-3 px-6 flex justify-between items-center shadow-md relative">
        <div className="flex items-center gap-2">
          <Image src="/logorplens.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-lg hidden sm:inline">RPL PHOTOBOOTH</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/layout" className="hover:underline">Layout</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-400 to-teal-400 px-3 py-1 rounded text-white">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">☰</button>
        </div>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#004AAD] flex flex-col items-center py-3 gap-3 md:hidden z-50">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-white">Home</Link>
            <Link href="/layout" onClick={() => setMenuOpen(false)} className="text-white">Layout</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-white font-bold underline">Contact</Link>
          </div>
        )}
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center px-4 sm:px-10 py-12 text-center gap-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#004AAD]">Hubungi Kami</h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-xl">
          Jika kamu memiliki pertanyaan, saran, atau ingin berkolaborasi, jangan ragu untuk menghubungi kami.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-left text-black">
          <p className="mb-2"><strong>Email:</strong> rplphotobooth2025@gmail.com</p>
          <p className="mb-2"><strong>Instagram:</strong> @rpl.photobooth</p>
          <p><strong>TikTok:</strong> @rpl.photobooth</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#004AAD] text-white py-6 px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
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
