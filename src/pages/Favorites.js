
import { Link, Navigate } from 'react-router-dom';
function Favorites (props) {

    let token = sessionStorage.getItem('token');

    return <>
        {!token && <Navigate to="/" />}
        <h2>Favorites</h2>
        {props.favorites.length === 0 ? 
            (<p>There are no favorites movie.</p>) 
            : 
            (<div className="row m-3">
            {
                props.favorites.map((movie, index) => {
                return (
                    <div className="col-3 mt-3" key={index}>
                    <div class="card">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.imgUrl}`} class="card-img-top" alt="..." />
                        <button className="btn-fav" onClick={props.toggleFavState} data-movie-id={movie.id}>🤍</button>
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
            )}
    </>
}

export default Favorites;