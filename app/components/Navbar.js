"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../assets/vrsuddhaLogo.png";

export default function Navbar() {
  const [count, setCount] = useState(0);

  function readCartCount() {
    try {
      const raw = localStorage.getItem("vrshuddha_cart");
      const arr = raw ? JSON.parse(raw) : [];
      const items = arr.reduce((s, it) => s + (it.qty || 1), 0);
      setCount(items);
    } catch (e) {
      setCount(0);
    }
  }

  useEffect(() => {
    readCartCount();
    const h = () => readCartCount();
    window.addEventListener("vrshuddha_cart_updated", h);
    return () => window.removeEventListener("vrshuddha_cart_updated", h);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#163e2a]/10 bg-[#fffaf0]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-[#163e2a]" aria-label="VRSHUDDHA home">
          <div className="flex items-center gap-3 rounded-full border border-[#163e2a]/10 bg-white p-1 shadow-sm">
            <Image src={logo} alt="VRSHUDDHA" width={52} height={52} className="rounded-full object-cover" />
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/" className="text-sm font-semibold text-[#163e2a] transition hover:text-[#d8a93d]">
            Home
          </Link>
          <Link href="/shop" className="text-sm font-semibold text-[#163e2a] transition hover:text-[#d8a93d]">
            Shop
          </Link>
          <Link href="/about" className="text-sm font-semibold text-[#163e2a] transition hover:text-[#d8a93d]">
            About
          </Link>
          <Link href="/cart" className="inline-flex items-center gap-2 rounded-full bg-[#163e2a] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#214d38]">
            Cart
            <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#d8a93d] px-2 text-xs font-bold text-[#163e2a]">
              {count}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
