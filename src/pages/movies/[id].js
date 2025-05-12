import Link from 'next/link';
import data from '../../data/movies.json';
import Header from '@/components/Header';

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
    <div className="p-8">
      <Header /> <br/>
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="mb-2">
        <span className="font-semibold">Description:</span> {movie.description}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Genre:</span> {genre}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Release Year:</span> {movie.releaseYear}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Rating:</span> {movie.rating}
      </p>
      <Link
        href={`/movies/${movie.id}/director`}
        className="text-blue-600 hover:underline font-medium"
      >
        Director Info
      </Link>
    </div>
  );
}
