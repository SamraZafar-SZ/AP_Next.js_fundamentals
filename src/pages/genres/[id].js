import Link from 'next/link';
import data from '../../data/movies.json';
import MovieCard from '@/components/MovieCard';


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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{genre.name} Movies</h1>
      {movies.length > 0 ? (
        <ul className="list-disc list-inside">
          {movies.map((movie) => (
            <>
                  <MovieCard key={movie.id} movie={movie} />
                  <br></br>
                  </>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No movies found.</p>
      )}
    </div>
  );
}
