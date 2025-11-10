export default function Timeline() {
  const beats = [
    { year: '1962', title: 'Amazing Fantasy #15', desc: 'The world meets Peter Parker and Spider‑Man.' },
    { year: '2002', title: 'Spider‑Man (Raimi)', desc: 'Tobey Maguire swings onto the big screen.' },
    { year: '2018', title: 'Into the Spider‑Verse', desc: 'Miles Morales introduces a multiverse of Spiders.' },
    { year: '2021', title: 'No Way Home', desc: 'Three generations unite to save the multiverse.' },
  ];

  return (
    <section id="timeline" className="py-20 sm:py-28 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-10">Timeline</h2>
        <ol className="relative border-s border-zinc-200 dark:border-zinc-800">
          {beats.map((b) => (
            <li key={b.year} className="mb-10 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-rose-600 ring-4 ring-white dark:ring-zinc-950"></span>
              <time className="mb-1 text-sm font-medium text-red-600">{b.year}</time>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{b.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300">{b.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
