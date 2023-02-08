import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Discover from "./pages/Discover";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from './components/Footer';
import Detail from "./pages/Detail";
import Menu from "./components/Menu";
import Results from "./pages/Results";
import { createContext, useState } from "react";

import "./App.css";

export const TokenContext = createContext();

function App() {

  const [token, setToken] = useState(sessionStorage.getItem('token'));

  const favMovies = localStorage.getItem('favs');

  let tempMoviesInFavs;

  if (favMovies === null) {
    tempMoviesInFavs = [];
  } else {
    tempMoviesInFavs = JSON.parse(favMovies);
  }

  const toggleFavState = (e) => {
    const btnParent = e.currentTarget.parentElement;
    const imgUrl = btnParent.querySelector('img').getAttribute('src');
    const title = btnParent.querySelector('h5').innerText;
    const overview = btnParent.querySelector('p').innerText;
    const movieData = { imgUrl, title, overview, id: e.currentTarget.dataset['movieId'] };
    let movieIsInArray = tempMoviesInFavs.find(movie => movie.id === movieData.id );
    if(!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
    } else {
      const movieLeft = tempMoviesInFavs.filter(movie => movie.id !== movieData.id );
      localStorage.setItem('favs', JSON.stringify(movieLeft));
      tempMoviesInFavs = movieLeft;
    }
  }

  return <TokenContext.Provider value={setToken}>
    <Header />
    {sessionStorage.getItem('token') && <Menu />}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="discover" element={<Discover toggleFavState={toggleFavState} />} />
      <Route path="detail" element={<Detail />} />
      <Route path="results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </TokenContext.Provider>;
}

export default App;
