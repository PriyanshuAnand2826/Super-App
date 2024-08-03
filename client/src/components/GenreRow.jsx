import React from 'react'
const genreIDs = [28, 18, 10749, 53, 37, 27, 14, 10402, 878];
import defaultGenres from "../data/genres";
import styles from './GenreRow.module.css'
import { useState ,useEffect } from 'react';
import fetchMoviesbyGenre from '../api/fetchMovies';

function GenreRow({genre}) {
  const genreID = defaultGenres.map((item)=>{
    if(item.type === genre){
      return (item.id)
    }
  })
  const [movies,setmovies] =useState([]);
  console.log("genreID: ", genre, genreID);
  useEffect(() => {
		fetchMoviesbyGenre(genreID).then((data) => setmovies(data.results));
	},[]);
  return (
    <div className={styles.container}>
			{movies.slice(0, 4).map((movie) => (
				<div key={movie.id}>
					<img className={styles.movie_img}src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
				</div>
			))}
		</div>
  )
}

export default GenreRow