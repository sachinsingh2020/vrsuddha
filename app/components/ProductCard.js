"use client";

import Image from "next/image";
import Link from "next/link";
import { showToast } from "./Toast";

export default function ProductCard({ product }) {
  function addToCart() {
    try {
      const raw = localStorage.getItem("vrshuddha_cart");
      const arr = raw ? JSON.parse(raw) : [];
      const found = arr.find((it) => it.slug === product.slug);
      if (found) {
        found.qty = (found.qty || 1) + 1;
      } else {
        arr.push({ slug: product.slug, name: product.name, price: product.price, qty: 1 });
      }
      localStorage.setItem("vrshuddha_cart", JSON.stringify(arr));
      window.dispatchEvent(new Event("vrshuddha_cart_updated"));
      showToast(`${product.name} added to cart`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#163e2a]/10 bg-[#fffdf9] shadow-[0_20px_50px_rgba(22,62,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(22,62,42,0.12)]">
      <Link href={`/product?slug=${product.slug}`} className="block overflow-hidden bg-[#f4ead7]">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 transition duration-500 hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-[#163e2a]">{product.name}</h3>
            <p className="mt-1 text-sm text-[#5d645e]">{product.unit}</p>
          </div>
          <div className="rounded-full bg-[#fbe7b2] px-2.5 py-1 text-xs font-bold text-[#163e2a]">Fresh</div>
        </div>

        <p className="text-sm leading-6 text-[#425046]">{product.description}</p>

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="text-2xl font-extrabold text-[#163e2a]">₹{product.price}</div>
          <button
            onClick={addToCart}
            className="rounded-full bg-[#163e2a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#214d38]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
