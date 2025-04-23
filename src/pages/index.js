import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import { useRouter } from 'next/router';
import data from '../data/movies.json';
import { useState } from 'react';

export async function getStaticProps() {
  const trendingMovies = data.movies.slice(0, 5); // Take first 5 as trending
  return {
    props: { trendingMovies },
    revalidate: 60, // ISR every 60s
  };
}

export default function Home({ trendingMovies }) {
  const router = useRouter();

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push('/genres')}>Browse Genres</button>
    </div>
  );
}

