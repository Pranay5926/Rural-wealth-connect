import { ArrowRight, CheckCircle2, Leaf, Menu, Sprout, TrendingUp, Users, Factory, Recycle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { icon: Leaf, title: "Give residues a second life", text: "Help redirect crop leftovers toward productive reuse instead of open-field burning." },
  { icon: TrendingUp, title: "Create new value", text: "Make agricultural by-products easier for potential buyers to discover." },
  { icon: Users, title: "Connect the ecosystem", text: "Bring farmers, processors and local businesses into one marketplace." },
];

const materials = [
  { name: "Rice straw", use: "Bioenergy · Compost", tone: "bg-amber-100 text-amber-900", emoji: "🌾" },
  { name: "Sugarcane bagasse", use: "Packaging · Biofuel", tone: "bg-lime-100 text-lime-900", emoji: "🌿" },
  { name: "Corn stalks", use: "Animal bedding · Compost", tone: "bg-orange-100 text-orange-900", emoji: "🌽" },
];

export default function Splash() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7ef] text-[#1d3326]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-800" aria-label="Rural Wealth Connect home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#214e35] text-white"><Sprout size={25} aria-hidden="true" /></span>
          <span><span className="block text-lg font-extrabold tracking-tight">Rural Wealth</span><span className="block text-xs font-semibold tracking-[.18em] text-[#66816b]">CONNECT</span></span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#4f6655] md:flex" aria-label="Main navigation">
          <a href="#how-it-works" className="hover:text-[#214e35]">How it works</a><a href="#materials" className="hover:text-[#214e35]">Materials</a><a href="#impact" className="hover:text-[#214e35]">Our impact</a>
        </nav>
        <Link to="/onboarding" className="inline-flex items-center gap-2 rounded-full bg-[#214e35] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#173a27] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800">Get started <ArrowRight size={16} /></Link>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:grid-cols-[1.02fr_.98fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9e3d2] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.13em] text-[#426849]"><span className="h-2 w-2 rounded-full bg-[#77a65c]" /> A smarter circular agriculture</div>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-7xl">Harvest value.<br /><span className="text-[#6b963e]">Not waste.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#526556]">Turning agricultural residues into sustainable rural wealth by helping farmers and potential buyers find each other.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/onboarding" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#214e35] px-7 py-4 font-bold text-white shadow-lg shadow-green-950/10 transition hover:-translate-y-0.5 hover:bg-[#173a27]">Explore the platform <ArrowRight size={18} /></Link>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-[#cbd7c8] bg-white px-7 py-4 font-bold text-[#214e35] transition hover:bg-[#edf2e8]">See how it works</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[#58715d]"><span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#6b963e]" /> Resource reuse</span><span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#6b963e]" /> Farmer-first value</span><span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-[#6b963e]" /> Circular economy</span></div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#e1e9c9] blur-2xl" /><div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#e5d8b8] blur-2xl" />
          <div className="relative rounded-[2rem] border border-white bg-white p-4 shadow-2xl shadow-[#23472e]/10 sm:p-6">
            <div className="flex items-center justify-between border-b border-[#edf0e8] pb-4"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-[#81917d]">The residue marketplace</p><p className="mt-1 text-xl font-extrabold">Waste into worth</p></div><span className="rounded-full bg-[#eaf2e3] px-3 py-1.5 text-xs font-bold text-[#416b3d]">Circular by design</span></div>
            <div className="my-5 grid grid-cols-3 gap-3"><div className="rounded-2xl bg-[#f4f6ed] p-3"><Sprout className="mb-3 text-[#6b963e]" size={22}/><p className="text-xs text-[#71806f]">Supply</p><p className="mt-1 text-sm font-extrabold">Farm residues</p></div><div className="rounded-2xl bg-[#f4f6ed] p-3"><Users className="mb-3 text-[#6b963e]" size={22}/><p className="text-xs text-[#71806f]">Connect</p><p className="mt-1 text-sm font-extrabold">Find buyers</p></div><div className="rounded-2xl bg-[#f4f6ed] p-3"><Recycle className="mb-3 text-[#6b963e]" size={22}/><p className="text-xs text-[#71806f]">Reuse</p><p className="mt-1 text-sm font-extrabold">Create value</p></div></div>
            <div className="space-y-3">{materials.map((item) => <div key={item.name} className="flex items-center gap-4 rounded-2xl border border-[#edf0e8] p-3 transition hover:border-[#cbd9bd] hover:bg-[#fbfcf8]"><div className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl text-2xl ${item.tone}`}>{item.emoji}</div><div className="min-w-0 flex-1"><p className="font-bold">{item.name}</p><p className="mt-1 text-sm text-[#738071]">Potential uses: {item.use}</p></div><ArrowRight size={18} className="text-[#8a9a84}" /></div>)}</div>
            <div className="mt-4 flex items-start gap-3 rounded-2xl bg-[#214e35] p-4 text-white"><ShieldCheck size={21} className="mt-0.5 shrink-0 text-[#c5e1a6]"/><p className="text-sm leading-6 text-white/90"><strong className="text-white">A more resourceful harvest.</strong> Explore reuse opportunities for residues that might otherwise go unused.</p></div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[#e5e8dc] bg-white/70 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#71954b]">A simple idea with a bigger purpose</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Connect the people. Unlock the potential.</h2><p className="mt-4 leading-7 text-[#617163]">Agricultural residues can be useful raw materials. Rural Wealth Connect is designed to make discovery and exchange easier.</p></div><div className="mt-9 grid gap-5 md:grid-cols-3">{benefits.map(({icon: Icon,title,text},i)=><article key={title} className="rounded-3xl border border-[#e5e9df] bg-[#fbfcf8] p-6"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e6efdc] text-[#426b39]"><Icon size={24}/></span><p className="mt-5 text-xs font-extrabold uppercase tracking-widest text-[#87a17b]">0{i+1}</p><h3 className="mt-2 text-xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-[#667667]">{text}</p></article>)}</div></div>
      </section>

      <section id="materials" className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#71954b]">More than leftovers</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">One harvest. Many possibilities.</h2><p className="mt-4 max-w-xl leading-7 text-[#617163]">Depending on quality and local demand, crop residues may support bioenergy, composting, animal bedding, packaging and other productive uses.</p><Link to="/onboarding" className="mt-6 inline-flex items-center gap-2 font-extrabold text-[#315d3b] hover:gap-3">Explore Rural Wealth Connect <ArrowRight size={18}/></Link></div><div id="impact" className="grid grid-cols-2 gap-4"><div className="rounded-3xl bg-[#214e35] p-6 text-white"><Leaf size={27} className="text-[#c5e1a6]"/><h3 className="mt-8 text-xl font-extrabold">Less waste</h3><p className="mt-2 text-sm leading-6 text-white/75">Encourage productive alternatives to residue burning.</p></div><div className="mt-8 rounded-3xl bg-[#e7eddc] p-6 text-[#214e35]"><Factory size={27}/><h3 className="mt-8 text-xl font-extrabold">More connections</h3><p className="mt-2 text-sm leading-6 text-[#526956]">Help potential buyers discover useful local materials.</p></div></div></section>
      <footer className="border-t border-[#e5e8dc] px-5 py-7 text-center text-sm text-[#728072] sm:px-8"><p className="font-bold text-[#31533a]">Rural Wealth Connect</p><p className="mt-1">Beyond grains. Toward a more circular rural economy.</p></footer>
    </main>
  );
}
