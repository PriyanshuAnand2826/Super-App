import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import {Appcontext} from '../context/AppContext'
import styles from "./Genres.module.css";
import defaultGenres from "../data/genres.js";
import GenreCard from '../components/GenreCard.jsx';
import warning from'../assets/warning.png'


function Genres() {
  const [error, setError] = useState(true);
	const { selectedGenres,setselectedGenres } = useContext(Appcontext);
  const navigate=useNavigate()
  const handleSelectGenre =(genre)=>{
      if(selectedGenres.includes(genre)){
        setselectedGenres(selectedGenres.filter((item)=>item!==genre))
			
			 
      }
      else{
        setselectedGenres([...selectedGenres,genre])
      }
  }
 

  const handleNext =()=>{
    if(selectedGenres.length < 3 ){
      setError(true)
			console.log("can not navigate")
    }
    else{
      navigate('/carousel')
    }
   
  }

  useEffect(() => {
		if (selectedGenres.length >= 3) {
			setError(false);
		}
	}, [selectedGenres])
  return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h3 className={styles.heading}>Super App</h3>
				<h2 className={styles.subHeading}>
					Choose your entertainment category !!
				</h2>
				<div className={styles.selectedGenres}>
					{selectedGenres.map((genre, index) => (
						<div
							key={index}
							className={styles.selectedGenre}
						>
							{genre}
							<span className={styles.cross} onClick={()=>handleSelectGenre(genre)}>X</span>
						</div>
					
					))}
				</div>
				{error && <div className={styles.error}><img src={warning} alt="" /><p className={styles.warningtext}>Minimum 3 category required</p></div>}
			</div>
			<div className={styles.right}>
				<div className={styles.genres}>
					{defaultGenres.map((genre, index) => (
						<div
							key={index}
							className={styles.genre}
							onClick={() => {
								handleSelectGenre(genre.type);
							}}
						>
							<GenreCard genre={genre}/>
						</div>
					))}
				</div>

				<button className={styles.btn} onClick={handleNext}>Next Page</button>
			</div>
			
		</div>
	);
}

export default Genres