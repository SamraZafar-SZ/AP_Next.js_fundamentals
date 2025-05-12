import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-6 py-4 shadow-md flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        <Link href="/">🎬 MovieApp</Link>
      </h1>

      <nav className="flex gap-4">
        <Link href="/directors" className="hover:underline">Directors</Link>
        <Link href="/genres" className="hover:underline">Genres</Link>
        <Link href="/movies" className="hover:underline">All Movies</Link>
        <Link href="/help/faq" className="hover:underline">FAQ</Link>
        <Link href="/help/contact" className="hover:underline">Contact</Link>
      </nav>

      <button
        onClick={toggleDarkMode}
        className="ml-4 px-3 py-1 text-sm border rounded hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </header>
  );
}
