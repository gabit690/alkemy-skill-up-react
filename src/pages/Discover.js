import { useState, useEffect } from "react";
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";

function List() {

  const [movies, setMovies] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const endpoint = "https://api.themoviedb.org/3/discover/movie?api_key=8d6e07733691f3c82fe2e5567d26ff11&language=en-US&page=1";
    axios.get(endpoint)
      .then(response => setMovies(response.data.results));

  }, [setMovies]);

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="row m-3">
      {
        movies.map((movie, index) => {
          return (
            <div className="col-3 mt-3" key={index}>
              <div class="card">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{ `${(movie.title).substring(0, 32)}...` }</h5>
                  <p class="card-text">{ `${(movie.overview).substring(0, 140)}...` }</p>
                  <Link to={`/detail?movieId=${movie.id}`} class="btn btn-primary d-block">More info</Link>
                </div>
              </div>
            </div>
          );
        })
      }
      </div>
    </>

  );
}

export default List;