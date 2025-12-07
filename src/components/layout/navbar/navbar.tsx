"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // State
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full  z-50">
      {/* Navbar */}
      <nav
        className="
          mx-auto max-w-7xl 
          flex items-center justify-around
          px-4 py-4 
          rounded-b-2xl
          backdrop-blur-xl bg-white/20
          border-b border-white/20
          shadow-lg
        "
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Shop</h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 text-white/90 font-medium">
          <li className="hover:text-white transition">Home</li>
          <li className="hover:text-white transition">Shop</li>
          <li className="hover:text-white transition">Categories</li>
          <li className="hover:text-white transition">Contact</li>
          <li className="hover:text-white transition">Signup</li>
          <li className="hover:text-white transition">Signin</li>
        </ul>

        {/* Mobile Menu button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="
            md:hidden 
            backdrop-blur-lg bg-white/10
            border-b border-white/20
            shadow-lg
            px-4 py-4
            flex flex-col gap-4 
            text-white/90 font-medium
          "
        >
          <span className="hover:text-white transition">Home</span>
          <span className="hover:text-white transition">Shop</span>
          <span className="hover:text-white transition">Categories</span>
          <span className="hover:text-white transition">Contact</span>
        </div>
      )}
    </header>
  );
}
