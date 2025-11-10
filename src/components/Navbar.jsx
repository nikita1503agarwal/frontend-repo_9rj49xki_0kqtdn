import { Home, Film, Info, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-red-500 to-rose-700 grid place-items-center text-white font-black shadow-lg shadow-red-500/30 group-hover:scale-105 transition">
              S
            </div>
            <span className="font-extrabold tracking-tight text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-500">
              Spider<span className="text-zinc-900 dark:text-white bg-none text-transparent">Man</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition">
              <Home className="h-4 w-4" /> Home
            </a>
            <a href="#gallery" className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition">
              <Film className="h-4 w-4" /> Gallery
            </a>
            <a href="#timeline" className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition">
              <Star className="h-4 w-4" /> Timeline
            </a>
            <a href="#about" className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 transition">
              <Info className="h-4 w-4" /> About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
