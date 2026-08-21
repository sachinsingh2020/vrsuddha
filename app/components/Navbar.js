"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <header className="w-full border-b border-black/[.06] bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <Image src="/logo.svg" alt="VRSHUDDHA" width={150} height={34} />
          </a>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/">
            <a className="text-sm font-medium">Home</a>
          </Link>
          <Link href="/shop">
            <a className="text-sm font-medium">Shop</a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium">About</a>
          </Link>
          <Link href="/cart">
            <a className="relative inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
              Cart
              <span className="ml-1 inline-flex h-6 min-w-[22px] items-center justify-center rounded-full bg-amber-600 px-2 text-xs font-medium text-white">
                {count}
              </span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
