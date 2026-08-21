"use client";

import Image from "next/image";
import Link from "next/link";

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
      alert(`${product.name} added to cart`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="rounded border p-4 bg-white shadow-sm">
      <Link href={`/product?slug=${product.slug}`}>
        <a className="block">
          <Image src={product.image} alt={product.name} width={420} height={280} className="rounded" />
        </a>
      </Link>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-zinc-600">{product.unit}</p>
        </div>
        <div className="text-right">
          <div className="text-md font-bold">₹{product.price}</div>
          <button onClick={addToCart} className="mt-2 rounded bg-amber-600 px-3 py-1 text-white text-sm">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
