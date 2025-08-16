"use client";

export default function BeatStore() {
  const beats = [
    {
      id: 1,
      title: "SHOW ME LOVE (Jerk/Trap)",
      bpm: 150,
      key: "G minor",
      mood: ["jerk", "trap", "romántico"],
      price: 50,
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
      src: "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav",
    },
    {
      id: 2,
      title: "Afro Verano (Estilo Quevedo)",
      bpm: 95,
      key: "A minor",
      mood: ["afro", "summer"],
      price: 60,
      cover: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200&auto=format&fit=crop",
      src: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav",
    },
    {
      id: 3,
      title: "R&B Chill (Dvalentino vibe)",
      bpm: 88,
      key: "C# minor",
      mood: ["rnb", "chill"],
      price: 55,
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      src: "https://www2.cs.uic.edu/~i101/SoundFiles/ImperialMarch60.wav",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
            <div>
              <h1 className="text-lg font-semibold leading-tight">ProdYiwan — Beat Store</h1>
              <p className="text-xs text-neutral-400">Escucha y compra licencias al momento</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a className="hover:text-white" href="#beats">Beats</a>
            <a className="hover:text-white" href="#licencias">Licencias</a>
            <a className="hover:text-white" href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        {/* Hero */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Beats listos para tu próximo drop</h2>
              <p className="mt-3 text-neutral-400">Trap, Afro, R&B y más. Streaming sin descarga para proteger el audio. Escríbeme para stems y licencias exclusivas.</p>
              <div className="mt-6 flex gap-3">
                <a href="#beats" className="px-4 py-2 rounded-xl bg-white text-black font-medium">Explorar beats</a>
                <a href="#contacto" className="px-4 py-2 rounded-xl border border-neutral-700">Solicitar exclusivos</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border border-neutral-800">
                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl">
                <div className="text-xs text-neutral-400">+100K plays en TikTok</div>
              </div>
            </div>
          </div>
        </section>

        {/* Beats grid */}
        <section id="beats" className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="text-xl font-semibold">Beats destacados</h3>
              <p className="text-sm text-neutral-400">Pulsa play para escuchar versiones con tag.</p>
            </div>
            <div className="text-sm text-neutral-400">Filtra por mood (demo)</div>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {beats.map((b) => (
              <BeatCard key={b.id} beat={b} />
            ))}
          </div>
        </section>

        {/* Licenses */}
        <section id="licencias" className="mt-16">
          <div className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40">
            <h3 className="text-xl font-semibold">Licencias</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-300">
              <li><span className="font-medium">MP3/WAV Lease</span> — desde 50€ · uso comercial limitado · no exclusividad.</li>
              <li><span className="font-medium">WAV Trackout</span> — desde 120€ · stems incluidos · mayor margen de monetización.</li>
              <li><span className="font-medium">Exclusiva</span> — desde 300€ · retiro del catálogo · contrato personalizado.</li>
            </ul>
            <p className="mt-3 text-xs text-neutral-500">*Precios orientativos. Escríbeme para cerrar el trato.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="mt-16">
          <div className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <p className="text-sm text-neutral-300 mt-2">¿Quieres una exclusiva o un beat hecho a medida? Escríbeme por Instagram <a className="underline" href="https://instagram.com/prodyiwan" target="_blank">@prodyiwan</a> o email <a className="underline" href="mailto:booking@prodyiwan.com">booking@prodyiwan.com</a>.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-neutral-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} ProdYiwan</div>
          <div>
            <a href="#" className="hover:text-neutral-300">Términos</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-neutral-300">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BeatCard({ beat }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition-all">
      <div className="relative aspect-video overflow-hidden">
        <img src={beat.cover} alt={beat.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-neutral-300">{beat.bpm} BPM · {beat.key}</div>
              <h4 className="text-base font-semibold">{beat.title}</h4>
            </div>
            <div className="text-sm px-2 py-1 rounded-lg bg-white text-black font-semibold">€{beat.price}</div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <audio
          className="w-full"
          src={beat.src}
          controls
          controlsList="nodownload noplaybackrate"
          onContextMenu={(e) => e.preventDefault()}
        />
        <div className="flex gap-2">
          <a href="#contacto" className="flex-1 text-center text-sm px-3 py-2 rounded-xl bg-white text-black font-medium">Comprar licencia</a>
          <button
            className="px-3 py-2 rounded-xl border border-neutral-700 text-sm"
            onClick={() => navigator.clipboard.writeText(`${beat.title} — consulta por DM @prodyiwan`)}
          >Copiar título</button>
        </div>
        <div className="text-xs text-neutral-400">{beat.mood.map((m) => `#${m}`).join(" ")}</div>
      </div>
    </div>
  );
}
