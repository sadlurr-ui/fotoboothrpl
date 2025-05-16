'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const layouts = [
  {
    id: 'layoutA',
    title: 'Layout A',
    description: '6 x 2 Strip (3 Pose)',
    image: '/layoutA.png',
  },
  {
    id: 'layoutB',
    title: 'Layout B',
    description: '6 x 2 Strip (4 Pose)',
    image: '/layoutB.png',
  },
  {
    id: 'layoutC',
    title: 'Layout C',
    description: '6 x 2 Strip (2 Pose)',
    image: '/layoutC.png',
  },
  {
    id: 'layoutD',
    title: 'Layout D',
    description: '6 x 4 Strip (6 Pose)',
    image: '/layoutD.png',
  },
];

export default function LayoutPage() {
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
          <Link href="/layout" className="bg-gradient-to-r from-cyan-400 to-teal-400 px-3 py-1 rounded text-white">Layout</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">☰</button>
        </div>
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#004AAD] flex flex-col items-center py-3 gap-3 md:hidden z-50">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-white">Home</Link>
            <Link href="/layout" onClick={() => setMenuOpen(false)} className="text-white font-bold underline">Layout</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-white">Contact</Link>
          </div>
        )}
      </header>

      {/* Main Section */}
      <main className="flex-1 px-4 sm:px-10 py-12 flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#004AAD]">Pilih Layout Favoritmu</h1>
        <p className="text-base sm:text-lg max-w-2xl text-gray-700">
          Pilih layout yang paling sesuai dengan tema acara kamu. Kami menyediakan berbagai desain filter dan frame yang menarik!
        </p>

        {/* Layout Display */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {layouts.map((layout) => (
            <div
              key={layout.id}
              className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <Image
                src={layout.image}
                alt={layout.title}
                width={200}
                height={300}
                className="rounded-md object-cover bg-white p-1"
              />
              <h2 className="text-lg font-semibold text-white mt-3">{layout.title}</h2>
              <p className="text-gray-300 text-sm">{layout.description}</p>
            </div>
          ))}
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
