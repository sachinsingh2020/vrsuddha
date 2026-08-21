import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-8">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#d8a93d]">Shop</div>
        <h1 className="mt-2 text-3xl font-black text-[#163e2a]">Explore our oils</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}
