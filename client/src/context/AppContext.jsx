import { useState,useEffect } from "react";
import { createContext } from "react";

export const Appcontext = createContext();

export const AppProvider = ({children})=>{
  const [user,setuser]=useState(
    JSON.parse(localStorage.getItem('user')) || null
  );
  const [selectedGenres,setselectedGenres]=useState(
    JSON.parse(localStorage.getItem('selectedGenres')) || []
  )
  useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);
	useEffect(() => {
		localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
	}, [selectedGenres]);
  return (
    <Appcontext.Provider value={{user,setuser,selectedGenres,setselectedGenres}}>
      {children}
      </Appcontext.Provider>
  )
}