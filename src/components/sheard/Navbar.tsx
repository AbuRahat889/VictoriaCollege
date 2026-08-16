import { Menu } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <svg width="34" height="34" viewBox="0 0 34 34" className="shrink-0">
          <rect
            x="0"
            y="0"
            width="14"
            height="14"
            rx="2"
            fill="#ec1e79"
            transform="rotate(45 7 7)"
          />
          <rect
            x="18"
            y="0"
            width="14"
            height="14"
            rx="2"
            fill="#2dd4bf"
            transform="rotate(45 25 7)"
          />
          <rect
            x="9"
            y="18"
            width="14"
            height="14"
            rx="2"
            fill="#a21caf"
            transform="rotate(45 16 25)"
          />
        </svg>
        <div className="leading-[1.05]">
          <p className="font-extrabold text-sm tracking-wide">Victoria</p>
          <p className="font-extrabold text-sm tracking-wide -mt-0.5">
            College
          </p>
          <p className="text-[9px] text-slate-400 tracking-wide mt-0.5">
            of Arts and Design
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold tracking-widest text-slate-200">
        <a href="#about" className="hover:text-white transition-colors">
          ABOUT VCAD
        </a>
        <a href="#courses" className="hover:text-white transition-colors">
          COURSES
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          CONTACT US
        </a>
      </div>

      <button
        aria-label="Open menu"
        className="p-2 rounded-md hover:bg-white/5 transition-colors"
      >
        <Menu size={22} />
      </button>
    </nav>
  );
}
