import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">VRSHUDDHA</h1>
            <p className="mt-4 text-lg text-zinc-700">
              Pure, traditional mustard oil — cold-pressed and packed with flavour. Shop premium mustard oil
              products sourced from trusted farms.
            </p>

            <div className="mt-6 flex gap-3">
              <Link href="/shop" className="rounded bg-amber-600 px-4 py-2 text-white">Shop Now</Link>
              <Link href="/about" className="rounded border px-4 py-2">About Us</Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded border p-4">
                <div className="text-sm text-zinc-600">Authentic</div>
                <div className="font-semibold">Cold-Pressed</div>
              </div>
              <div className="rounded border p-4">
                <div className="text-sm text-zinc-600">Quality</div>
                <div className="font-semibold">Farm to Bottle</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image src="/mustard1.svg" alt="Mustard bottle" width={520} height={360} className="rounded shadow" />
          </div>
        </div>
      </div>
    </main>
  );
}
