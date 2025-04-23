import Link from 'next/link';
import { useState } from 'react';
import data from '../../data/movies.json';

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

  const filteredMovies = selectedGenre === 'all'
    ? movies
    : movies.filter((m) => m.genreId === parseInt(selectedGenre));

  return (
    <div>
      <h1>All Movies</h1>
      <select onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="all">All Genres</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
