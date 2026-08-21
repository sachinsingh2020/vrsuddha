"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { products } from "../data/products";
import { showToast } from "../components/Toast";

export default function ProductPage() {
  return (
    <Suspense fallback={<div className="px-6 py-12 text-center text-[#163e2a]">Loading product...</div>}>
      <ProductPageContent />
    </Suspense>
  );
}

function ProductPageContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const product = products.find((p) => p.slug === slug) || products[0];

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
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid grid-cols-1 items-center gap-10 rounded-[28px] border border-[#163e2a]/10 bg-[#fffdf9] p-6 shadow-[0_30px_80px_rgba(22,62,42,0.08)] md:grid-cols-2 md:p-8">
        <div className="rounded-[22px] bg-[#f4ead7] p-4">
          <Image src={product.image} alt={product.name} width={640} height={480} className="mx-auto rounded-[18px] object-contain" />
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#d8a93d]">Premium choice</div>
          <h1 className="mt-3 text-3xl font-black text-[#163e2a] md:text-4xl">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-[#425046]">{product.description}</p>
          <div className="mt-5 text-3xl font-black text-[#163e2a]">₹{product.price}</div>
          <div className="mt-8 flex gap-3">
            <button onClick={addToCart} className="rounded-full bg-[#163e2a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#214d38]">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
