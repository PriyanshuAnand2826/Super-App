import React from 'react'
import { useContext } from "react";
import {Appcontext} from '../context/AppContext'
import styles from "./ProfileWidget.module.css";
import userAvatar from "../assets/userAvatar.png";

function ProfileWidget() {
  const { user, selectedGenres } = useContext(Appcontext);
  return (
    <div className={styles.container}>
			<div className={styles.avatar}>
				<img src={userAvatar} />
			</div>
			<div className={styles.details}>
				<span className={styles.credentials}>{user.name}</span>
				<span className={styles.credentials}>{user.email}</span>
				<span className={styles.credentials}>{user.username}</span>

				<div className={styles.genres}>
					{selectedGenres.slice(0, 4).map((genre, index) => (
						<div key={index} className={styles.pill}>
							{genre}
						</div>

					))}
				</div>
			</div>
		</div>
  )
}

export default ProfileWidget