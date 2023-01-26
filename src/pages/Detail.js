import { Navigate } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';

function Detail() {

    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let movieId = query.get('movieId');
    let [movie, setMovie] = useState(null);

    useEffect(() => {
        let endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8d6e07733691f3c82fe2e5567d26ff11&language=en-US`;
        axios.get(endpoint)
      .then(response => {
        let movieData = response.data;
        setMovie(movieData);
      });
    }, [movieId]);

    return <>
        {!token && <Navigate to="/" />}
        {movie && <>
            <h1 className='mx-3'>{ movie.title }</h1>
            <div className="row mx-3">
                <div className="col-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} class="img-fluid" alt="movie poster" />
                </div>
                <div className="col-8">
                    <h5>Release: { movie.release_date }</h5>
                    <h5>Plot: </h5>
                    <p>{ movie.overview }.</p>
                    <h5>Genres: </h5>
                    <ul>
                        { movie.genres.map((genre, index) => <li key={index}>{ genre.name }</li>) }
                    </ul>
                </div>
            </div>
        </>}
    </>;
}

export default Detail;
