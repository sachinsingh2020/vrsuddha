"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CartPage() {
  const [items, setItems] = useState([]);

  function readCart() {
    try {
      const raw = localStorage.getItem("vrshuddha_cart");
      const arr = raw ? JSON.parse(raw) : [];
      setItems(arr);
    } catch (e) {
      setItems([]);
    }
  }

  useEffect(() => {
    readCart();
    const h = () => readCart();
    window.addEventListener("vrshuddha_cart_updated", h);
    return () => window.removeEventListener("vrshuddha_cart_updated", h);
  }, []);

  function updateQty(slug, qty) {
    const raw = localStorage.getItem("vrshuddha_cart");
    const arr = raw ? JSON.parse(raw) : [];
    const found = arr.find((it) => it.slug === slug);
    if (!found) return;
    found.qty = Math.max(0, qty);
    const filtered = arr.filter((it) => it.qty > 0);
    localStorage.setItem("vrshuddha_cart", JSON.stringify(filtered));
    window.dispatchEvent(new Event("vrshuddha_cart_updated"));
    setItems(filtered);
  }

  function clearCart() {
    localStorage.removeItem("vrshuddha_cart");
    window.dispatchEvent(new Event("vrshuddha_cart_updated"));
    setItems([]);
  }

  const total = items.reduce((s, it) => s + it.price * (it.qty || 1), 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-2xl font-semibold">Your Cart</h1>
        {items.length === 0 ? (
          <div className="mt-6 text-zinc-600">Your cart is empty.</div>
        ) : (
          <div className="mt-6 space-y-4">
            {items.map((it) => (
              <div key={it.slug} className="flex items-center justify-between rounded border p-4">
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-zinc-600">₹{it.price} • Qty: {it.qty}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQty(it.slug, (it.qty || 1) - 1)} className="px-3 py-1 rounded border">-</button>
                  <div className="px-3">{it.qty}</div>
                  <button onClick={() => updateQty(it.slug, (it.qty || 1) + 1)} className="px-3 py-1 rounded border">+</button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between mt-4">
              <div className="text-lg font-semibold">Total</div>
              <div className="text-lg font-bold">₹{total}</div>
            </div>
            <div className="mt-4 flex gap-3">
              <button className="rounded bg-amber-600 px-4 py-2 text-white">Checkout</button>
              <button onClick={clearCart} className="rounded border px-4 py-2">Clear</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
