export default function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-[#163e2a]/10 bg-[#fffaf0]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[#425046]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-extrabold tracking-[0.2em] text-[#163e2a]">VRSHUDDHA</div>
            <div className="mt-1">Premium mustard oil — pure, traditional, and trusted.</div>
          </div>
          <div className="text-left sm:text-right">
            <div>Contact: +91 98765 43210</div>
            <div>Email: hello@vrshuddha.in</div>
          </div>
        </div>
        <div className="mt-6 border-t border-[#163e2a]/10 pt-4 text-xs text-[#5d645e]">
          © {new Date().getFullYear()} VRSHUDDHA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
