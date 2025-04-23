// pages/api/directors.js

import data from '../../data/movies.json';

export default function handler(req, res) {
  const { directors, movies } = data;

  const enrichedDirectors = directors.map((director) => {
    const directedMovies = movies.filter(
      (movie) => movie.directorId === director.id
    );
    return {
      ...director,
      movies: directedMovies,
    };
  });

  res.status(200).json(enrichedDirectors);
}
