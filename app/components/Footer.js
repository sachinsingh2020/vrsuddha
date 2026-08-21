export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.06] bg-white/70 mt-12">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-600">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div>
            <strong>VRSHUDDHA</strong>
            <div>Premium mustard oil — pure, traditional, trusted.</div>
          </div>
          <div>
            <div>Contact: +91 98765 43210</div>
            <div>Email: hello@vrshuddha.example</div>
          </div>
        </div>
        <div className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} VRSHUDDHA</div>
      </div>
    </footer>
  );
}
