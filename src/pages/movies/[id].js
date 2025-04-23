import Link from 'next/link';
import data from '../../data/movies.json';

export async function getStaticPaths() {
  const paths = data.movies.map((movie) => ({
    params: { id: movie.id.toString() },
  }));
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const movie = data.movies.find((m) => m.id.toString() === params.id);
  if (!movie) return { notFound: true };

  const genre = data.genres.find((g) => g.id === movie.genreId);
  const director = data.directors.find((d) => d.id === movie.directorId);

  return {
    props: {
      movie,
      genre: genre?.name || 'Unknown',
      director,
    },
    revalidate: 60,
  };
}

export default function MovieDetail({ movie, genre, director }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p><strong>Description:</strong> {movie.description}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <Link href={`/movies/${movie.id}/director`}>Director Info</Link>
    </div>
  );
}
