import { Navigate } from 'react-router-dom';
import { useEffect } from 'react'
import axios from "axios";

function Detail() {

    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(window.location.search);
    let movieId = query.get('movieId');
    useEffect(() => {
        let endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8d6e07733691f3c82fe2e5567d26ff11&language=en-US`;
        axios.get(endpoint)
      .then(response => console.log(response.data));
    }, [movieId]);

    return <>
        {!token && <Navigate to="/" />}
        <h1>Title</h1>
        <div className="row">
            <div className="col-4">
                image
            </div>
            <div className="col-8">
                <h5>Release: </h5>
                <h5>Plot: </h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum facilis quas tempora possimus reiciendis sit fuga nesciunt, commodi omnis nam eveniet, voluptatibus tempore. Sed, illo earum explicabo atque ducimus reiciendis.</p>
                <h5>Genres: </h5>
                <ul>
                    <li>Genre 1</li>
                    <li>Genre 2</li>
                    <li>Genre 3</li>
                </ul>
            </div>
        </div>
    </>;
}

export default Detail;
