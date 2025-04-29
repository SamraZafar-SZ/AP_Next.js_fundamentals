import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import styles from '@/styles/Directors.module.css';

// Fetcher function for useSWR
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Directors() {
  const { data, error } = useSWR('/api/directors', fetcher);

  if (error) return <div>Error loading directors.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Directors</h1>
      {data.map((director) => (
        <div key={director.id} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h2>{director.name}</h2>
          <p><strong>Biography:</strong> {director.biography}</p>
          <h3>Movies Directed:</h3>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                  {movie.title} ({movie.releaseYear})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
