import Link from 'next/link';
import data from '../../data/movies.json';

export async function getServerSideProps() {
  return {
    props: {
      genres: data.genres,
      movies: data.movies,
    },
  };
}

export default function Genres({ genres, movies }) {
  return (
    <div>
      <h1>Genres</h1>
      {genres.map((genre) => {
        const genreMovies = movies.filter(
          (movie) => movie.genreId === genre.id
        );

        return (
          <div key={genre.id} style={{ marginBottom: '2rem' }}>
            <h2>
              <Link href={`/genres/${genre.id}`}>{genre.name}</Link>
            </h2>
            {genreMovies.length > 0 ? (
              <ul>
                {genreMovies.map((movie) => (
                  <li key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No movies in this genre.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
