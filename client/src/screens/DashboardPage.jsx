import React from 'react'
import styles from './DashboardPage.module.css'
import TimerWidget from '../components/TimerWidget'
import NotesWidget from '../components/NotesWidget'
import ProfileWidget from '../components/ProfileWidget'
import NewsWidget from '../components/NewsWidget'
import WeatherWidget from '../components/WeatherWidget'

function DashboardWidget() {
  return (
    <div className={styles.container}>
			<div className={styles.div1}>
				<ProfileWidget/>
			</div>
			<div className={styles.div2}>
			   <WeatherWidget/>
			</div>
			<div className={styles.div3}>
				<TimerWidget />
			</div>
			<div className={styles.div4}><NotesWidget/></div>
			<div className={styles.div5}>
			<NewsWidget/>
			</div>
			<button className={styles.browse} onClick={()=>{console.log("browser button clicked")}}>Browse</button>
		</div>
  )
}

export default DashboardWidget