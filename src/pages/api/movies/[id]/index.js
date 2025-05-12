import data from '../../../data/movies.json';

export default function handler(req, res) {
  const { id } = req.query;
  const movie = data.movies.find((movie) => movie.id === id);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
}
