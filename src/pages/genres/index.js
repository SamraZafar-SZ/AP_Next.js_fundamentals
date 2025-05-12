import Link from 'next/link';
import data from '../../data/movies.json';
import MovieCard from '@/components/MovieCard';
import Header from '@/components/Header';

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
    <div className="p-8">
      <Header />
      <br/>
      <h1 className="text-3xl font-bold mb-6">Genres</h1>
      {genres.map((genre) => {
        const genreMovies = movies.filter(
          (movie) => movie.genreId === genre.id
        );

        return (
          <div key={genre.id} className="mb-8">
            <h2 className="text-xl font-semibold">
              <Link href={`/genres/${genre.id}`} className="text-blue-600 hover:underline">{genre.name}</Link>
            </h2>
            {genreMovies.length > 0 ? (
              <ul className="mt-2 list-disc list-inside">
                {genreMovies.map((movie) => (
                  <>
                  <MovieCard key={movie.id} movie={movie} />
                  <br></br>
                  </>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-gray-600">No movies in this genre.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
