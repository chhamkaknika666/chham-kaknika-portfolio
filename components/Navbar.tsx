"use client";
import { Menu, X, Sun } from "lucide-react";
import { useState } from "react";
const links = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="section-shell">
        <nav className="glass rounded-full px-4 py-2 flex items-center justify-between shadow-lg">
          <a
            href="#home"
            className="flex items-center gap-3 font-bold tracking-[.18em] text-[#0d3970]"
          >
            <span className="block h-10 w-10 overflow-hidden rounded-full shadow-md">
              <img
                src="/images/Nika.png"
                alt="Chham Kaknika"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden sm:block">CHHAM KAKNIKA</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-[#244c79] hover:bg-white/60 transition"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Light mode"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/55 text-[#1763b8]"
            >
              <Sun size={18} />
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(!open)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-white/65 text-[#1763b8]"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="glass mt-2 rounded-3xl p-3 md:hidden">
            {links.map(([label, href]) => (
              <a
                onClick={() => setOpen(false)}
                key={label}
                href={href}
                className="block rounded-2xl px-4 py-3 font-semibold text-[#244c79] hover:bg-white/70"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
