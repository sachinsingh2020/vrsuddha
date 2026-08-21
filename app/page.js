import Image from "next/image";
import Link from "next/link";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="w-full">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-[#163e2a]/10 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#163e2a]">
              Pure • Traditional • Premium
            </div>
            <h1 className="text-4xl font-black leading-tight text-[#163e2a] md:text-6xl">
              Better oil for
              <span className="block text-[#d8a93d]">better cooking.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#425046]">
              VRSHUDDHA brings you authentic mustard oil with a rich aroma, traditional cold-pressed quality,
              and a pure, trusted taste that modern kitchens deserve.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="rounded-full bg-[#163e2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#214d38]">
                Shop now
              </Link>
              <Link href="/about" className="rounded-full border border-[#163e2a]/15 bg-white px-6 py-3 text-sm font-semibold text-[#163e2a] transition hover:border-[#163e2a]/30 hover:bg-[#f9f5ef]">
                About us
              </Link>
            </div>

            <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-[#163e2a]/10 bg-[#fffdf9] p-4 shadow-sm">
                <div className="text-2xl font-black text-[#163e2a]">100%</div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#5d645e]">Pure</div>
              </div>
              <div className="rounded-2xl border border-[#163e2a]/10 bg-[#fffdf9] p-4 shadow-sm">
                <div className="text-2xl font-black text-[#163e2a]">Cold</div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#5d645e]">Pressed</div>
              </div>
              <div className="rounded-2xl border border-[#163e2a]/10 bg-[#fffdf9] p-4 shadow-sm">
                <div className="text-2xl font-black text-[#163e2a]">Farm</div>
                <div className="text-xs uppercase tracking-[0.18em] text-[#5d645e]">Fresh</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-[#d8a93d]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#163e2a]/10 bg-[#fffaf0] p-6 shadow-[0_35px_90px_rgba(22,62,42,0.10)]">
              <Image
                src={products[0].image}
                alt={products[0].name}
                width={640}
                height={500}
                className="mx-auto w-full max-w-[540px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#d8a93d]">Featured</div>
            <h2 className="mt-2 text-3xl font-black text-[#163e2a]">Best sellers</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-[#163e2a] hover:text-[#d8a93d]">
            View all products →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
