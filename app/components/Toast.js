"use client";

import { useEffect, useState } from "react";

export function showToast(message) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("vrshuddha-toast", {
      detail: { message },
    })
  );
}

export default function Toast() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handle = (event) => {
      const id = Date.now() + Math.random();
      const message = event.detail?.message || "Updated";
      setItems((prev) => [...prev, { id, message }]);
      window.setTimeout(() => {
        setItems((prev) => prev.filter((toast) => toast.id !== id));
      }, 2200);
    };

    window.addEventListener("vrshuddha-toast", handle);
    return () => window.removeEventListener("vrshuddha-toast", handle);
  }, []);

  return (
    <div className="pointer-events-none fixed right-5 top-20 z-50 flex flex-col gap-3">
      {items.map((toast) => (
        <div
          key={toast.id}
          className="rounded-lg border border-emerald-200 bg-emerald-900/95 px-4 py-3 text-sm font-medium text-white shadow-xl"
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}
