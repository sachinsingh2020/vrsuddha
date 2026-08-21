export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#d8a93d]">Our story</div>
      <h1 className="mt-3 text-3xl font-black text-[#163e2a] md:text-4xl">About VRSHUDDHA</h1>
      <div className="mt-6 space-y-5 text-base leading-8 text-[#425046]">
        <p>
          VRSHUDDHA is a family-run oil brand devoted to bringing authentic mustard oil to homes that value purity,
          tradition, and taste. We work closely with trusted growers and use careful, time-tested extraction
          methods to preserve the rich aroma and natural goodness of each seed.
        </p>
        <p>
          Our mission is simple: to make healthy, flavorful, traditional mustard oil accessible to modern kitchens
          while supporting local agriculture and maintaining uncompromising quality at every stage.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-[22px] border border-[#163e2a]/10 bg-[#fffdf9] p-5 shadow-sm">
          <div className="text-sm uppercase tracking-[0.18em] text-[#d8a93d]">Quality</div>
          <div className="mt-3 text-xl font-bold text-[#163e2a]">Strict checks</div>
        </div>
        <div className="rounded-[22px] border border-[#163e2a]/10 bg-[#fffdf9] p-5 shadow-sm">
          <div className="text-sm uppercase tracking-[0.18em] text-[#d8a93d]">Origin</div>
          <div className="mt-3 text-xl font-bold text-[#163e2a]">Farm trusted</div>
        </div>
        <div className="rounded-[22px] border border-[#163e2a]/10 bg-[#fffdf9] p-5 shadow-sm">
          <div className="text-sm uppercase tracking-[0.18em] text-[#d8a93d]">Promise</div>
          <div className="mt-3 text-xl font-bold text-[#163e2a]">Pure taste</div>
        </div>
      </div>
    </main>
  );
}
