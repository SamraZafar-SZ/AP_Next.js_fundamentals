import Link from 'next/link';
import { useState } from 'react';
import data from '../../data/movies.json';
import MovieCard from '@/components/MovieCard';

export async function getStaticProps() {
  return {
    props: {
      movies: data.movies,
      genres: data.genres,
    },
    revalidate: 60,
  };
}

export default function Movies({ movies, genres }) {
  const [selectedGenre, setSelectedGenre] = useState('all');

  const filteredMovies =
    selectedGenre === 'all'
      ? movies
      : movies.filter((m) => m.genreId === selectedGenre);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">All Movies</h1>

      <select
        className="mb-6 p-2 border border-gray-300 rounded"
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="all">All Genres</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>

      <ul className="space-y-2">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
