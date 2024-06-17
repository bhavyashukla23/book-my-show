import React ,{useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../Css/MoviesList.css';
import axios from 'axios';

const MoviesList =() =>{
  const[movies, setMovies]=useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/movies').then(response => setMovies(response.data)).catch(error => console.log("Error caught :",error));
  },[]);

  return(
    <div className='movies-list'>
      {movies.map(movie =>(
        <div key={movie._id} className='movie-card'>
        <img src={movie.posterUrl} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p> {movie.description}</p>
        <Link to={`/book/${movie._id}`}>
          <button>Book Ticket</button>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;