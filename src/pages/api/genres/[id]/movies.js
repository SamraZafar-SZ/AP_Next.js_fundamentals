import data from '../../../../data/movies.json';

export default function handler(req, res) {
  const { id } = req.query;
  const moviesByGenre = data.movies.filter((movie) => movie.genreId === id);

  res.status(200).json(moviesByGenre);
}
