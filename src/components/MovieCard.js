import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  const { darkMode } = useContext(ThemeContext); // Get the darkMode value from context

  return (
    <div
      className={`rounded-lg shadow-md p-4 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
      <p className="text-gray-600 mb-1">Release Year: {movie.releaseYear}</p>
      <p className="text-gray-500 text-sm mb-2">Rating: {movie.rating}</p>
      <Link href={`/movies/${movie.id}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
}
