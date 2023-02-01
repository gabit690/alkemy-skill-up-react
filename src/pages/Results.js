import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

function Results () {

    const [movies, setMovies] = useState([]);
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    useEffect(() => {
        let endpoint = `https://api.themoviedb.org/3/search/movie?api_key=8d6e07733691f3c82fe2e5567d26ff11&language=en-US&query=${keyword}`;
        axios.get(endpoint)
      .then(response => {
        let results = response.data.results;
        setMovies(results);
      });
    }, [movies]);

    return <div className="container mt-3">
        <h2>Results</h2>
        <p>You want to search: { keyword }</p>
        {movies.length === 0 && <p>There are no results.</p>}
        <div className="row m-3">
        {
            movies.map((movie, index) => {
            return (
                <div className="col-4 mt-3" key={index}>
                    <div class="card">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} class="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">{ `${(movie.title).substring(0, 32)}...` }</h5>
                        <Link to={`/detail?movieId=${movie.id}`} class="btn btn-primary d-block">More info</Link>
                        </div>
                    </div>
                </div>
            );
            })
        }
      </div>
    </div>
}

export default Results;