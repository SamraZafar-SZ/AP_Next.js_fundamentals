import data from '../../../data/movies.json';
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

  const director = data.directors.find((d) => d.id === movie.directorId);

  return {
    
    props: { director },
    revalidate: 60,
  };
}

export default function DirectorPage({ director }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Director: {director.name}</h1>
      <p className="text-gray-700">{director.biography}</p>
    </div>
  );
}
