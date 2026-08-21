import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About - VRSHUDDHA",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-2xl font-semibold">About VRSHUDDHA</h1>
        <p className="mt-4 text-zinc-700">
          VRSHUDDHA is a family-run oil company focused on producing high-quality mustard oil using traditional
          cold-pressing methods. We source premium seeds and maintain strict quality control so you receive pure,
          aromatic oil with every bottle.
        </p>
        <h2 className="mt-6 text-xl font-semibold">Mission</h2>
        <p className="mt-2 text-zinc-700">To bring pure, traditional mustard oil to modern kitchens while supporting local farmers.</p>
      </main>
      <Footer />
    </div>
  );
}
