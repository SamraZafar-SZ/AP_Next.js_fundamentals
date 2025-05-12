import data from '../../../data/movies.json';

export default function handler(req, res) {
  const { id } = req.query;
  const director = data.directors.find((dir) => dir.id === id);

  if (director) {
    const directedMovies = data.movies.filter((movie) => movie.directorId === id);
    res.status(200).json({ ...director, movies: directedMovies });
  } else {
    res.status(404).json({ message: 'Director not found' });
  }
}
