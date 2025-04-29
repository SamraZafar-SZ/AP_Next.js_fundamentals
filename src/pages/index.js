import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import { useRouter } from 'next/router';
import data from '../data/movies.json';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';
import MovieCard from '@/components/MovieCard';

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
    <div className={styles.container}>
  <h1 className={styles.title}>Trending Movies</h1>
  <ul className={styles.list}>
    {trendingMovies.map((movie) => (
      <>
      <MovieCard key={movie.id} movie={movie} />
      <br></br>
      </>
    ))}
  </ul>
  <button className={styles.button} onClick={() => router.push('/genres')}>
    Browse Genres
  </button>
</div>

  );
}

