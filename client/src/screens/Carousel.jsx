import React from 'react'
import styles from "./Carousel.module.css";
import ProfileWidget from '../components/ProfileWidget';
import WeatherWidget from '../components/WeatherWidget';
import NewsWidget from '../components/NewsWidget';
import { useNavigate } from 'react-router-dom';

function Carousel() {
	const navigate=useNavigate();
	const handleNext=()=>{
		navigate('/dashboard')
	}
  return (
  <div className={styles.container}>
	<div className={styles.profilewidget}>
		<ProfileWidget />
	
		
	</div>
	<div className={styles.weatherwidget}>
		<WeatherWidget />
		
	
	</div>
	<div className={styles.newswidget}>
	<NewsWidget/>
	</div>
	<button className={styles.btn} onClick={()=>{{handleNext()}}}>Next Page</button>
</div>

  )
}

export default Carousel