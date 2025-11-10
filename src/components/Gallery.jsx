export default function Gallery() {
  const items = [
    {
      title: 'Classic Suit',
      img: 'https://images.unsplash.com/photo-1612036782180-6f0b6e0b84ff?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Into the Spider‑Verse',
      img: 'https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'No Way Home',
      img: 'https://images.unsplash.com/photo-1649710061395-c2b70412e08c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Symbiote Saga',
      img: 'https://images.unsplash.com/photo-1616627988850-363a3419a872?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Spider‑Gwen',
      img: 'https://images.unsplash.com/photo-1597277471116-1b5a42beeec5?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Miles Morales',
      img: 'https://images.unsplash.com/photo-1608889335945-d3c9c7d59a44?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Gallery</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Iconic suits and scenes across the Spider‑verse.</p>
          </div>
          <a href="#about" className="hidden sm:inline-flex px-4 py-2 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition">About</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <figure key={it.title} className="group overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">
              <img src={it.img} alt={it.title} className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <figcaption className="p-4 flex items-center justify-between">
                <span className="font-semibold text-zinc-900 dark:text-white">{it.title}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-red-600/10 text-red-600">Spider‑Man</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
