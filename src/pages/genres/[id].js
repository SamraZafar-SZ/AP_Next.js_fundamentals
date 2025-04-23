import Link from 'next/link';
import data from '../../data/movies.json';

export async function getStaticPaths() {
  const paths = data.genres.map((genre) => ({
    params: { id: genre.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const genre = data.genres.find((g) => g.id.toString() === params.id);
  const movies = data.movies.filter(
    (movie) => movie.genreId.toString() === params.id
  );

  return {
    props: {
      genre,
      movies,
    },
  };
}

export default function GenreDetail({ genre, movies }) {
  return (
    <div>
      <h1>{genre.name} Movies</h1>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}
