"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blood text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl tracking-wide">
          🩸 Blood Donation
        </Link>

        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/" className="hover:text-red-200 transition">Home</Link>
          <Link href="/login" className="hover:text-red-200 transition">Login</Link>
          <Link
            href="/register"
            className="bg-white text-blood px-4 py-1.5 rounded-md hover:bg-red-100 transition"
          >
            Register
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col bg-blood-dark px-4 py-3 gap-3 font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
          <Link href="/register" onClick={() => setOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
}
