"use client";

import { useSearchParams } from "next/navigation";
import { products } from "../data/products";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Product - VRSHUDDHA",
};

export default function ProductPage() {
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
      alert(`${product.name} added to cart`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Image src={product.image} alt={product.name} width={640} height={420} className="rounded shadow" />
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="mt-2 text-zinc-600">{product.description}</p>
            <div className="mt-4 text-2xl font-semibold">₹{product.price}</div>
            <div className="mt-6 flex gap-3">
              <button onClick={addToCart} className="rounded bg-amber-600 px-4 py-2 text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
