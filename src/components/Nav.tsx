"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/nav";
import MenuOverlay from "./MenuOverlay";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = pathname === "/" ? "/overview" : pathname;

  const goTo = (id: string) => {
    setMenuOpen(false);
    router.push(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 text-white ${
          menuOpen ? "pointer-events-none" : ""
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="relative flex items-center justify-between px-6 md:px-14 py-6">
          <button
            onClick={() => goTo("/overview")}
            className="flex items-center gap-3 pointer-events-auto"
            data-cursor-grow
          >
            <Image
              src="/logo-header.png"
              alt="DAMAC HILLS"
              width={90}
              height={35}
              className="h-8 w-auto invert"
            />
          </button>

          <nav
            className={`hidden lg:flex items-center gap-8 transition-opacity duration-300 ${
              menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`relative text-xs tracking-[0.2em] uppercase font-light pb-1 transition-colors ${
                  active === item.id ? "text-white" : "text-white/60 hover:text-white"
                }`}
                data-cursor-grow
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-current transition-all duration-300 ${
                    active === item.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className={`flex items-center gap-3 text-xs tracking-[0.25em] uppercase transition-opacity duration-300 ${
              menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            data-cursor-grow
          >
            Menu
            <span className="flex flex-col gap-1">
              <span className="w-4 h-px bg-current" />
              <span className="w-4 h-px bg-current" />
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay
        open={menuOpen}
        active={active}
        onClose={() => setMenuOpen(false)}
        onNavigate={goTo}
      />
    </>
  );
}
