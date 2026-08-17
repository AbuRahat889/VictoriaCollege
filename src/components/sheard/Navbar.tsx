"use client";

import logoImage from "@/assets/logo.png";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "ABOUT VCAD", href: "#about" },
  { label: "COURSES", href: "#courses" },
  { label: "CONTACT US", href: "#contact" }, 
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(NAV_ITEMS[0].href);

  return (
    <div className="bg-[#040D3D] py-6.25">
      <nav className="grid grid-cols-2 gap-6 container mx-auto ">
        <div className="flex items-center h-14 w-36">
          <Image
            src={logoImage}
            alt="VCAD Logo"
            width={500}
            height={500}
            className=""
          />
        </div>

        <div className="flex items-center justify-between gap-6 ">
          <div className="hidden md:flex items-center gap-14 text-[11px] font-semibold tracking-widest text-white uppercase">
            {NAV_ITEMS.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  className={`pb-1 border-b-2 transition-colors duration-300 ease-in-out ${
                    isActive
                      ? "text-primary border-primary"
                      : "border-transparent hover:text-primary "
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button aria-label="Open menu" className="p-2 ">
            <Menu className="text-white size-8" />
          </button>
        </div>
      </nav>
    </div>
  );
}
