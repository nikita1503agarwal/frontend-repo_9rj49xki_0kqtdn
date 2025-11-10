import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0jbYZd3-QT0e9z1e/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Friendly Neighborhood
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-rose-500 to-red-600">Spider‑Man</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300">
            Swing into a cinematic showcase of Peter Parker across universes — art, moments, and milestones of the iconic wall‑crawler.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#gallery" className="px-5 py-3 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 text-white font-medium shadow-lg shadow-red-600/30 hover:scale-[1.02] active:scale-[0.99] transition">
              Explore Gallery
            </a>
            <a href="#timeline" className="px-5 py-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-medium hover:bg-white transition">
              View Timeline
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent" />
    </section>
  );
}
