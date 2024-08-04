import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import NotFoundPage from './components/NotFoundPage';

import RegisterForm from './components/RegisterForm';
import Genres from './screens/Genres';
import  Carousel  from './screens/Carousel';
import DashboardWidget from './screens/DashboardPage';
import MoviesPage from './screens/MoviesPage';
import { useContext } from 'react';
import { Appcontext } from './context/AppContext';
import { Navigate  } from 'react-router-dom';

function App() {
  const ProtectRoute=({children})=>{
    const {user,selectedGenres} =useContext(Appcontext);
    if(!user){
      return <Navigate to="/register" />
    }
    else if( user && selectedGenres.length===0){
      return <Navigate to="/genres" />
    }
    else{
      return children;
    }

  }
  return (
    
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<RegisterForm />}/>
        <Route exact path='/register' element={<RegisterForm/>}/>
        <Route exact path='/genres' element={
          <ProtectRoute>
          <Genres/>
          </ProtectRoute>
          }/>
        <Route exact path='/carousel' element={
           <ProtectRoute>
          <Carousel/>
          </ProtectRoute>
          }/>
        <Route exact path='/dashboard' element={
          <ProtectRoute>
          <DashboardWidget/>
          </ProtectRoute>}/>
        <Route exact path='/movies' element={
          <ProtectRoute>
          <MoviesPage/>
          </ProtectRoute>
          }/>
        <Route exact path='*' element={<NotFoundPage/>}/>
        
      </Routes>
    </div>
    </Router>
  
  )
}

export default App