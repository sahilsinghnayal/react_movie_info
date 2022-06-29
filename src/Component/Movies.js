import React from 'react'
import {NavLink} from 'react-router-dom'
import { useGlobalContext } from '../context/context'

function Movies() {
 const {movie}= useGlobalContext();
    return (
   <>
   <section className='movie-page'>
    <div className="container grid grid-4-col">
    {movie.map((curr)=>{
      const{imdbID,Title,Poster}=curr;
      const movieTitle=Title.substring(0,15);
    return(<NavLink to={`movie/${imdbID}`}key={imdbID}> 
      <div className="card">
        <div className="card-info">
          <h2>{movieTitle.length>=15?`${movieTitle}..`:movieTitle}</h2>
          <img src={Poster} alt={imdbID} />
        </div>
      </div>
    </NavLink>)
  })}
    </div>
   </section>
   </>
  )
}

export default Movies;