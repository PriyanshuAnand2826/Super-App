import React from 'react'
import styles from "./Carousel.module.css";
import ProfileWidget from '../components/ProfileWidget';
import WeatherWidget from '../components/WeatherWidget';
import NewsWidget from '../components/NewsWidget';

function Carousel() {
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
</div>

  )
}

export default Carousel