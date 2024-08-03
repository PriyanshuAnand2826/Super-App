import React ,{useContext} from 'react'
import styles from './MoviesPage.module.css'
import {Appcontext} from '../context/AppContext'
import userAvatarSM from "../assets/movieavatar.png";
import GenreRow from '../components/GenreRow';

function MoviesPage() {
  const { selectedGenres } = useContext(Appcontext);
  return (
    <div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.heading}>Super App</p>
				<img className={styles.header_img}src={userAvatarSM} alt="User Avatar" />
			</div>
			<div className={styles.movies}>
				{selectedGenres?.map((genre) => (
					<div key={genre.id} className={styles.genre}>
						<h3 className={styles.genreName}>{genre}</h3>
						<GenreRow genre={genre} />
						<hr color='#72DB73'/>
					</div>
				))}
			</div>
		</div>
  )
}

export default MoviesPage