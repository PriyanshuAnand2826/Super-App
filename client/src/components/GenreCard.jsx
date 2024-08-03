import React from 'react'
import styles from './GenreCard.module.css'

function GenreCard({genre,bgcolor,border}) {
  return (
    <div className={styles.container} style={{"backgroundColor":`${genre.color}`}}>
      <p className={styles.title}>{genre.type}</p>
    </div>
  )
}

export default GenreCard