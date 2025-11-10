export default function Footer() {
  return (
    <footer id="about" className="border-t border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-zinc-700 dark:text-zinc-300">A fan‑made tribute to the legacy of Spider‑Man across comics and cinema.</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">Images courtesy of Unsplash — not affiliated with Marvel.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#home" className="text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition">Back to top</a>
          <span className="text-zinc-300">•</span>
          <a href="#gallery" className="text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition">Gallery</a>
          <span className="text-zinc-300">•</span>
          <a href="#timeline" className="text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition">Timeline</a>
        </div>
      </div>
    </footer>
  );
}
