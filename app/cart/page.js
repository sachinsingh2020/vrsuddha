"use client";

import { useEffect, useState } from "react";
import { showToast } from "../components/Toast";

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
    showToast("Cart updated");
  }

  function clearCart() {
    localStorage.removeItem("vrshuddha_cart");
    window.dispatchEvent(new Event("vrshuddha_cart_updated"));
    setItems([]);
    showToast("Cart cleared");
  }

  const total = items.reduce((s, it) => s + it.price * (it.qty || 1), 0);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-8">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#d8a93d]">Your cart</div>
        <h1 className="mt-2 text-3xl font-black text-[#163e2a]">Ready for checkout</h1>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[24px] border border-dashed border-[#163e2a]/20 bg-[#fffdf9] p-10 text-center text-[#425046] shadow-sm">
          Your cart is empty. Add a premium bottle of mustard oil to get started.
        </div>
      ) : (
        <div className="space-y-5">
          {items.map((it) => (
            <div key={it.slug} className="flex flex-col gap-4 rounded-[22px] border border-[#163e2a]/10 bg-[#fffdf9] p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-lg font-bold text-[#163e2a]">{it.name}</div>
                <div className="mt-1 text-sm text-[#5d645e]">₹{it.price} each</div>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => updateQty(it.slug, (it.qty || 1) - 1)} className="h-9 w-9 rounded-full border border-[#163e2a]/15 bg-white text-lg font-bold text-[#163e2a]">
                  -
                </button>
                <div className="min-w-8 text-center font-semibold text-[#163e2a]">{it.qty}</div>
                <button onClick={() => updateQty(it.slug, (it.qty || 1) + 1)} className="h-9 w-9 rounded-full border border-[#163e2a]/15 bg-white text-lg font-bold text-[#163e2a]">
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="rounded-[22px] border border-[#163e2a]/10 bg-[#fffdf9] p-5 shadow-sm">
            <div className="flex items-center justify-between text-lg font-bold text-[#163e2a]">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#163e2a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#214d38]">
                Checkout
              </button>
              <button onClick={clearCart} className="rounded-full border border-[#163e2a]/15 bg-white px-5 py-3 text-sm font-semibold text-[#163e2a] transition hover:bg-[#f9f5ef]">
                Clear cart
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
